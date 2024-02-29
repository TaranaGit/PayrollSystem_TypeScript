//import { formatter } from "../Interfaces/formatter.js";
export class Cash {
    // no need to define teh field, default constructor can identitied those variable 
    constructor(empname, details, amount) {
        this.empname = empname;
        this.details = details;
        this.amount = amount;
    }
    format() {
        console.log(this.amount);
        return `${this.empname}, woes  ${this.amount} for ${this.details}`;
    }
}
