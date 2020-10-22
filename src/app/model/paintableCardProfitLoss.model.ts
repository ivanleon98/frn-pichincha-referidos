export class PaintableCardProfitLoss {
    private _cardProfitLossDescription: string;
    private _cardProfitLossProfitType: string;
    // private _cardProfitLossLabel: string[];
    // private _cardProfitLossData: number[];
    private _cardProfitLossBackgroundColor: string;
    private _cardProfitLossBorderColor: string;
    private _cardProfitLossPointBorderColor: string;
    private _cardProfitLossPointBackgroundColor: string;
    private _cardProfitLossPointHoverBackgroundColor: string;
    private _cardProfitLossPointHoverBorderColor: string;

    private _cardProfitLossAdverseDescription: string;
    private _cardProfitLossAdverseProfitType: string;
    private _cardProfitLossAdverseBackgroundColor: string;
    private _cardProfitLossAdverseBorderColor: string;
    private _cardProfitLossAdversePointBorderColor: string;
    private _cardProfitLossAdversePointBackgroundColor: string;
    private _cardProfitLossAdversePointHoverBackgroundColor: string;
    private _cardProfitLossAdversePointHoverBorderColor: string;

    private _cardProfitLossReferrelsAcceptedDescription: string;
    private _cardProfitLossReferrelsAcceptedProfitType: string;
    private _cardProfitLossReferrelsAcceptedBackgroundColor: string;
    private _cardProfitLossReferrelsAcceptedBorderColor: string;
    private _cardProfitLossReferrelsAcceptedPointBorderColor: string;
    private _cardProfitLossReferrelsAcceptedPointBackgroundColor: string;
    private _cardProfitLossReferrelsAcceptedPointHoverBackgroundColor: string;
    private _cardProfitLossReferrelsAcceptedPointHoverBorderColor: string;

    private _cardProfitLossReferrelsCanceledDescription: string;
    private _cardProfitLossReferrelsCanceledProfitType: string;
    private _cardProfitLossReferrelsCanceledBackgroundColor: string;
    private _cardProfitLossReferrelsCanceledBorderColor: string;
    private _cardProfitLossReferrelsCanceledPointBorderColor: string;
    private _cardProfitLossReferrelsCanceledPointBackgroundColor: string;
    private _cardProfitLossReferrelsCanceledPointHoverBackgroundColor: string;
    private _cardProfitLossReferrelsCanceledPointHoverBorderColor: string;

    constructor() {
        //this.cardProfitLossLabel = ['Ingresos'];
        // this.cardProfitLossData = [10, 5, 17, 23, 22, 31, 31, 35, 32, 25, 22, 21.5];
        this.cardProfitLossDescription = "Expectativa de ingresos";
        this.cardProfitLossProfitType = "COP";
        this.cardProfitLossBackgroundColor = "transparent";
        this.cardProfitLossBorderColor = "#73A839";
        this.cardProfitLossPointBorderColor = "#73A839";
        this.cardProfitLossPointBackgroundColor = "#FFF";
        this.cardProfitLossPointHoverBackgroundColor = "#FFF";
        this.cardProfitLossPointHoverBorderColor = "#73A839";

        this.cardProfitLossAdverseDescription = "Ingresos pendientes";
        this.cardProfitLossAdverseProfitType = "COP";
        this.cardProfitLossAdverseBackgroundColor = "transparent";
        this.cardProfitLossAdverseBorderColor = "#FC8C06";
        this.cardProfitLossAdversePointBorderColor = "#FC8C06";
        this.cardProfitLossAdversePointBackgroundColor = "#FFF";
        this.cardProfitLossAdversePointHoverBackgroundColor = "#FFF";
        this.cardProfitLossAdversePointHoverBorderColor = "#FC8C06";

        this.cardProfitLossReferrelsAcceptedDescription = "Referidos aceptados en los últimos 6 meses";
        this.cardProfitLossReferrelsAcceptedProfitType = "COP";
        this.cardProfitLossReferrelsAcceptedBackgroundColor = "transparent";
        this.cardProfitLossReferrelsAcceptedBorderColor = "#73A839";
        this.cardProfitLossReferrelsAcceptedPointBorderColor = "#73A839";
        this.cardProfitLossReferrelsAcceptedPointBackgroundColor = "#FFF";
        this.cardProfitLossReferrelsAcceptedPointHoverBackgroundColor = "#FFF";
        this.cardProfitLossReferrelsAcceptedPointHoverBorderColor = "#73A839";

        this.cardProfitLossReferrelsCanceledDescription = "Referidos negados en los últimos 6 meses";
        this.cardProfitLossReferrelsCanceledProfitType = "COP";
        this.cardProfitLossReferrelsCanceledBackgroundColor = "transparent";
        this.cardProfitLossReferrelsCanceledBorderColor = "#FC8C06";
        this.cardProfitLossReferrelsCanceledPointBorderColor = "#FC8C06";
        this.cardProfitLossReferrelsCanceledPointBackgroundColor = "#FFF";
        this.cardProfitLossReferrelsCanceledPointHoverBackgroundColor = "#FFF";
        this.cardProfitLossReferrelsCanceledPointHoverBorderColor = "#FC8C06";

    }

    //CardProfitLoss
    public set cardProfitLossDescription(col: string) {
        this._cardProfitLossDescription = col;
    }
    public get cardProfitLossDescription(): string {
        return this._cardProfitLossDescription;
    }

    public set cardProfitLossProfitType(col: string) {
        this._cardProfitLossProfitType = col;
    }
    public get cardProfitLossProfitType(): string {
        return this._cardProfitLossProfitType;
    }

    public set cardProfitLossBackgroundColor(col: string) {
        this._cardProfitLossBackgroundColor = col;
    }
    public get cardProfitLossBackgroundColor(): string {
        return this._cardProfitLossBackgroundColor;
    }

    public set cardProfitLossBorderColor(col: string) {
        this._cardProfitLossBorderColor = col;
    }
    public get cardProfitLossBorderColor(): string {
        return this._cardProfitLossBorderColor;
    }

    public set cardProfitLossPointBorderColor(col: string) {
        this._cardProfitLossPointBorderColor = col;
    }
    public get cardProfitLossPointBorderColor(): string {
        return this._cardProfitLossPointBorderColor;
    }

    public set cardProfitLossPointBackgroundColor(col: string) {
        this._cardProfitLossPointBackgroundColor = col;
    }
    public get cardProfitLossPointBackgroundColor(): string {
        return this._cardProfitLossPointBackgroundColor;
    }

    public set cardProfitLossPointHoverBackgroundColor(col: string) {
        this._cardProfitLossPointHoverBackgroundColor = col;
    }
    public get cardProfitLossPointHoverBackgroundColor(): string {
        return this._cardProfitLossPointHoverBackgroundColor;
    }

    public set cardProfitLossPointHoverBorderColor(col: string) {
        this._cardProfitLossPointHoverBorderColor = col;
    }
    public get cardProfitLossPointHoverBorderColor(): string {
        return this._cardProfitLossPointHoverBorderColor;
    }

    //CardProfitLossAdverse
    public set cardProfitLossAdverseDescription(col: string) {
        this._cardProfitLossAdverseDescription = col;
    }
    public get cardProfitLossAdverseDescription(): string {
        return this._cardProfitLossAdverseDescription;
    }

    public set cardProfitLossAdverseProfitType(col: string) {
        this._cardProfitLossAdverseProfitType = col;
    }
    public get cardProfitLossAdverseProfitType(): string {
        return this._cardProfitLossAdverseProfitType;
    }

    public set cardProfitLossAdverseBackgroundColor(col: string) {
        this._cardProfitLossAdverseBackgroundColor = col;
    }
    public get cardProfitLossAdverseBackgroundColor(): string {
        return this._cardProfitLossAdverseBackgroundColor;
    }

    public set cardProfitLossAdverseBorderColor(col: string) {
        this._cardProfitLossAdverseBorderColor = col;
    }
    public get cardProfitLossAdverseBorderColor(): string {
        return this._cardProfitLossAdverseBorderColor;
    }

    public set cardProfitLossAdversePointBorderColor(col: string) {
        this._cardProfitLossAdversePointBorderColor = col;
    }
    public get cardProfitLossAdversePointBorderColor(): string {
        return this._cardProfitLossAdversePointBorderColor;
    }

    public set cardProfitLossAdversePointBackgroundColor(col: string) {
        this._cardProfitLossAdversePointBackgroundColor = col;
    }
    public get cardProfitLossAdversePointBackgroundColor(): string {
        return this._cardProfitLossAdversePointBackgroundColor;
    }

    public set cardProfitLossAdversePointHoverBackgroundColor(col: string) {
        this._cardProfitLossAdversePointHoverBackgroundColor = col;
    }
    public get cardProfitLossAdversePointHoverBackgroundColor(): string {
        return this._cardProfitLossAdversePointHoverBackgroundColor;
    }

    public set cardProfitLossAdversePointHoverBorderColor(col: string) {
        this._cardProfitLossAdversePointHoverBorderColor = col;
    }
    public get cardProfitLossAdversePointHoverBorderColor(): string {
        return this._cardProfitLossAdversePointHoverBorderColor;
    }

    //cardProfitLossReferrelsAccepted
    public set cardProfitLossReferrelsAcceptedDescription(col: string) {
        this._cardProfitLossReferrelsAcceptedDescription = col;
    }
    public get cardProfitLossReferrelsAcceptedDescription(): string {
        return this._cardProfitLossReferrelsAcceptedDescription;
    }

    public set cardProfitLossReferrelsAcceptedProfitType(col: string) {
        this._cardProfitLossReferrelsAcceptedProfitType = col;
    }
    public get cardProfitLossReferrelsAcceptedProfitType(): string {
        return this._cardProfitLossReferrelsAcceptedProfitType;
    }

    public set cardProfitLossReferrelsAcceptedBackgroundColor(col: string) {
        this._cardProfitLossReferrelsAcceptedBackgroundColor = col;
    }
    public get cardProfitLossReferrelsAcceptedBackgroundColor(): string {
        return this._cardProfitLossReferrelsAcceptedBackgroundColor;
    }

    public set cardProfitLossReferrelsAcceptedBorderColor(col: string) {
        this._cardProfitLossReferrelsAcceptedBorderColor = col;
    }
    public get cardProfitLossReferrelsAcceptedBorderColor(): string {
        return this._cardProfitLossReferrelsAcceptedBorderColor;
    }

    public set cardProfitLossReferrelsAcceptedPointBorderColor(col: string) {
        this._cardProfitLossReferrelsAcceptedPointBorderColor = col;
    }
    public get cardProfitLossReferrelsAcceptedPointBorderColor(): string {
        return this._cardProfitLossReferrelsAcceptedPointBorderColor;
    }

    public set cardProfitLossReferrelsAcceptedPointBackgroundColor(col: string) {
        this._cardProfitLossReferrelsAcceptedPointBackgroundColor = col;
    }
    public get cardProfitLossReferrelsAcceptedPointBackgroundColor(): string {
        return this._cardProfitLossReferrelsAcceptedPointBackgroundColor;
    }

    public set cardProfitLossReferrelsAcceptedPointHoverBackgroundColor(col: string) {
        this._cardProfitLossReferrelsAcceptedPointHoverBackgroundColor = col;
    }
    public get cardProfitLossReferrelsAcceptedPointHoverBackgroundColor(): string {
        return this._cardProfitLossReferrelsAcceptedPointHoverBackgroundColor;
    }

    public set cardProfitLossReferrelsAcceptedPointHoverBorderColor(col: string) {
        this._cardProfitLossReferrelsAcceptedPointHoverBorderColor = col;
    }
    public get cardProfitLossReferrelsAcceptedPointHoverBorderColor(): string {
        return this._cardProfitLossReferrelsAcceptedPointHoverBorderColor;
    }

    //cardProfitLossReferrelsAccepted
    public set cardProfitLossReferrelsCanceledDescription(col: string) {
        this._cardProfitLossReferrelsCanceledDescription = col;
    }
    public get cardProfitLossReferrelsCanceledDescription(): string {
        return this._cardProfitLossReferrelsCanceledDescription;
    }

    public set cardProfitLossReferrelsCanceledProfitType(col: string) {
        this._cardProfitLossReferrelsCanceledProfitType = col;
    }
    public get cardProfitLossReferrelsCanceledProfitType(): string {
        return this._cardProfitLossReferrelsCanceledProfitType;
    }

    public set cardProfitLossReferrelsCanceledBackgroundColor(col: string) {
        this._cardProfitLossReferrelsCanceledBackgroundColor = col;
    }
    public get cardProfitLossReferrelsCanceledBackgroundColor(): string {
        return this._cardProfitLossReferrelsCanceledBackgroundColor;
    }

    public set cardProfitLossReferrelsCanceledBorderColor(col: string) {
        this._cardProfitLossReferrelsCanceledBorderColor = col;
    }
    public get cardProfitLossReferrelsCanceledBorderColor(): string {
        return this._cardProfitLossReferrelsCanceledBorderColor;
    }

    public set cardProfitLossReferrelsCanceledPointBorderColor(col: string) {
        this._cardProfitLossReferrelsCanceledPointBorderColor = col;
    }
    public get cardProfitLossReferrelsCanceledPointBorderColor(): string {
        return this._cardProfitLossReferrelsCanceledPointBorderColor;
    }

    public set cardProfitLossReferrelsCanceledPointBackgroundColor(col: string) {
        this._cardProfitLossReferrelsCanceledPointBackgroundColor = col;
    }
    public get cardProfitLossReferrelsCanceledPointBackgroundColor(): string {
        return this._cardProfitLossReferrelsCanceledPointBackgroundColor;
    }

    public set cardProfitLossReferrelsCanceledPointHoverBackgroundColor(col: string) {
        this._cardProfitLossReferrelsCanceledPointHoverBackgroundColor = col;
    }
    public get cardProfitLossReferrelsCanceledPointHoverBackgroundColor(): string {
        return this._cardProfitLossReferrelsCanceledPointHoverBackgroundColor;
    }

    public set cardProfitLossReferrelsCanceledPointHoverBorderColor(col: string) {
        this._cardProfitLossReferrelsCanceledPointHoverBorderColor = col;
    }
    public get cardProfitLossReferrelsCanceledPointHoverBorderColor(): string {
        return this._cardProfitLossReferrelsCanceledPointHoverBorderColor;
    }
}