function registerCustomer(name,email,phone){
    return {
        name:name,
        email:email,
        phone:phone
    }
}
let customer1=registerCustomer("amulya","amulya@gmail.com",1234567890)
console.log(customer1)


function createOrder(orderId){
    console.log("order created with id:",orderId);
}
createOrder(101);
createOrder(102);



function repeat(str,numoftimes){
    let result="";
    for (let i=0;i<numoftimes;i++){
        result += str;
    }
    console.log(result);
}


function name(f_name,l_name){
    // return f_name + " "+l_name[0]
    return `${f_name} ${l_name[0]}`
}
console.log("amulya","palakaluri")
console.log(name("amul","palakaluri"))

const yell='i will learn'.toUpperCase();
// yell;
console.log(yell)
console.log(yell.toLowerCase)
// console.log(name("nju"))//type error (argument passing)

// function net_salary(salary,deductions){
//     return salary-deductions

// }
// console.log(net_salary(20000,1000))




// function addition(a,b){
//     return a+b;

// }
// let result = addition(10,9)
// console.log(result)



// function arithematic(a,b){
//     console.log("addition :",a+b);
//     console.log("subtraction :",a-b);
//     console.log("multiplication :",a*b);
//     console.log("division :",a/b);
//     console.log("div-rem",a%b);
//     console.log("power :",a**b);
//     if(a>b){
//         console.log("a is greater");
//     }else if(b>a){
//         console.log("b is greater")
//     }else{
//         console.log("equal")
//     }
// }
// arithematic(7,5)



// function arithematicOperations(a,b){
//     return {
//         addition:a+b,
//         subtraction:a-b,
//         multiplication:a*b,
//         division:a/b,
//         remainder:a%b,
//         greater: a>b ?"a is greater":b>a ? "b is greater":"both are equal"
//     }
// }
// let operationsResult=arithematicOperations(10,5);
// console.log(operationsResult)

// //salary calculation
// function netSalary(salary,bonus,deduction){
//     return salary + bonus - deduction
// }
// let values=netSalary(30000,5000,2000);
// console.log(netSalary(values))




// //login validation
// function authenticated(username,password){
//     if(username == "admin" & password== "admin@123"){
//         return "login successfully"

//     }else{
//         return "invalid credentials"
//     }
// }
// let credentials = authenticated("admin","admin@123");
// console.log(credentials)


// //discount
// function discount(total,discount){
//     return total-((discount/100)*total);

// }
// let Values=discount(1900,5);
// console.log(Values)


// //square of the number 
// var n=4;
// function square(num){
//     var ans=num*num;
//     return ans;
// }
// var square1=square(n);
// var square2=square(5);



// //namasthe javascript
// //data types
// //variables
// //function 5 types
// //arrays
// //console.log()
// // array lo Object => print all keys and values specific



// // console.log(z);
// let a=10;
// console.log(a)


// // named function
// function sample(){
//     console.log("amulll");
// }
// sample();

// function sample2(){
//     return "named functionn"
// }
// console.log(sample2());


// function adding(a,b,c){
//     return a+b+c;
// }
// console.log(adding())//Nan
// console.log(adding(1,2,3))//6



// function adding2(a,b,c){
//     console.log(a+b+c);
// }
// adding2(1,2,3);



// //2.anonymous function
// let any=function(){
//     console.log("ammuzz");
// }
// any()


// let anony=function(name){
//     console.log("hello"+" "+name)
// }
// anony()


// let anony2=function(clg){
//     console.log("i am from "+clg);
// }
// anony2("kits");


// let anony3=function(comp,loc){
//     console.log(comp +" is located in "+loc);
// }
// anony3("logisoft","hyd")


// // let anony4 =function(a,b,c,d){
// //     return a+b+c+d;
// // }
// // console.log(anony4(1,2,3,4))


// // //enter count of values
// // //give each value
// // //for loop
// // //return total
// // let numb=Number(prompt("enter n no.of elements"))
// // let total=0;
// // for(let i=0;i<numb;i++){
// //     let num=Number(prompt("enter value: "));
// //     total+=num;

// // }
// // console.log("Sum : ",total);


// // using named function
// // n no.of elemets
// //enter each element
// // function addition(n){
// //     let total=0;
// //     for(let i=0;i<n;i++){
// //         let num=Number(promt("enter a number"));
// //         total+=num
// //     }
// //     return total;

// // }
// // let n = Number(prompt("enter value"));
// // let result=addition(n);
// // console.log("result is : ",result)


// // passing n no.of elements as argumenys
// function adding3(...args){
//     let total=0;
//     for(let num of args){
//         total+=num;
//     }
//     return total;
// }
// console.log(adding3(1,2,3,4,5,6,7,8,9,10))//55
// console.log(adding3(1,2,3));
// console.log(adding3(1.1,2.1,3.8));



// //immediately invoked function expression
// (function(){
//     console.log("uydhygeygy")
// }
// ());

// arr=[
//     {name:"amul",age:22,city:"hyd"},
//     {name:"sai",age:23,city:"hyd"}
// ]
// console.log(arr[0]);
// console.log(Object.values(arr[0]));
// console.log(Object.keys(arr[0]));
// console.log(Object.entries(arr[0]));




// function calculateSalary(basicSalary,...allowances){
//     let totalAllowances=0;
//     for(let allowance of allowances){
//         totalAllowances+=allowance;
//     }
//     return totalAllowances;
// }
// console.log(calculateSalary(20000,1000,2000,3000))//6000



// let salaries=[10000,29000,19000]
// let updated=salaries.map(function(salary){
//     return salary+1000;
// });
// console.log(updated)//[11000, 30000, 20000]


// let names=["amuly","yor","yochan","krup"]
// let updated_names=names.map(function(name){
//     return name+"a";
// });
// console.log(updated_names)


// let names2=["amulya","yora","yochan","krupa"]
// let name_mail=names2.map(function(name){
//     return name+"@gmail.com";
// });
// console.log(name_mail)


// let numbers=[1,2,3,4,5,6,7,8,9,10]
// let sq_num=numbers.map(function(num){
//     return num*num;
// });
// console.log(sq_num)

// let numbers2=[1,2,3,4,5,6,7,8,9,10]
// let even_numbers=numbers2.filter(function(num){
//     if(num%2==0){
//         return true;
//     }
//     else if(num%2!=0){
//         return false;
//     }
// });
// console.log(even_numbers)
// console.log(numbers2)


// let numbers3=[1,2,3,4,5,6,7,8,9,10]
// let odd_numbers=numbers3.filter(function(num){
//     if(num%2 != 0){
//         return true;
//     }
// });
// console.log(odd_numbers)


// let numbers4=[1,2,3,4,5,6,7,8,9,10]
// let even_numbers_=numbers4.map(function(num){
//     if(num%2==0){
//         return num;
//     }
// });
// console.log(even_numbers_)//undefined for odd numbers


// let nums=[12,34,56,78,90,34,45,67,89]
// let odd_nums=nums.filter(function(num){
//     if(num%2!=0){
//         return true;
//     }
//     return false;
// });
// console.log(odd_nums)//[ 45, 67, 89 ]

// //using arrow function
// //all elements *2
// let m=[12,34,56,78,90,34,45,67,89]
// let n_=m.map(num=>num*2)
// console.log(n_)

// // >19 values
// let m2=[12,34,56,78,90,34,45,67,89]
// let n2_=m2.filter(num=>num>19)
// console.log(n2_)

// let m3=[12,34,56,78,90,34,45,67,89]
// let n3_=m3.filter(num=>num%3!=0)
// console.log(n3_)


// //** reduce() method
// let m4=[12,34,56,78,90,34,45,67,89]
// let n4_=m4.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// })
// console.log(n4_)


// let m5=[12,34,56,78,90,34,45,67,89]
// letn5_=m5.reduce(function(accumalator,currentvalue){
//     return accumalator+currentvalue;
// })
// console.log(n5_)

// //reduce (anonymous function)
// let m6_=[12,34,56,78,90,34,45,67,89]
// let n6_=m6_.reduce(function(total,num){
//     return total+num;
// },0);
// console.log(n6_)

// // reduce with arrow function
// let m7=[12,34,56,78,90,34,45,67,89]
// let n7_=m7.reduce((total,num)=> total+num,0);
// console.log(n7_)



// let employees=[
//     {name:"amul",salary:20000,city:"hyd"},
//     {name:"sai",salary:25000,city:"hyd"},
//     {name:"yochan",salary:30000,city:"hyd"},
//     {name:"krupa",salary:35000,city:"hyd"}
// ]
// let total_sal=employees.reduce((total,employee)=>total+employee.salary,0);
// console.log(total_sal);
