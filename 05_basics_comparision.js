//< > <=/>=(comparision operator) and ==(equality operator) work differently. Comparisions convert null to a number like 0.

//Comparisions
console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true


console.log(undefined < 0);  //false
console.log(undefined == 0); //false
console.log(undefined > 0); //false

// ==== strict check => checks data type too
console.log("2"==2);  //true
console.log("2"===2); //false
