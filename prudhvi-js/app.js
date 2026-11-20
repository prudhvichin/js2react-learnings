
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

// {
//     var a = 10;
//     let b = 20;
//     let c = 30;
// }

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
// console.log(va1)
// console.log(va2) 


//=================================================================================

// Type conversion vs Type coercion


//TYPE CONVERSION


let expenditure = "2500";

let convertedExp = Number(expenditure) // When we covert explictly then it is type conversion

// console.log(convertedExp) 


// TYPE COERCION

let mileage = 30;

let updatedMileage = 30 + "kmpl" // when we convert Implictly then it is TYPE COERCION

// console.log(updatedMileage) 

//==================================================================================
// REGULAR EXPRESSIONS.
let input = "153volts1"

//regular expressions

// let result  = input.split(/^(\d+)([a-zA-Z]+)(\d+)$/)

// console.log(result[1])
// console.log(result[2])

//====================================================================================

// reference and objects

// const user1 = {
//     name:"prudhvi",
//     age:25
// }

// const user2 = user1;

// user2.name = "raj"

// console.log(user2.name)
// console.log(user1.name)



// const user1 = {
//     name:"Prudhvi",
//     age:25,
//        address:{
//             city:"visakhapatnam",
//             street:"Ashoka Nagar"
//        }
// }

// let user2 = {...user1}           //shallow copy but it gives the nested error, it doesnt copy nested.

// user2.name = "Raj"
// user2.city = "vizag"

// console.log(user1.name)
// console.log(user1.address.city)

// console.log(user2.name)
// console.log(user2.address.city)


// PERFECT OF COPYING.(Deep copying)


const user1 = {
    name: "Prudhvi",
    address: {
        city: "Hyderabad"
    }
};

const user2 = structuredClone(user1); //perfect way of copying using structuredClone()

user2.address.city = "Visakhapatnam";

// console.log(user1.address.city); // Hyderabad
// console.log(user2.address.city); // Visakhapatnam

//=======================================================================================

// Nullish coalescing

// let user = ""

// result = user || "prudhvi"

// console.log(result)

//Logical Assignment operators

// ||= assigns the current value is false

// let result = "";

// result ||= "hyderbad"

// console.log(result)


// &&= assigns the current value is truthy

// let result1 = "visakha"

// result1 &&= "Vizag"

// console.log(result1)

// ??= assigns the current value is null or undefined.


// let result2 = null || undefined

// result2 ??= "guntur"

// result2 = result2 ?? guntur 

// console.log(result2)


// == and ===

let blnce = "1000"
let blnceNum = 1_000
// console.log(blnce == blnceNum) // gives true
// console.log(blnce === blnceNum)

// Short-circuit evaluation


// function function2(){
//     console.log("this prints")
//     return true
// }

// function function1(){
//     console.log("this also prints")
//     return true
// }


//  (function2() && function1()) // if f1 returns true it also checks for f2 

// //  short circuit
//  (true || false) // executes for the true value 
//  (true && false ) // everything executes 



//  let input1 = Number(prompt("Enter the value"))
//  console.log(input1+2.1)

//=======================================================================================


//Call stack

// function a() {
//     console.log("A");

//     b();

//     console.log("B");
// }

// function b() {
//     console.log("C");

//     c();

//     console.log("D");
// }

// function c() {
//     console.log("E");
// }

// a();

// hoisting

// console.log(b);
// console.log(a);


// let a = 1;
// var b = 2



// for functoions it does behave differently
// greet();


// function greet() {
//     console.log("hello");
    
// }

// for example // if you want understand the hoisting completly you should understand the TDZ

function test() {
    // console.log(b) // undefined
    // console.log(a); //declaration error
    
    var b = 2;
    let a = 1; 

}

// higher order functions

function outer(){
    return function inner()
    {
        console.log("this is a inner function")
    }
}


let res = outer()

// res()


// callback fucntions

// function child(){
//     console.log("this is child");
    
// }

// function parent(func){
//     console.log("this is parent");
//     func();
// }


// parent(child);


// for example 

// function details(name, age , displayDetails){
//     displayDetails();
// }


// console.log(details("prudhvi",25,()=>{
//     const fullDetails = `${name} and ${age} years old.`
//     console.log(fullDetails)
// }))


//other example


function calculate(a,b,callback){
    const res =  a+b
    callback(res)
}


// calculate(10,20,(v)=>(
//     console.log(v)
// ))


// asyncronization callbacks

// console.log("start")

// setTimeout(()=>{
//     console.log("After 1 sec");
    
// },1000)

// console.log("end")


// destructring

let arr = [1,2,3,4]

let [first, second] = arr; // 3rd and 4th numbers are ignored

let [,,thrid,fourth] = arr; // you have manually skip the 1st and 2nd number

// console.log(first,second)
// console.log(thrid,fourth)


// OBJECT DESTRUCTING 

const user = 
{
    userName: "prudhvi",
    userAge: 25,
    city:'vizag'
};


// const { userName, userAge,city} = user  

// const (userName: name, userAge: age, city: userCity) = user //renaming the variables

// console.log(userName , userAge, city)

//nested destructing

// const userPrudhvi = {
//     name: "Prudhvi",
//     address: {
//         city: "Hyderabad",
//         country: "India"
//     }
// };

// const {
//     address: { city, country } // works on ts
// } = user;

// console.log(city);
// console.log(country);


//DESTRUCTING IN FUCNTIONS

function displayUser({name, age} ){
    console.log(`${name} is ${age} years old`)

}


const userPrudhvi = {
    name:"prudhvi",
    age:25
}

// displayUser(userPrudhvi)


//SPREAD AND REST OPERATORS


const originals = [10,20,30]

// const copied = [...originals] //shallow copy dont do this with objects


// console.log(copied) 

// COMBING ARRAYS

const arr1 = [1,2]

const arr2 = [2,3]

const arr3 = [...arr1,...arr2]


// console.log(arr3)

// combing objects


const userAmulya = 
{
    name:"Amulya",
    age:23
}


const updatedAmulya = 
{
    ...userAmulya,
    role:"backend Developer"
}

// console.log(updatedAmulya)


//similar we can edit the object using the spread operator.
//for example

const userCharles ={
    name:"Charles",
    age:29,
    role:'Full Stack Developer'
}


const updatedUserCharles = {
    ...userCharles,
    role:"AI Engineer"
}

console.log(updatedUserCharles)


// REST OPERATOR





