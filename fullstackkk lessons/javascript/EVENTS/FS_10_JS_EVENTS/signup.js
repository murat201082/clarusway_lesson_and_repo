// DOM recap, DOM traversing
/* 
 let navbarPathItemText = document.getElementsByClassName("nav__item")[0].innerText;
 console.log(navbarPathItemText); */

// let navbarPathItemText2 = document.getElementsByClassName("nav__link")[0].innerText;
// console.log(navbarPathItemText2);

// let navbarPathItemText3 = document.getElementsByClassName("nav__links")[0].children[0].innerText;
// console.log(navbarPathItemText3);

// let navbarPathItemText4 = document.getElementsByClassName("nav__links")[0].firstElementChild.innerText;
// console.log(navbarPathItemText4);
/* 
let navbarPathsLi = document.querySelector(".nav__item");
console.log(navbarPathsLi);
// window.addEventListener("event", func())
window.addEventListener("load",()=>{
    console.log("window loaded");
});
//window.onload = func()
window.onload = () =>{
    console.log("window onloaded");
};

navbarPathsLi.addEventListener("click", (event)=>{
    alert(navbarPathsLi.innerText +' ' + "clicked")
});
 */
//3 ve 4. eventlistener ekleme şekli ödev

/* let navbarPathsLi2 = document.querySelector(".nav__links").firstElementChild;
console.log("ul -> first li", navbarPathsLi2.innerText); */

/* let navbarSignUpLi = document.querySelector(".nav__links").lastElementChild;
console.log("ul -> last li", navbarSignUpLi.innerText);



let navbarStudentsLi = document.querySelectorAll(".nav__item")[2];
console.log(navbarStudentsLi); */

/* let navbarInstructorsLi = document.querySelectorAll(".nav__item")[1];
console.log(navbarInstructorsLi);

navbarInstructorsLi.addEventListener("mouseover", (event)=>{
    navbarInstructorsLi.innerText = "Over Me!"
    navbarInstructorsLi.style.color = "red"
    navbarInstructorsLi.style.fontSize = "30px"


});

navbarInstructorsLi.addEventListener("mouseout", ()=>{
    navbarInstructorsLi.innerText = "Instructors"
    navbarInstructorsLi.style.color = "#444444"
    navbarInstructorsLi.style.fontSize = "17px"
    


}); */

//CODE CHALLENGE
/* let navbarStudentsLi = document.querySelectorAll(".nav__item")[2];
console.log(navbarStudentsLi); 
    let a = Math.random() * 256;
    let b = Math.random() * 256;
    let c = Math.random() * 256;
    let d = Math.trunc(a);
    let e = Math.trunc(b);
    let f = Math.trunc(c);
    console.log(d);
    console.log(e);
    console.log(f);

navbarStudentsLi.addEventListener("click", (event)=>{
   // stop bubling
   event.stopPropagation()//paretlerin tepki vermesini engeller
   navbarStudentsLi.style.backgroundColor =  `rgb(${d},${e},${f})`;

});

navbarStudentsLi.addEventListener("click", (event)=>{
    event.stopPropagation()
    navbarStudentsLi.parentElement.parentElement.style.backgroundColor =  `rgb(${d},${e},${f})`;
 
 });
 */

//Math.sailing yukarı Math.floor aşağı Math.round neresi yakınsa orası

let lastName = document.querySelector("input[name = last_name");
let charSpan = document.getElementById("charCount");

lastName.addEventListener("keyup", () => {
  charSpan.innerText = lastName.value.length + "/40";
});
lastName.addEventListener("keyup", () => {
  if (lastName.value.length == "0") {
    charSpan.style.display = "none";
  } else {
    charSpan.style.display = "block";
  }
});

//harf sayısı sıfır olduğunda span kaybolsun

/* let birthdayPicker = document.querySelector("[name=birthday]");
birthdayPicker.addEventListener("change", ()=>{
    console.log(birthdayPicker.value);
    let year = new Date().getFullYear() - new Date(birthdayPicker.value).getFullYear();
    alert ("you are " + year + " years old.");
}) */

/* var d = new Date();
a = d.getDay();     // getting the weekday

getDate();          // day as a number (1-31)
getDay();           // weekday as a number (0-6)
getFullYear();      // four digit year (yyyy)
getHours();         // hour (0-23)
getMilliseconds();  // milliseconds (0-999)
getMinutes();       // minutes (0-59)
getMonth();         // month (0-11)
getSeconds();       // seconds (0-59)
getTime();          // milliseconds since 1970 */

/* let birthdayPicker = document.querySelector("[name=birthday]");
birthdayPicker.onchange = ()=>{
    console.log(birthdayPicker.value);
    let year = new Date().getFullYear() - new Date(birthdayPicker.value).getFullYear();
    alert ("you are " + year + " years old.");
} */
