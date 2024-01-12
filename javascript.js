let cartClicked = true;
const img = document.querySelector(".product-image");
const title = document.querySelector(".title")
const color = document.querySelector(".color")
const circleOrange = document.querySelector(".circle-orange")
const circleBlue = document.querySelector(".circle-blue")
const addCart = document.querySelector(".add-to-cart");
const cartAdded = document.querySelector(".cart-added");
const star = document.querySelector(".star");




circleOrange.addEventListener("click", ()=>{
    
    if(cartClicked){
        title.style.color = "orange";
        color.innerHTML = "Color : Orange";
        img.src ="./img/metcon-9-amp-Orange.png"
        addCart.style.backgroundColor = "orange";
        addCart.style.color = "black"
        star.style.color = "orange"
        
    }
 

})

circleBlue.addEventListener("click", ()=>{

    if(cartClicked){
        title.style.color = "blue";
        color.innerHTML = "Color : Blue";
        img.src ="./img/metcon-9-amp-blue.png"
        addCart.style.backgroundColor = "blue"
        addCart.style.color = "white"
        star.style.color = "blue"
        
        
    }
   
  
})

addCart.addEventListener("click", ()=>{

    if(cartClicked){
        addCart.style.display = "none";
        cartAdded.style.display = "block";
        cartClicked = false;
        
    }
    
});