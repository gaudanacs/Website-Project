const carousel = document.getElementById("carousel");
let i=0;

function forward() {
    i++;
    if(i>4){
        i=0;
    }
    if(i===0) {
        carousel.setAttribute('src', 'Commanders Merch/Mens/JD5Jersey.avif');
    }
    if(i===1) {
        carousel.setAttribute('src', 'Commanders Merch/Mens/JD5AlternateJersey.avif');
    }
    if(i===2) {
        carousel.setAttribute('src', 'Commanders Merch/Mens/CommandersPolo.avif');    
    }
    if(i===3) {
        carousel.setAttribute('src', 'Commanders Merch/Unisex/Hoodie.avif');
    }
    if(i===4) {
        carousel.setAttribute('src', 'Commanders Merch/Unisex/LongSleeve.avif');
    }
}

function backward() {
    i--;
    if(i<0){
        i=4;
    }
    if(i===0) {
        carousel.setAttribute('src', 'Commanders Merch/Mens/JD5Jersey.avif');
    }
    if(i===1) {
        carousel.setAttribute('src', 'Commanders Merch/Mens/JD5AlternateJersey.avif');
    }
    if(i===2) {
        carousel.setAttribute('src', 'Commanders Merch/Mens/CommandersPolo.avif');    
    }
    if(i===3) {
        carousel.setAttribute('src', 'Commanders Merch/Unisex/Hoodie.avif');
    }
    if(i===4) {
        carousel.setAttribute('src', 'Commanders Merch/Unisex/LongSleeve.avif');
    }
}