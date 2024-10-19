const accountId = 144553
let accountEmail = "sahil@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"

// accountId = 2 //not allowed to change constant value
accountEmail = "sahil@chai.com"
accountPassword = "dfgh"
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);

console.table([accountId,accountEmail,accountPassword])

/*Prefer not to use var becasue of issue in block scope and functional scope. use only let and cons.*/    