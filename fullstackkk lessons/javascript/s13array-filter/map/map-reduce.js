// *-----------------------------------------------------
// *                      FOREACH
// *-----------------------------------------------------

const students = ["Bedirhan", "Tuncay", "Mesut", "Enes", "Onur", "yasin"];

//? 1.Method
const print = (name)=>{
  console.log(name);
  
}

students.forEach(print);




//? 2.Anynmous Method
console.log("*******************************");
students.forEach((student) => console.log(student));

//? Example
const payments = [100, 300, -200, 500, -400, 225, 1000, -700];
let toplam = 0;
payments.forEach((payment) => (toplam += payment));
console.log(toplam);

//! foreach doesnt return
// const sumofPayments = payments.forEach((p) => (sum += p))
// console.log(sumofPayments);

//* Example
payments.forEach((payment, i) => {
  payment > 0 ? console.log(i+1, `you deposit${payment}`) : console.log(i + 1,`you withdraw ${payment}`);
});


//*-----------------------------------------------------
//*                      MAP
//*-----------------------------------------------------

//* multiply each element of array by 2
//*-------------------------------------------------------
const numbers = [2, 3, 5, 6, 8];
const doubled = numbers.map((n) => n * 2);
console.log(doubled, numbers);

//* if a grade is less than 50, increase it by 20% oherwise
//* increase it by 10% and store all value in the grades array.
//*-------------------------------------------------------
let grades = [30, 50, 77, 38, 44, 80];

grades = grades.map((grade) =>
  (grade > 50 ? grade * 1.1 : grade * 1.2).toFixed(2)
);
console.log(grades);

// grades = grades.map((grade) => {
//  return grade > 50 ? grade * 1.1 : grade * 1.2;
// });

// console.log(grades);

//? Modified
const gradesInfo = grades.map((grade, index) => {
  const newGrade = (grade > 50 ? grade * 1.1 : grade * 1.2).toFixed(2);
  return `${index + 1}. Student's Grade: ${newGrade}`;
});
console.log(gradesInfo);

//* Test the each item of the words array whether palindromic or not.
//* Return the result as an array which consists of true or
//* false values for each item
//*-------------------------------------------------------

const words = ["mum", "kek", "gel", "??s??", "iyi"];

// const checkPalindrome = words.map((word) => [...word].reverse().join('') === word)
// console.log(checkPalindrome);

//?ALternativly
// const chekPalindrome = words.map((w) => {
//   const reverse = w.split("").reverse().join("");
//   if (reverse == w) {
//     return w;
//   }
// });
// console.log(chekPalindrome);

// *-----------------------------------------------------
// *                      FILTER
// *-----------------------------------------------------

//* Return the palindromic item in the words as an array
const checkPalindrome = words.filter(
  (word) => [...word].reverse().join("") === word
);
console.log(checkPalindrome);

//* Convert to uppercase palindromic items and print in the console
const s??ra = document.querySelector("#s??ra");
words
  .filter((word) => [...word].reverse().join("") === word)
  .map((word) => word.toLocaleUpperCase())
  .forEach((word) => s??ra.innerHTML += `
  <ul>
  <li>
     ${word} 
  </li>
</ul>` );
  

// *-----------------------------------------------------
// *                      REDUCE
// *-----------------------------------------------------

//* calculate the sum of all elements of array
//* and print result into console
//*-------------------------------------------------------
const salaries = [10000, 15000, 32000, 43000, 20000];

const avgSalaries =
  salaries.reduce((acc, salary) => acc + salary, 0) / salaries.length;
console.log(avgSalaries);

//*
const graeterThan20000 = salaries
  .filter((s) => s > 20000)
  .reduce((acc, s) => acc + s, 0);
console.log(graeterThan20000);

// * ======================================================
// *                NESTED ARRAY ITERATION (JSON)
// * ======================================================

const personels = [
  {
    id: 1,
    name: "Ali",
    surname: "Y??lmaz",
    job: "developer",
    age: 30,
    salary: 5000,
  },
  {
    id: 2,
    name: "Ay??e",
    surname: "Y??lmaz",
    job: "tester",
    age: 35,
    salary: 3000,
  },
  {
    id: 3,
    name: "Mehmet",
    surname: "??zt??rk",
    job: "team lead",
    age: 40,
    salary: 7000,
  },
  {
    id: 4,
    name: "Fatma",
    surname: "Ayaz",
    job: "developer",
    age: 26,
    salary: 4500,
  },

  {
    id: 5,
    name: "Can",
    surname: "Deniz",
    job: "tester",
    age: 24,
    salary: 3500,
  },
];
console.log(personels);

//* EXAMPLE1: display the jobs in the people array.
personels.forEach((p) => console.log(p.job));

//* EXAMPLE2: increment the ages by one and store them to a new array.
const ages = personels.map((p) => p.age + 1);
console.log(ages);

//* EXAMPLE3: Create new Object which consists of uppercased name + surname and incremented the age by 5.

const newPersonels = personels.map((p) => {
  return {
    name: p.name.toLocaleUpperCase() + " " + p.surname.toLocaleUpperCase(),
    age: p.age + 5,
  };
});

console.log(newPersonels);

//* EXAMPLE4: List the person's names whose age is under 33.

//* EXAMPLE5: Store the names and ages of the developers as a new Object.

//* EXAMPLE6: calculate avg age of  people.

//*EXAMPLE7: Increase the salaries of developers by 20% and
//* calculate sum of increased salary of devs.

//*EXAMPLE8: Increase the salaries of developers by 20% and
//* update the personels object.

//*EXAMPLE9: Delete personel whose id is equals to 4;
//* Exmple: deleteById(4)


let a = [];
let c= [];
const ??deme = [100, 300, -200, 500, -400, 225, 1000, -700];
??deme.forEach((??de) => {
  return ??de > 0 ? a.push(??de*5) : c.push(??de) 
});
console.log(a);
console.log(c);


 let son = 0;
a.forEach((b) => {
  return( son += b);
});
console.log(son);

 let son1 = 0;
c.forEach((d) => {
  return( son1 += d);
});
console.log(son1);

console.log(son + son1);



let notlar = [30,50,77,38,44,80,65,89,40 ];
const nots = document.getElementById("not");
notlar = notlar.map((x,i) => {
  const yeniNotlar = (x <50 ? x * 1.2 : x * 1.1).toFixed()
  return `${i +1}. ????rencinin Notu ${yeniNotlar}` 
  
 


});
 nots.style= "color : purple;";
 nots.style.backgroundColor= "yellow";
 nots.style.fontSize= "2rem";
 nots.style.border= "dotted";

const asy = notlar.map((a) =>{
  nots.innerHTML += `  <li> ${a} </li>`
  });
console.log(notlar);

const fsa = [6,5,4,3,2,1];

const fac = fsa.reduce((x,y) =>  x*y, 1)
  console.log(fac);





