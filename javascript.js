
const addCart = document.querySelector(".add-to-cart");
const cartAdded = document.querySelector(".cart-added");

const contentNike = document.querySelector(".content-nike");
const contentPopup = document.querySelector(".content-popup");
const exit = document.getElementById("exit");



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


function productObject(id,productname,price,colors,linkimage){

    this.id = id;
    this.productname = productname
    this.price = price
    this.colors = colors
    this.linkimage = linkimage
 
}

const nike = new productObject(1,"Metcon 9 Awp","4,500",["orange","blue"],["./img/metcon/metcon-9-amp-orange.png","./img/metcon-9-amp-blue.png"]);
const nike2 = new productObject(2,"Nike Air Force 1 '07","4,300",["blue","pink","green","white"],
["./img/air-force/air-force-1-07-blue.png","./img/air-force/air-force-1-07-pink.png","./img/air-force/air-force-1-07-green.png","./img/air-force/air-force-1-07-white.png"]);

let countProduct = 0 ;

function createProduct(src,selectorClassImg,selectorContainerImg,
   valueText,valuePrice,selectorClassText,selectorContainerText){

   
    const wrapperObject = document.createElement("div");
    wrapperObject.classList.add("nike-info");
    wrapperObject.id = `nike-info-ID-${countProduct}`
    document.querySelector(".content-layout-nike").append(wrapperObject)
  
    const img = document.createElement("img");
    img.classList.add(selectorClassImg);
    img.src = src;
    document.getElementById(selectorContainerImg).append(img);


    const wrapperText = document.createElement("div");
    wrapperText.classList.add("nike-text");
    wrapperText.id = `nike-text-ID-${countProduct}`
    document.getElementById(`nike-info-ID-${countProduct}`).append(wrapperText)

    const productName = document.createElement("h4");
    productName.classList.add(selectorClassText);
    productName.innerHTML = valueText;

    const productPrice = document.createElement("h4");
    productPrice.classList.add(selectorClassText);
    productPrice.innerHTML = ` ฿ ${valuePrice}`;

    document.getElementById(selectorContainerText).append(productName,productPrice);

    countProduct++;
    
}

createProduct(nike.linkimage[0],"product-image",`nike-info-ID-${countProduct}`,nike.productname,nike.price,"title",`nike-text-ID-${countProduct}`);
createProduct(nike2.linkimage[0],"product-image",`nike-info-ID-${countProduct}`,nike2.productname,nike2.price,"title",`nike-text-ID-${countProduct}`);



function createProductPopup(srcPopup,selectorClassImgPopup, selectorContainerImgPopup,valueText,valuePrice,selectorContainerText
    ,colors,selectorClassColor,selectorContainerColor){

    const imgPopup = document.createElement("img");
    imgPopup.classList.add(selectorClassImgPopup);
    imgPopup.src = srcPopup;
    document.querySelector(selectorContainerImgPopup).append(imgPopup);

    const productNamePopup = document.createElement("h4");
    productNamePopup.classList.add("title-popup");
    productNamePopup.innerHTML = valueText;

    const productPricePopup = document.createElement("h4");
    productPricePopup.classList.add("title-popup");
    productPricePopup.innerHTML = ` ฿ ${valuePrice}`;
    
    document.querySelector(selectorContainerText).prepend(productNamePopup,productPricePopup)
    
    const pickColor = [];

        for (let i = 0; i < colors.length; i++) {

            pickColor[i] = document.createElement("div");
            pickColor[i].classList.add(selectorClassColor)
            pickColor[i].style.backgroundColor = colors[i]
            document.querySelector(selectorContainerColor).append(pickColor[i])

                for (let h = 0; h < nike.linkimage.length; h++) {
                    
                    pickColor[i].addEventListener("click",()=>{
                        imgPopup.src = nike.linkimage[i];
                    })
                    
                }


            }
        
        }




createProductPopup(nike.linkimage[0],"popup-product-image",".popup-image",nike.productname,nike.price,".popup-text",
nike.colors,"popup-circle-color",".popup-circle")






    


