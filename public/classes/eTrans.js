export class Etrans {
    constructor(empname, details, amount) {
        this.empname = empname;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.empname}, woes $ ${this.amount} for ${this.details}`;
    }
}
