//import { formatter } from "../Interfaces/formatter.js";
export class Cash{
   
    constructor(readonly empname:string, readonly details:string, 
        readonly amount:number){
    }
    format()
    {   console.log(this.amount);
        return `${this.empname}, woes  ${this.amount} for ${this.details}`;
    }
}