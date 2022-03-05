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
   
  const {mon:{open, close}} = hotel.receptionHours;
  console.log(open,close);

  const {open:opening, close:closing} = hotel.receptionHours.fri;
  console.log(opening,closing);

  