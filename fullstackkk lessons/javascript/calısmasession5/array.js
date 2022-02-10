/* let students = ['john', 'ali', 'veli']; */
/* function sayHi(studentName) {
    console.log(`Welcome ${studentName}`);
    
}

for (let i = 0; i < students.length; i++) {
    
    sayHi(students[i])
} */
/* let students = ['john', 'ali', 'veli'];
function sayHi(student){
    for(let i = 0; i < students.length; i++ ){
        console.log(`Welcome ${students[i]}`);
    }
}
sayHi(students) */

/* function sum() {
    let sum = 0;
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum;
    
}
console.log(sum(1,2,3,4,5,6)); */
//  RES PARAMETRELERİ(OPERATÖRLERİ)

/* function sum(a,b,...others) {
    let sum = 0;
    
    console.log(arguments);
    console.log(others);
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
        
    }
    return sum *a;
}
console.log(sum(5,2,3,4,5,6,7)); */
/* 
function bill(item, tax){
    let total = 0;
    for (let i = 0; i < item.length; i++) {
        total += item[i] + item[i]*tax;
        
    }
    return total;
}
console.log(bill([5,6], 0.18)); */

/* function bill(tax, ...list){
    console.log(list);
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i] + list[i]*tax;
        
    }
    return total;
}
console.log(bill(0.18,5,6,7,8 )); */

// function bolme 
/* function bolme (num1,num2){
    if (num2 === 0){
        return 'zero division error'
    }else{
        return num1/num2
    }

}
console.log(bolme(12,0)); */

/* function bolme (num1,num2){
    if (num2 === 0)return 'zero division error'
    return num1/num2
    

}
console.log(bolme(12,0)); */
// Ternary if

/* function bolme(num1, num2){
   return (num2 ===0) ?  'zero division': num1/num2;
}
console.log(bolme(12,6)); */

/* function bolme(num1, num2){
    return num2  ? num1/num2 :'zero division' ;
 }
 console.log(bolme(12,0)); */

//  Pascal Number
/* function topla(a){
    let sum = 0
    for (let i = 0; i < a + 1 ; i++) {
        sum += i
       
    }
    return sum
}
console.log(topla(4)); */

/* function topla(n){
    return n*(n+1)/2
}
console.log(topla(100)); */

/* function pascal3(n){
    if (n === 0) return 0;
    return n + pascal3(n-1)

}
console.log(pascal3(6)); */
// Recursive Fonksiyon çıkış yolu

/* function pascal3(n){
    return (n === 0) ? 0 : n + pascal3(n-1)

}
console.log(pascal3(6)); */



