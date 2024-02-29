import { formatter } from "../Interfaces/formatter";

export class Template{
    constructor(private container:HTMLUListElement){

    }
    setElement(item:formatter, heading:string, pos:string){
   
        const li = document.createElement('li');
        const h2 = document.createElement('h2');
        h2.innerText = heading // cash/etrans
        li.append(h2);


        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        if(pos==='start'){
            this.container.prepend(li);
        }
        else{
            this.container.append(li);
        }


    }
}