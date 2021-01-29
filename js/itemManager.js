import {productItem} from './views.js'
import {shopCart, ordersQuantity} from './helperFunctions.js'


class Item {
    constructor({id, title, desc, weight, price, prodURL, path}, newItem) {
        this.id = id;
        this.title = title;
        this.components = desc;
        this.weight = weight;
        this.price = price;
        this.prodURL = prodURL;
        this.path = path;

        this.el = null;
        this.item = newItem;
    }

    getElement() {
        let template = this.getTemplate();
        let templateDiv = document.createElement('div');
        templateDiv.innerHTML = template;

        this.el = templateDiv.children[0];
        this.addToCart();
        return this.el
    }

    getTemplate () {
        return productItem({
            id: this.id,
            path: this.path,
            weight: this.weight,
            prodURL: this.prodURL,
            title: this.title,
            components: this.components,
            price: this.price,
            href: window.location.href.split('#')[1]
        })
    }

    addToCart () {
        let addBtn = this.el.querySelector('.to-cart-btn');
        addBtn.addEventListener('click', () => {
            localStorage.setItem('cart', JSON.stringify(shopCart(this.title)));
            ordersQuantity(JSON.parse(localStorage.getItem('cart')));
        })

    }
}


class ItemManager {
    constructor({el, products}){
        this.el = el;
        this.prods = products.map(prod => new Item(prod, this));
        this.renderProds();
    }

    renderProds(){
        this.el.innerHTML = '';
        this.prods.forEach(prod => {
            this.renderProd(prod.getElement());
        });
    }

    renderProd(prodEl){
        this.el.appendChild(prodEl);
    }
}

export {
    Item,
    ItemManager
}