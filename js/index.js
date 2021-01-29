import {homePage, catalogPage, actionsPage, emptyCartPage, errorMessage, cartPage, orderFormPage, itemPage, orderPage} from './views.js'
import {ItemManager} from './itemManager.js'
import {getProductData, sendOrderData} from './request.js'
import {loader, sliderMove, shopCart, getOrderData, ordersQuantity, totalPriceCounter, getFormData} from './helperFunctions.js'
import {ShopCartManager} from './shopCartManager.js'

let actions = JSON.parse(getProductData('suggestions'))['actions'];
let product = JSON.parse(getProductData('products'));
let categories = JSON.parse(getProductData('categories'));

loader()

window.onhashchange = () => {
    Router(window.location.hash.split('#')[1]);
}

window.onload = () => {
    if (localStorage.getItem('cart') == null) {
        localStorage.setItem('cart', JSON.stringify({}));
    }
    else {
        ordersQuantity(JSON.parse(localStorage.getItem('cart')));
    }
    Router(window.location.hash.split('#')[1]);
}

function Router(hash) {

    let pageContent = document.querySelector('.main-container');

    if (hash == "catalog") {
        pageContent.innerHTML = catalogPage();
        for (let category in categories) {
            if (category != 'recommendation') {
                new ItemManager({
                    el: document.querySelector(`.${category} .product-list`),
                    products: product.filter(item => categories[category].includes(item.id))
                })
            }
        }
    }

    else if (hash == "actions") {
        pageContent.innerHTML = actionsPage({
            title1: actions[0].title,
            title2: actions[1].title,
            title3: actions[2].title,
            title4: actions[3].title,
            action1 : actions[0].path,
            action2 : actions[1].path,
            action3 : actions[2].path,
            action4 : actions[3].path,
            desc1: actions[0].description,
            desc2: actions[1].description,
            desc3: actions[2].description,
            desc4: actions[3].description,
        })
    }

    else if (hash == "cart") {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (Object.keys(cart).length == 0) {
            pageContent.innerHTML = emptyCartPage();
        } else {
            pageContent.innerHTML = cartPage();
            totalPriceCounter(product, cart);
            let shopCart = Object.entries(cart).map(item => getOrderData(product, ...item));
            new ShopCartManager({
                el: document.querySelector('.orders_inner'),
                products: shopCart
            })
        }
    }

    else if (product.map(item => item.prodURL).includes(hash)) {
        let currentProduct = product.filter(item => item.prodURL == hash)[0];
        pageContent.innerHTML = itemPage({
            title : currentProduct.title,
            path: currentProduct.path,
            desc: currentProduct.desc,
            price: currentProduct.price,
            href: hash
        })
        let addBtn = document.querySelector('.to-cart-btn');
        addBtn.addEventListener('click', (event) => {
           let item = product.filter(item => item.prodURL == event.target.href.split('#')[1])[0].title;
           let newOrder = shopCart(item);
           localStorage.setItem('cart', JSON.stringify(newOrder));
           ordersQuantity(newOrder);
        })
    }

    else if (hash == "order") {
        pageContent.innerHTML = orderFormPage();
        let form = document.querySelector('.checkout_form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let submitedOrder = getFormData(JSON.parse(localStorage.getItem('cart')), product);
            sendOrderData(submitedOrder)
            .then(data => {
                history.pushState({}, null, `#${hash}${data.id}`);
                pageContent.innerHTML = orderPage(data);
                localStorage.setItem('cart', JSON.stringify({}));
                ordersQuantity(JSON.parse(localStorage.getItem('cart')));
            })
            .catch((error) => {
                pageContent.innerHTML = errorMessage();
            })
        })
    }
    
    else {
        pageContent.innerHTML = homePage({
            slide1: actions[0].path,
            slide2: actions[1].path,
            slide3: actions[2].path,
            slide4: actions[3].path,
        });
        sliderMove()
        new ItemManager({
            el: document.querySelector('.product-list'),
            products: product.filter(item => categories['recommendation'].includes(item.id))
        })
    }
}

export {
    product
}