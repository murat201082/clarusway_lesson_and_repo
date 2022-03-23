/* const hayvan2 = document.querySelector(".hayvan"); */
/* const person = {
    name: 'john',
    birthYear : 1956,
    location : {
        city : 'NewYork'
    },
    get age(){
        return new Date().getFullYear() - this.birthYear;
    },

    set age(value){
        this.birthYear = new Date().getFullYear()-value;
    },
  
}
console.log(person.age);
console.log(person.birthYear);
person.birthYear = 1977;
console.log(person.age);
person.age = 22;
console.log(person.birthYear);

 */
/* const hayat= {
    adı:"Murat",
    soyadı:"SERTKAYA",
    dogumYılı :"1985",
    uni:"Marmara Üniversitesi",

    get yas(){
    return new Date().getFullYear() - this.dogumYılı;
},
    set yas (deger){
        if(160>deger && deger>1 ){
    return this.dogumYılı = new Date().getFullYear() - deger;}
},

};
console.log(hayat.yas);
hayat.yas = 2;
console.log(hayat.dogumYılı);
 */

/* const hotel = {
    brand: 'Hotel Clarusway',
    categories: ['Spa', 'Swimming Pool', 'Resort'],
    options: ['just stay', 'free breakfast', 'all inclusive'],
    rooms: ['2-bed', '3-bed', '4-bed'],
    receptionHours: {
      mon: { open: 8, close: 22 },
      fri: { open: 9, close: 21 },
      sat: { open: 10, close: 20 },
    },
  
    reservation(arrival, departure, optionIndex = 0, roomIndex = 0) {
      console.log(
        `${this.rooms[roomIndex]} is booked with ${this.options[optionIndex]} between ${arrival}-${departure}`
      );
    },
  
    book: function ({ arrival, departure, optionIndex = 0, roomIndex = 0 }) {
      console.log(
        `${this.rooms[roomIndex]} is booked with ${this.options[optionIndex]} between ${arrival}-${departure}`
      );
    },
  };
   
  const {mon:{open, close}} = hotel.receptionHours;
  console.log(open,close);

  const {open:opening, close:closing} = hotel.receptionHours.fri;
  console.log(opening,closing);
 */
/*   const teacher = {
    birthday : 1986,
    calcAge(){
        console.log(2022 - this.birthday);
    }
};
console.log(teacher); */

/* const student = {
    birthday: 2000,

}
student.hesap = teacher.calcAge;
student.hesap() */

/* const insan = {
  adı:"Murat",
  soyadı : "SERTKAYA",
  okulu: "Marmara",
  doğumYılı : 1985,
  hesap(){
    console.log(2022 - this.doğumYılı);
  }
};


const hayvan = {
  adı:"fıçkırık",
  soyadı : "fıçfıç",
  doğumYılı : 2021,

};
/* hayvan.hesap2 = insan.hesap;
hayvan.hesap2()
console.log(hayvan); */
/*for([key,value] of Object.entries(hayvan)){
  
  hayvan2.innerHTML +=` ${key}  =>  ${value} ,` ;

} */

/* class Insan{
  constructor(adı, soyadı){
    this.adı = adı;
    this.soyadı = soyadı;}

    isi(){
      console.log("iyi çalışır");
    }
    konus(){
      console.log("farklı diller konuşur");
    }
  } */
// const kim = new Insan("murat", "sertkaya")
// kim.isi()

/* class başka extends Insan{
  constructor(adı,soyadı,okulu,doğumYılı){
  super(adı,soyadı)
 this.okulu = okulu;
 this.doğumYılı = doğumYılı;
 
  }
}


const yeni = new başka("Murat", "sertkaya", "erciyes", 1985);
yeni.isi()
/*  
/* for (const [key,value] of Object.entries(yeni)) {
  console.log(`${key} : ${value}`)
}
 */ 
const osman =(a,b,c) => a * b * c;
const toplam = (ali)=>{
  const num1 = 34;
  const num2 = 38;
  const num3 = 39;
  console.log(ali(num1,num2,num3));
};
toplam(osman)

const arr1 = ["ali", "ömer", "tufan", "tarık"];

const arr2 = arr1.map((a, i)=> i+1 + ": adı : " + a);
console.log(arr2);
console.log(arr2[0]);

 
    
  




