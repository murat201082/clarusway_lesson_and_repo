// console.log('» index.js is running');

/* const person = {
  firstName: 'Barry',
  lastName: 'Mitchell',
  birthYear: 1977,
  skills: ['JS', 'AWS', 'Docker', 'Python'],
  employed: true,
}; */

/* console.log(person);
console.log(person.firstName);
console.log(person['birthYear']); */

// console.log(person.midName);
// console.log(person['2022']);

// let year = 2022;
// console.log(person[year]);
// console.log(person.year);

/* let tag = 'Year';
console.log(person['birth' + tag]);
let tag1 = "Name";

console.log(person["last" + tag1]);
 */
/* person.birthYear = 1979;

person.firstName = 'Adam';

person.firstName = "Martin"
person.birthYear = "1985"

console.log(person.firstName); */
/* const student = [birinci={adı : "Murat", soyAdı:"Alaka", sınıfı:"1/c", okulu:"Erciyes İlkokulu"}, second={adı:"Yakup", Soyadı:"Alaka", sınıfı: "1/a", okulu: "İstanbul İlkokulu"},]


for (const keys of Object.keys(student)) {
  console.log(keys);
}
 */
/* const comments = [
  {userName: 'Mark', comment: 'very good', likes: 99},
  {userName: 'John', comment: 'bla bla bla', likes: 2},
]  */

/* for (const key of Object.keys(comments)) {
  //Object.values()
  console.log(key);
} */

/* for (const [key, value] of Object.entries(person)) {
  console.log(`${key} :->: ${value}`);
} */

// * Methods

/*  const person = {
   firstName: 'Barry',
   lastName: 'Mitchell',
   birthYear: 1977,
   workYear :2000,
   skills: ['JS', 'AWS', 'Docker', 'Python'],
   employed: true,
   calcAgeBad: function (bYear) {
     return 2022 - bYear;
   },
   calcYear(){
     return 2022 - this.workYear
   },
   
   calcAge() {
     /* this.age = 2022 - this.birthYear;
     return this.age; 
     return 2022 - this.birthYear;
   },
   
 }
 person.birthYear = "1982"
 person.skills = ["sql", "java"]
 person.workYear = "1980"
 console.log(person.calcAge());
 
 console.log(person.calcYear());*/  

// function f1() {
//   console.log(this);
// }

// f1();
/* function f2() {
  console.log(this);
}
f2(); */

// ! THIS examples

/* const calcAge = function (birthYear) {
  console.log('Regular Function in Global Scope');
  console.log(this);
  console.log(2022 - birthYear);
};

calcAge(1977); */




/*

const calcAgeArrow = (birthYear) => {
  console.log('Arrow Function in Global Scope');
  console.log(this);
  console.log(2022 - birthYear);
};

calcAgeArrow(1980); */

/* const teacher = {
  birthYear: 1985,
  calcAge() {
    console.log('Regular Function in Object');
    console.log(this);
    console.log(2022 - this.birthYear);
  },
  
  calcAgeArrow: () => {
    console.log('Arrow Function in Object');
    console.log(this);
    console.log(2022 - this.birthYear);
  },
  calcAgeDelayed() {
    setTimeout(function () {
      console.log('Regular Function in setTimeout');
      console.log(this);
      this.calcAge();
    }, 2000);
  },
  calcAgeDelayedArrow: function () {
    setTimeout(() => {
      console.log('Arrow Function in setTimeout');
      console.log(this);
      this.calcAge();
    }, 2000);
  },
};

const student = {
  birthYear: 1995,
}; */

/* function ali(){
  let birthYer = 1985
 
  console.log(2022 - birthYer);
}
ali(); */

/* student.calcAge = teacher.calcAgeArrow;

student.calcAge(); */

/* const myFunc = teacher.calcAge;

teacher.calcAge();
myFunc(); */

// teacher.calcAge();
// teacher.calcAgeArrow();
// teacher.calcAgeDelayed();
// teacher.calcAgeDelayedArrow();

/* let anObject = {
  firstName: 'John',
  age: 30,
  isMarried: false,
  
  introduce: () => {
    return `${this.firstName} is ${this.age} years old.`;
  },
  introduce2: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
  
 introduce1: function (){
  return `${this.age} is beatiful age`;
 },

 introduce3: () => {
   return `${this.isMarried} is not good`;
 },
 introduce4 : ()=>{
return `${this.firstName} and this age ${this.age} so good`;
 },
 introduce5 : function() {
return `${this.firstName} is, i loved`;
 },
  
};
anObject.age = 25;
anObject["firstName"] = "Ali"
anObject.isMarried = true

console.log(anObject.introduce());
console.log(anObject.introduce2());
console.log(anObject.introduce1());
console.log(anObject.introduce3());
console.log(anObject.introduce4()); 
console.log(anObject.introduce5());*/
 
// ! CLASS STRUCTURE

// class syntax
/*  class Pet {
   constructor(name, age) {
     this.name = name;
     this.age = age;
   }
   
   walk() {
     console.log('Im walking');
   }
   speak() {
     console.log( 'I like humans');
   }
    
myPet = new Pet("cat", 5);
myPet() */
/* myPet.walk(); */


// class Cat extends Pet {
//   #weight = 5555;
//   constructor(name, age, color) {
//     super(name, age);
//     this.color = color;
//   }

//   speak() {
//     let prevMsg = super.speak();
//     prevMsg = ' and I like to meow';
//     return this.#weight;
//   }
// }

// const muezza = new Cat('Müezza', 2, 'grey');
// muezza.#weight = 4;
// muezza.name = 'Riza';
// console.log(muezza);
// console.log(muezza.speak());
// muezza.walk();
// console.log(muezza.weight);

// ! prototypes

// function Pet2(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Pet.prototype.walk = function () {
//   console.log('Im walking');
// };
// Pet.prototype.speak = function () {
//   return 'I like humans';
// };

// const myPet2 = new Pet('Karabas', 4);
// console.log(myPet2);

// function Cat2(name, age, color) {
//   // constructor function
//   this.name = name;
//   this.age = age;
//   this.color = color;
// }

// Cat2.prototype = Object.create(Pet2.prototype);

// const pisi = new Cat2('Pisi', 1, 'yellow');
// console.log(pisi);
// pisi.walk();

// // const arr = [1, 2, 3];
// // console.log(arr.__proto__);
// // console.dir(((x) => x + 2).__proto__);

class human {
  constructor(name, surName, school){
    this.name = name;
    this.surName = surName;
    this.school = school;
    }
}
class people extends human{
  constructor(name, surName, school, age,weight){
        super(name, surName, school)
        this.age = age;
        this.weight = weight;
  }
 
  getFullName(){
    let fullName = `${this.name} ${this.surName} and my school ${this.school} and my age ${this.age} and my weight ${this.weight} ${this.mood} ${this.married}`
    return fullName;
  }
  editName(newName){
const myName = newName.split(" ");
this.name = myName[0];
this.surName = myName[1]
this.school = myName[2]
  }
}
 class insan extends people{
    constructor(name, surName, school, age,weight, mood, married){
    super(name, surName, school, age,weight);
    this.mood = mood;
    this.married = married
    
  }
  }
  
//const person = new people("ali", "osman", "erciyes", 34, 42);
/* console.log(person.getFullName());
person.editName("Murat sertkaya erciyes ");
console.log(person.getFullName()); */
const ins = new insan("ali", "osman", "erciyes", 34, 42, "iyi", "false")
ins.editName("Ali Enver Zafer");
console.log(ins.getFullName());


class veli{
  constructor(names, surnames){
    this.names = names;
    this.surnames = surnames;
    
  }  
  getFullNames(){
      let beno = `hi my name is ${this.names} and my surname is ${this.surnames}`
      return beno;
    }
  }
    const bens = new veli("Ali", "Ekber");
    console.log(bens.getFullNames());