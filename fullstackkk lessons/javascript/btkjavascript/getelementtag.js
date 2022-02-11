let islem = document.getElementsByTagName("DIV")[0].innerHTML;
document.getElementById("sonuc").innerHTML = islem;



let islem1 = document.getElementsByTagName("LI")[2].innerHTML = "HAKAN";
document.getElementById("sonuc1").innerHTML = islem1 + "</br>" + "</br>";

let islem2 = document.getElementsByTagName("LI");

for (let i = 0; i < islem2.length; i++) {
    document.getElementById("sonuc2").innerHTML += islem2[i].innerHTML + "</br>"
    
}

let islem3 = document.getElementsByTagName("*");
document.getElementById("sonuc3").innerHTML = islem3[15].innerHTML;
console.log(islem3[15]);