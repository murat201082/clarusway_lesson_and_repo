/* function add100(a){
    return a +100
}
let toplam = function(a){return a + 100} */

// ARROW FUNCTİON
/* let ahmet = (a) => {
    return a +100
}
console.log(ahmet(10)); */

/* let mehmet = (a) => a + 100;
console.log(mehmet(20)); */

/* let toplam = a => a + 100;
console.log(toplam(6));
 */

/* let ali = (a,b) => a * b / 10
console.log(ali(1,2)); */

/* let sum = (a, b, c, d) => a * b * c *d;
console.log(sum(2,5,2,2)); */

/* let user = 'Murat';
let sayHi = () => console.log(`Welcome ${user}`);
sayHi() */
/* let toplam2 = (num1, num2) => num1 + num2;
console.log(typeof toplam2()); */

// with anonymous with recursive expression

/* let iife = (function sum (n){
    return n*(n+1)/2
})(3)

console.log(iife); */

let sayı = 4
let iife = (function sum (n){
    return n*(n+1)/2
})(sayı)

console.log(iife);