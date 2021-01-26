import { Component, OnInit } from '@angular/core';
import { Homev2Component } from '../../home/homev2.component';

@Component({
  selector: 'app-table-tcd',
  templateUrl: './table-tcd.component.html',
  styleUrls: ['./table-tcd.component.scss']
})
export class TableTcdComponent implements OnInit {

  constructor(private containerComponent: Homev2Component) { }

  ngOnInit() {
  }
  public closeCalc() {
    (document.getElementById('containerHome') as HTMLDivElement).style.display = 'flex';
    this.containerComponent.isProgressTable = false;
  }
}
