const sliderMove = () => {
    var counter = 1;
    setInterval(function(){
        try {
            document.getElementById('radio' + counter).checked = true;
        }
        catch (error) {
            return
        }
        counter++;
        if (counter > 4){
            counter = 1;
        }
    }, 5000);
}


const getOrderData = (allProducts, prod, quantity) => {
    let orderData = allProducts.filter(item => item.title == prod)[0];
    return {
        id: orderData.id,
        title: orderData.title,
        path: orderData.path,
        desc: orderData.desc,
        price: orderData.price * quantity,
        quantity: quantity
    }
}
 
const shopCart = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart'))
        if (!(item in cart)) {
            cart[item] = 1;
        } else {
            cart[item] += 1;
        }
    return cart
}

const ordersQuantity = (obj) => {
    let quantity = Object.entries(obj).map(item => item[1]).reduce(function(sum, current) {
        return sum + current;
    }, 0);
    document.querySelector('#order_counter').textContent = quantity;
}

const totalPrice = (allProducts, order) => {
    let allPrices = allProducts.filter(item => Object.keys(order).includes(item.title)).map(item => parseFloat(item.price) * order[item.title]);
    let totalPrice = allPrices.reduce((sum, current) => {
        return sum + current
    }, 0).toFixed(2);
    return totalPrice
}

const totalPriceCounter = (allProducts, order) => {
    document.querySelector('#total_price').textContent = totalPrice(allProducts, order);
}

const cartAddItem = (itemID, order, allProd) => {
    let currentItem = allProd.filter(item => item.id == itemID)[0];
    order[currentItem.title] += 1;
    localStorage.setItem('cart', JSON.stringify(order));
    ordersQuantity(order);
    totalPriceCounter(allProd, order);
    return {
        price: (currentItem.price * order[currentItem.title]).toFixed(2),
        quantity: order[currentItem.title]
    }
}

const cartMinusItem = (itemID, order, allProd) => {
    let currentItem = allProd.filter(item => item.id == itemID)[0];
    if (order[currentItem.title] > 0) {
        order[currentItem.title] -= 1;
        localStorage.setItem('cart', JSON.stringify(order));
    }
    ordersQuantity(order);
    totalPriceCounter(allProd, order);
    return {
        price: (currentItem.price * order[currentItem.title]).toFixed(2),
        quantity: order[currentItem.title]
    }
}

const cartRemoveItem = (order, element, allProd) => {
    let deletedEl = allProd.filter(item => item.id == element.id)[0].title;
    order = Object.fromEntries(order.filter(item => item[0] != deletedEl));
    localStorage.setItem('cart', JSON.stringify(order))
    element.remove()
    totalPriceCounter(allProd, order);
    ordersQuantity(order);
    if (Object.keys(order).length == 0) {
        return true
    }
}

const getFormData = (order, allProd) => {
    console.log(order, allProd)
    let Name = document.querySelector('#Name').value;
    let Surname = document.querySelector('#Surname').value;
    let City = document.querySelector('#City').value;
    let DateDelivery = document.querySelector('#DateDelivery').value;
    let Email = document.querySelector('#Email').value;
    let Phone = document.querySelector('#Phone').value;
    let Address = document.querySelector('#Address').value;
    let Payment = document.querySelector('#Payment').value;

    return {
        "Name": Name,
        "Surname": Surname,
        "City": City,
        "DateDelivery": DateDelivery.replace('T', ' '),
        "Email": Email,
        "Phone": Phone,
        "Address": Address,
        "Payment": Payment,
        "Products": getFormatedOrder(order),
        "Total price": totalPrice(allProd, order)
    }
}

const getFormatedOrder = (order) => {
    let formatedOrder = '';
    for (let [orderTitle, orderQuantity] of Object.entries(order)) {
        formatedOrder += `${orderTitle} : ${orderQuantity}; `
    }
    return formatedOrder
}


// loader mask
const loader = () => {
    let mask = document.querySelector('.mask')
    window.addEventListener('DOMContentLoaded', () => {
        mask.classList.add('hide');
        setTimeout(() => {
            mask.remove();
        }, 600);
    });
} 



export {
    sliderMove,
    loader,
    shopCart,
    getOrderData,
    ordersQuantity,
    totalPriceCounter,
    cartAddItem,
    cartMinusItem,
    cartRemoveItem,
    getFormData
}