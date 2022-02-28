const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", ()=>{
    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);
});

//! Capturing
let productsDiv = document.querySelector(".products");

productsDiv.addEventListener("click", e =>{
    //console.log(e.target);
    //Minus Buttons
    let quantityP = e.target.parentElement.parentElement.querySelector("#product-quantity");
    /* console.log("mer"); */
   

 
    if (e.target.classList.contains("fa-minus")|| e.target == quantityP.parentElement.firstElementChild){
        
        
        if (quantityP.innerText == 1 ){
            return; 
        }
        quantityP.innerText--;
        
        
        
    }else if (e.target.className =="fas fa-plus" || e.target == quantityP.parentElement.lastElementChild){
        quantityP.innerText++;
        const price = document.getElementsByTagName("strong")
        console.log(price);
        const totalPrice = document.querySelector(".product-line-price")
       
        totalPrice.innerHTML =  quantityP.innerText * price.innerText
    }

//!Remove Buttons
else if (e.target.className == "remove-product"){
    return quantityP.parentElement.parentElement.parentElement.remove()

}



});
/* let whos =document.querySelector("#product-quantity").parentElement.parentElement;
console.log(whos);
console.log(whos.parentElement.firstElementChild);
let whom =document.querySelector("#product-quantity").parentElement.parentElement.parentElement.firstElementChild;
console.log(whom);
 */
