let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueinNum = Number(score)

console.log(typeof valueinNum);
console.log(valueinNum);


//NaN - Not a Number

let score1 = "33abc"

console.log(typeof score1);
console.log(typeof(score1));

let valueinNum1 = Number(score1)

console.log(typeof valueinNum1); //it gives a number but value in NaN
console.log(valueinNum1);


//null convert
let valueinNum2 = null
console.log(typeof valueinNum2); //it gives a number but value in NaN
console.log(valueinNum2);

//undefined convert
let valueinNum3 = undefined
console.log(typeof valueinNum3); //it gives a number but value in NaN
console.log(valueinNum3);

//boolean convert
let valueinNum4 = false
console.log(typeof valueinNum4); //it gives a number but value in NaN
console.log(valueinNum4);


let islogged = "sahil" //string with value //1 
let islogged1 = "" //empty string //0 

let boolislogged = Boolean(islogged)
let boolislogged1 = Boolean(islogged1)
console.log(boolislogged); //true
console.log(boolislogged1); //false


let someNumber = 33
let stringsomenum = String(someNumber)
console.log(typeof(stringsomenum)); //string
