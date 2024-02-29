
export class Etrans{
    constructor(readonly empname:string,readonly details:string, 
        readonly amount:number){
    }
    format(){
        return `${this.empname}, woes $ ${this.amount} for ${this.details}`;
    }
}