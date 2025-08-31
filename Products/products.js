const mens = document.getElementById("mens");
const womens = document.getElementById("womens");
const childrens = document.getElementById("childrens");
const unisex = document.getElementById("unisex");

mens.addEventListener("change", filtering);
womens.addEventListener("change", filtering);
childrens.addEventListener("change", filtering);
unisex.addEventListener("change", filtering);

function filtering() {
    document.querySelectorAll(".mens-apparel, .womens-apparel, .childrens-apparel, .unisex-apparel").forEach(element => {
        element.style.display = "none";
    });

    const selectedBox = document.querySelector("input[name='filter']:checked").id;

    if (selectedBox === "mens") {
        document.querySelectorAll(".mens-apparel").forEach(element => {
            element.style.display = "";
        });
    }

    if (selectedBox === "womens") {
        document.querySelectorAll(".womens-apparel").forEach(element => {
            element.style.display = "";
        });
    }

    if (selectedBox === "unisex") {
        document.querySelectorAll(".unisex-apparel").forEach(element => {
            element.style.display = "";
        });
    }

    if (selectedBox === "childrens") {
        document.querySelectorAll(".childrens-apparel").forEach(element => {
            element.style.display = "";
        });
    }
}

function reset() {
    document.querySelectorAll(".mens-apparel, .womens-apparel, .childrens-apparel, .unisex-apparel").forEach(element => {
        element.style.display = "";
    });

    document.querySelectorAll("input[type='radio']").forEach(radio => {
        radio.checked = false;
    });
}
