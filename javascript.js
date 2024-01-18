

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

const nike = new productObject(1,"Metcon 9 Awp","4500",["orange","blue"],["./img/metcon-9-amp-orange.png","./img/metcon-9-amp-blue.png"]);

const{id ,productname ,price ,colors ,linkimage } = nike

function createProduct(src,selectorClassImg,selectorContainerImg,
   valueText,valuePrice,selectorClassText,selectorContainerText){



    const img = document.createElement("img");
    img.classList.add(selectorClassImg);
    img.src = src;
    document.querySelector(selectorContainerImg).append(img);

    const productName = document.createElement("h4");
    productName.classList.add(selectorClassText);
    productName.innerHTML = valueText;

    const productPrice = document.createElement("h4");
    productPrice.classList.add(selectorClassText);
    productPrice.innerHTML = ` ฿ ${valuePrice}`;

    document.querySelector(selectorContainerText).append(productName,productPrice);
    
}

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

        for (let i = 0; i < colors.length; i++) {

            const pickColor = [colors.length];
            console.log(pickColor);
            

            for (let j = 0; j < pickColor.length; j++) {

                pickColor[j] = document.createElement("div");
                pickColor[j].classList.add(selectorClassColor)
                pickColor[j].style.backgroundColor = colors[i]
                document.querySelector(selectorContainerColor).append(pickColor[j])

                for (let h = 0; h < linkimage.length; h++) {
                    
                    pickColor[j].addEventListener("click",()=>{
                        imgPopup.src = linkimage[i]
                    })
                    
                }


            }
        
        }

}   

createProduct(linkimage[0],"product-image",".image",productname,price,"title",".nike-text"
,colors,"popup-circle-color",".popup-circle");

createProductPopup(linkimage[0],"popup-product-image",".popup-image",productname,price,".popup-text",colors,"popup-circle-color",".popup-circle")



    


