// Primitive 

// 7 Type : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 5547725288796653426n 



// Reference (Non primitive)

// Array, Objects, Functions
  
const heros = ["Niraj", "Naagarjun", "Saktiman"];
let myObj = {
    name: "niraj",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp);