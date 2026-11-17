// 10:36

// VAR, LET AND CONST


// let can be reassigned but cannot be redeclared
// let name = "prudhvi";
// name = 10;

// let name = 'raj'; //error


// ======================================================================
// var can be reassigned and redeclared
// var name = "prudhvi";

// name = "Amulya";

// var name = 10; // it can re declared and reassigned the main advantage is 
// // we can the change the type





// ============================================================================

// VARIABLE AND THEIR SCOPE

{
    var a = 10;
    let b = 20;
    let c = 30;
}

// console.log(a) //var is not a block scope
// console.log(b) // error (if you move the console.log(b) inside the block it will work)
// console.log(c) // error (similarly if you move the console.log(c) inside the block it will work)



//=================================================================================

// DATA TYPES

//primitives and non-primitives

//primitives - string, number, boolean, null, undefined, symbol
let name = "prudhvi"; //string
let age = 22; //number
let isMarried = false;
let salary = null;
let address; //undefined
let id = Symbol("id"); //symbol


// non-primitives - objects, arrays, functions

let person = {
    name: "prudhvi",
    age: 25,                //object
    isMarried: false
} 


let vegetables = ["carrot", "beans", "tomato"]; //array

function add(a, b) {         //function
    return a + b;
}

// other concepts like template literals, NaN is other type of number, bigint ends with n,
// symbol are unqiue and immutable, null is an object

// =================================================================================

// more about data types

let numbers = [1, 2, 3, 4, 5];

let bike = {
    name: "pulsar",
    model: 2020,
    color: "black"
}


function multiply(a, b) {
    return a * b;
}

// console.log(typeof bike)
// console.log(typeof numbers)
// console.log(typeof multiply) //function is also a type of object


// console.log(numbers instanceof Array) //true

// =================================================================================

// Reference vs Value

let va1 = 10;
let va2 = va1; // copying the value.

va2 = 20
console.log(va1)
console.log(va2) 


//=================================================================================

// Type conversion vs Type coercion