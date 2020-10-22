export class PaintableGainChart {
    private _gainChartBackgroundColor: string;
    private _gainChartBorderColor: string;
    private _gainChartPointBorderColor: string;
    private _gainChartPointView: string;
    private _gainChartPointBackgroundColor: string;
    private _gainChartPointHoverBackgroundColor: string;
    private _gainChartPointHoverBorderColor: string;
    // private _gainChartPointBackgroundColor: string;



    constructor() {
        this.gainChartBackgroundColor = "rgba(226, 110, 87, 0.5)";
        this.gainChartBorderColor = "rgba(226, 110, 87, 0.5)";
        this.gainChartPointBorderColor = "#F7B924";
        this.gainChartPointBackgroundColor = "#57FF93";
        this.gainChartPointHoverBackgroundColor = "#FFF";
        this.gainChartPointHoverBorderColor = "#F7B924";
        // this.pointBackgroundColor = ""
    }

    public set gainChartBackgroundColor(col: string) {
        this._gainChartBackgroundColor = col;
    }
    public get gainChartBackgroundColor(): string {
        return this._gainChartBackgroundColor;
    }

    public set gainChartBorderColor(col: string) {
        this._gainChartBorderColor = col;
    }
    public get gainChartBorderColor(): string {
        return this._gainChartBorderColor;
    }

    public set gainChartPointBorderColor(col: string) {
        this._gainChartPointBorderColor = col;
    }
    public get gainChartPointBorderColor(): string {
        return this._gainChartPointBorderColor;
    }

    public set gainChartPointHoverBackgroundColor(col: string) {
        this._gainChartPointHoverBackgroundColor = col;
    }
    public get gainChartPointHoverBackgroundColor(): string {
        return this._gainChartPointHoverBackgroundColor;
    }

    public set gainChartPointBackgroundColor(col: string) {
        this._gainChartPointBackgroundColor = col;
    }
    public get gainChartPointBackgroundColor(): string {
        return this._gainChartPointBackgroundColor;
    }
    public set gainChartPointHoverBorderColor(col: string) {
        this._gainChartPointHoverBorderColor = col;
    }
    public get gainChartPointHoverBorderColor(): string {
        return this._gainChartPointHoverBorderColor;
    }


}
