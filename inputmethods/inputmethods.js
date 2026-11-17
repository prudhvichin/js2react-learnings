/* valid variable name ( multi line command) */
let employeeName = "amulya";
let employee_age = 23;
let $salary = 25000;
let _department = "IT"

// /* invalid variable names
// let 2name="amul";
// let employee name ="iaj";
// let let =10;
// */



// //both variable refer to the same object
// let employee1 = { name: "Amulya" };
// let employee2 = employee1;

// employee2.name = "Ravi";

// console.log(employee1.name);

// let employee = { name: "Amulya" };
// let employee_ = employee;

// employee.name = "Ravi";

// console.log(employee.name);
// console.log(employee_.name)



// ************* input methods ***************

// let name = "amulya";
// console.log(name)


// let employeeName = prompt("enter name here...")
// console.log(employeeName);


// //wrong
// let age=prompt(Number("enter your age here"))
// console.log(age)


// //takes number only otherwise gives Nan
// let age1=Number(prompt("enter your age here"))
// console.log(age1)

// let name=prompt("enter your name : ");//amulya
// let result = confirm("do you want to continue?");//ok
// console.log(name);//amulya
// console.log(result);//true


// camelCase => employeeName (variable names, function names)
//PascalCase => EmployeeDetails (ClassName)



// //type of operator
// console.log(typeof 25); //number
// console.log(typeof 10.10); //number
// console.log(typeof 10.0); //number
// console.log(typeof 1);  //number
// console.log(typeof "amulya") //string
// console.log(typeof 'amul');  //string
// console.log(typeof true); //boolean
// console.log(typeof false);  //boolean
// console.log(typeof undefined); //undefined
// console.log(typeof null); //obj
// console.log(typeof {});   //obj
// console.log(typeof 10n);  //bihint

// /* wrong types
// console.log(typeof True);
// console.log(typeof False);
// */

// //Nan
// // Purpose: Represents a value that is not a valid numeric result.

// // Use case: Detecting invalid mathematical conversions.
// let age = 23;
// console.log(age) //23

// let count=Number("hello")
// console.log(isNaN(count)) //true
// console.log(Number.isNaN(count)) //true


// let n="100"
// console.log(+n)

// let m="100.01"
// console.log(+m)

// let l="100a"
// console.log(+l)//nan

// console.log(~-1.9);//0
// console.log(~-2) // 1




// let age_=22;
// let result = age_>18 ? "eligible":"Not eligible";
// console.log(result)

// console.log(typeof age_);
// console.log(typeof(age_));


// let employee = {
//     name:"amul",
//     age:23
// };
// console.log(name in employee); //false("" missing)
// console.log("name" in employee); // true
// console.log("name " in employee) //false(space is there at the end)

// //deleting kay value
// delete employee.age;
// console.log(employee)



// in operator in array checks based on index not value
// let val=[12,34,56,67];
// console.log(10 in val)
// console.log(1 in val)





//comma operator
// let v=(10,20,30); //calculating
// console.log(v)  //30
// let v1=(10,20,"30"); //calculating
// console.log(v)  //30

// let v2=("10",20,"30"); //calculating
// console.log(v) //30

// let v4=("10","20","30"); //calculating
// console.log(v) //30

let v5=(10,"A","a"); //calculating
console.log(v5) //a

let hm=("a","b");
console.log(hm) //b


