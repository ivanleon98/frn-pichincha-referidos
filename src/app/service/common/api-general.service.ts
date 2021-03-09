import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { Observable } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';

@Injectable() export class ApiGeneralService {
    private _response: any;

    private _httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': '*',
            'Access-Control-Allow-Origin': '*',
            'X-Frame-Options': 'sameorigin',
            'Access-Control-Allow-Credentials': 'true'
        })
    };

    private _httpOptionsMultipart = {
        headers: new HttpHeaders({
            'Accept': 'application/json', // Or '*'
            'Access-Control-Allow-Origin': '*',
            'X-Frame-Option': 'sameorigin'
        })
    };

    constructor(private logger: LoggerService, private http: HttpClient) {
    }

    /**
     * Invocacion del servicio por post, los parametros estan definidos por templates. Permite
     * hacer reintentos del llamado al servicio
     *
     * @see ApiGeneralService.invokePostRequest
     * @author Ivan.Arteaga
     * @param request Objeto que mapea los datos para invocar el servicio
     * @param endpoint Url completa del servicio
     * @param retryNumber Numero de reintentos para invocar el servicio. Si se omite, solo se invoca 1 vez
     */
    private getPostService<Rq, Rs>(request: Rq, endpoint: string, enableMultipart?: boolean, retryNumber?: number): Observable<Rs> {
        let optionsHttp = (enableMultipart != undefined && enableMultipart == true ? this._httpOptionsMultipart
            : this._httpOptions);
        return this.http.post<Rs>(endpoint, request, optionsHttp)
            .pipe(
                retry(retryNumber ? retryNumber : 0),
                
                map(
                    (rsp: Rs) => { 
                    return rsp; }
                ),
                tap(
                    data => {
                        this.logger.info(this, "Servicio consumido. URL: " + endpoint + ", Data: " + data)
                    }
                    //,error =>this.logger.error(this, error)
                ),
                catchError((err: HttpErrorResponse) => {
                    if (err.status !== 200) {
                        this.logger.error(this, 'Consumo del servicio con ERRORES. URL: ' + endpoint);
                        this.logger.info(this, err);
                    }
                    return new Observable<Rs>(undefined);
                })
            );
    }

    /**
     * Metodo Template, para invocacion de cualquier servicio Post que recibe una request generica y devuelve
     * un response generico.
     *
     * @author Ivan.Arteaga
     * @param endpoint URL del servicio
     * @param request Objeto que mapea los parametros de la peticion
     * @param fx Funcion callback (con parametro de tipo response), para ejecutarse en la respuesta del servicio.
     * @param retryNumber Numero de reintentos para el llamado. Si se omite, se invoca 1 sola vez
     */
    public invokePostRequest<Rq, Rs>(endpoint: string, request: Rq, fx: (response: Rs) => any, enableMultipart?: boolean,
        retryNumber?: number): void {
        this.logger.info(this, 'Consumiendo el servicio: ' + endpoint);
        this.getPostService<Rq, Rs>(request, endpoint, enableMultipart, retryNumber).subscribe(
            (rsp: Rs) => {
                this.response = <Rs>rsp;
                if (fx != null && fx != undefined)
                    fx(rsp);
                this.logger.info(this, "Respuesta del servicio. Response: " + this.response);
            }
        );
    }

    get response(): any {
        return this._response;
    }

    set response(rsp: any) {
        this._response = rsp;
    }

    get httpOptions(): any {
        return this._httpOptions;
    }

    set httpOptions(options: any) {
        this._httpOptions = options;
    }

    get httpOptionsMultipart(): any {
        return this._httpOptionsMultipart;
    }

    set httpOptionsMultipart(options: any) {
        this._httpOptionsMultipart = options;
    }
}