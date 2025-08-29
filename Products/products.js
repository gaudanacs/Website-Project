const mens = document.getElementById("mens");

mens.addEventListener("change", removeMens());

function removeMens() {
    document.querySelectorAll("#womens-apparel").forEach(element => {
        element.remove();
    });
    console.log("abc");
}


