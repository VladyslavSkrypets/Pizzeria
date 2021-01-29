import {cartItem, emptyCartPage} from './views.js'
import {product} from './index.js'
import {cartAddItem, cartMinusItem, cartRemoveItem} from './helperFunctions.js'

class ShopCartItem {
    constructor({id, title, path, desc, price, quantity}, newItem) {
        this.id = id;
        this.title = title;
        this.path = path;
        this.desc = desc;
        this.price = price;
        this.quantity = quantity;

        this.el = null;
        this.newItem = newItem;
    }

    getElement() {
        let template = this.getTemplate();
        let templateDiv = document.createElement('div');
        templateDiv.innerHTML = template;

        this.el = templateDiv.children[0];
        this.actionItem();
        return this.el
    }

    getTemplate() {
        return cartItem({
            id: this.id,
            title: this.title,
            path: this.path,
            desc: this.desc,
            price: this.price.toFixed(2),
            quantity: this.quantity,
            href: window.location.hash.split('#')[1]
        })
    }

    actionItem() {
        let plusBtn = this.el.querySelector('.fa-plus');
        let minusBtn = this.el.querySelector('.fa-minus');
        let removeBtn = this.el.querySelector('.remove-btn');

        plusBtn.addEventListener('click', (event) => {
            let itemID = (event.target).parentElement.parentElement.parentElement.parentElement.id;
            let order = JSON.parse(localStorage.getItem('cart'));
            let itemData = cartAddItem(itemID, order, product);
            this.el.querySelector('.all_amount').textContent = itemData.quantity;
            this.el.querySelector('#prod_price').textContent = itemData.price;          
        });

        minusBtn.addEventListener('click', (event) => {
            let itemID = (event.target).parentElement.parentElement.parentElement.parentElement.id;
            let order = JSON.parse(localStorage.getItem('cart'));
            let itemData = cartMinusItem(itemID, order, product);
            this.el.querySelector('.all_amount').textContent = itemData.quantity;
            this.el.querySelector('#prod_price').textContent = itemData.price; 
        });

        removeBtn.addEventListener('click', (event) => {
            let element = (event.target).parentElement.parentElement.parentElement.parentElement;
            let order =  Object.entries(JSON.parse(localStorage.getItem('cart')));
            if (cartRemoveItem(order, element, product)) {
                document.querySelector('.main-container').innerHTML = emptyCartPage();
            }
        });


    }
}

class ShopCartManager {
    constructor({el, products}){
        this.el = el;
        this.prods = products.map(prod => new ShopCartItem(prod, this));
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
    ShopCartItem,
    ShopCartManager
}