const given = prompt("please enter your number").split(',');
const arry1 = given;
let sayı = 1;
for(let i; i<arry1.length; i++){
    let eleman = arry1[i]
    sayı *= eleman
};


console.log(sayı);