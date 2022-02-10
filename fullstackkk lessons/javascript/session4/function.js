/* function sayhi(){
    console.log('Hello');
}
sayhi(); */
/*  let username = 'Münir'
  function sayHi( _name = 'New User'){
      console.log('Hello ${name}');
  }
  sayHi()
  sayHi(username);
  sayHi('Mark') */
 /*  function sayHi(){
      console.log(sayHi('Hello'));
  } */
 /*  function sayHi2(name){
    return('Hello ' + name);
}
console.log(sayHi2('Matthew'));
console.log(typeof sayHi2()); */
/* function add100(num1, num2 = 0){
    return num1 + num2
}
console.log(add100(23, 12)); */

/* let square = function(a){return a**a};
console.log(square(3));
let b = function(c){return c + c}
console.log(b(7));
function ali(sa){
    return sa * sa
}
console.log(ali(5)); */

/* let adder = new Function('a', 'b', 'return a + b' );
console.log(adder(2,6));
console.log(typeof(adder)); */
/* 
let sum = function(a,b){return a + b};
let addTwo = function(num1){
    return sum(+num1, 2)
}
console.log(addTwo(5));
console.log(addTwo('4'));
 */
/* function sayHello(name){
    name && console.log('Hello ${name}');
}
sayHello('mark')
sayHello() */

/* function sayHello(name = 'New User'){
    name && console.log(`Hello ${name}`);
}
sayHello('mark')
 */

/* function square(num1){
    num1 *= num1;
    return num1;

}
let myNum = 4;
console.log(square(myNum));
console.log(myNum); */



/* const student = { name: 'Mesut'};
function f1(st) {
   console.log(`this is ${st.name}`);
   st.name = 'Zeynep';
   console.log(`this is ${st.name}, should be zeynep?`);
}

f1(student);
console.log(student); */
//switch case hesap makinesi ödevi var
/* let str ='Clarusway';
console.log(str.length); */

/* let str ='Clarusway';
console.log(str[0]); */
let str = 'Clarusway';

for (let i = 0 ; i < str.length; i++){
    console.log(str[i]);
}

let a = 4;
let b = 5;
a < b ? console.log('Hello') : console.log('noo');