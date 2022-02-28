const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", () => {
  localStorage.setItem("taxRate", taxRate); //sessionStorage browser kapanınca kapanır onun için lacalstoragete tutmak mantıklı
  localStorage.setItem("shippingPrice", shippingPrice);
  sessionStorage.setItem("taxRate", taxRate);
  sessionStorage.setItem("shippingPrice", shippingPrice);
  calculateCardTotal();
});
//Capturing
let productDiv = document.querySelector(".products");
productDiv.addEventListener("click", (e) => {
  let quantityP =
    e.target.parentElement.parentElement.querySelector("#product-quantity");
  /*   console.log(quantityP); */
  /* console.log(e.target); */
  //minus button
  if (
    e.target.classList.contains("fa-minus") ||
    e.target == quantityP.parentElement.firstElementChild
  ) {
    //console.log("minus clicked");
    if (quantityP.innerText > 1) {
      quantityP.innerText--;
      //Calculate product total
      //  Calculate Card total
      calculateProductTotal(quantityP);
    } else {
      if (confirm("product will be removed!")) {
        quantityP.parentElement.parentElement.parentElement.remove();
        //  Calculate Card total
        calculateCardTotal();
      }
    }
  }
  //plus buttons
  else if (
    e.target.className == "fas fa-plus" ||
    e.target == quantityP.parentElement.lastElementChild
  ) {
    //console.log("plusbtn clicked");
    quantityP.innerText++;
    //Calculate product total
    //  Calculate Card total
    calculateProductTotal(quantityP);
  }

  //Remove Buttons
  else if (e.target.className == "remove-product") {
    /* console.log("remove button clicked"); */
    if (confirm("product will be removed!")) {
      quantityP.parentElement.parentElement.parentElement.remove();
      //  Calculate Card total
      calculateCardTotal();
    }

    //  Calculate Card total
  } else {
    console.log(e.target);
  }
});

const calculateProductTotal = (quantityP) => {
  console.log(quantityP.innerText);

  let productPrice =
    quantityP.parentElement.parentElement.querySelector("strong");

  let productTotalPriceDiv =
    quantityP.parentElement.parentElement.querySelector(".product-line-price");

  productTotalPriceDiv.innerText = (
    quantityP.innerText * productPrice.innerText
  ).toFixed(2); //virgülden sonraki ondalıklı kısmı belirler

  calculateCardTotal();
};

const calculateCardTotal = () => {
  let productTotalPriceDivs = document.querySelectorAll(".product-line-price"); //html collection
  let subtotal = 0;
  productTotalPriceDivs.forEach((eachproductTotalPriceDiv) => {
    subtotal += parseFloat(eachproductTotalPriceDiv.innerText);
  });
  console.log(subtotal);
  let taxPrice = subtotal * localStorage.getItem("taxRate");
  console.log(taxPrice);
  let shipping =
    subtotal > 0 ? parseFloat(localStorage.getItem("shippingPrice")) : 0;
  console.log(shipping);

  let cardTotal = subtotal + taxPrice + shipping;
  console.log(cardTotal);

  document.querySelector("#cart-subtotal p:nth-child(2)").innerText =
    subtotal.toFixed(2);
  document.querySelector("#cart-tax p:nth-child(2)").innerText =
    taxPrice.toFixed(2);
  document.querySelector("#cart-shipping p:nth-child(2)").innerText =
    shipping.toFixed(2);
  document.querySelector("#cart-total").lastElementChild.innerText =
    cardTotal.toFixed(2);
};
