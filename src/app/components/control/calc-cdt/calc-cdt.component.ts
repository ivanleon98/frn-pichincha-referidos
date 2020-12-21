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

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      valueInv: new FormControl("", Validators.required)
    })
  }
  get f() { return this.form }
}
