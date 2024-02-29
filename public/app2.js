import { Cash } from "./classes/cash.js";
import { Etrans } from "./classes/eTrans.js";
import { Template } from "./classes/template.js";
console.log(" this code is working");
const ob1 = new Cash('Ara', 'Software work', 200);
console.log(ob1);
const ob2 = new Etrans('Smith', 'Plumbing', 200);
console.log(ob2);
const form = document.querySelector('#newform');
const type = document.querySelector('#type');
const name = document.querySelector('#name');
const detail = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
// create a new object of this class
const list = new Template(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('okay');
    let doc;
    if (type.value === 'Cash') {
        doc = new Cash(name.value, detail.value, parseFloat(amount.value));
        console.log(doc);
    }
    else {
        doc = new Etrans(name.value, detail.value, parseFloat(amount.value));
    }
    list.setElement(doc, type.value, 'start');
});
