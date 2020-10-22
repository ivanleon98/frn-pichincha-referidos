export class PaintableReferralsTable {
    private _referralsTableTitleCard: string;

    constructor() {
        this.referralsTableTitleCard = "Mis referidos";
    }

    public set referralsTableTitleCard(col: string) {
        this._referralsTableTitleCard = col;
    }
    public get referralsTableTitleCard(): string {
        return this._referralsTableTitleCard;
    }

}