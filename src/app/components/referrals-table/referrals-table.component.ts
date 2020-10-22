import { Component, OnInit, Input } from '@angular/core';
import { ColorService } from 'src/app/service/color.service';
import { DataService } from 'src/app/service/data.service';
import { PersonRefered } from 'src/app/model/refered.model';

declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');

@Component({
  selector: 'app-referrals-table',
  templateUrl: './referrals-table.component.html',
  styleUrls: ['./referrals-table.component.css']
})

export class ReferralsTableComponent implements OnInit {
  @Input() titleCard: string | undefined;
  @Input() name: string | undefined;
  @Input() number: string | undefined;
  @Input() campaign: string | undefined;
  @Input() state: string | undefined;
  @Input() date: string | undefined;
  @Input() percentage: string | number;
  public porcentaje = 0;
  public status = "";
  public statusPr;
  public storage;
  public data;
  // public flag: number = 0;
  constructor(private paintableReferralsTable: ColorService, private infoData: DataService, private PersonRefered: PersonRefered) {
    this.storage = window.sessionStorage;
  }

  ngOnInit() {
    this.chargeData()
  }

  public downloadPdfReferrals() {
    var imgData = 'data:image/png;base64,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';
    var newCanvas1 = document.querySelector('#canvas-accepted-referrals') as HTMLCanvasElement;
    var newCanvasImg1 = newCanvas1.toDataURL("image/PNG", 1.0);
    var newCanvas2 = document.querySelector('#canvas-canceled-referrals') as HTMLCanvasElement;
    var newCanvasImg2 = newCanvas2.toDataURL("image/PNG", 1.0);

    var dataReferrals = JSON.parse(this.storage.getItem('data'));


    var doc = new jsPDF('portrait', 'mm', 'a4'),
      margins = {
        top: 200,
        bottom: 200,
        left: 50,
        width: 500
      };

    //creates PDF from img
    var doc = new jsPDF('p');
    doc.setFontSize(16);

    var pageSize = doc.internal.pageSize;
    var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
    var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

    //Header
    doc.addImage(imgData, 'PNG', pageWidth - 60, 10, 43.6, 10.8);
    doc.setTextColor(15, 38, 92);
    doc.setFontSize(13);
    doc.text(15, 15, 'AMIGOS PICHINCHA - REFERIDOS');
    doc.text(25, 20, 'BANCO PICHINCHA S.A.');
    doc.text(45, 25, '2020');
    doc.setTextColor(0, 0, 0);

    //Canvas en img
    var headerCardContent = document.getElementsByClassName("header-card");
    var x = 10;
    doc.setDrawColor(115, 168, 57);
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(15 + x, 45, 75, 60, 6, 6, 'FD');
    doc.fromHTML(headerCardContent[0], 18 + x, 48);
    doc.addImage(newCanvasImg1, 'PNG', 20 + x, 65, 65, 35);

    doc.setDrawColor(244, 67, 54);
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(100 + x, 45, 75, 60, 6, 6, 'FD');
    doc.fromHTML(headerCardContent[1], 103 + x, 48);
    doc.addImage(newCanvasImg2, 'PNG', 105 + x, 65, 65, 35);

    function getPercentage(productConfirmation): string {
      if (productConfirmation == "adquirido") {
        return "100%";
      } else if (productConfirmation == "pendiente") {
        return "25%";
      } else if (productConfirmation == "cancelado") {
        return "5%";
      }
    }

    function getMyReferrals(): any {
      var infoTable = new Array();
      for (let i = 0; i < dataReferrals.length; i++) {
        infoTable.push(new Array(dataReferrals[i].name,
          dataReferrals[i].dateCompletedForm,
          dataReferrals[i].product,
          dataReferrals[i].productConfirmation,
          getPercentage(dataReferrals[i].productConfirmation)));
        // Funcion que calcula segun el estado
      }
      return infoTable;
    };

    doc.setTextColor(15, 38, 92);
    doc.setFontSize(16);
    doc.text(15, 120, 'Mis referidos');

    doc.autoTable({
      columnStyles: {
        head: { cellWidth: 30, halign: 'center', valign: 'middle' },
        0: { cellWidth: 50, valign: 'middle' },
        1: { cellWidth: 30, valign: 'middle' },
        2: { cellWidth: 40, valign: 'middle' },
        3: { cellWidth: 40, valign: 'middle' },
        4: { cellWidth: 20, halign: 'center', valign: 'middle' }
      },
      head: [['NOMBRE', 'FECHA DE REGISTRO', 'CAMPAÑA', 'ESTADO PRODUCTO', 'AVANCE']],
      body: getMyReferrals(),
      startY: 125,
      showHead: 'firstPage',
    });

    //Pie de pagina para numeración de cada pagina
    var pageCount = doc.internal.getNumberOfPages();
    var pageSize = doc.internal.pageSize;
    var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
    var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();
    for (var i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(10);
      var footer = 'Página ' + (i) + ' de ' + doc.internal.getNumberOfPages();
      doc.text(pageWidth - doc.getTextWidth(footer) - 15, pageHeight - 7, footer);
    }

    //Propiedades para el documento PDF
    doc.setProperties({
      title: 'Mis referidos - Amigos Pichincha',
      subject: 'Info about PDF',
      author: 'PDFAuthor',
      keywords: 'generated, javascript, web 2.0, ajax',
      creator: 'IdeaLab - Pichincha S.A Colombia',
    });

    //doc.save('new-canvas.pdf')
    var string = doc.output('datauristring');
    var iframe = "<iframe width='100%' height='99%' src='" + string + "'></iframe>"
    var newWindow = window.open();
    newWindow.document.open();
    newWindow.document.write(iframe);
    newWindow.document.close();

  }

  public chargeData() {
    this.data = JSON.parse(this.storage.getItem('data'));
    return this.data;
  }

  public barPercentage(status) {
    this.data = JSON.parse(this.storage.getItem('data'));
    this.statusPr = status;
    if (status == "ace") {
      this.porcentaje = 100;
      return this.porcentaje + '%';
    }
    else if (status == "ges") {
      this.porcentaje = 50;
      return this.porcentaje + '%';
    }
    else if (status == "neg") {
      this.porcentaje = 100;
      return this.porcentaje + '%';
    }
    else if (status == "" || status == null) {
      this.porcentaje = 0;
      return this.porcentaje + '%';
    }
  }

  public barPercentageStyle(): string {
    if (this.statusPr !== "" || this.statusPr !== null) {
      if (this.porcentaje >= 34 && this.porcentaje <= 66) {
        return "progress-color " + "badge-pendient";
      }
      if (this.porcentaje >= 67 && this.porcentaje <= 100) {
        if (this.statusPr == "ace") {
          return "progress-color " + "badge-completed";
        }
        if (this.statusPr == "neg") {
          return "progress-color " + "badge-canceled";
        }
      }
    }

    // return "progress-color " + (Number(this.porcentaje) >= 50 ? 'badge-completed' : 'badge-canceled');
  }
  public statusStyle(): string {
    this.data = JSON.parse(this.storage.getItem('data'));
    let product;
    for (let i = 0; i < this.data.length; i++) {
      product = this.data[i].product;
      for (let j = 0; j < product.length; j++) {
        if (product[j].confirmationState == "neg") {
          return "badge " + "badge-canceled";
        }
        else if (product[i].confirmationState == "ges") {
          return "badge " + "badge-pendient";
        }
        else if (product[j].confirmationState == "") {
          return "badge " + "badge-in-process";
        }
        else if (product[j].confirmationState == "ace") {
          return "badge " + "badge-completed";
        }
      }
    }
  }
}
