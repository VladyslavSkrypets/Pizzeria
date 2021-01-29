function getProductData(section) {
    let url = `https://my-json-server.typicode.com/VladSkripets/Pizzeria/${section}`;
    try {
        var Httpreq = new XMLHttpRequest();
        Httpreq.open("GET", url, false);
        Httpreq.send(null);
        return Httpreq.responseText;   
    } catch {
        return false
    }
}

async function sendOrderData(order) {
    let url = 'https://my-json-server.typicode.com/VladSkripets/Pizzeria/orders';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order)
        })
        const data = await response.json();
        return data
    } catch {
        return false
    }
}

export {
    getProductData,
    sendOrderData
}