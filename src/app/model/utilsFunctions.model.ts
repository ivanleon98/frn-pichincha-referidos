import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilsFunctions {

    // Función encargada de enmascarar el valor de dinero ingresado por un cliente separado por puntos y con el signo pesos al inicio
    public validateMaskMoney(event?: any, valueText?: string) {
        var expreg = /^([0-9])*$/;
        let value = valueText != undefined ? valueText : (event != undefined ? event.target.value : "");
        let lengthValue = value.length;
        if ((event != undefined && (expreg.test(value.substring(lengthValue - 1, lengthValue)) || event.key == 'Backspace')) || (valueText != undefined && expreg.test(valueText))) {
            value = value.replace(/^[0]\d*$/g,'');
            value = value.replace(/[a-zA-Z]/g,'');
            let initialValue = value.replace(" ", "").replace("$", "").split(".").join("");
            let lengthValue = initialValue.length;
            let finalValue = "";
            let cont = 1;
            for (let i = lengthValue; i > 0; i--) {
                finalValue = initialValue.substring(i - 1, i) + finalValue;
                if (cont <= 3) {
                    if (cont == 3 && (i > 1)) {
                        finalValue = "." + finalValue;
                        cont = 1;
                    }
                    else {
                        cont++;
                    }
                }
            }

            finalValue = finalValue == "" ? finalValue : "$ " + finalValue;
            if (event != undefined) {
                event.target.value = finalValue;
            }
            return finalValue;
        } else {
            let lengthValue = value.length;
            let finalValue;
            if (lengthValue <= 2 || valueText != undefined) {
                finalValue = ""
            } else {
                finalValue = value.substring(0, lengthValue - 1);
                if (event != undefined) {
                    event.target.value = finalValue;
                    finalValue = this.validateMaskMoney(event);
                }
            }

            if (event != undefined) {
                event.target.value = finalValue;
            }

            return finalValue;
        }
    }

    // Función encargada de obtener el valor real del dinero enmascarado con la funcion validateMaskMoney() 
    public getValueFromMaskMoney(valueMaskMoney: any) {
        let value = valueMaskMoney.replace(" ", "").replace("$", "").split(".").join("");
        return value;
    }

    // Función encargada de enmascarar los campos de tipo nombre
    public validateMaskNames(event?: any, valueText?: string) {
        var expreg = /^[a-zA-ZáéíóúAÉÍÓÚÑñ\s]+$/;
        let value = valueText != undefined ? valueText : (event != undefined ? event.target.value : "");
        let lengthValue = value.length;
        if (event != undefined && expreg.test(value.substring(lengthValue - 1, lengthValue)) || (valueText != undefined && expreg.test(valueText))) {
            if (event != undefined) {
                event.target.value = value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase();
            }

            return value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase();;
        } else {
            let lengthValue = value.length;
            let finalValue;
            if (lengthValue <= 0 || valueText != undefined) {
                finalValue = ""
            } else {
                finalValue = value.substring(0, lengthValue - 1);
                if (event != undefined) {
                    event.target.value = finalValue;
                    finalValue = this.validateMaskNames(event);
                }
            }

            if (event != undefined) {
                event.target.value = finalValue.substring(0, 1).toUpperCase() + finalValue.substring(1).toLowerCase();
            }
            return finalValue.substring(0, 1).toUpperCase() + finalValue.substring(1).toLowerCase();
        }
    }

    // Función encargada de enmascarar los campos que son abiertos
    public validateMaskDefault(event?: any, valueText?: string) {
        let value = valueText != undefined ? valueText : (event != undefined ? event.target.value : "");
        let lengthValue = value.length;
        if (event != undefined || valueText != undefined) {
            if (event != undefined) {
                event.target.value = value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase();
            }

            return value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase();;
        } else {
            let lengthValue = value.length;
            let finalValue;
            if (lengthValue <= 0 || valueText != undefined) {
                finalValue = ""
            } else {
                finalValue = value.substring(0, lengthValue - 1);
            }

            if (event != undefined) {
                event.target.value = finalValue.substring(0, 1).toUpperCase() + finalValue.substring(1).toLowerCase();
            }
            return finalValue.substring(0, 1).toUpperCase() + finalValue.substring(1).toLowerCase();
        }
    }

    // Función encargada de enmascarar los campos de tipo numerico
    public validateMaskNumber(event?: any, valueText?: string) {
        var expreg = /[+]?([0-9]*\,[0-9]+|[0-9]+)/;
        let value = valueText != undefined ? valueText : (event != undefined ? event.target.value : "");
        let lengthValue = value.length;
        if (event != undefined && expreg.test(value.substring(lengthValue - 1, lengthValue)) || (valueText != undefined && expreg.test(valueText))) {
            value = value.replace(/^[0]\d*$/g,'');
            value = value.replace(/[a-zA-Z]/g,'');
            if (event != undefined) {
                event.target.value = value;
            }

            return value;
        } else {
            let lengthValue = value.length;
            let finalValue;
            if (lengthValue <= 0 || valueText != undefined) {
                finalValue = ""
            } else {
                finalValue = value.substring(0, lengthValue - 1);
                if (event != undefined) {
                    event.target.value = finalValue;
                    finalValue = this.validateMaskNumber(event);
                }
            }

            if (event != undefined) {
                event.target.value = finalValue;
            }
            return finalValue;
        }
    }

    // Función encargada de validar la mascara de los campos de tipo numerico
    public validateMaskPhone(event?: any, valueText?: string) {
        var expreg = /^[\d]+$/;
        let value = valueText != undefined ? valueText : (event != undefined ? event.target.value : "");
        let lengthValue = value.length;
        if (event != undefined && expreg.test(value.substring(lengthValue - 1, lengthValue)) || (valueText != undefined && expreg.test(valueText))) {
            if (event != undefined) {
                event.target.value = value;
            }

            return value;
        } else {
            let lengthValue = value.length;
            let finalValue;
            if (lengthValue <= 0 || valueText != undefined) {
                finalValue = ""
            } else {
                finalValue = value.substring(0, lengthValue - 1);
                if (event != undefined) {
                    event.target.value = finalValue;
                    finalValue = this.validateMaskPhone(event);
                }
            }

            if (event != undefined) {
                event.target.value = finalValue;
            }
            return finalValue;
        }
    }

    // Función encargada de validar la mascara de los campos de tipo email
    public validateMaskEmail(event?: any, valueText?: string) {
        var expreg = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4}))|([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+\.([a-zA-Z]{2,4}))+$/;
        //var expreg = new RegExp('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])','ig');
        let value = valueText != undefined ? valueText : (event != undefined ? event.target.value : "");
        if (event != undefined && expreg.test(value) || (valueText != undefined && expreg.test(valueText))) {
            return true;
        } else {
            return false;
        }
    }

    //Función encargada de calcular el rendimiento por periodo
    public performancePerPeriod(investment: number, days: number) {
        if (investment != undefined) {
            let i = 0.05;
            let rp = (Math.pow((1 + i), ((days != undefined ? days : 30) / 360)) - 1) * investment;
            return Number.parseInt(rp.toString());
        }
        else {
            return 0;
        }
    }

    //Función encargada de calcular el rendimiento total
    public totalReturn(rp: number, days: number) {
        if (rp != undefined && days != undefined) {
            let rt = rp * (days / 30);
            return Number.parseInt(rt.toString());
        } else {
            return rp;
        }
    }

    //Función encargada de calcular la retención en la fuente
    public withholdingTax(rt: number) {
        if (rt != undefined) {
            let irf = 0.04;
            let rf = rt * irf;
            return Number.parseInt(rf.toString());
        } else {
            return 0;
        }
    }

    // Función encargada de enmascarar los campos de telefono
    public maskPhone(valueText: string) {
        let newText = valueText.substring(0, 3) + " *** *" + valueText.substring(7, 8) + " " + valueText.substring(8);
        return newText;
    }

    // Función encargada de enmascarar los campos de tipo email
    public maskEmail(valueText: string) {
        let nameLeght = valueText.split('@')[0].length;
        let legth = nameLeght - nameLeght / 2;
        let charactersToAdd = "";
        for (let i = 0; i < legth; i++) {
            charactersToAdd = charactersToAdd + "*";
        }
        let newText = valueText.substring(0, nameLeght/2)+ charactersToAdd + valueText.substring(nameLeght);
        return newText;
    }

    // Función encargada de generar numeros de telefono aleatorios
    public generatePhoneNumber() {
        return '3' +
            Math.floor(Math.random() * 5) +
            Math.floor(Math.random() * 9) +
            Math.floor(Math.random() * 10) +
            Math.floor(Math.random() * 10) +
            Math.floor(Math.random() * 10) +
            Math.floor(Math.random() * 10) +
            Math.floor(Math.random() * 10) +
            Math.floor(Math.random() * 10) +
            Math.floor(Math.random() * 10);
    }

    // Función encargada de enmascarar los campos que son abiertos
    public validateMaskDefaultOutCapitalized(event?: any, valueText?: string) {
        let value = valueText != undefined ? valueText : (event != undefined ? event.target.value : "");
        let lengthValue = value.length;
        if (event != undefined || valueText != undefined) {
            /* if (event != undefined) {
                event.target.value = value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase();
            } */

            return value;
        } else {
            let lengthValue = value.length;
            let finalValue;
            if (lengthValue <= 0 || valueText != undefined) {
                finalValue = ""
            } else {
                finalValue = value.substring(0, lengthValue - 1);
            }

            if (event != undefined) {
                event.target.value = finalValue;
            }
            return finalValue;
        }
    }
}