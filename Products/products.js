const mens = document.getElementById("mens");
const womens = document.getElementById("womens");
const childrens = document.getElementById("childrens");
const unisex = document.getElementById("unisex");

mens.addEventListener("change", toggleMens);
womens.addEventListener("change", toggleWomens);
childrens.addEventListener("change", toggleChildrens);
unisex.addEventListener("change", toggleUnisex);

function toggleMens() {
    if(mens.checked) {
        document.querySelectorAll(".womens-apparel, .unisex-apparel, .childrens-apparel").forEach(element => {
            element.style.display = "none";
        });
    } else {
        document.querySelectorAll(".womens-apparel, .unisex-apparel, .childrens-apparel").forEach(element => {
            element.style.display = "";
        });
    }
}

function toggleWomens() {
    if(womens.checked) {
        document.querySelectorAll(".mens-apparel, .unisex-apparel, .childrens-apparel").forEach(element => {
            element.style.display = "none";
        });
    } else {
        document.querySelectorAll(".mens-apparel, .unisex-apparel, .childrens-apparel").forEach(element => {
            element.style.display = "";
        });
    }
}

function toggleChildrens() {
    if(childrens.checked) {
        document.querySelectorAll(".womens-apparel, .mens-apparel, .unisex-apparel").forEach(element => {
            element.style.display = "none";
        });
    } else {
        document.querySelectorAll(".womens-apparel, .mens-apparel, .unisex-apparel").forEach(element => {
            element.style.display = "";
        });
    }
}

function toggleUnisex() {
    if(unisex.checked) {
        document.querySelectorAll(".womens-apparel, .mens-apparel, .childrens-apparel").forEach(element => {
            element.style.display = "none";
        });
    } else {
        document.querySelectorAll(".womens-apparel, .mens-apparel, .childrens-apparel").forEach(element => {
            element.style.display = "";
        });
    }
}
