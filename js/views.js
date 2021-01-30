function homePage (obj) {
    return `<div class="action-text text">
                <p>Promotions</p>
            </div>
            <div class="slider_container">
                <div class="slider">
                    <div class="slides">
                        <input type="radio" name="radio-btn" id="radio1">
                        <input type="radio" name="radio-btn" id="radio2">
                        <input type="radio" name="radio-btn" id="radio3">
                        <input type="radio" name="radio-btn" id="radio4">

                        <div class="slide first">
                            <img src="${obj.slide1}" alt="">
                        </div>
                        <div class="slide">
                            <img src="${obj.slide2}" alt="">
                        </div>
                        <div class="slide">
                            <img src="${obj.slide3}" alt="">
                        </div>
                        <div class="slide">
                            <img src="${obj.slide4}" alt="">
                        </div>

                        <div class="navigation-auto">
                            <div class="auto-btn1"></div>
                            <div class="auto-btn2"></div>
                            <div class="auto-btn3"></div>
                            <div class="auto-btn4"></div>
                        </div>

                    </div>
                    <div class="navigation-manual">
                        <label for="radio1" class="manual-btn"></label>
                        <label for="radio2" class="manual-btn"></label>
                        <label for="radio3" class="manual-btn"></label>
                        <label for="radio4" class="manual-btn"></label>
                    </div>
                </div>
            </div>
            <div class="recomnendation">
                <div class="recomendation-text text">
                    <p>Recommended products</p>
                </div>
                <div class="product-list"></div>
            </div>`
}

function productItem (obj) {
    return `<div id="${obj.id}" class="product-list__item">
                <div class="product-block">
                    <div class="product-block__image">
                        <div class="product-image">
                            <img src="${obj.path}" alt="">
                        </div>
                        <div class="product-block__weight">${obj.weight}</div>
                    </div>
                    <div class="product-block__description">
                        <div class="product-block__title-row">
                            <a href="#${obj.prodURL}" class="product-block__title-text">${obj.title}</a>
                        </div>
                        <div class="product-block__toppings-row">
                            <span>${obj.components}</span>
                        </div>
                            
                        <div class="product-block__price-row">
                            <div class="product-block__price-block">
                                <span class="product-block__price">${obj.price}</span>
                                <span class="product-block__currency">UAH.</span>
                            </div>
                            <a href="#${obj.href}" class="to-cart-btn">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>`
}


function catalogPage () {
    return  `<div class="catalog classic">
                <div class="recomendation-text text">
                    <p>Classic pizza</p>
                </div>
                <div class="product-list"></div>
            </div>
            <div class="catalog premium">
                <div class="recomendation-text text">
                    <p>Premium pizza</p>
                </div>
                <div class="product-list"></div>
            </div>
            <div class="catalog legend">
                <div class="recomendation-text text">
                    <p>Legendary pizza</p>
                </div>
                <div class="product-list"></div>
            </div>
            <div class="catalog custom">
                <div class="recomendation-text text">
                    <p>Pizza to order</p>
                </div>
                <div class="product-list"></div>
            </div>`
}


function actionsPage (obj) {
    return  `<div class="action_container">
                <div class="action_text text">
                    <p>Promotions</p>
                </div>
                <div class="card">
                    <div class="imgBx">
                        <img src="${obj.action1}" alt="">
                    </div>
                    <div class="content">
                        <h2>${obj.title1}</h2>
                        <p>${obj.desc1}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="imgBx">
                        <img src="${obj.action2}" alt="">
                    </div>
                    <div class="content">
                        <h2>${obj.title2}</h2>
                        <p>${obj.desc2}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="imgBx">
                        <img src="${obj.action3}" alt="">
                    </div>
                    <div class="content">
                        <h2>${obj.title3}</h2>
                        <p>${obj.desc3}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="imgBx">
                        <img src="${obj.action4}" alt="">
                    </div>
                    <div class="content">
                        <h2>${obj.title4}</h2>
                        <p>${obj.desc4}</p>
                    </div>
                </div>
            </div>`
}

function emptyCartPage () {
    return `<div class="empty_card">
                <div class="message">
                    <p>Your cart is empty!</p>
                </div>
            </div>`
}

function errorMessage () {
    return  `<div class="empty_card">
                <div class="message">
                    <p>Oops, something went wrong!</p>
                </div>
            </div>`
}

function cartPage () {
    return `<div class="shopping_cart">
                <div class="cart_text text">
                    <p>Your order</p>
                </div>
                <div class="cart_conteiner">
                    <div class="order_container">
                        <div class="orders_inner">
                        </div>
                    </div>
                </div>
                <div class="total_price">
                    <div class="price">Total cost: <span id="total_price"></span></div>
                </div>
                <div class="submit_btn">
                    <a class="submit-order-btn" href="#order">Confirm</a>
                </div>
            </div>`
}

function orderPage (obj) {
    return `
    <div class="order_cheque">
        <div class="order-text text">
            <p>Your order is confirmed!</p>
        </div>
        <div class="cheque">
            <div class="block name">
                <p>Name: <span>${obj.Name}</span></p>
            </div>
            <div class="block surname">
                <p>Surname: <span>${obj.Surname}</span></p>
            </div>
            <div class="block city">
                <p>City: <span>${obj.City}</span></p>
            </div>
            <div class="block date">
                <p>Delivery date and time: <span>${obj.DateDelivery}</span></p>
            </div>
            <div class="block email">
                <p>Email: <span>${obj.Email}</span></p>
            </div>
            <div class="block phone">
                <p>Phone: <span>${obj.Phone}</span></p>
            </div>
            <div class="block address">
                <p>Address: <span>${obj.Address}</span></p>
            </div>
            <div class="block address">
                <p>Payment method: <span>${obj.Payment}</span></p>
            </div>
            <div class="block order">
                <p>Your order: <span>${obj.Products}</span></p>
            </div>
            <div class="block price">
                <p>Total cost: <span>${obj['Total price']}</span> UAH.</p>
            </div>
        </div>
        <a href="#home" class="to-cart-btn">To home page</a>
    </div>`
}

function orderFormPage () {
    return `<div class="checkout">
                <div class="wrapper">
                    <div class="title">
                        Delivery
                    </div>
                    <div class="form">
                        <form class="checkout_form">
                            <div class="inputfield">
                                    <label>Name</label>
                                    <input id="Name" type="text" class="input" pattern="^[А-Яа-яЁё\s]+$|^[A-Za-z]+$" required>
                            </div>  
                                <div class="inputfield">
                                    <label>Surname</label>
                                    <input id="Surname" type="text" class="input" pattern="^[А-Яа-яЁё\s]+$|^[A-Za-z]+$" required>
                            </div>  
                            <div class="inputfield">
                                    <label>City</label>
                                    <input id="City" type="text" class="input" pattern="^[А-Яа-яЁё\s]+$|^[A-Za-z]+$" required>
                            </div>  
                                <div class="inputfield">
                                    <label>Delivery Date / Time</label>
                                    <div class="custom_select">
                                        <input id="DateDelivery" class="form-input" type="datetime-local" id="DeliveryTime" name="DeliveryTime" required>
                                    </div>
                            </div> 
                                <div class="inputfield">
                                    <label>Email</label>
                                    <input id="Email" type="email" class="input" required>
                            </div> 
                                <div class="inputfield">
                                    <label>Phone</label>
                                    <input id="Phone" type="text" class="input" pattern="[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}" placeholder="0991111111" required>
                            </div>
                            <div class="inputfield">
                                    <label>Payment method</label>
                                    <input id="Payment" type="text" class="input" pattern="Cash|Card" placeholder="Cash/Card" required>
                            </div>  
                            <div class="inputfield">
                                    <label>Address</label>
                                    <textarea id="Address" class="textarea" placeholder="South street 3, apartment 123" required></textarea>
                            </div> 
                            <div class="inputfield terms">
                                <label class="check">
                                    <input type="checkbox" required>
                                    <span class="checkmark"></span>
                                </label>
                                <p>
                                I agree to the terms of processing my personal data</p>
                            </div> 
                            <div class="inputfield">
                                <button type="submit" class="btn">Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>	
            </div>`

}

function itemPage (obj) {
    return `<div class="product_details_container">
                <div class="product_details">
                    <div class="product-text text">
                        <p>${obj.title}</p>
                    </div>
                    <div class="content_container">
                        <div class="content_details">
                            <div class="imgBox">
                                <img src="${obj.path}" alt="">
                            </div>
                            <div class="components_box">
                                <div class="composition text">Composition</div>
                                <div class="pizza_composition">
                                    <p>${obj.desc}</p>
                                </div>
                            </div>
                            <div class="product-block__price-row">
                                <div class="product-block__price-block">
                                    <span class="product-block__price">${obj.price}</span>
                                    <span class="product-block__currency">UAH.</span>
                                </div>
                                <a href="#${obj.href}" class="to-cart-btn">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}


function cartItem(obj) {
    return `<div id=${obj.id} class="orders_inner_item">
                <div class="content_container">
                    <div class="product-text text">
                        ${obj.title}
                    </div>
                    <div class="content_details">
                        <div class="imgBox">
                            <img src="${obj.path}" alt="">
                        </div>
                        <div class="components_box">
                            <div class="composition text">Composition</div>
                            <div class="pizza_composition">
                                <p>${obj.desc}</p>
                            </div>
                        </div>
                        <div class="amount-selector">
                            <i class="fas fa-minus"></i>
                            <span class="all_amount">${obj.quantity}</span>
                            <i class="fas fa-plus"></i>
                        </div>
                        <div class="product-block__price-row">
                            <div class="product-block__price-block">
                                <span id="prod_price" class="product-block__price">${obj.price}</span>
                                <span class="product-block__currency">UAH.</span>
                            </div>
                            <a href="#${obj.href}" class="remove-btn">Remove</a>
                        </div>
                    </div>
                </div>
            </div>`
}

export {
    homePage,
    productItem,
    catalogPage,
    actionsPage,
    emptyCartPage,
    errorMessage,
    cartPage,
    orderPage,
    orderFormPage,
    itemPage,
    cartItem
}
