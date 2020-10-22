import { Component, OnInit } from '@angular/core';
import { PersonRefered } from 'src/app/model/refered.model';

@Component({
  selector: 'app-modal-terms',
  templateUrl: './modal-terms.component.html',
  styleUrls: ['./modal-terms.component.scss']
})
export class ModalTermsComponent implements OnInit {
  public request: PersonRefered;
  constructor() { }

  ngOnInit() {
  }

  closeModal(){
    document.getElementById('container-terms').style.display = 'none';
    let v = (document.getElementById('accept-terms-refered') as HTMLInputElement).checked = false ;
    document.body.style.overflow = 'auto';
  }


  closeModalWithCheck(){
    let request = new PersonRefered();
    document.getElementById('container-terms').style.display = 'none';
    document.body.style.overflow = 'auto';
    request.termsConditions = (document.getElementById('accept-terms-refered') as HTMLInputElement).checked == true ? 'aceptado' : 'rechazado';
  }
}
