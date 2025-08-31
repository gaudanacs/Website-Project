viewcart();

function viewcart() {
    let cart=[];

    if (document.cookie) {
        cart = JSON.parse(document.cookie.split("=")[1]);
    }

    let container = document.getElementById("cartContainer");

    if (cart.length == 0) {
        let info = document.createElement("p");
        info.className = "info inter-text";
        info.textContent = "Your cart is empty! Get shopping!";

        container.appendChild(info);
    } else {
        for (let i=0; i<cart.length; i++) {
            const item = cart[i];
            
            let itemDiv = document.createElement("div");
            itemDiv.className = "cart-item"

            let img = document.createElement("img");

            const productImages = {
                JD5Jersey: "../Commanders Merch/Mens/JD5Jersey.avif",
                JD5AltJersey: "../Commanders Merch/Mens/JD5AlternateJersey.avif",
                Hogs: "../Commanders Merch/Mens/Hogs.avif",
                ButtonUp: "../Commanders Merch/Mens/ButtonUp.avif",
                CommandersPolo: "../Commanders Merch/Mens/CommandersPolo.avif",
                Daniels: "../Commanders Merch/Womens/Daniels.avif",
                Historic: "../Commanders Merch/Womens/Historic.avif",
                Leggings: "../Commanders Merch/Womens/Leggings.avif",
                ShirtandShorts: "../Commanders Merch/Womens/ShirtandShorts.avif", 
                Sweatshirt: "../Commanders Merch/Womens/Sweatshirt.avif",
                Backpack: "../Commanders Merch/Unisex/Backpack.avif",
                Collage: "../Commanders Merch/Unisex/Collage.avif",
                Hoodie: "../Commanders Merch/Unisex/Hoodie.avif",
                LongSleeve: "../Commanders Merch/Unisex/LongSleeve.avif",
                ReplicaHelmet: "../Commanders Merch/Unisex/ReplicaHelmet.avif",
                InfantRomper: "../Commanders Merch/Childrens/InfantRomper.avif",
                KidsHoodie: "../Commanders Merch/Childrens/KidsHoodie.avif",
                PajamaPants: "../Commanders Merch/Childrens/PajamaPants.avif",
                TeamCity: "../Commanders Merch/Childrens/TeamCity.avif",
                ToddlerTeamLogo: "../Commanders Merch/Childrens/ToddlerTeamLogo.avif"
            };

            img.src = productImages[item.product];
            img.className = "product-img";

            let info = document.createElement("p");
            info.className = "info inter-text";
            info.textContent = item.product + "\nSize: " + item.itemsize + "\nQuantity: " + item.amount;
            info.style.whiteSpace = "pre-line"

            itemDiv.appendChild(img);
            itemDiv.appendChild(info);

            container.appendChild(itemDiv);
        }
    } 
}

function clearCart() {
    document.cookie = "cart=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
    alert("cart is cleared");
}