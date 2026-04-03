// Primitives 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt;

const score = 100;
const scoreValue = 100.5;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console. log(id === anotherId);

const bigNumber = 123456789012345678901234567890n;



// Reference / not primitive types : Object, Array, Function, 

const heros = ["Shaktiman", "Bheem"];
{
    name : "Hitesh"
    age : 24
}

const mfunction = function() {
    console.log("Hello world");
}



/*

+++++++++++++++++++++++++++++++++++++++++++++++

*/

//Stack(Primitives) and Heap(non primiitive) in memory

let myName = "hiteshchoudaty.com";

let anotherName = myName;

anotherName = "chai or code";
console.log(anotherName);
console.log(myName);
// Copy is changed not original. because of stack memory

let userone = {
 name : "Pratik",
 upi : "pratik@upi",
}
let usertwo = userone;
usertwo.upi = "hitesh@gmail.com";
console.log(userone);
console.log(usertwo);
// data is get from the heap because of {} syntax. so both are pointing to same data in heap memory. so if we change one it will change another 
