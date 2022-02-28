/* let idNumber = document.getElementById("idnumber");

console.log(typeof idNumber.value); 
let paragraf = document.getElementById("par");

let deneme = "0123467895"

let button = document.getElementById("button");


button.addEventListener("click", ()=>{
        let arrayIdNumber = idNumber.value.split("");
        console.log(arrayIdNumber);
        if(arrayIdNumber.length != 11){
            paragraf.innerText="Hatalı girdiniz. Tekrar giriniz " + "TC no su 11 hane olmak zorunda"
        
        return;
    }
    let toplam = ((+arrayIdNumber[0] + +arrayIdNumber[2] + +arrayIdNumber[4] + +arrayIdNumber[6] + 
        +arrayIdNumber[8]) * 7) - (+arrayIdNumber[1] + +arrayIdNumber[3] + +arrayIdNumber[5] + +arrayIdNumber[7]);
    toplam = toplam % 10; 
    if(+arrayIdNumber[0] == 0){
        paragraf.innerText="Hatalı girdiniz. Tekrar giriniz " + "0 hatası"
        
        return;
    }
    
    if(toplam != +arrayIdNumber[9]){
        paragraf.innerText="Hatalı girdiniz. Tekrar giriniz " + "10 karakter eşleşmedi"
        
        return;
    }

    let toplam1 = 0;
    for (let index = 0; index < 9; index++) {
        toplam1 += +arrayIdNumber[index]
    }
    toplam1 = toplam1 + toplam;
    if(toplam1%10 != +arrayIdNumber[10]){
        paragraf.innerText="Hatalı girdiniz. Tekrar giriniz " + "11 karakter eşleşmedi"
        
        return;
    }
paragraf.innerText="Başarılı bir giriş yaptınız"
    

}) */
let myId = document.getElementById("string")
let myButton = document.getElementById("button_")
let mySpan = document.getElementById("dom_result")

myButton.addEventListener("click", () => {

let id_ = myId.value 
let id_odd = (Number(id_[0]) + Number(id_[2]) + Number(id_[4]) + Number(id_[6]) + Number(id_[8]));
 let id_even = Number(id_[1]) + Number(id_[3]) + Number(id_[5]) + Number(id_[7])

 let id_ten = (id_odd * 7 - id_even) % 10;

 let id_eleven = (id_odd + id_even + id_ten) % 10;

if (id_.length == 11 && id_[0] != "0" && id_ten == id_[9] && id_eleven == id_[10]){
   mySpan.innerText = "ID Valid"
}
else {
    mySpan.innerText = "Invalid ID"
}
})