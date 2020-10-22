import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable() export class LoggerService {
    debugModeOn: boolean = false;

    constructor() {
        this.debugModeOn = environment.isDebugEnable;
    }

    public isDebugModeOn(): boolean {
        return this.debugModeOn;
    }

    /**
     * Mensaje tipo Info de acuerdo a los argumentos
     * 
     * @author Ivan.Arteaga
     * @param args 
     */
    public info(obj: Object, args: string | any) {
        if (this.isDebugModeOn) {
            return console.info(new Date().toLocaleString(), " : ", obj.constructor.name, " : ", args);
        }
    }

    /**
     * Mensaje tipo warn de acuerdo a los argumentos
     * 
     * @author Ivan.Arteaga
     * @param args 
     */
    public warn(obj: Object, args: string | any) {
        if (this.isDebugModeOn) {
            return console.warn(new Date().toLocaleString(), " : ", obj.constructor.name, " : ", args);
        }
    }

    /**
     * Mensaje error Info de acuerdo a los argumentos
     * 
     * @author Ivan.Arteaga
     * @param args 
     */
    public error(obj: Object, args: string | any) {
        if (this.isDebugModeOn) {
            return console.error(new Date().toLocaleString(), " : ", obj.constructor.name, " : ", args);
        }
    }
}