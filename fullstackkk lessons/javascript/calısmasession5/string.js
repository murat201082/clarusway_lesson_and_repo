/* let s1 = 'Hello ';
let s2 = 'World';
let s3 = s1.concat(s2)

document.write(s3); */
/* let x = 'Clarusway'
console.log(x.charAt(0));
document.write(x.charAt(0));
document.write(x.charAt(3)); */
/* let s = 'Hello welcome to the Clarusway!!'
 *//* let n = s.includes('Clarusway')
let b = s.includes('weicome')
console.log(n);
document.write(n)
document.write(b) */

/* let n = s.indexOf('C');
document.write(n);*/
/* let s = 'Hello John, welcome to Clarusway. How are you John?';
let n = s.lastIndexOf('John');
document.write(n)
console.log(n);
 */
/* let s = 'Hello John, welcome to Clarusway. How are you John?';
let n = s.replace('Hello', 'Merhaba');
document.write(n); */

/* let s = 'Hello John, welcome to Clarusway. How are you John?';
let n = s.replace(/john/i, 'Merhaba');
document.write(n); */

/* let s = 'Hello John, welcome to Clarusway. How are you John?';
let n = s.split('');
document.write(n);
console.log(n); */

/* let s = 'Hello John, welcome to Clarusway. How are you John?';
let n = s.split(' ');
document.write(n);
console.log(n); */

/* let s = 'Hello John, welcome to Clarusway. How are you John?';
let n = s.split("1m");
document.write(n);
console.log(n) */;

/* let s = 'Hello John, Welcome to Clarusway.';
let n = s.substr(12,7);
document.write(n); */

/* let s = 'Welcome to Clarusway.';
let n = s.substring(5,1);
console.log(n); */

/* let s = 'WELCOME TO CLARUSWAY';
document.write(s.toLowerCase()); */

/* let s = 'WELCOME TO CLARUSWAY';
document.write(s.toUpperCase()); */

/* let s = '   WELCOME TO      CLARUSWAY    ';
let n = s.trim()
document.write(n);
console.log(n); */

/* let str4 = new String('merhaba işler nasıl')
let s = 'Welcome to Clarusway.'
console.log(str4);
console.log(str4.length);
console.log(s.length); */

/* let str1 = 'ali'
console.log(str1.indexOf('l')); */

function mget(b){
    
    let a = 0
    for (let i = 0; i < b.length; i++) {
        if (b.indexof('m') ){ 
            a += 1;
        }
        
    }
    
    return a;
}
console.log(mget('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam provident numquam minima nihil ducimus! Eum aliquid cupiditate doloremque, earum qui modi possimus esse laboriosam suscipit ullam. Repellendus alias eius velit!'));
