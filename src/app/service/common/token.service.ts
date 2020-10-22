import { Injectable, Optional } from '@angular/core';
import { of } from 'rxjs';
// import { AppConstants } from '../../constants/generic.constants';
import { LoggerService } from './logger.service';

@Injectable() export class ClientStorageService {
    private value: any | undefined;
    private key: any | undefined;
    private type: WindowSessionStorage;

    constructor(private logger: LoggerService) {
        this.type = undefined;
    }

    /**
     * Sobreescribe la clave que se ingreso con el valor por parametro
     * 
     * @author Ivan.Arteaga
     * @param key 
     * @param value
     */
    public push(key: any, value: any): any {
        if (this.type === undefined) {
            this.logger.error(this, 'No ha inicializado el Tipo de almacenamiento local, utilice el metodo setStorageType()');
        } else {
            if (key && value) {
                this.key = key;
                this.value = JSON.stringify(value);
                this.type.sessionStorage.setItem(String(this.key), this.value);
                this.log();
            }
        }
        return this.value;
    }

    /**
     * Obtiene el valor asociado a la clave ingresada por parametro. Modifica el valor de la ultima clave
     * cacheada
     * 
     * @author Ivan.Arteaga
     * @param key 
     */
    public pull(key: any): any | undefined {
        if (this.type === undefined) {
            this.logger.error(this, 'No ha inicializado el Tipo de almacenamiento local, utilice el metodo setStorageType()');
        } else {
            if (key !== this.key) {
                this.value = JSON.parse(this.type.sessionStorage.getItem(String(this.key)));
                return of(this.value);
            }
        }
        return this.value;
    }

    /**
     * Elimina del storage la clave ingresada por parametro
     * 
     * @author Ivan.Arteaga
     * @param key 
     */
    public remove(key: any): void {
        if (this.type === undefined) {
            this.logger.error(this, 'No ha inicializado el Tipo de almacenamiento local, utilice el metodo setStorageType()');
        } else {
            this.log(false);
            this.type.sessionStorage.removeItem(String(this.key));
            this.value = undefined;
            this.key = undefined;
        }
    }

    /**
     * Elimina todas las claves
     * 
     * @author Ivan.Arteaga
     */
    public clear(): void {
        if (this.type !== undefined)
            this.type.sessionStorage.clear();
    }

    /**
     * Retorna el tipo de almacen utilizado
     * 
     * @author Ivan.Arteaga
     */
    public storageType(): string {
        return typeof (this.type);
    }

    /**
     * Setea el tipo de almacen utilizado
     * 
     * @author Ivan.Arteaga
     */
    //  public setStorageType(store: Storage): void {
    //      this.type = store;
    // }

    /**
     * Registra en el log la llave creada o eliminada
     * 
     * @author Ivan.Arteaga
     * @param operation
     */
    private log(operation: boolean = true): void {
        this.logger.info(this, 'Llave (' + String(this.key) + '), ' + (operation ? '\"CREADA\"' : '\"ELIMINADA\"')
            + ' con valor ' + this.value);
    }
}