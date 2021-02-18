import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Homev2Component } from '../../home/homev2.component';

@Component({
  selector: 'app-table-tcd',
  templateUrl: './table-tcd.component.html',
  styleUrls: ['./table-tcd.component.scss']
})
export class TableTcdComponent implements OnInit {
  public formCard: FormGroup;
  public list =   [
    { id: '1', value: 'Tarjeta Clásica' },
    { id: '2', value: 'Tarjeta Gold ' },
    { id: '3', value: 'Tarjeta Platinum' },
    { id: '4', value: 'Tarjeta Infinite'}
]
  constructor(private containerComponent: Homev2Component) { }

  ngOnInit() {
    this.formCard = new FormGroup({
      selectCard: new FormControl("")
    })
  }
  get f (){
    return this.formCard;
  }
  get selectCard(){
    return this.formCard.get('selectCard')
  }
  public closeCalc() {
    (document.getElementById('containerHome') as HTMLDivElement).style.display = 'flex';
    this.containerComponent.isProgressTable = false;
  }
}
