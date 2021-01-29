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
  public onSubmit(event) {
    const element: HTMLElement = event.currentTarget as HTMLElement;
    if (element.id == "cdt") {
      this.containerComponent.isProgressFormRefer = true;
      this.containerComponent.isProgressImRefer = false;
    }
    if (element.id == "tdc") {
      this.containerComponent.isProgressFormTcd = true;
      this.containerComponent.isProgressImRefer = false;
    } {
    }
  }

}
