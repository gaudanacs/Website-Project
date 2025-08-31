function viewcart() {
    let cart=[];

    if (document.cookie) {
        cart = JSON.parse(document.cookie.split("=")[1]);
    }

    if (cart.length == 0) {
        alert("Your cart is empty");
    } else {
        let message = "";
        for (let i=0; i<cart.length; i++) {
            const item = cart[i];
            message += `Product: ${item.product}, Size: ${item.itemsize}, Quantity: ${item.amount}\n`;
        }
        alert(message);
    } 
}

function clearCart() {
    document.cookie = "cart=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    alert("cart is cleared");
}