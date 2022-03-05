
const students = ["bedirhan", "tuncay", "mesut", "enes","onur"];
//?1.Method
const print = (name)=>{
console.log(name);
};

students.forEach(print) //!return etmeyen fonksiyonlara void fonksiyonlar denir.

//? 2.Anonymus Method
console.log("************************************************************");
students.forEach((name)=>  console.log(name));

//? Example
console.log("*************************************************************");
const payments = [100, 300, -200, 500, -400, 225, 1000, -700];
let sum = 0;
payments.forEach((p)=>(sum += p));
console.log("sum :", sum);

//? Example
payments.forEach((p,i)=> {
p > 0 ? console.log(i +1, `you deposit ${p}`) : console.log(i +1,`you withdraw ${p}`)
});

//! MAP() Methodu!!!!!!!! (orjinal diziyi değiştirmez. kopyasını modifiye eder.)MAP() return eder void değildir!!!
//!---------------------------------------------------------------------------------

const numbers = [2,3,5,6,8];

const doubled = numbers.map((n) => n * 2);
console.log(doubled, numbers);


