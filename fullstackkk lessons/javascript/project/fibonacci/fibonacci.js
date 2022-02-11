
    
function fibo(fib) {
    let num_1 = 1;
    let num_2 = 1;
    let list = [];
    let sum = 0;
    while(true){
        list.push(num_1);
        sum = num_1 + num_2;
        num_1 = num_2;
        num_2 = sum;
        if (list.length - 1 == fib){
            break
        }

    }
    return list[fib];
}
console.log(fibo(4));


/* let number = prompt('Enter the number: ');
let n1 = 0;
let n2 = 1;
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum= n1 + n2;
    n1 = n2;
    n2 = sum;
}
console.log (sum) */

/* function fibonacci (num) {
    array = [0,1]
    for (let i = 1; i < num; i++) {
        array.push(array[array.length - 1] + array[array.length - 2])
    }
    console.log('array', array);
    return array[array.length - 1]}
    console.log(fibonacci(9)); */

/*     function fibo(x) {
        if (x == 1){
            return 1;

        }else if (x == 2){
            return 2;
        }else{
            return fibo (x-1) + fibo (x-2)
        }
    }
    console.log(fibo(10)); */

   /*  function fibo(n){
        let fiboNums =[0,1];
        for (let i = 0; i < n; i++) {
        fiboNums.push(fiboNums[i]+fiboNums[i+1])    
        }
        return fiboNums
    }
    console.log(fibo(+prompt("How many times do you want to iterate :" + fiboNums()))); */

  /*   let a = prompt("lütfen bir kelime giriniz");
    console.log(a.split("").reverse().join("")); */

   /*  let list = ["a", "b", "c"];

    console.log(list.reverse("").join("")); */