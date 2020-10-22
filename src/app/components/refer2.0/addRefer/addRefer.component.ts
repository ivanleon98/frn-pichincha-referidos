import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaskTypeInterface, MaskTypes } from 'src/app/interface/maskType.interfaces';

@Component({
  selector: 'app-addRefer',
  templateUrl: './addRefer.component.html',
  styleUrls: ['./addRefer.component.scss']
})
export class AddReferComponent implements OnInit {
  public formRefer: FormGroup;
  public isValid = true; // variable utilizada para saber si todo el formulario en valido
  public maskTypeNames: MaskTypeInterface = MaskTypes.find(m => m.type == "names"); // Indica el tipo de mascara a   utilizar en el input-text
  public maskTypeNumber: MaskTypeInterface = MaskTypes.find(m => m.type == "number"); // Indica el tipo de mascara a   utilizar en el 
  public listOffices = [
  'ARMENIA',
  'BARRANQUILLA - CALLE 72',
  'BARRANQUILLA - CENTRO',
  'BARRANQUILLA - PRADO',
  'BOGOTA - 7 DE AGOSTO',
  'BOGOTA - AVENIDA AMÉRICAS',
  'BOGOTA - AVENIDA CHILE',
  'BOGOTA - CALLE 80',
  'BOGOTA - CARRERA 10',
  'BOGOTA - CARVAJAL',
  'BOGOTA - CENTRO CALLE 22',
  'BOGOTA - CHAPINERO',
  'BOGOTA - CHICO',
  'BOGOTA - CONTADOR',
  'BOGOTA - FONTIBON',
  'BOGOTA - KENNEDY',
  'BOGOTA - LA ESMERALDA',
  'BOGOTA - RESTREPO',
  'BOGOTA - TOBERIN',
  'BOGOTA - UNICENTRO',
  'BOGOTA - VENECIA',
  'BUCARAMANGA - CABECERA',
  'BUCARAMANGA - CAÑAVERAL',
  'BUCARAMANGA - PASEO DEL COMERCIO',
  'CALI - ALAMEDA',
  'CALI - AVENIDA SEXTA NORTE',
  'CALI - CENTRO CARRERA 3',
  'CALI - HOLGUINES',
  'CARTAGENA - LA MATUNA',
  'CUCUTA - AVENIDA CERO',
  'IBAGUE - CENTRO CALLE 15',
  'IPIALES',
  'ITAGUI',
  'MANIZALES - MULTICENTRO',
  'MEDELLIN - ENVIGADO',
  'MEDELLIN - JUNIN',
  'MEDELLIN - LAURELES',
  'MEDELLIN - POBLADO',
  'MONTERIA - PARQUE SIMON BOLIVAR',
  'NEIVA - CENTRO CALLE 7',
  'PASTO - CENTRO CALLE 19',
  'PEREIRA - AV CIRCUNVALAR',
  'PEREIRA - PLAZA BOLIVAR',
  'SAN GIL',
  'TUNJA',
  'ZAPATOCA',
  'ASIGNAR POR GEOREFERENCIACIÓN'
]
  constructor() { }

  ngOnInit() {
    this.loadOffices();
    this.formRefer = new FormGroup({
      documentPerson: new FormControl("", [Validators.required]),
      office: new FormControl("", Validators.required),
    })
    
  }
  get documentPerson() {
    return this.formRefer.get('documentPerson');
  }

  get f() { return this.formRefer }

  public loadOffices() {
    let slcCities = (document.getElementById('selectOffice') as HTMLSelectElement);
    for (let i = 0; i < this.listOffices.length; i++) {
      let dv = document.createElement("option");
      dv.innerHTML = this.listOffices[i];
      dv.value = this.listOffices[i];
      dv.id = this.listOffices[i];
      slcCities.appendChild(dv);
    }
  }
  public selectProduct(event){
    this.clean()
    let element = event.currentTarget as HTMLElement;
    if (element.id == "im1") {
        element.setAttribute("src", "./../../../../assets/img/cdtblue.png");
        document.getElementById('p1').style.color = '#10133F';
    }
    if (element.id == "im2") {
      element.setAttribute("src", "./../../../../assets/img/tcdblue.png");
      document.getElementById('p2').style.color = '#10133F';
    }
    if (element.id == "im3") {
      element.setAttribute("src", "./../../../../assets/img/libranzablue.png");
      document.getElementById('p3').style.color = '#10133F';
    }
    }
  private clean(){
    document.getElementById('im1').setAttribute("src","./../../../../assets/img/cdt.png");
    document.getElementById('im2').setAttribute("src","./../../../../assets/img/tarjeta-de-credito.png");
    document.getElementById('im3').setAttribute("src","./../../../../assets/img/libranza.png");
    document.getElementById('p1').style.color = '#72787A';
    document.getElementById('p2').style.color = '#72787A';
    document.getElementById('p3').style.color = '#72787A';

  }
  }
