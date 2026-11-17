// console.log("Hello, Amul!");

// console.log("Hello, Amul!");
// console.log("Hello, Amul!");

// let name = "Amul";
// console.log("Hello, " + name + "!");
// console.log(`Hello, ${name}!`);
// console.log("Hello, " + name + "!");


// console.log('hello')
// console.log("hello")


// console.log("hello"+" world")
// console.log(`hello ${name}`)


// let firstName = "Amul";
// let lastName = "Palakaluri";
// console.log(`Hello ${firstName} ${lastName}!!!`);
// console.log("hello " + firstName + " " + lastName + "!!!");

// let city="Hyderabad";
// let state="Telangana";
// let country="India";
// console.log(`${country} is my country`);
// console.log(country + " is my country");
// console.log(country + "is my country");

// console.log(`${city} => ${state} => ${country}`);
// console.log(city + " => " + state + " => " + country);


// let a=10;
// console.log(a);


// console.log(a);
// let a=10;

// console.log(b);
// let b="amul";  

// const q=100;
// console.log(q);

// console.log(r);
// const r=200; // ReferenceError: Cannot access 'r' before initialization


// var c="ammu";
// console.log(c);


// console.log(d);
// var d="ammuzz";
// console.log(d);

// console.log(e);
// var e=1234;



// let f=10;
// var g=20;
// console.log(f);
// console.log(g);

// console.log(f+g);


// console.log(i);
// let i=30;


// let j=40;
// j=50;
// console.log(j);



        //ReDeclaration 
// let k=60;
// let k=70; // ReDeclaration is not allowed with let, so this will throw a SyntaxError
// console.log(k);

        // re-assaign 
// let l=80;
// l=90;
// console.log(l);

        //declaration
// let m;
// m=100;
// console.log(m);

//        // after console
// console.log(n);
// let n=110; // ReferenceError: Cannot access 'n' before initialization


//    ===> CONST <===

//    // declaration and initialization
// const o=120;
// console.log(o);

 //   //declaration without initialization XXXXX
// const p;
// p=130; // SyntaxError: Missing initializer in const declaration
// console.log(p);

//    // re-assignment XXXXX
// const q=140;
// q=150;
// console.log(q); // TypeError: Assignment to constant variable.


//     // after console XXXXX
// console.log(r);
// const r=160;


//       ===> VAR <===
    // declaration and initialization

// var s=170;
// console.log(s);


// // re-declaration 
// var t=180;
// var t=190;
// console.log(t);

// // re-assignment
// var u=190;
// u=200;
// console.log(u);

// // after console
// console.log(v);
// var v=210;
// console.log(v); 



// ==================> string concatenation <==================
// let a="amul";
// console.log(a);
// let b="palakaluri";
// console.log(b);

// console.log(a+" "+b);
// console.log(`${a} ${b}`);

// =================> value adding <==================
// let x1=10;let x2=20;
// console.log(x1+x2);
// console.log(`${x1+x2}`);
//=================> value adding with string <==================
// let x1=10;let x2=20;
// console.log(x1+x2);

// console.log(`${x1+x2}`);
// console.log(`${x1} + ${x2} = ${x1+x2}`);
// console.log("x1 + x2 = "+(x1+x2));
// console.log("total ="+(x1+x2));
// console.log("x1+x2"); //give as it is
// console.log(x1+x2+" is the total of x1 and x2");
// console.log(x1+x2+"0") // 30 plus 0 will give 300 because of string concatenation
// console.log(x1+x2+0) // 30 plus 0 will give 30 because of number addition



// =======> one value and one string <======== finally treat as string and concate
// let a= 1000;
// let b= "200";
// console.log(a+b); // string + value => concate
// console.log(`${a+b}`);
// console.log(a+" "+b); // string + value => concate
// console.log(a+" "+b+" is the total of a and b");
// console.log(a+b+" is the total of a and b");
// console.log(a+b); //-------->concat
// console.log(a-b); //-------->subtraction
// console.log(a*b); //-------->multiplication
// console.log(a/b); //-------->division (quoetient)
// console.log(a%b); //-------->modulus  (remainder)




// single line comment


/* this is
    a
    multi line
    comment
*/
// console.log(5+6+"1")
// console.log("1"+5+6)
// console.log(5+"1"+6)
// console.log(5+"1"+6+"2")
// console.log(5+"a"+6+2)
// console.log(5+4+6+"2")
// console.log(5+4+"6"+"2")


// let a=10;
// let b="amul";
// let c=false;
// let d=null;
// let e=true;
// let f=undefined;
// let g=10.10;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof g);

// let q1=999999900990990
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(q1);
// let q2=999999999999999999129n
// console.log(q2);


// let x
// console.log(typeof x);
// console.log(x);

// let y=null
// console.log(typeof y);
// console.log(y);


// let a=10;
// let b="10";
// console.log(a==b); // true
// console.log(a===b); // false

// let c=10;
// let d=10;

// console.log(c==d);



// let A=10;
// let a=30;
// console.log(A);
// console.log(a);

// console.log(A +"and " +"-wikjw");

// console.log(`${A} + ${a}`); // 10+30=40
// - is reserved for subtraction so takes with in string or backticks
// Upper Camel Case (Pascal Case) => FirstName , LastName
//Lower Camel Case => firstName, lastName


// let a=10;
// a="amu"
// console.log(a)

// let arr1=[10,20,30]
// let arr2=arr1
// console.log(arr1)
// console.log(arr2)
// arr1.push(40)
// console.log(arr1)
// console.log(arr2)

        //*********spread operator************ creates shallow copy
// let arr3=[40,50,60]
// let arr4=[...arr3]
// arr4.push(70)
// console.log(arr3)
// console.log(arr4)

// let ex1="amul"
// let ex2=[...ex1]
// ex2.push("lya")
// console.log(ex1)
// console.log(ex2)

//merge 2 arrays
// let ar1=[10,20,30]
// let ar2=[40,50,60]
// let res=[...ar1,...ar2]
// console.log(res)

// let ar3=[10,20,30]
// let ar4=[29.89,89]
// let res2=[99,...ar3,789,...ar4]
// let re3=res2
// let re4=[...re3]
// re4.push(10,290)
// re3.push(890)
// console.log(res2)
// console.log(re3)
// console.log(re4)


//      => Spread operator with objects
// let employee = {name : "amulya",role:"software-developr"};
// let newEmployee={...employee}
// newEmployee.role="Senior Developer";
// console.log(employee.role);
// console.log(newEmployee.role);

//spread operator on dict
// let person = {name : "amul",age:22};
// updatePerson = {...person}
// updatePerson.age = 23
// console.log(person.age)
// console.log(updatePerson.age)
// let upd_person = person
// upd_person.name="ammu";
// console.log(upd_person.name)
// console.log(upd_person.age)
// console.log(upd_person);


// => merge 2 objects

// let employee ={
//         name : "amulya",
//         age : 23
// };
// let details = {
//         role : "BE developer",
//         location:"Hyd"
// }
// let emp_res={...employee , ...details}
// console.log(emp_res)

// let details_update = details
// details_update.role="Back-end developer"
// console.log(details_update)
// let ress={...employee, ...details_update}
// console.log(ress)



/* => Spread operator in functions
   the spread operator can pass array elements as separate function arguments 
*/
// function add(a,b,c){
//         return a+b+c;
// }
// let numbers=[10,20,30];
// console.log(add(...numbers));

// function sub(a,b,c){
//         return a-b-c;
// }
// let numbers1=[1,2,3]
// console.log(sub(...numbers1))

// function add(a,b)
// {
//         return a+b
// }
// console.log(add(10,20)) //or below
// let num=[10,20]
// console.log(add(...num)) // 30
// if in case if you gave like  console.log(add(num)) => o/p : 10,20 undefined


/* => spread operator with strings
      a string can be expanded into individual characters 
*/
// let name="amulya"
// let characters=[...name];
// console.log(characters)
 

// let text ="12345"
// let min = Math.min(...text)
// console.log(min)
// console.log(text)
// let max=Math.max(...text)
// console.log(max)


//Comparision Operator

// let text1 = "Aaz";
// let text2 = "BbZ";
// let result = text1 < text2;
// console.log(result)

// let text3 = "Aa";
// let text4 = "Bb";
// let result_ = text3 > text4;
// console.log(result_)



// let n1="10";
// let n2="20";
// let result1 = n1>n2;
// let result2 = n1<n2;
// let result3= n1==n2;
// let result4= n1===n2;
// console.log(result1)
// console.log(result2)
// console.log(result3)
// console.log(result4)



// let n1="10";
// let n2=10;
// let result1 = n1>n2;
// let result2 = n1<n2;
// let result3= n1==n2;
// let result4= n1===n2;
// console.log(result1)
// console.log(result2)
// console.log(result3)
// console.log(result4)

// let m1="2";
// let m2="12";
// let m3=m1<m2;
// console.log(m3) //false

// let m4="2";
// let m5="21";
// let m6=m4<m5;
// console.log(m6); //true

//--------------------------------------------------------------------

// /* array  
// mentioning array
// accessing array
// */
// let values = new Array(10,20,30);
// console.log(values)
// console.log(values.length);
// console.log(values[0]);
// console.log(values[1]);
// console.log(values[4]); // if index does not exist ==> undefined
// console.log(values[values.length-1]); // last element

// // empty array => []
// let val=new Array()
// console.log(val);
// /* push and pop */
// let names=['amulya','hepsi','madhu','yora']
// console.log(names)
// names.push('vinya') // adding at the end
// console.log(names)
// let removed = names.pop()
// console.log(removed); // removed element here
// console.log(names) // after effeting remove

// //unshift() => Add to the beginning
// let fields=["IT","NON-IT","CIVIL"]
// fields.unshift("medical")
// console.log(fields);
// fields.unshift("law","electrical")
// console.log(fields)

// //shift => remove from beginning

// let namess=["yora","navya","vinya","sanvik"]
// namess.shift()
// console.log(namess)

// let removed_ =namess.shift()
// console.log(removed)
// console.log(namess)

/*splice method
 we can remove 
        insert,
        replace elements at a specified position 
        it modifies the original array */
// syntax :  array.aplice(startIndex,deleteCount,item1,item2);
// remove an element
// let employees=["amulya","palakaluri","hepsi"];
// employees.splice(1,1); //index one nunchi one element delete chey
// console.log(employees);

// //insert an element 
// let lapi_names=["dell","intel","hp"];
// lapi_names.splice(1,0,"lenovo","m3");
// console.log(lapi_names)

// //replace an element
// let technologies=["python","java","sql"]
// technologies.splice(1,1,"django");
// console.log(technologies);


/* extracts a portion of an array and returns a new array 
 it does not modify the original array 
 it does not modifies the original array
 it creates or it gives the new array(modifies the original array)
 */
// let arr = [10,20,30,40];
// let result=arr.splice(1,2); //p ->splice modify original
// console.log(arr);
// console.log(result);

/*
1 = starting index, inclusive.
3 = ending index, exclusive.
The original array remains unchanged.
*/

// slice() returns a new array containing the selected elements.
// let arr1=[1,2,3,45,44]
// let res1=arr1.slice(1,3);
// console.log(arr1);
// console.log(res1);

//----------------splice-------------
//removing 
// let selectedEmployees = [101, 102, 103, 104];
// selectedEmployees.splice(1, 1);
// console.log(selectedEmployees); //[101,103,104]
// //replace
// let roles=["employee","hr","manager"]
// roles.splice(0,1,"super admin");
// console.log(roles); //["Super Admin", "HR", "Manager"]

//-----------------slice-------------------
// Imagine you have 100 employees but want to display only 10 on the current page.
// let employees = [
//         "Amulya", "Ravi", "Priya", "Kiran", "Sita",
//         "John", "Neha", "Arun", "Meena", "Raj",
//         "Kavya", "Rahul"
// ];
// let currentPageEmployees=employees.slice(0,5);
// console.log(currentPageEmployees)
// console.log(employees.length);


// let employees = ["Amulya", "Ravi", "Priya", "Kiran"];
// console.log(employees);
// console.log(employees[0]);
// console.log(employees[employees.length-1]);

// employees.push("sita");
// console.log(employees)

// employees.pop();
// console.log(employees);

// console.log(employees.length);

// let selectedEmployees = [101, 102, 103, 104, 105];
// selectedEmployees.splice(2,1);
// console.log(selectedEmployees);

// let employeeIds = [101, 102, 103, 104, 105];
// let employeeids3=employeeIds.slice(0,3);
// console.log(employeeids3)



// let employeeIds = [101, 102, 103, 104, 105];
// employeeIds.splice(2,1)
// console.log(employeeIds);
// console.log(employeeIds);


// //array
// //without array
// let technology1="python";
// let technology2="java";
// let technology3="sql"

// // with array
// let technologies=["python","java","sql"]

// console.log(technologies)

// let lapi=[
//         "dell",
//         "lenova",
//         "intel",
//         "hp",
//         "apple"
// ]

// console.log(lapi);


// /*indexing
// starts with 0
// element has position called index
// */
// console.log("index of 1st product[1]",lapi[0]);
// console.log("index of 2nd product[2]",lapi[1]);


// //we can access elements with indexing
// console.log("index[4]",lapi[4]);//count start from 0
// console.log("index[5]",lapi[5]);//not there so get undefined
// console.log("index[-1]",lapi[-1]);//undefined

// //updating the values with indexing

// console.log(lapi);
// lapi[2]="Intel laptop";
// console.log(lapi)
// lapi[5]="google";
// console.log(lapi)
// // it consists 5 elements we are inserting an element at 7 then 6 is filled with empty
// lapi[7]="checking"; //6 is not there 
// console.log(lapi)
// console.log(typeof(lapi[7]))//sting
// console.log(typeof(lapi[6]))//empty=>undefined
// console.log(typeof(lapi[8]))//not existed => undefined

// /*here i updating with negative 
// -1 treat as key */
// lapi[-1]="lapppp";
// console.log(lapi)

// //cal length
// console.log(lapi.length)

// let req=[
//         "ram",
//         "rom",
//         "battery",
//         90000,
//         null,
//         true,
//         undefined
// ]
// // console.log(req)
// // console.log(typeof(req[5]));
// // console.log(req[5])
// // console.log(typeof(req[4]));
// // console.log(typeof(req[6]));
// // console.log(typeof(req[3]));



// //removing element with indexing

// console.log(req);
// delete req[1]; //remove and shows with empty
// console.log(req)
// req[1]="abcd"
// console.log(req)//assigning value in that place =>empty is replaced with element
// // let a=[]//obj
// // console.log(typeof(a))
// // let b = {}
// // console.log(typeof(b))
// // let c=""//string
// // console.log(typeof(c))
// // let d;//undefined
// // console.log(typeof(d));



// // multi demensional arrays

// let stack=[
//         ["python","java"],
//         ["html","css","js","react"],
//         ["postgreSQL","Mysql"]
// ]
// //accessing entire row
// console.log(stack)
// console.log(stack[0])
// console.log(stack[1])
// console.log(stack[2])

// //accessing particular row and column element
// console.log(stack[1][1])
// console.log(stack[1][4])// not existed so undefined

// //console.log(stack[3][3])//error cannot read undefined

// //here updating an element with indexing
// console.log(stack[1][1]="CSS")

// //push
// stack.push(["aws","azure"])
// console.log(stack)

// //unshift and shift =>adding elemet at the beginning and remove element at the beginning


// let namess=["yora","navya","vinya","sanvik"]
// namess.shift()
// console.log(namess)


// ****includes****
/* checks wheather a value exist inside an array or string
does this tem exist
it it available
is this coupan valid
=> here instead of writing loops manually , JS provides includes
*/

// const paymentmethods=[
//         "cash",
//         "upi",
//         "card"
// ]

// const paymentType="cash";
// if(paymentmethods.includes(paymentType)){
//         console.log("payment accepted")
// }else{
//         console.log("payment not supported")
// }


// const holidays=[
//         "christamas",
//         "new year",
//         "sankranthi",
//         "dasara",
//         "divali"
// ]

// const employee_holiday="new year"
// if(holidays.includes(employee_holiday)){
//         console.log("holiday leave approved")
// }else{
//         console.log("holiday leave is not accepted")
// }


//indexof()
/* it is used to find the index of an element 
if it is not(element) existed it returns -1
wherathe project or employee is existed or not */

// const names =["amul","ammu","ammuzzz"];
// console.log(names.indexOf("amul")) //0
// console.log(names.indexOf("amulya"))//not existed returns -1


// /* ******** join() ******
// is an array method that converts all the elements of an array into one single string
// */
// let policy = ["holiday policy","health insurance"];
// console.log(policy.join(","))
// // o/p : holiday policy,health insurance

// let policy1 = ["holiday policy","health insurance"];
// console.log(policy1.join(""))
// o/p: holiday policyhealth insurance
// let policy2 = ["holiday policy","health insurance"];
// let n=policy2.join(" and ");
// console.log(n)// a sing sting
// console.log(n[0]) // h
// // console.log(policy2.join(" and "))
// // o/p: holiday policy and health insurance
// console.log(policy2[0])
// console.log(policy2[2])//undefined

/* concat ***************
it is used to combine two or more arrays into a new array
to mergr multiple arrays without changing the original array
*/
//mrg changes
let mrgCommit=[
        "model created",
        "model updated"

]

let aftCommit=[
        "validations in serialiazer",
        "validations in models"
]

let evngCommit=[
        "adding ui",
        "adding test cases"
]

// let changes = mrgCommit.concat(aftCommit)
// console.log(changes)

// combining 2 arrays
// let final_changes=changes.concat(evngCommit)
// console.log(final_changes)


//adding at a time 3 arrays
// let changes_ = mrgCommit.concat(aftCommit,evngCommit)
// console.log(changes_)



/* reverse ***********
it is used to reverse the order of elements in an array
here it chnges the original array
it is also returns reversed array
ex: manager wants to se latest orders first
*/

// let OrderItem=[
//         "Order-101",
//         "Order-102",
//         "Order-103"
// ]
// console.log(OrderItem.reverse())//reverse
// or
// OrderItem.reverse()
// console.log(OrderItem) //['Order-103', 'Order-102', 'Order-101']


/* sort() ************
it is used to arrange elements of an array in specific order
-> alphabatically,
->numbers */

let foodMenu = ["Burger", "Pizza", "Biryani", "Coffee"];
foodMenu.sort();
console.log(foodMenu)
//==> by default it takes like string
let primes=[2,5,3,7,11,13] //11,13,2,5,7=>11(1 is compring next 2nd one is comparing)
primes.sort()
console.log(primes)
// console.log(primes.sort())


// //descending
// let primes_dec = [2, 5, 3, 7, 11, 13];
// primes_dec.sort((a, b) => b-a);
// console.log(primes_dec);

// //ascebding
// let primes_asc = [2, 5, 3, 7, 11, 13];
// primes_asc.sort((a, b) => b-a);
// console.log(primes_asc);


//  flat():
//  flat is used to convert a nested array(array inside an array) into a single array 



//------------------------------------------------------------------------

/* objects 
 it stores multiple properties in the for of key-value format
 in array we can store only values
{}
*/
// // without objects 
// let emp_name = "amulya";
// let emp_id = 121;
// let emp_role = "software developer";

// //with objects
// let employee = {
//         emp_name:"amulya",
//         emp_id:122,
//         emp_role:"software_developer"
// }//everything related one emp
 
// //if an array
// let empl=["amul",101,"BE_Dev"]
// console.log(empl[2])


// let company={
//         name:"logisoft",
//         city:"Hyd",
//         country:"India",

// }
// console.log(company)
// console.log(company.city)
// console.log(company.country)
// //with bracket notation 
// console.log(company['name'])
// console.log(company["city"])
// /*error ("") console.log(company[country])*/

// //add a new key:value
// company.CEO_name = "Srini";
// console.log(company)

// //update existing value
// company.city = "Hyderabad";
// console.log(company)

// // here we can add a new value

// let hrms={
//         backend:"python"
// }

// hrms.frontend="react"
// console.log(hrms)
// hrms.database="postgreSQL"
// console.log(hrms)

// // update value
// hrms.frontend="javascript";
// console.log(hrms)

// hrms.stylish="css"
// console.log(hrms)

// //deleteing
// delete hrms.stylish;
// console.log(hrms);

// let skill={
//         sector : "backend",
//         BE_stack:["python","java","django"]

// }
// console.log(skill)
// console.log(skill.BE_stack) // give array
// console.log("--------------")
// console.log(skill["BE_stack"]) // give array

// console.log(skill.BE_stack[0]);
// console.log(skill.BE_stack[1]);

// //update
// skill.BE_stack[2]="DRF"
// console.log(skill)
// console.log(skill.BE_stack)

// // accessing
// console.log(skill.sector)
// // or
// let n=skill.sector;
// console.log(n)


// //array of objects
// let employees = [
//         {
//                 id:1,
//                 name:"navya",
//                 role:"BE"
//         },
//         {
//                 id:2,
//                 name:"vinya",
//                 role:"FE"
//         },
//         {
//                 id:3,
//                 name:"sanvik",
//                 role:"testing"
//         }
// ];
// console.log(employees) //[{...},{...},{...}]
// console.log(employees[0])
// console.log(employees[0].name="Navya Kakani") //updating
// console.log(employees[0])

// let chefgaa=[
//         {
//                 name:"india",
//                 spent:90000
//         },
//         {
//                 name:"USA",
//                 spent:150000
//         }
// ]
// let total_spent=0;
// for (i=0;i<chefgaa.length;i++){
//         total_spent+=chefgaa[i].spent

// }
// console.log(total_spent)




// /*pre defined functions (keys,values,entries,assign,freeze,Seal,fromEntries)
//  return all keys of an objects*/

// let hrms_proj={
//         name:"hrms",
//         BE:"node",
//         FE:"react",
//         DB:"postgres",
//         inverst:99000,
//         location:"hyd"
// }

// console.log(Object.keys(hrms_proj)) // all keys

// // all values
// console.log(Object.values(hrms_proj))

// //entries - returns key-value pairs
// console.log(Object.entries(hrms_proj))

// let payment = {
//     paymentId: 901,
//     orderId: 5001,
//     total: 640,
//     gst: 32,
//     discount: 50,
//     finalAmount: 622,
//     paymentMode: "UPI",
//     paymentStatus: "Paid"
// };

// console.log(Object.entries(payment))
// // > here prints all order details


/* assign 
here copies or merge 2 objects */


// let customer ={
//         customerId:101,
//         name:"amul",
//         phone:9876567890,
//         city:"hyd"
// }

// let order = {
//         orderId:10,
//         customerName:"amul",
//         total:929,
//         status:"preparing",

// }

// let payment = {
//         paymentId:1001,
//         orderId:10,
//         mode:"online",
//         total:929
// }

// console.log(Object.assign({},customer,order,payment))
// //it gives all in unique and oredered

// /*    ***** freeze ******
// here it makes an objects read-only
// here no property can be changed, added or removed

// */

// let cuttings ={
//         PF:1000,
//         salary:7000,
//         additional_cuttings:500

// }

// Object.freeze(cuttings);
// cuttings.PF=1500; //not possible to change
// console.log(cuttings)
// //here pf is fixed for this year
// //here no one can modify it accidently

// /* Seal
// allows updating existing properties
// but preventing adding or deleting properties */
// let empl_details={
//         emp_name:"ammu",
//         phone:9898989898,
//         location:"hyd"
// }
// Object.seal(empl_details); // we can modify existing data only ,can't possible to add or 
// console.log(empl_details)
// empl_details.emp_name="Amulya";
// console.log(empl_details)
// empl_details.country="india"
// console.log(empl_details)
// // delete empl_details[0] // not possible 
// // console.log(empl_details)

// // delete empl_details.emp_name; //not possible to delete if Seal is there
// // console.log(empl_details)




// /* fromEntries():
// converts an array of key- value pairs into an object 
// */

// let arr=[
//         ["name","amul"],
//         ["city","hyd"]
// ]
// console.log(Object.fromEntries(arr))


// let array1=[
//         [
//                 ["name","amm"],
//                 ["city","hyd"]
//         ],
//         [
//                 ["name","ann"],
//                 ["city","guntur"]
//         ]
// ]
// console.log(Object.fromEntries(array1))


// var a;
// console.log(a);
// a=10;
// console.log(a);
// a="hello";
// console.log(a);



//********** number ******** */
// console.log(age=26,typeof(age));
// console.log(price=98.99,typeof(price));
// console.log(temperature= -5,typeof(temperature));

// toFixed
// console.log('toFixed : ')

// let prices = 99.4567;
// console.log(prices)
// console.log(prices.toFixed(2));

// // restaurant bill
// let biryani = 249.9998;
// let coke = 39.99;

// let total = biryani + coke
// console.log("Total : ",total)
// console.log("toFixed : ",total.toFixed(2))


// let subtotal = 450.78;
// let gst = subtotal * 0.18;

// let finalBill = subtotal + gst;

// console.log("finalBill : ",finalBill)
// console.log("finalBilltoFixed : ",finalBill.toFixed(2))

// // toPrecision  
// console.log('toFixed : ')
// console.log(finalBill.toPrecision(3))
// console.log(finalBill.toPrecision(4))

// console.log("toString : ")

// // here orderId

// let orderNumber = 1025;
// console.log(orderNumber,typeof(orderNumber))
// let orderId = "ORD-"+orderNumber.toString()
// console.log(orderId,typeof(orderId))

// //here we conert the number into string

// let num = 09876543210       // when a number starts with 0 it raising an error
// console.log(typeof(num))
// let nums = num.toString()
// console.log(typeof(nums))
// console.log("Call us : ",nums.toString());
// // it doesnt store number 0 at the starting

// // here it is used to convert into string 

// let invoice = 5001;
// console.log(invoice,typeof(invoice))
// let invoiceNo = "INV- " + invoice.toString();
// console.log(invoiceNo,typeof(invoiceNo))


// let payment = true;
// let paymentSuccess = payment.toString()

// console.log(payment ,typeof(payment));
// console.log(paymentSuccess,typeof(paymentSuccess))

// console.log("Number : ")

// let ages = "35";
// let agees = Number(ages)
// console.log(typeof(ages))
// console.log(typeof(agees))

// let state = true
// console.log(state,typeof(state))
// let states = Number(state)
// console.log(states,typeof(states))


console.log("isInteger : ")

console.log(Number.isInteger(25))

// quality must be a whole number

let quantity = 2.5;

if (Number.isInteger(quantity)){
    console.log("Order Accepted")
} else{
    console.log("Quantity must be a whole number")
    
}

// quality must be a whole number

let input = "3";
let quantitys = Number(input);

if (!Number.isInteger(quantitys)){
    console.log("Quantity should be a whole number.");
} else if (quantity <= 0) {
    console.log("Quantity should be greater than 0.");
} else {
    console.log("Order Accepted");
}

// in age verification we use isTnteger

let ageess = 18.5;
if (Number.isInteger(ageess)){
    console.log("Valid")
} else{
    console.log("Enter a valid age")
}

console.log("parseInt : ")

console.log(parseInt("150px"))
console.log(parseInt("12qa34"))

// // if we want to increase size of width

let width = "250px";    // here it concates
console.log(width + 50);


let widths = parseInt("250px");  // here it adds the pixels and increases its width
console.log(widths + 50);

console.log("parseFloat : ")

let Price = parseFloat("249.99");
console.log(Price + 50);



//********************boolean ********** */

// restaurant is open or not

let isRestaurantOpen = true;

if (isRestaurantOpen){
    console.log("Accept orders")
} else {
    console.log("restaurant is closed")
}

// print a reciept

let isPaymentDone = false;

if(isPaymentDone){
    console.log("print reciept")
}
else{
    console.log("pay the bill")
}

// here checks the food is available or not

let isFoodAvailable = 1;

if (isFoodAvailable){
    console.log("Take order")
} else{
console.log("food out of stock")
}

let isLoggedIn = true;

if(isLoggedIn){
    console.log("Wellcome to your account")
} else{
    console.log("Please login")
}


