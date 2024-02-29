import { formatter } from "./Interfaces/formatter.js";
import { Cash } from "./classes/cash.js";
import { Etrans } from "./classes/eTrans.js";
import { Template } from "./classes/template.js";
console.log(" this code is working");

const ob1 = new Cash('Ara', 'Software work', 200);
console.log(ob1);
const ob2 = new Etrans('Smith', 'Plumbing', 200);
console.log(ob2);

const form = document.querySelector('#newform') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLInputElement;
const name = document.querySelector('#name') as HTMLInputElement;
const detail = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const ul = document.querySelector('ul')!;
// create a new object of this class
const list = new Template(ul); 

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();

    console.log('okay');

    let doc:formatter;

    if(type.value === 'Cash'){
        doc = new Cash(name.value, detail.value, parseFloat(amount.value));
        console.log(doc);
    }
    else{
        doc = new Etrans(name.value, detail.value, parseFloat(amount.value));
    }
    list.setElement(doc, type.value, 'start');
})