import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

const MONTHS_DIV_ID = '-fixed-month';
const DAY_SPAN_ID = '-number-day';
const DAY_NAME = '-name-day';
const YEAR_SPAN_ID = '-fixed-years';
const BOX_YEAR = '-box-year';
const BOX_MONTH = '-box-month';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {
    @Input() placeholder: string;
    @Input() id: string;
    @Output() change: EventEmitter<string> = new EventEmitter();
    @Input() blockyear: boolean = true; //Control para habilitar fechas por encima a la actual
    value: string;
    year: number;
    month: number;

    ngOnInit() {
        this.actualYear();
        this.actualMonth();
        this.calendar('calendar-content');
    }

    public showCalendar(status) {
        return document.getElementById(this.id + '-general').style.display = (status === true ? 'block' : 'none');
    }

    public calendar(id_calendar) {
        let obj = document.getElementById(id_calendar).getElementsByTagName("div");
        let xaxis = obj[6].getElementsByTagName("div");
        let initDay = new Date(this.year, this.month, 1).getDay();
        let totalDay = new Date(this.year, this.month + 1, 0).getDate();
        let actualDay = 0;
        let maxRows = ((totalDay === 30 || totalDay === 31) && initDay === 6) ||
            (totalDay === 31 && initDay == 5) ? 6 : 5;
        xaxis[5].style.display = (maxRows === 6 ? "flex" : "none");
        let fnDayEmptyStyle = (cell) => {
        cell.innerHTML = ''; cell.style.cursor = 'default';
            cell.style.color = 'rgba(30, 51, 152, 1)';
        };
        let fnDayDisableStyle = (cell, day) => {
        cell.innerHTML = '' + day + ''; cell.style.cursor = 'default';
            cell.style.color = 'rgba(194, 191, 191, 1)'
        };
        for (let j = 0; j < maxRows; j++) {
            let yaxis = xaxis[j].getElementsByTagName("span");
            for (let i = 0; i < 7; i++) {
                fnDayEmptyStyle(yaxis[i]); // Default CLEAN
                if (j != 0 || i >= initDay) { // Current Days month
                    if (++actualDay <= totalDay) { // Minimum avaliable days in month
                        let maxDay = this.maxDayCurrentMonth(this.year, this.month);
                        if (maxDay != undefined && actualDay > maxDay) { // Day after today                            
                            fnDayDisableStyle(yaxis[i], actualDay);
                            yaxis[i].style.borderRadius = '0';
                            yaxis[i].style.backgroundColor = 'transparent';
                            yaxis[i].style.color = 'rgba(189,189,189, 1)';
                            yaxis[i].outerHTML = yaxis[i].outerHTML;
                        } else {
                            yaxis[i].innerHTML = '' + actualDay + '';
                            let fnClick = () => {
                                if (yaxis[i].innerHTML.length !== 0) {
                                    this.value = this.year + '/' + (this.month + 1 < 10 ? '0' : '') +
                                        (this.month + 1) + '/' + (Number(yaxis[i].innerHTML) < 10 ? "0" : "") + yaxis[i].innerHTML;
                                    this.showCalendar(false);
                                    this.change.emit(this.value);
                                    this.barStyle();
                                }
                            }
                            let fnMouseOver = () => {
                                yaxis[i].style.cursor = 'default';
                                if (yaxis[i].innerHTML.length !== 0) {
                                    yaxis[i].style.backgroundColor = 'rgba(30, 51, 152, 1)';
                                    yaxis[i].style.color = 'rgba(255, 223, 122, 1)';
                                    yaxis[i].style.borderRadius = '50%';
                                    yaxis[i].style.cursor = 'pointer';
                                }
                            };
                            let fnMouseOut = () => {
                                yaxis[i].style.backgroundColor = 'transparent';
                                yaxis[i].style.color = 'rgba(30, 51, 152, 1)';
                            };
                            yaxis[i].addEventListener('click', fnClick);
                            yaxis[i].addEventListener('mouseover', fnMouseOver);
                            yaxis[i].addEventListener('mouseover', fnMouseOut);
                        }
                    } else {
                        fnDayEmptyStyle(yaxis[i]); // Days at End
                    }
                }
            }
        }
    }

    public paintYear(yearNumber) {
        this.year = this.year - yearNumber;
        this.month = this.currentAvaliableMonth(this.month);
        this.calendar('calendar-content');
        document.getElementById(this.id + YEAR_SPAN_ID).style.display = 'none';
        document.getElementById(this.id + DAY_NAME).style.display = 'flex';
        document.getElementById(this.id + DAY_SPAN_ID).style.display = 'block';
        document.getElementById(this.id + BOX_YEAR).style.display = 'block';
        document.getElementById(this.id + BOX_MONTH).style.display = 'flex';
    }

    public selectYear() {
        document.getElementById(this.id + YEAR_SPAN_ID).style.display = 'block';
        document.getElementById(this.id + DAY_NAME).style.display = 'none';
        document.getElementById(this.id + DAY_SPAN_ID).style.display = 'none';
        document.getElementById(this.id + BOX_YEAR).style.display = 'none';
        document.getElementById(this.id + BOX_MONTH).style.display = 'none';
    }

    public nextYear(yearNumber) {
        if (this.year - Number(yearNumber) > 1900) {
            this.year = this.year - yearNumber;
            if (this.blockyear) {
                let actual = Number(new Date().getFullYear());
                this.year = (this.year > actual ? actual : this.year);
            }
        }
    }

    public changeMonthName(m: undefined | number) {
        return (m == undefined || m <= this.currentAvaliableMonth(m)) ?
            this.monthName(m == undefined ? this.month : m) : "";

    }

    public paintMonth(m) {
        if (this.actualMonthEnable(m)) {
            this.month = this.currentAvaliableMonth(m);
            this.calendar('calendar-content');
            document.getElementById(this.id + MONTHS_DIV_ID).style.display = 'none';
            document.getElementById(this.id + DAY_NAME).style.display = 'flex';
            document.getElementById(this.id + DAY_SPAN_ID).style.display = 'block';
            document.getElementById(this.id + BOX_YEAR).style.display = 'block';
            document.getElementById(this.id + BOX_MONTH).style.display = 'flex';
        } else {
            return;
        }
    }

    public monthName(m) {
        switch (m) {
            case 0: return "Ene";
            case 1: return "Feb";
            case 2: return "Mar";
            case 3: return "Abr";
            case 4: return "May";
            case 5: return "Jun";
            case 6: return "Jul";
            case 7: return "Ago";
            case 8: return "Sep";
            case 9: return "Oct";
            case 10: return "Nov";
            case 11: return "Dic";
        }
    }

    public selectMonth() {
        document.getElementById(this.id + MONTHS_DIV_ID).style.display = 'block';
        document.getElementById(this.id + DAY_NAME).style.display = 'none';
        document.getElementById(this.id + DAY_SPAN_ID).style.display = 'none';
        document.getElementById(this.id + BOX_YEAR).style.display = 'none';
        document.getElementById(this.id + BOX_MONTH).style.display = 'none';
    }

    public actualMonthEnable(month: number) {
        let status = true;
        if (this.year == Number(new Date().getFullYear())) {
            status = month <= new Date().getMonth();
        }
        return status;
    }

    private actualYear() {
        this.year = Number(new Date().getFullYear());
    }

    private actualMonth() {
        this.month = (new Date().getMonth());
    }

    private currentAvaliableMonth(m) {
        let actual = (m == -1 ? 11 : (m == 12 ? 0 : m));
        if (this.blockyear) {
            let actualYear = Number(new Date().getFullYear());
            if (this.year >= actualYear) {
                let actualMonth = Number(new Date().getMonth());
                actual = (m < actualMonth ? m : actualMonth);
            }
        }
        return actual;
    }

    private maxDayCurrentMonth(year, month) {
        let date = new Date();
        return (this.blockyear && year == date.getFullYear() && month == date.getMonth()) ?
            Number(String(date.getDate()).padStart(2, '0')) : undefined;
    }
    public barStyle(){
        var obj = (<HTMLInputElement>document.getElementById('labelinput'));
        var idObj = obj.getAttribute("id");
        var padre = document.getElementById(idObj).parentNode;
        var hijos = padre.childNodes; 
        var labelName = hijos[-2];
        (<HTMLElement>obj).style.color = "#0000f3";
        (<HTMLElement>obj).style.top = "-14px";
      }
}
