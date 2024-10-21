const mySym = Symbol("key1")
const mySym1 = Symbol("key12")
const Juser = {
    name: "Sahil",
    "full name": "Sahil B",
    mySym: "mykey1",
    [mySym1]: "mykey21"   // to use as a symbol, must place it in square bracket
}                           // to use symbol it must be first declared above object

console.log(Juser.name);
console.log(Juser["name"]);
console.log(Juser["full name"]);
console.log(Juser.mySym);
console.log(typeof Juser.mySym);
console.log(Juser["mySym"]);
console.log(Juser[mySym]); //not in bracket, use double quote
console.log(Juser[mySym1]);//in bracket don't use double quote
console.log(Juser.mySym1);
console.log(typeof Juser.mySym1);


Juser.name = "Sahil Rajavanshi" // to change a value
console.log(Juser["name"]);     



console.log(Juser);


Juser.greeting = function(){
    console.log("hello juser");    
}

Juser.greeting2 = function(){
    console.log(`hello juser, ${this.name}`);
}

console.log(Juser.greeting);
console.log(Juser.greeting2);       //returns [Function (anonymous)]
console.log(Juser.greeting());      //returns value when you use ()
console.log(Juser.greeting2());


Object.freeze(Juser)

Juser.name = "Sahil Tiwary"  // value not changed
console.log(Juser["name"]);

const tinderuser1 = new Object()  //constructor => singleton 
console.log(tinderuser1);

const tinderuser = {}       //object literal  => non-singleton
console.log(tinderuser);


tinderuser.id = 1
tinderuser.name = 'Sah'
tinderuser.isloggedin = false

console.log(tinderuser);


const regularUser = {
    email: "fgxkchjvkl@gmail.com",
    fullname: {
        userfullname:{
                firstname: "sahil",
                lastname: "T"
        }
    }
}

console.log(regularUser);
