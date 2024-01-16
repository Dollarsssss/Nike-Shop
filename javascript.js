
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



function productObject(id,productname,price,color,linkimage){

    this.id = id;
    this.productname = productname
    this.price = price
    this.color = color
    this.linkimage = linkimage
 
}

// <div class="nike-info">
// <div class="image">
//     <img src="./img/metcon-9-amp-orange.png" class="product-image">
// </div>
// <div class="nike-text">
//     <h4 class="title">Metcon 9 Awp</h4>
//     <h4 class="title">฿ 5,500</h4>
//     <p>Review : <span class="star">
//         <i class="bi bi-star-fill"></i>
//         <i class="bi bi-star-fill"></i>
//         <i class="bi bi-star-fill"></i>
//         <i class="bi bi-star-fill"></i>
//         <i class="bi bi-star-fill"></i>
//     </span> </p>
// </div>
// </div>

let nike = new productObject(1,"Metcon 9 Awp","4500",["orange","red"],"./img/metcon-9-amp-orange.png");

const{id ,productname ,price ,color ,linkimage } = nike

function createProduct(src,selectorClassImg,seletorContainerImg,selectorClassImgPopup,seletorContainerImgPopup,valueText,valuePrice,selectorClassText,seletorContainerText){

    const img = document.createElement("img");
    const imgPopup = document.createElement("img");

    const title = document.createElement("h4");
    const productPrice = document.createElement("h4");
    title.classList.add(selectorClassText);
    productPrice.classList.add(selectorClassText);
    img.classList.add(selectorClassImg);
    imgPopup.classList.add(selectorClassImgPopup);
    img.src = src;
    imgPopup.src = src;
    title.innerHTML = valueText;
    productPrice.innerHTML = " ฿ " + valuePrice;
    document.querySelector(seletorContainerImg).append(img);
    document.querySelector(seletorContainerText).append(title,productPrice);
    document.querySelector(seletorContainerImgPopup).append(imgPopup);

}

createProduct(linkimage,"product-image",".image","popup-product-image",".popup-image",productname,price,"title",".nike-text");











