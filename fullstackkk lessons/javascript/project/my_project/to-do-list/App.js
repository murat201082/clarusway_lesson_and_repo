let check1 = document.querySelector("#checkcheck1");
let check2 = document.querySelector("#checkcheck2");
let check3 = document.querySelector("#checkcheck3");
let check4 = document.querySelector("#checkcheck4");
let check5 = document.querySelector("#checkcheck5");
let check6 = document.querySelector("#checkcheck6");
let check7 = document.querySelector("#checkcheck7");
let check8 = document.querySelector("#checkcheck8");
let check9 = document.querySelector("#checkcheck9");

let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
let span4 = document.querySelector(".span4");
let span5 = document.querySelector(".span5");
let span6 = document.querySelector(".span6");
let span7 = document.querySelector(".span7");
let span8 = document.querySelector(".span8");
let span9 = document.querySelector(".span9");
let sayi = document.querySelector(".sayı");
let inputs = document.querySelectorAll(".checkcheck");



 
/* var sonuc=document.getElementById("sonuc");
sonuc.value=Number(sonuc.value)+1;
}
 
function azalt(){
 
var sonuc=document.getElementById("sonuc");
sonuc.value=Number(sonuc.value)-1; */

  check1.addEventListener("click", () => {
    /*  if (span1.style.textDecoration == "line-through"){
        span1.style.textDecoration = "none"
    }else{
        span1.style.textDecoration = "line-through";
    }
   */

    if (check1.checked) {
      span1.style.textDecoration = "line-through";
      sayi.innerText = +sayi.innerText +1;
      
    } else {
      span1.style.textDecoration = "none";
      sayi.innerText = +sayi.innerText -1;
    }
  });

check2.addEventListener("click", () => {
  if (check2.checked) {
    span2.style.textDecoration = "line-through";
    sayi.innerText = +sayi.innerText +1;
  } else {
    span2.style.textDecoration = "none";
    sayi.innerText = +sayi.innerText -1;
  }
});
check3.addEventListener("click", () => {
  if (check3.checked) {
    span3.style.textDecoration = "line-through";
    sayi.innerText = +sayi.innerText +1;
  } else {
    span3.style.textDecoration = "none";
    sayi.innerText = +sayi.innerText -1;
  }
});
check4.addEventListener("click", () => {
  if (check4.checked) {
    span4.style.textDecoration = "line-through";
    sayi.innerText = +sayi.innerText +1;
  } else {
    span4.style.textDecoration = "none";
    sayi.innerText = +sayi.innerText -1;
  }
});
check5.addEventListener("click", () => {
  if (check5.checked) {
    span5.style.textDecoration = "line-through";
    sayi.innerText = +sayi.innerText +1;
  } else {
    span5.style.textDecoration = "none";
    sayi.innerText = +sayi.innerText -1;
  }
});
check6.addEventListener("click", () => {
  if (check6.checked) {
    span6.style.textDecoration = "line-through";
    sayi.innerText = +sayi.innerText +1;
  } else {
    span6.style.textDecoration = "none";
    sayi.innerText = +sayi.innerText -1;
  }
});
check7.addEventListener("click", () => {
  if (check7.checked) {
    span7.style.textDecoration = "line-through";
    sayi.innerText = +sayi.innerText +1;
  } else {
    span7.style.textDecoration = "none";
    sayi.innerText = +sayi.innerText -1;
  }
});
check8.addEventListener("click", () => {
  if (check8.checked) {
    span8.style.textDecoration = "line-through";
    sayi.innerText = +sayi.innerText +1;
  } else {
    span8.style.textDecoration = "none";
    sayi.innerText = +sayi.innerText -1;
  }
});
check9.addEventListener("click", () => {
  if (check9.checked) {
    span9.style.textDecoration = "line-through";
    sayi.innerText = +sayi.innerText +1;
  } else {
    span9.style.textDecoration = "none";
    sayi.innerText = +sayi.innerText -1;
  }
});
