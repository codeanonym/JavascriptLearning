//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "123abc"
tinderUser.isloggedin = "123abc"
console.log(tinderUser);


const regularUser= {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudahary"
        }
    }
}
console.log(regularUser);

console.log(regularUser.fullname?.userfullname.firstname);


const obj1 = {1:"a" , 2:"b"}
const obj2 = {1:"a" , 2:"b"}

//const obj3 = obj1 + obj2 //not works

const obj3 = {obj1, obj2}
console.log(obj3);


const obj4 = Object.assign(obj1, obj2)
console.log(obj4);

const obj5 = Object.assign({},obj1, obj2)
console.log(obj5)

const obj6 = {...obj1, ...obj2}
console.log(obj6);
