import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaskTypeInterface, MaskTypes } from 'src/app/interface/maskType.interfaces';

@Component({
  selector: 'app-calc-cdt',
  templateUrl: './calc-cdt.component.html',
  styleUrls: ['./calc-cdt.component.scss']
})
export class CalcCdtComponent implements OnInit {
  public form: FormGroup;
  public maskTypeMoney: MaskTypeInterface = MaskTypes.find(m => m.type == "money-investment"); // Indica el tipo de mascara a utilizar en el input-text
  comition: number = 0;
  moneyPerComition: any = 0;
  rangeValue: any;
  amount: any = 0;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      valueInv: new FormControl("", Validators.required)
    })
  }
  get f() { return this.form }

  public calcCdtRevenew(dateRange: any, event) {
    this.selectRange(event);
    let amount = this.amount;
    //$1 a 49.999.999 millones. 
    if (amount < 50000000) {
      if (dateRange == 1) {
        this.comition = 300;
      } else if (dateRange == 2) {
        this.comition = 400;
      } else if (dateRange == 3) {
        this.comition = 500;
      } else {
        this.comition = 650;
      }
    }

    // 50.000.000 millones a 95.999.999
    else if (amount >= 50000000 && amount < 96000000) {
      if (dateRange == 1) {
        this.comition = 600;
      } else if (dateRange == 2) {
        this.comition = 750;
      } else if (dateRange == 3) {
        this.comition = 850;
      } else {
        this.comition = 1150;
      }

      // 96.000.000 a 103.999.999
    } else if (amount >= 96000000 && amount < 104000000) {
      if (dateRange == 1) {
        this.comition = 900;
      } else if (dateRange == 2) {
        this.comition = 1000;
      } else if (dateRange == 3) {
        this.comition = 1150;
      } else {
        this.comition = 1550;
      }

      // 9600000 a 119.999.999
    } else if (amount >= 96000000 && amount < 120000000) {
      if (dateRange == 1) {
        this.comition = 1400;
      } else if (dateRange == 2) {
        this.comition = 1500;
      } else if (dateRange == 3) {
        this.comition = 1550;
      } else {
        this.comition = 2300
      }

      //Más de 120.000.000 millones
    } else if (amount >= 120000000) {
      if (dateRange == 1) {
        this.comition = 1900;
      } else if (dateRange == 2) {
        this.comition = 2000;
      } else if (dateRange == 3) {
        this.comition = 2300;
      } else {
        this.comition = 3050;
      }
    }

    this.moneyPerComition = ((amount / 1000000) * this.comition);
    this.moneyPerComition = Math.round(this.moneyPerComition);

    if (this.moneyPerComition < 1) {
      this.moneyPerComition = 0;
    }
    if (this.moneyPerComition > 1000000) {
      this.moneyPerComition = 1000000;
    }
    if (this.moneyPerComition.lenght != 0) {
      document.getElementById('comitionBox').classList.add("active")
    } else{
      document.getElementById('comitionBox').classList.add("remove")
    }
    return this.moneyPerComition;
  }

  public selectRange(event) {
    this.cleanRange();
    const value = event.currentTarget.id;
    this.addClass(value, "active");
  }

  public addClass(val1, val2){
    document.getElementById(''+val1).classList.add(''+val2);
  }

  public cleanRange(){
   document.getElementById('b1').classList.remove("active");
   document.getElementById('b2').classList.remove("active");
   document.getElementById('b3').classList.remove("active");
   document.getElementById('b4').classList.remove("active");
  }

  // public closeModal() {
  //   document.getElementById('calculatorCDT').style.display = 'none';
  // }

  private maskNumberAndMoney(id, minValue, maxValue, flagMoney) {
    let obj = (document.getElementById(id) as HTMLInputElement);
    let v = obj.value.replace(new RegExp('\\.', 'g'), '').replace(new RegExp('\\$', 'g'), '');
    // INICIO: ELimina caracteres alfabeticos
    v = "" + (isNaN(parseInt(v, 10)) ? '' : parseInt(v, 10));
    // FIN: ELimina caracteres alfabeticos
    // INICIO: Elimina ceros delante de los numeros
    let i = 0;
    for (i = 0; i < v.length; i++) {
      if (Number(v.charAt(i)) !== 0) {
        v = v.substr(i);
        break;
      }
    }
    if (i === v.length)
      v = "";
    // FIN: Elimina ceros delante de los numeros
    // INICIO: valores Minimo y Maximo
    if (minValue != undefined && v < minValue)
      v = minValue;
    if (maxValue != undefined && v > maxValue)
      v = maxValue;
    // FIN: valores Minimo y Maximo
    // INICIO Mascara decimal. 
    let r = '';
    if (flagMoney) {
      v += "0"; //Se adicionaun cero para que cuadre el modulo
      let u = v.split("");
      u = u.reverse();
      v = u.join("");

      for (let i = 0; i < v.length; i++) {
        if (i != 0 && (i) % 3 == 0) {
          r = "." + v.charAt(i) + r;
        } else {
          r = v.charAt(i) + r;
        }
      }
      r = r.substr(0, r.length - 1); //Elimna el 0 adicionado
      if (r.charAt(0) === ".")
        r = r.substr(1);
    } else {
      r = v;
    }
    // FIN Mascara decimal.
    obj.value = (flagMoney ? "$" : "") + r;
    return obj.value;
  }
  public maskAmount(id, minValue, maxValue, flagMoney) {
    let obj = (document.getElementById(id) as HTMLInputElement);
    this.amount = obj.value.replace(new RegExp('\\.', 'g'), '').replace(new RegExp('\\$', 'g'), '');
    this.maskNumberAndMoney(id, minValue, maxValue, flagMoney);
    if (this.amount == "") {
      this.cleanRange();
      document.getElementById('comitionBox').classList.remove("active");
      this.moneyPerComition = "";
    }
  }
  public maskComition(id, minValue, maxValue, flagMoney) {
    let obj = (document.getElementById(id) as HTMLInputElement);
    this.moneyPerComition = obj.value.replace(new RegExp('\\.', 'g'), '').replace(new RegExp('\\$', 'g'), '');
    return this.maskNumberAndMoney(id, minValue, maxValue, flagMoney);
  }
}
