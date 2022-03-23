/* let str1 = 'Hello '
let str2 = 'World'
let str3 = `${str1+str2}`
console.log(typeof str1, str1);
console.log(typeof str2, str2);
console.log(typeof str3, str3);

let str4 = new String("A string object")
console.log(typeof str4);
console.log(str4); */

var a = 'primitive.\nlerin properti veya metodu olmaz.'
/* console.log(a);
console.log(a.charAt());//boş girilirse ilk karakteri döndürür
console.log(a.charAt(9));
console.log(a.charAt(10));
console.log(a.charAt(11));
console.log(a.length()); */
/* console.log(a.charAt(43)); */
/* console.log(a.charAt(a.lenght-1));
console.log(a[a.length-1]); */

//includes

/* var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
var n = str.includes("simply")
var n1 = str.includes("Simply")
console.log(n);
console.log(n1); */

//indexof -1 dönerse içerisinde değil demek oluyor
/* var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
var n = str.indexOf("simply");
console.log(n);
console.log(str.indexOf('m'));// ilk bulduğu sonucu döndürür
console.log(str.lastIndexOf('m'));// sondan başlar ilk bulduğu m yi döndürür
console.log(str.indexOf("o", 2)); */

//tüm m leri bulan for döngüsüyle bir kod yazın

// Replace Methodu

var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
var n = str.replace('Lorem', 'merhaba')

const x = 6%2;
const y = x ? "one ": "two";
console.log(y);

