export class ReferidoData{
    private _name: string;
    private _document: string;
    private _cellphone: string;
    private _email: string;
    private _password: string;
    private _state: boolean;
    
    set name(nomRef: string){
        this._name = nomRef;
    }
    get name():string{
        return this._name;
    }
    set document(numIdRef: string){
        this._document = numIdRef;
    }
    get document(): string{
        return this._document;
    }
    set cellphone(numCelRef: string){
        this._cellphone = numCelRef;
    }
    get cellphone():string{
        return this._cellphone;
    }
    set email(correoRef: string){
        this._email = correoRef;
    }
    get email(): string{
        return this._email;
    }
    set password(contraRef: string){
        this._password = contraRef;
    }
    get password():string{
        return this._password;
    }
    public get state(): boolean {
        return this._state;
    }
    public set state(value: boolean) {
        this._state = value;
    }
    
    isEmptyNameRef(){
       return this.name === undefined || this.name === null || this.name.length === 0;
    }
    isEmptyNumIdRef(){
        return this.document === undefined || this.document === null || this.name.length === 0;
    }
    isEmptyNumCelRef(){
        return this.cellphone === undefined || this.cellphone === null || this.cellphone.length === 0;
    }
    isEmptyEmailRef(){
        return this.email === undefined || this.email === null || this.email.length === 0;
    }
    isEmptyPasswordRef(){
        return this.password === undefined || this.password === null || this.password.length === 0;
    }
}