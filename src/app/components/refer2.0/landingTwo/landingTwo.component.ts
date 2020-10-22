import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-landingTwo',
  templateUrl: './landingTwo.component.html',
  styleUrls: ['./landingTwo.component.scss']
})
export class LandingTwoComponent implements OnInit {

  constructor(private containerComponent: AppComponent) { }

  ngOnInit() {
  }
  
  onSubmit(event){
    const elementSelect: HTMLElement = event.currentTarget as HTMLElement;
    if (elementSelect.id == 'imrefer') {
    this.containerComponent.isProgressImRefer = true;
    this.containerComponent.isProgressLanding = false;
    }
    if (elementSelect.id == 'imofficial') {
      this.containerComponent.isProgressLanding = false;
      this.containerComponent.isProgressImOfficial = true;
    }
  }
}
