import { Injectable } from '@angular/core';
import { InfoData } from '../model/data.model';

@Injectable() export class DataService {
    private objInfoData: InfoData = new InfoData();

    public getObjInfoData(): InfoData{
        return this.objInfoData;
    }

    public setNewGainChartLabelsData(dataString: string[]) {
        this.objInfoData.gainChartLabelsData = dataString;
    }

    public setNewGainChartLabel(dataString: string){
        this.objInfoData.gainChartLabel
    }

    public setNewGainChartData(dataString: number[]) {
        this.objInfoData.gainChartData = dataString;
    }

    public setNewGainChartPoints(dataString: string){
        this.objInfoData.gainChartPoints = dataString;
    }
}