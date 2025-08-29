const mens = document.getElementById("mens");
const womens = document.getElementById("womens");
const childrens = document.getElementById("childrens");
const unisex = document.getElementById("unisex");

mens.addEventListener("change", filtering);
womens.addEventListener("change", filtering);
childrens.addEventListener("change", filtering);
unisex.addEventListener("change", filtering);

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
