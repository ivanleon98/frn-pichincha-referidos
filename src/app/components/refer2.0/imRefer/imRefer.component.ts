import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-im-refer',
  templateUrl: './imRefer.component.html',
  styleUrls: ['./imRefer.component.scss']
})
export class ImReferComponent implements OnInit {

  constructor(private containerComponent: AppComponent) { }

  ngOnInit() {
  }

}
