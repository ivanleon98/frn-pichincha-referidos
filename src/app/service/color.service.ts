import { Injectable } from '@angular/core';
import { PaintableGainChart } from '../model/paintableGainChart.model';
import { PaintableCardProfitLoss } from '../model/paintableCardProfitLoss.model';
import { PaintableReferralsTable } from '../model/paintableReferralsTable.model';

@Injectable() export class ColorService {
    objPaintable: PaintableGainChart = new PaintableGainChart();
    objPaintableCardProfitLoss: PaintableCardProfitLoss = new PaintableCardProfitLoss();
    objPaintableReferralsTable: PaintableReferralsTable = new PaintableReferralsTable();

    public getobjPaintableReferralsTable(): PaintableReferralsTable {
        return this.objPaintableReferralsTable;
    }

    public getobjPaintableCardProfitLoss(): PaintableCardProfitLoss {
        return this.objPaintableCardProfitLoss;
    }

    public getObjPaintable(): PaintableGainChart {
        return this.objPaintable;
    }

}