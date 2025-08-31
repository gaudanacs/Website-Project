function addToCart(productName) {
    const selectedSize = document.querySelector("input[name='size']:checked");
    const quantityDropdown = document.getElementById('quantity');

    let size;
    let quantity = quantityDropdown.value;

    if (selectedSize) {
        size=selectedSize.id;
    } else {
        size="N/A";
    };

    const cartItem = {
        product: productName,
        itemsize: size,
        amount: quantity
    };

    let cart=[];

    if (document.cookie) {
        cart = JSON.parse(document.cookie.split("=")[1]);
    }

    cart.push(cartItem);

    document.cookie = "cart=" + JSON.stringify(cart) + "; path=/;";

    alert("Added to Cart! Check your cart now.");
}