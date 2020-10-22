
export class InfoData {
    private _gainChartLabel: string;
    private _gainChartData: number[];
    private _gainChartLabelsData: string[];
    private _gainChartPoints: string;

    private _cardProfitLossLabelsData: string[];
    private _cardProfitLossData: number[];
    private _cardProfitLossLabel: string;
    private _cardProfitLossProfitValue: string;

    private _cardProfitLossAdverseLabelsData: string[];
    private _cardProfitLossAdverseData: number[];
    private _cardProfitLossAdverseLabel: string;
    private _cardProfitLossAdverseProfitValue: string;

    private _cardProfitLossReferrelsAcceptedLabelsData: string[];
    private _cardProfitLossReferrelsAcceptedData: number[];
    private _cardProfitLossReferrelsAcceptedLabel: string;
    private _cardProfitLossReferrelsAcceptedProfitValue: string;

    private _cardProfitLossReferrelsCanceledLabelsData: string[];
    private _cardProfitLossReferrelsCanceledData: number[];
    private _cardProfitLossReferrelsCanceledLabel: string;
    private _cardProfitLossReferrelsCanceledProfitValue: string;

    private _timelineTitleTimeLine: string;
    private _timelineUpdateNotification: string;

    private _totalReferralsValueAccept: string;
    private _totalReferralsValueCanceled: string;

    private _referralsTableName: string;
    private _referralsTableCampaign: string;
    private _referralsTableState: string;
    private _referralsTableDate: string;
    private _referralsTablePercentage: string;
    private storage: any;
    public months;
    public nums: number[];
    constructor() {

    }

    public paintCharts() {
        this.storage = window.sessionStorage;
        this.gainChartLabel = "Crecimiento";

        // let temp = new Array<number>();
        // let val = this.storage.getItem('increase');
        // val = val.split(',');
        // for (let i = 0; i < val.length; i++) {
        //     temp.push(val[i]);
        // }
        this.gainChartData = [100000,0,0,0,1200,1500];
        // this.gainChartData = temp;
        // console.log('Gain Chart Data Value: ' + this.gainChartData);

        // this.months = (([this.storage.getItem('month')].join("").split(",")));
        this.months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio']
        this.gainChartLabelsData = this.months;

        this.gainChartPoints = (this.gainChartData.reduce((a, b) => a + b, 0) + "");
        // this.gainChartPoints = this.storage.getItem('totalEarning');
        this.gainChartPoints = "500";
        this.cardProfitLossLabelsData = this.months;

        // Expectativa de ingresos
        // this.cardProfitLossData = [0, 60, 50, 30, 25, 20, 15, 10, 7, 5, 13.5, 0];

        //  let temprevenue = new Array<number>();
            let temprevenue = [100]
        // let valrevenue: any = this.storage.getItem('revenueExpectation');
        // for (let i = 0; i < valrevenue.length; i++) {
        //     (<string>valrevenue).split(",");
        //     if (!isNaN(Number(valrevenue[i]))) {
        //         temprevenue.push(Number(valrevenue[i]));
        //     }
        // }

        this.cardProfitLossData = temprevenue;
        console.log('Expectativa de ingresos antes de la sumatoria: ' + this.cardProfitLossData);
        //this.cardProfitLossData = [0, 100, 200];
        this.cardProfitLossLabel = 'Expectativa de ingresos';
        this.cardProfitLossProfitValue = "$ " + (this.cardProfitLossData.reduce((a , b) => a + b))
        console.log('Expectativa de ingresos: ' + this.cardProfitLossProfitValue);
        // Fin expectativa de ingresos 

        // Ingresos pendientes 

        

        // let tempreIncome = new Array<number>();
        // let valreIncome: any = this.storage.getItem('outstandingIncome');
        // console.log('valreIncome Storgae: ' + valreIncome)
        // valreIncome.split(",");
        // for (let i = 0; i < valreIncome.length; i++) {
        //     if (!isNaN(Number(valreIncome[i]))) {
        //         tempreIncome.push(Number(valreIncome[i]));
        //     }
        // }
        // console.log('Ingresos pendientes: ' + tempreIncome);
        // this.cardProfitLossAdverseLabelsData = this.months;
        // this.cardProfitLossAdverseData = tempreIncome;
        // this.cardProfitLossAdverseLabel = 'Ingresos pendientes';
        // this.cardProfitLossAdverseProfitValue = "$" + (this.cardProfitLossAdverseData.reduce((a, b) => a + b, 0) + "");
        // console.log('Ingresos pendientes: ' + this.cardProfitLossAdverseProfitValue);
        // // Fin ingresos pendientes

        // this.cardProfitLossReferrelsAcceptedLabelsData = this.months;

        // let acepreffer = this.storage.getItem('acceptedReferrals');
        // this.cardProfitLossReferrelsAcceptedData = acepreffer.split(",").map(function (el) { return + el; })
        // this.cardProfitLossReferrelsAcceptedLabel = 'Aceptados';
        // this.cardProfitLossReferrelsAcceptedProfitValue = String(this.cardProfitLossReferrelsAcceptedData.reduce((a, b) => a + b));
        // this.cardProfitLossReferrelsCanceledLabelsData = this.months;

        // let cancelreffer = this.storage.getItem('referralsPending');
        // this.cardProfitLossReferrelsCanceledData = cancelreffer.split(",").map(function (ol) { return + ol; })
        // this.cardProfitLossReferrelsCanceledLabel = 'Referidos negados';
        // this.cardProfitLossReferrelsCanceledProfitValue = (this.cardProfitLossReferrelsCanceledData.reduce((a, b) => a + b) + "");

        // this.timelineUpdateNotification = "Una notificación";

        // this.totalReferralsValueAccept = this.cardProfitLossReferrelsAcceptedProfitValue;
        // this.totalReferralsValueCanceled = this.cardProfitLossReferrelsCanceledProfitValue;

        // this.referralsTableName = "";


        // this.referralsTableCampaign = "";
        // this.referralsTableState = "";
        // this.referralsTableDate = "";
        // this.referralsTablePercentage = "";
    }
    //referralsTable
    public set referralsTableName(dat: string) {
        this._referralsTableName = dat;
    }
    public get referralsTableName(): string {
        return this._referralsTableName;
    }

    public set referralsTableCampaign(dat: string) {
        this._referralsTableCampaign = dat;
    }
    public get referralsTableCampaign(): string {
        return this._referralsTableCampaign;
    }

    public set referralsTableState(dat: string) {
        this._referralsTableState = dat;
    }
    public get referralsTableState(): string {
        return this._referralsTableState;
    }

    public set referralsTableDate(dat: string) {
        this._referralsTableDate = dat;
    }
    public get referralsTableDate(): string {
        return this._referralsTableDate;
    }

    public set referralsTablePercentage(dat: string) {
        this._referralsTablePercentage = dat;
    }
    public get referralsTablePercentage(): string {
        return this._referralsTablePercentage;
    }

    //totalReferrals
    public set totalReferralsValueAccept(dat: string) {
        this._totalReferralsValueAccept = dat;
    }
    public get totalReferralsValueAccept(): string {
        return this._totalReferralsValueAccept;
    }

    public set totalReferralsValueCanceled(dat: string) {
        this._totalReferralsValueCanceled = dat;
    }
    public get totalReferralsValueCanceled(): string {
        return this._totalReferralsValueCanceled;
    }

    //timeLine
    public set timelineTitleTimeLine(dat: string) {
        this._timelineTitleTimeLine = dat;
    }
    public get timelineTitleTimeLine(): string {
        return this._timelineTitleTimeLine;
    }

    public set timelineUpdateNotification(dat: string) {
        this._timelineUpdateNotification = dat;
    }
    public get timelineUpdateNotification(): string {
        return this._timelineUpdateNotification;
    }


    //cardProfitLoss
    public set cardProfitLossLabelsData(dat: string[]) {
        this._cardProfitLossLabelsData = dat;
    }
    public get cardProfitLossLabelsData(): string[] {
        return this._cardProfitLossLabelsData;
    }

    public set cardProfitLossData(dat: number[]) {
        this._cardProfitLossData = dat;
    }
    public get cardProfitLossData(): number[] {
        return this._cardProfitLossData;
    }

    public set cardProfitLossLabel(dat: string) {
        this._cardProfitLossLabel = dat;
    }
    public get cardProfitLossLabel(): string {
        return this._cardProfitLossLabel;
    }

    public set cardProfitLossProfitValue(col: string) {
        this._cardProfitLossProfitValue = col;
    }
    public get cardProfitLossProfitValue(): string {
        return this._cardProfitLossProfitValue;
    }

    //~Adverse
    public set cardProfitLossAdverseLabelsData(dat: string[]) {
        this._cardProfitLossAdverseLabelsData = dat;
    }
    public get cardProfitLossAdverseLabelsData(): string[] {
        return this._cardProfitLossAdverseLabelsData;
    }

    public set cardProfitLossAdverseData(dat: number[]) {
        this._cardProfitLossAdverseData = dat;
    }
    public get cardProfitLossAdverseData(): number[] {
        return this._cardProfitLossAdverseData;
    }

    public set cardProfitLossAdverseLabel(dat: string) {
        this._cardProfitLossAdverseLabel = dat;
    }
    public get cardProfitLossAdverseLabel(): string {
        return this._cardProfitLossAdverseLabel;
    }

    public set cardProfitLossAdverseProfitValue(col: string) {
        this._cardProfitLossAdverseProfitValue = col;
    }
    public get cardProfitLossAdverseProfitValue(): string {
        return this._cardProfitLossAdverseProfitValue;
    }

    //~cardProfitLossReferrelsAccepted
    public set cardProfitLossReferrelsAcceptedLabelsData(dat: string[]) {
        this._cardProfitLossReferrelsAcceptedLabelsData = dat;
    }
    public get cardProfitLossReferrelsAcceptedLabelsData(): string[] {
        return this._cardProfitLossReferrelsAcceptedLabelsData;
    }

    public set cardProfitLossReferrelsAcceptedData(dat: number[]) {
        this._cardProfitLossReferrelsAcceptedData = dat;
    }
    public get cardProfitLossReferrelsAcceptedData(): number[] {
        return this._cardProfitLossReferrelsAcceptedData;
    }

    public set cardProfitLossReferrelsAcceptedLabel(dat: string) {
        this._cardProfitLossReferrelsAcceptedLabel = dat;
    }
    public get cardProfitLossReferrelsAcceptedLabel(): string {
        return this._cardProfitLossReferrelsAcceptedLabel;
    }

    public set cardProfitLossReferrelsAcceptedProfitValue(col: string) {
        this._cardProfitLossReferrelsAcceptedProfitValue = col;
    }
    public get cardProfitLossReferrelsAcceptedProfitValue(): string {
        return this._cardProfitLossReferrelsAcceptedProfitValue;
    }

    //~cardProfitLossReferrelsCanceled
    public set cardProfitLossReferrelsCanceledLabelsData(dat: string[]) {
        this._cardProfitLossReferrelsCanceledLabelsData = dat;
    }
    public get cardProfitLossReferrelsCanceledLabelsData(): string[] {
        return this._cardProfitLossReferrelsCanceledLabelsData;
    }

    public set cardProfitLossReferrelsCanceledData(dat: number[]) {
        this._cardProfitLossReferrelsCanceledData = dat;
    }
    public get cardProfitLossReferrelsCanceledData(): number[] {
        return this._cardProfitLossReferrelsCanceledData;
    }

    public set cardProfitLossReferrelsCanceledLabel(dat: string) {
        this._cardProfitLossReferrelsCanceledLabel = dat;
    }
    public get cardProfitLossReferrelsCanceledLabel(): string {
        return this._cardProfitLossReferrelsCanceledLabel;
    }

    public set cardProfitLossReferrelsCanceledProfitValue(col: string) {
        this._cardProfitLossReferrelsCanceledProfitValue = col;
    }
    public get cardProfitLossReferrelsCanceledProfitValue(): string {
        return this._cardProfitLossReferrelsCanceledProfitValue;
    }

    //gainChart
    public set gainChartPoints(dat: string) {
        this._gainChartPoints = dat;
    }

    public get gainChartPoints(): string {
        return this._gainChartPoints;
    }

    public set gainChartData(dat: number[]) {
        this._gainChartData = dat;
    }

    public get gainChartData(): number[] {
        return this._gainChartData;
    }

    public set gainChartLabelsData(dat: any[]) {
        this._gainChartLabelsData = dat;
    }
    public get gainChartLabelsData(): any[] {
        return this._gainChartLabelsData;
    }

    public set gainChartLabel(dat: string) {
        this._gainChartLabel = dat;
    }

    public get gainChartLabel(): string {
        return this._gainChartLabel;
    }

    // public set recentMonths(dat: string[]) {
    //     this._recentMonths = dat;
    // }
    // public get recentMonths(): string[] {
    //     return this._recentMonths;
    // }
}