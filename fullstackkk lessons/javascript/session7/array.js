/* let cars = ["opel", "audi", "bmw"]
console.log(cars); */

/* let num1 = new Array('ali', 'veli');
console.log(num1); */

/* const cars = ["opel", "audi", [1,2,'tesla'], "bmw"]; */

/* console.log(cars[0]); */
/* console.log(cars[2][2]); */

/* cars[2] = 'posche' const un adresini değiştirmediğimiz sürece değişiklik yapabiliriz const a arrayin içeriği değiştirilebilir ancak conts taki array tamamen değiştirilemez eklmeye izin verir.

console.log(cars);
cars = [1,2,3,4] 

console.log(cars); */

/* let cars = ["opel", "audi", [1,2,'tesla'], "bmw"];

/* console.log(cars[0]); */
/* console.log(cars[2][2]); */

/*cars[2] = 'posche'
console.log(cars);
cars = [1,2,3,4]

console.log(cars); */


/* let cars = ["opel", "audi", [1,2,'tesla'], ,,,,, "bmw"];
cars[2] = 'posche'
console.log(cars);
/* cars[3][1] =  "Fiat"  *///bu şekilde olabilirmiş
/*console.log(cars); */

/* const cars = ["opel", "audi", [1,2,'tesla'], "bmw"];
console.log(typeof cars);
console.log(cars instanceof Array); */



/* const cars = 2;
console.log(typeof cars);
console.log(cars instanceof Array); */

/* const cars = ["opel", "audi", [1,2,'tesla'], "bmw"];
console.log(typeof cars);
console.log(cars instanceof Array);
console.log(Array.isArray(cars)); */

/* const cars = ["opel", "audi", [1,2,'tesla'], "bmw"];
console.log(cars.length ); */


//Concat
//length
/* const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon";

console.log(fruits)
console.log(fruits.length)
 */

/* const fruits = ["Banana", "Orange","Lemon"];
const vegetables = ['Broccoli','Celery','Parsley','Artichoke']/*  */

/* console.log(fruits.concat(vegetables));
console.log(vegetables);
console.log(fruits);
console.log(fruits.concat("fig", 3, "pear").concat(vegetables)); */
/*console.log('' + fruits);
console.log(+ fruits);
console.log(fruits.toString());
console.log(fruits + ' ' +  vegetables); */

//Sort

/*

const num = [40, 100, 1, 5, 25, 10];

console.log(num.sort());

console.log(num.sort((a,b) => a-b));
console.log(num.sort((a,b) => b - a)); */
/* const daltones = ['Joe','Jack','William','Avarel'];//orjinali bozar
console.log(daltones.reverse());
console.log(daltones); *///orjinal değişti

// PUSH VE POP
/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("pears");
console.log(fruits);
fruits.push('pears', 'pineapple')
console.log(fruits);

console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits); */


//Shift ve Unshift shift baştakini siler unshift ise baştakine ekler
/* const fruits = ["Banana", "Orange", "Apple", "Mango"]
const deleted = fruits.shift();
console.log(fruits);

const uns = fruits.unshift('pears', 'pine apple', 2, [2,3,4]);// bu işlem bize yeni oluşan arrayin uzunluğunu veriri
console.log(uns);
console.log(fruits);
 */

// Splice methodu birinci değer başlangıcı gösteriri ikinci parametre kaç eleman silineceğini gösterir. silinenleri array olarak döndürür.!!!silinenleri array olarak döndürür
/* let names = ["john", "edward", "victor"];
let deleted = names.splice(1,2, "mark", "james");
console.log({deleted});
console.log(names); */

/* let names = ["john", "edward", "victor"];
let deleted = names.splice(1,1, "mark", "james");
console.log({deleted});
console.log(names); */

//Slice orjinal içeriği bozmaz array içerisinden başlangıç ve bitiş aralığını getir

/* const months = ['Jan', 'March', 'April', 'June',"july"];
const springs = months.slice(1,3);
const springs1 = months.slice(-4,-2);
const springs2 = months.slice(1,-2);
const springs3 = months.slice(2,-6);
console.log(springs);
console.log(springs1);
console.log(springs2);
console.log(springs3);
console.log(months); */

// İndexof ve Lastindexof indexof baştan ilk bulduğunu lastindexof ise sondan ilk bulduğunu getirir
/* let months = ['Jan', 'March', 'April', 'June',"july"];
let spring = months.indexOf('June', 3)
console.log(spring); */

//indexof lastindexof
/* const colors = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];
const x = colors.indexOf("Green", 3)
console.log(x) */

const colors = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];
const last = colors.lastIndexOf("Blue", 6)
console.log(last)















