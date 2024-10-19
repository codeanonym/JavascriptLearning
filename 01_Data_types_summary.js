// How data is stored in memory and accessed?
// primitive types //original data not provided, copy provided for use
//     1. String
//     2. Number
//     3. Boolean
//     4. null
//     5. undefined   eg. let userEmail;
//     6. Symbol      eg>.
const id = Symbol('123')
const anotherid =  Symbol('123')
console.log(id);
console.log(anotherid);

console.log(id === anotherid); //false

const bigNumber = 123456789n  //'n' for bigint

//     7. BigInt
// and 
// reference (non-primitive) types
//     1. Array
//     2. Object
//     3. Function
const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name:"sahil",
    age:22,
}
const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber); //typeof tells datatype
console.log(typeof myfunction); //returns function but it is called function object
//data type of non-primitive type always returns object.

// Is JS statically typed or dynamically typed?
