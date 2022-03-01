console.log('» index.js is running');

/* const person = {
  firstName: 'Barry',
  birthYear: 1977,
  location: {
    city: 'New York',
  },
  get age() {
    return new Date().getFullYear() - this.birthYear;
  },
  set age(value) {
    if (value > 0 && value < 150) {
      this.birthYear = new Date().getFullYear() - value;
    }
  },
};

console.log(person.age);

person.age = 160;
console.log(person.birthYear); */

// **********************************************************************

// const h1 = document.querySelector('h1');
// console.dir(h1);

// **********************************************************************
const hotel = {
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

// ! destructuring

// hotel.reservation('11:00', '23:00', 0, 0);
// hotel.book({
//   roomIndex: 0,
//   departure: '22:30',
//   optionIndex: 1,
//   arrival: '09:00',
// });

/* console.log(hotel.brand);
const { brand, options } = hotel;

console.log(brand);
console.log(options[0]);

const { brand: hotelName, rooms: roomTypes } = hotel;
console.log('hotel name is', hotelName);

const { mon: pazartesi } = hotel.receptionHours;
console.log(pazartesi);

const {
  receptionHours: { mon: Monday },
} = hotel;
console.log(Monday);

console.log('uzun yazim ->', hotel.receptionHours.fri.open);

const openingFriday1 = hotel.receptionHours.fri.open;
const closingFriday1 = hotel.receptionHours.fri.close;

const {
  receptionHours: {
    fri: { open: openingFriday, close: closingFriday },
  },
} = hotel;

console.log(openingFriday, closingFriday); */

// ******************
// Array Destructuring
// ******************

/* const date = [1970, 4, 20];
// traditional way
const year = date[0];
const month = date[1];
const day = date[2];

const [Year, Month, Day] = date;
console.log(Day, Month, Year);

const [year2, , day2] = date;
console.log('year2 :>> ', year2);
console.log('day2 :>> ', day2); */

const nestedArray = [1, 2, [3, 8], [4, 5, 6], 7];
const [first, , third, [forth, fifth], seventh] = nestedArray;
console.log('fifth :>> ', fifth);

console.log(nestedArray[3][2]);

const note = {
  id: 1,
  title: 'My first note',
  date: '25/04/1977',
};

// for (let [key, value] of Object.entries(note)) {
//   console.log(key, '::->', value);
// }

// Object.entries(note).forEach(([key, value]) => {
//   console.log(key, '::=>', value);
// });

// ! default parameters

function greet(user = 'Guest') {
  console.log(`Hello ${user}`);
}

greet('Matthew');
greet();


let newHotel = {...hotel};
newHotel.brand = "HOTEL Menekşe"
console.log(hotel.brand);
console.log(newHotel.brand);

const arr1 = [1,2,3];
const arr2 = [3,4,5];
const arr3 = [...arr1, 10,12,8,... arr2,90,78,96];//!spread oldu arrayin içine yazdı
const arr7 = [33];
arr7.push(...arr1)
console.log(arr7);
console.log(arr2);
console.log(arr1);
console.log(arr3);


const arrValue = ["my", "name", "is", "jack"];
console.log(...arrValue);
console.log(arrValue.join());
const {sat, ...weekdays} = hotel.receptionHours;//!rest oldu değişkenin içine topladı
console.log(sat);
console.log(weekdays);


function sum(...numbers){
  let total = 0;
 numbers.forEach(i => {
   if(isNaN(i)){
     return;
   }
  total += i;
  });
  return total;
}

console.log(sum(1,2,6,7,"mesut",9));

let temperature = ' ';
let result = temperature || "error";
console.log(temperature);
const temStatus = `Temperature is ${temperature ?? "error" }`;
console.log(temStatus);
