
let number1 = +prompt("please enter your number : a")
let number2 =+prompt( "please enter your number : b")
let number3 = prompt("please enter your operation : +,-,/ or * ")
let result ;
switch (number3) {
    case '+':
        result =number1 + number2
        break;
    case '-':
        result =number1 - number2
        break;
    case '*':
        result =number1 * number2
        break;
    case '/':
        result =number1 / number2
        break;

    default:
        result = "this is not number";
        break;
}
console.log(result);