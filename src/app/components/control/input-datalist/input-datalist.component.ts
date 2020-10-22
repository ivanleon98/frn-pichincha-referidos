import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { DataListInterface } from 'src/app/interface/dataList.interfaces';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-datalist',
  templateUrl: './input-datalist.component.html',
  styleUrls: ['./input-datalist.component.scss']
})
export class InputDatalistComponent implements OnChanges {
  @Input() list: Array<DataListInterface>; // Lista de datos a pintar
  @Input() isValid: boolean = true; // Variable para que el padre pueda indicar si es valido el input o no
  @Input() title: String; // Titulo del input 
  @Input() id: string; // Id del input 
  @Input() control: FormControl; // Control del formulario padre al cual se va a asociar el input
  @Input() errorText: String; // Mensaje de error a mostrar cuando el campo sea invalido
  @Input() controlName: string; // Nombre del control asociado al formulario padre
  @Input() formGroup: FormGroup; // Formulario al cual esta asociado el control en el padre
  @Input() placeHolderText: String; // Place holder a mostrar en en control
  @Input() showId: boolean = false; // Variable que me indica si se debe mostrar el id en la lista
  @Input() textTooltip: string = null; //Indica el valor del tooltip
  @Input() tooltipActive:boolean = false; // Indica si se muestra el tooltip
  @Input() cleanMarginLeft: boolean = false;
  @Output() onElementSelected: EventEmitter<string> = new EventEmitter(); //Evento lanzado al seleccionar un objeto de la lista
  public listCustom: Array<DataListInterface>; // Lista personalizada de datos a pintar
  public showList: boolean = false; // Indica si se debe mostrar la lista de opciones a seleccionar

  // Constructor
  constructor() {
  }

  // Evento lanzada cuando se detecta un cambio en las variables
  ngOnChanges(changes: SimpleChanges) {
      if (changes.list != undefined) {
          this.listCustom = this.list;
      }

      if(changes.control != undefined && changes.control.firstChange && this.listCustom != undefined)
      {
          this.focusValidator(changes.control.currentValue.value);
      }
  }

  get f() { return this.formGroup }

  // Evento lanzado al seleccionar el input
  activate(e) {
      (<HTMLInputElement>document.getElementById(this.id)).focus();
      if(this.list!=null)
      {
        this.showList = true;
      }
      
  }

  // Evento lanzado al seleccionar un elemento de la lista
  selectElement(e) {
      var elemt = (<HTMLInputElement>document.getElementById(this.id));
      elemt.value = (e.target as Element).innerHTML;
      if (this.control != undefined) {
          this.control.setValue(elemt.value);
      }

      this.showList = false;
      this.onElementSelected.emit(elemt.value);
  }

  // Evento lanzado al perder el foco el input, se debe lanzar con un tiempo de retraso para que no afecte el evento selectElement
  focusOut() {
      setTimeout(() => {
          var elemt = (<HTMLInputElement>document.getElementById(this.id))
          var text = elemt.value;
          elemt.blur();
          if ((this.showId && !this.list.find((elementos) => (elementos.id.toUpperCase() + " - " + elementos.value.toUpperCase()) == text.toUpperCase()))
          || (!this.showId && !this.list.find((elementos) => (elementos.value.toUpperCase()) == text.toUpperCase()))) {
              elemt.value = "";
              if (this.control != undefined) {
                  this.control.setValue(undefined);
              }
              this.setListCustom("");
          }
          this.showList = false;
      }, 300);
  }

  // Evento encargado de validar el valor ingresado por el usuario y hacer el foco si es correcto
  focusValidator(text?: string) {
      var valid = true;
      var elemt = (<HTMLInputElement>document.getElementById(this.id))
      if(elemt != null)
      {
          var texto = elemt.value;
          valid = this.valsearch(texto);
          if (valid) {
              elemt.value = elemt.value.slice(0, -1);
          }
          else {
              elemt.focus();
              this.setListCustom(texto);
          }
      }else{
          var texto = text != null && text != undefined? text : "";
          valid = this.showId ? !this.list.find((elementos) => (elementos.id.toUpperCase() + " - " + elementos.value.toUpperCase()) == text.toUpperCase()) : !this.list.find((elementos) => (elementos.value.toUpperCase()) == text.toUpperCase());
          if (valid) {
              if (this.control != undefined) {
                  this.control.setValue("");
              }
          }
          else {
              if (this.control != undefined) {
                  this.control.setValue(texto);
                  //this.setListCustom(texto);
              }
          }
      }
  }

  // Se verifica si existen elementos en la lista con los parametros ingresados
  valsearch(text: string) {
      var contador = 0;
      this.showId ? this.list.map((elementos) => { (elementos.id.toUpperCase() + " - " + elementos.value.toUpperCase()).indexOf(text.toUpperCase()) === -1 ? contador : contador++; }) : this.list.map((elementos) => { (elementos.value.toUpperCase()).indexOf(text.toUpperCase()) === -1 ? contador : contador++; });
      if (contador != 0) {
          return false;
      }
      else {
          return true;
      }
  }

  // Se filtra la lista de elementos con el texto ingresado por el usuario
  setListCustom(select) {
      this.listCustom = [];
      this.list.forEach(element => {
          if ((this.showId && (element.id.toUpperCase() + " - " + element.value.toLocaleUpperCase()).indexOf(select.toLocaleUpperCase()) != -1) || (!this.showId && (element.value.toLocaleUpperCase()).indexOf(select.toLocaleUpperCase()) != -1)) {
              this.listCustom.push(element);
          }
      });
  }
}
