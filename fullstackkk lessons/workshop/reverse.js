
/* function reword() {
    let word = prompt("Lutfen bir cümle giriniz: ");
    let reversedword = "";
    let i = word.length - 1;
    for (i ; i >= 0 ; i--)
        reversedword += word[i];
    return reversedword;
}
console.log(reword()); */

/* function ters (){
    let b = prompt('kelime giriniz')
    let str1 = ""

    for (let i =  b.length -1; i >= 0; i--) 
        str1 += b[i];
    return str1;   
    
    
}
console.log(ters());  */

/* let kelime = prompt('please enter a word');
function ters(){
    return kelime.reversed()

}
console.log(ters(kelime)); */
/* let kelime = prompt('lütfen kelime giriniz');
let arr = kelime.split("");
let ters = arr.reverse();

console.log(ters); */

/* let kelime = prompt('lütfen kelime giriniz');
let ekleme = ''
function ters() {
    for (let i = kelime.length-1; i >= 0 ; i--) {
        ekleme += kelime[i];
             
    }
    return(ekleme);
}
console.log(ters()); */

let a = 1;
let b = 2;
let num = +prompt("Sayı Giriniz: ")
function fib (n) {
    if (n <= 0) {
        console.log('Incorrect Input');
    }
    else if (n == 1) {
        return a
    }
    else if (n == 2) {
        return b
    }
    else {
        for (i=1; i < n; i++) {
            c = a + b
            a = b
            b = c
        }
        return b
}
}
console.log(fib(num));