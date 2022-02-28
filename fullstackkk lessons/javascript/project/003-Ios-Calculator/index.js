let container = document.getElementById("conteiner");
let wrapper = document.getElementById("wrapper");
let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let content3 = document.getElementById("content3");
let content4 = document.getElementById("content4");
let content5 = document.getElementById("content5");
let content6 = document.getElementById("content6");
let content7 = document.getElementById("content7");
let content8 = document.getElementById("content8");
let content9 = document.getElementById("content9");
let content10 = document.getElementById("content10");
let content11 = document.getElementById("content11");
let content12 = document.getElementById("content12");
let content13 = document.getElementById("content13");
let content14 = document.getElementById("content14");
let content15 = document.getElementById("content15");
let content16 = document.getElementById("content16");
let content17 = document.getElementById("content17");
let content18 = document.getElementById("content18");
let content19 = document.getElementById("content19");
let content20 = document.getElementById("content20");

let content = document.querySelectorAll(".content");





content2.addEventListener("click",()=>{
    
/* function myfunction(a) {
   
      
}
myfunction(0 )*/
content1.innerHTML ="";
});






content5.addEventListener("click",()=>{
    if (content1.innerHTML.includes("+" || "-"||"/" || "*"))  return; 
    content1.innerHTML += " " + content[3].innerHTML + " "  
    content1.style.fontSize = "23px"
    content1.style.color = "#9B9B9B"  
/* function myfunction(a) {
   
}
myfunction(3) */
});
content6.addEventListener("click",()=>{
    content1.innerHTML += content[4].innerHTML    
/* function myfunction(a) {
   
}
myfunction(4) */
});
content7.addEventListener("click",()=>{
    content1.innerHTML += content[5].innerHTML    
/* function myfunction(a) {
   
}
myfunction(5) */
});
content8.addEventListener("click",()=>{
    
    content1.innerHTML += content[6].innerHTML    
    /* function myfunction(a) {
   
}
myfunction(6) */
});



content9.addEventListener("click",()=>{
    if (content1.innerHTML.includes("+" || "-"||"/" || "*") == true)  return; 
    content1.innerHTML +=" " + content[7].innerHTML + " " 
    content1.style.fontSize = "23px"
    content1.style.color = "#9B9B9B"
/* function myfunction(a) {
   

}
myfunction(7) */
});

content10.addEventListener("click",()=>{
    content1.innerHTML += content[8].innerHTML    
/* function myfunction(a) {
   
}
myfunction(8) */
});
content11.addEventListener("click",()=>{
    content1.innerHTML += content[9].innerHTML    
/* function myfunction(a) {
   
}
myfunction(9) */
});
content12.addEventListener("click",()=>{
    content1.innerHTML += content[10].innerHTML    
/* function myfunction(a) {
   
}
myfunction(10) */
});
content13.addEventListener("click",()=>{
    if (content1.innerHTML.includes("+" || "-"||"/" || "*"))  return; 
    content1.innerHTML += " " + content[11].innerHTML + " " 
    content1.style.fontSize = "23px"
    content1.style.color = "#9B9B9B"   
/* function myfunction(a) {
   
}
myfunction(11) */
});
content14.addEventListener("click",()=>{
    content1.innerHTML += content[12].innerHTML    
/* function myfunction(a) {
   
}
myfunction(12) */
});
content15.addEventListener("click",()=>{
    content1.innerHTML += content[13].innerHTML    
/* function myfunction(a) {
   
}
myfunction(13) */
});
content16.addEventListener("click",()=>{
    content1.innerHTML += content[14].innerHTML    
/* function myfunction(a) {
   
}
myfunction(14) */
});
content17.addEventListener("click",()=>{
    if (content1.innerHTML.includes("+" || "-"||"/" || "*"))  return; 
    
    content1.innerHTML += " " + content[15].innerHTML + " "  
    content1.style.fontSize = "23px"
    content1.style.color = "#9B9B9B"  
/* function myfunction(a) {
   
}
myfunction(15) */
});



content18.addEventListener("click",()=>{
    content1.innerHTML += content[16].innerHTML    
/* function myfunction(a) {
   
}
myfunction(16) */
});

content19.addEventListener("click",()=>{
    content1.innerHTML += " " + content[17].innerHTML + " "
    if (content1.innerHTML.includes("+" || "-"||"/" || "*"))  return; 
/* function myfunction(a) {
   
}
myfunction(17) */
});
content20.addEventListener("click",()=>{
    
    content1.style.fontSize = "50px"
     content1.style.color = "white"
  /*   function myfunction(a) {
         
    } */
 if (content1.innerText.includes("+") == true){
        let sayı1 =document.getElementById("content1");
        
        let sayıbol = sayı1.innerText.split("+")
        let result = 0;
        for (let i = 0; i < sayıbol.length; i++) {
            result += +sayıbol[i] 
           
        }
        content1.innerHTML = result;
    } else if(content1.innerText.includes("-") == true){
        let sayı1 =document.getElementById("content1");
        let sayıbol = sayı1.innerText.split("-")
        let result = +sayıbol[0];
        for (let i = 1; i < sayıbol.length; i++) {
            result -= +sayıbol[i] 
           
            
        }
        content1.innerHTML = result;
    } else if (content1.innerText.includes("x") == true){
        let sayı1 =document.getElementById("content1");
        let sayıbol = sayı1.innerText.split("x")
        let result = 1;
        for (let i = 0; i < sayıbol.length; i++) {
            result = result * +sayıbol[i] 
            
        }
        content1.innerHTML = result;
    }
    else if (content1.innerText.includes("÷") == true){
        let sayı1 =document.getElementById("content1");
        let sayıbol = sayı1.innerText.split("÷")
        let result = +sayıbol[0];
        
        for (let i = 1; i < sayıbol.length; i++) {
            result = result / +sayıbol[i] 
        
            
        }
        content1.innerHTML = result;
        if(sayıbol[sayıbol.length-1] == 0 ){
            content1.innerHTML = "Can't divide by Zero";
        }
    }
  
        
    });

 
  

  /*   let arrays = "9-5+6*7/0"
    let arrays1= arrays.split("-").toString();
    let arrays2 = arrays1.split("+").toString();
    let arrays3 = arrays2.split("*").toString();
    let arrays4 = arrays3.split("/").toString();
    
    console.log(arrays4); */
    /* myfunction(18) */

        
     
 /*    } else if (operator.value == "-"){
         sonuc.innerText = (+num1.value) - (+num2.value)
     
 
    } else if (operator.value == "*"){
         sonuc.innerText = (+num1.value) * (+num2.value)
     
 
    } else if (operator.value == "/"){
         sonuc.innerText = (+num1.value) / (+num2.value)
     
 
    } else if (operator.value == "/" &&  +num2.value == 0){
         sonuc.innerText = "this is zero division error"
     
    } */




 






/* <script>
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

document.getElementById("demo").innerHTML = numbers;

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
</script> */

