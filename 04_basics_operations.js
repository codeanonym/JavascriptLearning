let value = 3
let negValue = -value
console.log(negValue);


console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 5); //exponent
console.log(2 / 2);
console.log(2 % 2); //modulus or remainder


let str1 = "hello"
let str2 = "sahil"

let str3 =  str1 + str2 
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32 
// first parameter decides conversion
// don't be dependent on this value, bad code

//don't use this code
console.log(+true);  //1
console.log(+"");    //0 // poor code
//wrong code 
//console.log(true+);

let num1, num2, num3
//bad code; unreadable
//same value reused
num1 = num2 = num3 = 2+2


//operator precedence operator
let gameCounter = 105
gameCounter++; //postfix
console.log(gameCounter) //106 
++gameCounter; //prefix
console.log(gameCounter) //107
