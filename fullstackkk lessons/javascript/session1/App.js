/* console.log("I'm from file");

var x = 7;
var y = 5;

console.log({x});
console.log({y});
y = x;
console.log({y}); */

// var alert = 'Merhaba'
// console.log({alert});

// alert('Hey')

/* var a = 'Global';
console.log(a);
{
    let a = 'Scope'
    console.log(a);
    {
        let a = 'inner scope'
        console.log(a);
    }
    console.log(a);
}


console.log(a); */




// let c = 3;
// console.log(c);
// let c = 5;
// console.log(c);

// var a;
// let aa= 3;



// const h = 'constant variable'
// console.log(h);
// h = '2'

/* console.log(d);
var d = 6;
console.log(d);

console.log(e);
let e = 5;
console.log(e); */
/* var f;
console.log(typeof f);

f=5;
console.log(typeof f);

f = 'Merhaba ben string';
console.log(typeof f); */

/* console.log(typeof 5);
console.log(typeof 5.45);
console.log(typeof -2);
console.log(typeof 0);
console.log(typeof(0/1));
console.log(typeof NaN);
console.log(typeof (typeof 5));
console.log(1/0);
console.log(Infinity); */
/* var Merhaba = 'Merhaba'
var selam = "Sanada Selam\"mark"
console.log(Merhaba);
console.log(selam);
 */
/* console.log(Boolean(""));//False
console.log(Boolean(" "));//true
console.log(Boolean(3<5));//true
console.log(Boolean(3>5));//false
console.log(Boolean(3==5));//false
console.log(Boolean(0));//false
console.log(Boolean('0'));//true
var s;
console.log(Boolean(s));//false undefined
console.log(Boolean(null));//false
console.log(typeof(s));
console.log(typeof null);

console.log(null == false);
console.log(null == true);
console.log(null == undefined);
console.log(null === undefined);
console.log(2 == '2');
console.log(2 === '2');
console.log(2 + + '2');
console.log(2 +  '2'); */
/* let mur = [1,2,3,4,5,6];
let sum = 1;
for(let i = 1 ; i < mur.length +1;i++ ){
sum *= i

}
let j = sum;
let k = []
for (let j = sum; j > 0; j--) {
    
   if( sum % j == 0){
k.push(j)
if (mur.length == k.length){
    break
}
}
    
};
console.log(k);

 */

let a = ["c", "d", "e", "f", "g", "h"];
return(
    <div>
    {a.map((it)=>(
        <p>{it}</p>
    ))}
    </div>
);
