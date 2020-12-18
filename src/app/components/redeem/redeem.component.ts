import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaskTypeInterface, MaskTypes } from 'src/app/interface/maskType.interfaces';

@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.component.html',
  styleUrls: ['./redeem.component.scss']
})
export class RedeemComponent implements OnInit {
  public maskTypeMoney: MaskTypeInterface = MaskTypes.find(m => m.type == "money-investment"); // Indica el tipo de mascara a utilizar en el input-text
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      valueRedeem: new FormControl("", [Validators.required])
    }
    )
  }
  get f() { return this.form }
  
  public showErrorMount(){
    let value = this.f.controls.valueRedeem.value;
    value.split('$');
    console.log('VALOR: ' + value);
    if (value >= 50000000) {
      document.getElementById('errorMount').style.display = 'block';
    }
  }
}