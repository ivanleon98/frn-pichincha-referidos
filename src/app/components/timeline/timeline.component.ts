import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

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
  public list = [
  'Felicitaciones Martha Cecilia Gómez adquirió CDT',
  'Has invitado a 51897452', 
  'Felicitaciones Juan Pablo Rodríguez adquirió TC', 
  'Angélica María Gómez ya es uno de tus referidos',
  'Felicitaciones Cindy López adquirió TC',
  'Felicitaciones Cindy López adquirió TC222',
];
  public notifications = [];
  public listNotifications = new Array<string>();
  constructor(private infoData: DataService) {
    this.titleTimeLine = "Notificaciones";
    this.storage = window.sessionStorage;
   }

   ngOnInit() {
     this.listNotifications = JSON.parse(this.storage.getItem("notificationsTimeline"));
  } 

   public getList(){
    return this.ngOnInit();
   }
}
