export class Template {
    constructor(container) {
        this.container = container;
    }
    setElement(item, heading, pos) {
        // you have to carete a list using doc.crtelmnt
        const li = document.createElement('li');
        const h2 = document.createElement('h2');
        h2.innerText = heading; // cash/etrans
        li.append(h2);
        // create a paragraph using doc.crtelemt
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
