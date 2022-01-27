/* let i = 0;
let sum = 0;
while (i<6){
    sum = sum +i
    i++
}
console.log({sum});  */

//do while yapısı birkere yap sonra çık
/* let i = 4;
let sum = 0;
do{
    sum += i
    i++
} while(i < 6)
console.log({sum}); */

/* let i = +prompt('lütfen bir sayı giriniz');

console.log(isNaN(i),{i}); //isNaN rakam yazıldığında false olan değerdir. while döngüsünü isNanla yaptığımızda rakam girdiğimizde false olacağı için while döngüsü devreden çıkacaktır
 */
let i = +prompt('lütfen bir sayı giriniz');
while (isNaN(i)){
    i = +prompt('bir sayı giriniz')
}
console.log('doğru girdiniz');


/* for (i = 0 ; i < 10; i++){
    console.log(i);
}  */

/* let i = 0;
for (; i < 10; ){
    console.log(i);
    i++
} */ 
// iki for döngüsü şeklide çalışır
/* var i = 0; 
var sum = 0;
while ( i < 5){
    sum += i;
    
    i++
}
document.write(sum) */
/* let i = 0;
let sum = 0;
while (i<9) {
    i +=sum
    i++
    sum++
document.write(i);    
}
 */