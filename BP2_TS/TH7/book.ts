export class book{
    ID: string;
    name: string;

    constructor(ID: string, name: string) {
        this.ID = ID;
        this.name = name;
    }
    getName():string{
        return this.name
    }
    setName(Name:string):void{
        this.name = Name;
    }
    getID():string{
        return this.ID;
    }
}