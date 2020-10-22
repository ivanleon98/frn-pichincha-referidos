import { Injectable } from '@angular/core';
import { ReferidoData } from '../model/referido.model';
import { PersonRefered } from '../model/refered.model';

@Injectable()

export class ReferidoService {
    
    private referido: ReferidoData = new ReferidoData();
    private refered: PersonRefered = new PersonRefered();

    getReferido(){
        return this.referido;
    }

    getRefered(){
        return this.refered;
    }
}