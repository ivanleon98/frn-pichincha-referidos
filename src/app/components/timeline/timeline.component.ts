import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { DataService } from 'src/app/service/data.service';
import { Homev2Component } from '../home/homev2.component';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @Input() titleTimeLine: string | undefined;
  @Input() updateNotification: string | undefined;
  public state: any;
  public name: any;
  public notify;
  public refferal = new Array();
  public storage; 
//   public listNotifications = [
//   'Felicitaciones Martha Cecilia Gómez adquirió CDT',
//   'Has invitado a 51897452', 
//   'Felicitaciones Juan Pablo Rodríguez adquirió TC', 
//   'Angélica María Gómez ya es uno de tus referidos',
//   'Felicitaciones Cindy López adquirió TC',
//   'Felicitaciones Cindy López adquirió TC222',
// ];
  public notifications = [];
  public isEmpty: boolean;
  public listNotifications = new Array<string>();
  constructor(private infoData: DataService, private containerComponent: AppComponent, private homeComponent: Homev2Component) {
    this.titleTimeLine = "Notificaciones";
    this.storage = window.sessionStorage;
   }

   ngOnInit() {
     this.listNotifications = JSON.parse(this.storage.getItem("notificationsTimeline"));
     let msg = (document.getElementById('messageWelcome') as HTMLDivElement);
     if(this.listNotifications.length == 0){
       msg.style.display = 'block';
     }
     if (this.listNotifications.length != 0) {
      msg.style.display = 'none';
     }
  } 

  public viewAddRefer(){
    this.homeComponent.isProgressWelcome = false;
    this.homeComponent.isProgressAddRefer = true;
    document.getElementById('s2').classList.add('active');
    document.getElementById('s1').classList.remove('active');
  }

   public getList(){
    return this.ngOnInit();
   }
}
