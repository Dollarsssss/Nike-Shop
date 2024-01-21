const addCart = document.querySelector(".add-to-cart");
const cartAdded = document.querySelector(".cart-added");

const contentNike = document.querySelector(".content-nike");
const contentPopup = document.querySelector(".content-popup");
const exit = document.getElementById("exit");


    const logo = document.querySelector(".logo")
    const popupCart = document.querySelector(".popup-cart")
    logo.addEventListener("click",()=>{
      popupCart.style.display = (popupCart.style.display === "none" ? "block" : "none");
    })



function productObject(id,productname,price,colors,linkimage){

    this.id = id;
    this.productname = productname
    this.price = price
    this.colors = colors
    this.linkimage = linkimage
 
}

const nike = new productObject(1,"Metcon 9 Awp","4,500",["orange","blue"],["./img/metcon/metcon-9-amp-orange.png","./img//metcon/metcon-9-amp-blue.png"]);
const nike2 = new productObject(2,"Nike Air Force 1 '07","4,300",["blue","pink","green","#d2d6d3"],
["./img/air-force/air-force-1-07-blue.png","./img/air-force/air-force-1-07-pink.png","./img/air-force/air-force-1-07-green.png","./img/air-force/air-force-1-07-white.png"]);
const nike3 = new productObject(3,"Nike Air Max Pulse Roam","6,000",["#baa611","#690a0a","#e0d88d","#1a181f"],["./img/Nike-Air-Max-Pulse-Roam/Nike-Yellow.jpg"
,"./img/Nike-Air-Max-Pulse-Roam/Nike-Red.png","./img/Nike-Air-Max-Pulse-Roam/Nike-Egg.png","./img/Nike-Air-Max-Pulse-Roam/Nike-Dark.jpg"])

const nike4 = new productObject(4,"Nike Club","2,400",["gray","black","white"],["./img/Nike-Club/Nike-Club-Gray.jpg","./img/Nike-Club/Nike-Club-Black.png"
,"./img/Nike-Club/Nike-Club-White.png"])

let countProduct = 0 ;
let countProductPopup = 0 ;

function createProduct(id,src,valueText,valuePrice,colors){

    const wrapperObject = document.createElement("div");
    wrapperObject.classList.add("nike-info");
    wrapperObject.id = `nike-info-ID-${countProduct}`
    document.querySelector(".content-layout-nike").append(wrapperObject)
  
    const img = document.createElement("img");
    img.classList.add("product-image");
    img.src = src[0];
    document.getElementById(`nike-info-ID-${countProduct}`).append(img);


    const wrapperText = document.createElement("div");
    wrapperText.classList.add("nike-text");
    wrapperText.id = `nike-text-ID-${countProduct}`
    document.getElementById(`nike-info-ID-${countProduct}`).append(wrapperText)

    const productName = document.createElement("h4");
    productName.classList.add("title");
    productName.innerHTML = valueText;

    const productPrice = document.createElement("h4");
    productPrice.classList.add("title");
    productPrice.innerHTML = ` ฿ ${valuePrice}`;

    document.getElementById(`nike-text-ID-${countProduct}`).append(productName,productPrice);

    countProduct++;

    const containerPopup = document.createElement("div");
    containerPopup.classList.add("container-popup-wrapper")
    containerPopup.id = `containerPopup-${countProductPopup}`
    containerPopup.style.display = "none"
    document.querySelector(".container-popup").append(containerPopup);

    const popupInfoWrapper = document.createElement("div")
    popupInfoWrapper.classList.add("popup-info-wrapper")
    popupInfoWrapper.id = `popupInfoWrapper-${countProductPopup}`
    document.getElementById(`containerPopup-${countProductPopup}`).append(popupInfoWrapper)

    const popupImage = document.createElement("div")
    popupImage.classList.add("popup-image")
    popupImage.id = `popupImage-${countProductPopup}`
    document.getElementById(`popupInfoWrapper-${countProductPopup}`).append(popupImage)

    const imgPopup = document.createElement("img");
    imgPopup.classList.add("popup-product-image");
    imgPopup.src = src[0];
    document.getElementById(`popupImage-${countProductPopup}`).append(imgPopup);


    const popupInfoText = document.createElement("div")
    popupInfoText.classList.add("popup-info-text")
    popupInfoText.id =`popupInfoText-${countProductPopup}`
    document.getElementById(`popupInfoWrapper-${countProductPopup}`).append(popupInfoText)

    const popupText = document.createElement("div")
    popupText.classList.add("popup-text")
    popupText.id = `popupText-${countProductPopup}`
    document.getElementById(`popupInfoText-${countProductPopup}`).append(popupText)

    const productNamePopup = document.createElement("h4");
    productNamePopup.classList.add("title-popup");
    productNamePopup.innerHTML = valueText;

    const productPricePopup = document.createElement("h4");
    productPricePopup.classList.add("title-popup");
    productPricePopup.innerHTML = ` ฿ ${valuePrice}`;

    const lorem = document.createElement("p");
    lorem.style.opacity = "70%"
    lorem.innerHTML = ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore pla <br>
    ceat repellat harum, officia sapiente voluptates quis, quidem, quam ve- <br>lit ut laboriosam? 
    Eligendi recusandae laudantium accusantium minima.`
    
    document.getElementById(`popupText-${countProductPopup}`).prepend(productNamePopup,productPricePopup,lorem)
    

    const popupPickColor = document.createElement("div")
    popupPickColor.classList.add("popup-pick-color");
    popupPickColor.id = `popupPickColor-${countProductPopup}`
    document.getElementById(`popupInfoText-${countProductPopup}`).append(popupPickColor)

    const titlePopupPickColor = document.createElement("h4")
    titlePopupPickColor.innerHTML = `Pick  a Color`

    const popupCircle = document.createElement("div")
    popupCircle.classList.add("popup-circle")
    popupCircle.id = `popupCircle-${countProductPopup}`
    document.getElementById(`popupPickColor-${countProductPopup}`).append(titlePopupPickColor,popupCircle)


    const pickColor = [];

        for (let i = 0; i < colors.length; i++) {

            pickColor[i] = document.createElement("div");
            pickColor[i].classList.add("popup-circle-color")
            pickColor[i].style.backgroundColor = colors[i]
            document.getElementById(`popupCircle-${countProductPopup}`).append(pickColor[i])

            pickColor[i].addEventListener("click",()=>{
                imgPopup.src = src[i];
            })
                    
        }
            

        const popupCart = document.createElement("div")
        popupCart.classList.add("popup-cart-btn");
        popupCart.id = `popupCart-${countProductPopup}`
        document.getElementById(`popupInfoText-${countProductPopup}`).append(popupCart)

        const btnAdd = document.createElement("button")
        btnAdd.classList.add("add-to-cart")
        btnAdd.innerHTML = `<i class="bi bi-cart-plus-fill"></i> Add To Cart`

        
        const btnAdded = document.createElement("button")
        btnAdded.classList.add("cart-added")
        btnAdded.innerHTML = `Cart Added`
        document.getElementById(`popupCart-${countProductPopup}`).append(btnAdd,btnAdded)

           
        btnAdd.addEventListener("click",()=>{
            btnAdd.style.display = "none";
            btnAdded.style.display = "block";
        })

        countProductPopup++

        exit.addEventListener("click",()=>{
            contentPopup.style.display = "none";
            imgPopup.src = src[0];
        })

    
}

createProduct(nike.id,nike.linkimage,nike.productname,nike.price,nike.colors);
createProduct(nike2.id,nike2.linkimage,nike2.productname,nike2.price,nike2.colors);
createProduct(nike3.id,nike3.linkimage,nike3.productname,nike3.price,nike3.colors);
createProduct(nike4.id,nike4.linkimage,nike4.productname,nike4.price,nike4.colors);


let keepContent = [];
let keepContentPopup = [];
keepContent = document.querySelectorAll('.nike-info')
keepContentPopup = document.querySelectorAll('.container-popup-wrapper')


for (let i = 0; i < keepContent.length; i++) {
    keepContent[i].addEventListener("click", () => {
        contentPopup.style.display = "block";

        for (let j = 0; j < keepContentPopup.length; j++) {
            const currentPopup = keepContentPopup[j];
            currentPopup.style.display = (i === j) ? "block" : "none";
        }
    });
}









    


