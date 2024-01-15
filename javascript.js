
const img = document.querySelector(".popup-product-image");
const circleOrange = document.querySelector(".popup-circle-orange");
const circleBlue = document.querySelector(".popup-circle-blue");
const addCart = document.querySelector(".add-to-cart");
const cartAdded = document.querySelector(".cart-added");

const contentNike = document.querySelector(".content-nike");
const contentPopup = document.querySelector(".content-popup");
const exit = document.getElementById("exit");

function circleColorFirst () {
    img.src = "./img/metcon-9-amp-orange.png";
    addCart.style.backgroundColor = "orange";
    addCart.style.color = "black";
    console.log(img);
}

function circleColorSecond () {
    img.src = "./img/metcon-9-amp-blue.png";
    addCart.style.backgroundColor = "blue";
    addCart.style.color = "white";
    console.log(img);
}


contentNike.addEventListener("click",()=>{
    contentPopup.style.display = "block";
  
})

exit.addEventListener("click",()=>{
    contentPopup.style.display = "none";
})


addCart.addEventListener("click",()=>{
    addCart.style.display = "none";
    cartAdded.style.display = "block";
})