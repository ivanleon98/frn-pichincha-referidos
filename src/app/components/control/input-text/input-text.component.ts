import { OnChanges, Component, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputStyleTypeInterface, InputStyleTypes } from 'src/app/interface/inputStyleType.interfaces';
import { MaskTypeInterface, MaskTypes } from 'src/app/interface/maskType.interfaces';
import { UtilsFunctions } from 'src/app/model/utilsFunctions.model';

@Component({
    selector: 'input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnChanges {
    @Input() isValid: boolean = true; // Variable para que el padre pueda indicar si es valido el input o no
    @Input() title: String; // Titulo del input 
    @Input() control: FormControl; // Control del formulario padre al cual se va a asociar el input
    @Input() errorText: String; // Mensaje de error a mostrar cuando el campo sea invalido
    @Input() controlName: string; // Nombre del control asociado al formulario padre
    @Input() formGroup: FormGroup; // Formulario al cual esta asociado el control en el padre
    @Input() placeHolderText: String; // Place holder a mostrar en en control
    @Input() details: string = null; // Indica el valor a mostrar al lado izquierdo del control ej -> CC
    @Input() textTooltip: string = null; //Indica el valor del tooltip
    @Input() tooltipActive:boolean = false; // Indica si se muestra el tooltip
    @Input() maskType: MaskTypeInterface = MaskTypes.find(m => m.type == "default"); // Indica el tipo de mascara a utilizar en el control
    @Input() inputStyleType: InputStyleTypeInterface = InputStyleTypes.find(i => i.id == "1"); // Indica el tipo de estilo a utilizar en el control
    @Input() maxLength: number = undefined;
    @Input() minLength: number = undefined;
    @Input() cleanMarginLeft: boolean = false;  
    @Input() id: string;
    @Output() onFocusOut: EventEmitter<string> = new EventEmitter(); //Evento lanzado al perder el foco del control
    public disabledControl: boolean = false; // Variable que indica si el control esta habilitado para editar o no

    // Constructor de la clase
    constructor(
        private utilsFunctions: UtilsFunctions
    ) { }

    // evento lanzado al detectar cambios en las variables del control
    ngOnChanges(changes: SimpleChanges) {
        if (changes.control != undefined && changes.control.firstChange) {
            this.disabledControl = changes.control.currentValue.disabled;

            let initialValue = changes.control.currentValue.value;
            this.mask(undefined, initialValue);
        }
    }

    // Evento encargado de aplicar la mascara al control si esta configurada
    mask(event: any, initialValue?: string) {
        if (this.maskType != undefined) {
            switch (this.maskType.type) {
                case "money":
                    if (initialValue != undefined && initialValue != "") {
                        this.f.get(this.controlName).setValue(this.utilsFunctions.validateMaskMoney(undefined, initialValue));
                    } else {
                        let value = this.utilsFunctions.validateMaskMoney(event);
                        if(value.length>=15 )
                        {
                            this.f.get(this.controlName).setValue(value.substring(0,15));
                        }
                        else{
                            this.f.get(this.controlName).setValue(value);
                        }
                    }
                    break;

                case "money-investment":
                    if (initialValue != undefined && initialValue != "") {
                        this.f.get(this.controlName).setValue(this.utilsFunctions.validateMaskMoney(undefined, initialValue));
                    } else {
                        let value = this.utilsFunctions.validateMaskMoney(event);
                        this.f.get(this.controlName).setValue(value);
                    }
                    this.f.get(this.controlName).setValidators([Validators.required, Validators.pattern('[\$][ ]([5-8][0-9]{2}.[0-9]{3}|9[0-8][0-9].[0-9]{3}|99[0-8].[0-9]{3}|999.[0-8][0-9]{2}|999.9[0-8][0-9]|999.99[0-9]|[1-8].[0-9]{3}.[0-9]{3}|9.[0-8][0-9]{2}.[0-9]{3}|9.9[0-8][0-9].[0-9]{3}|9.99[0-8].[0-9]{3}|9.999.[0-8][0-9]{2}|9.999.9[0-8][0-9]|9.999.99[0-9]|10.000.000)')]);
                    break;

                case "names":
                    if (initialValue != undefined && initialValue != "") {
                        this.f.get(this.controlName).setValue(this.utilsFunctions.validateMaskNames(undefined, initialValue));
                    } else {
                        let value = this.utilsFunctions.validateMaskNames(event);
                        this.f.get(this.controlName).setValue(value);
                    }
                    break;

                case "number":
                    if (initialValue != undefined && initialValue != "") {
                        this.f.get(this.controlName).setValue(this.utilsFunctions.validateMaskNumber(undefined, initialValue));
                    } else {
                        let value = this.utilsFunctions.validateMaskNumber(event);
                        this.f.get(this.controlName).setValue(value);
                    }
                    break;

                case "email":
                    let value;
                    if (initialValue != undefined && initialValue != "") {
                        value = this.utilsFunctions.validateMaskEmail(undefined,initialValue);
                    }else{
                        value = this.utilsFunctions.validateMaskEmail(event);
                    }

                    if(value){
                        this.f.get(this.controlName).validator = null;
                        this.f.get(this.controlName).setErrors(null);
                    }else
                    {
                        // Cuando la validación del email es falsa se agrega un Validators.pattern improbable para indicar que el campo es invalido, esto fue necesario ya que el Validators.pattern no valida bien la expresion regular creada para email
                        this.f.get(this.controlName).setValidators([Validators.required, Validators.pattern('abcdefghijklmnopqrstuvwxyzz')]);
                        this.f.get(this.controlName).updateValueAndValidity();
                    }
                    break;

                case "phone":
                    if (initialValue != undefined && initialValue != "") {
                        this.f.get(this.controlName).setValue(this.utilsFunctions.validateMaskPhone(undefined, initialValue));
                    } else {
                        let value = this.utilsFunctions.validateMaskPhone(event);
                        this.f.get(this.controlName).setValue(value);
                    }
                    break;

                case "defaultOutCapitalized":
                    if (initialValue != undefined && initialValue != "") {
                        this.f.get(this.controlName).setValue(this.utilsFunctions.validateMaskDefaultOutCapitalized(undefined, initialValue));
                    } else {
                        let value = this.utilsFunctions.validateMaskDefaultOutCapitalized(event);
                        this.f.get(this.controlName).setValue(value);
                    }
                    break;

                case "default":
                    if (initialValue != undefined && initialValue != "") {
                        this.f.get(this.controlName).setValue(this.utilsFunctions.validateMaskDefault(undefined, initialValue));
                    } else {
                        let value = this.utilsFunctions.validateMaskDefault(event);
                        this.f.get(this.controlName).setValue(value);
                    }
                default:
                    break;
            }
        }
    }

    focusOut(event) {
        let value = event.target.value;
        this.onFocusOut.emit(this.utilsFunctions.getValueFromMaskMoney(value));
    }

    get f() { return this.formGroup }
}