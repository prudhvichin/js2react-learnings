const calculateBill = (price,quantity) => {
    return price*quantity
}
console.log(calculateBill(270,7));



let employee = (name , role) => {
    return {
        name : name,
        role : role
    }
}
console.log(employee("amulya","software engineer"));

// return object 
//  name : "amulya"
// role : "software engineer"

let employee_sal =(name,sal) => {
    return [
        name,sal
    ]
}
console.log(employee_sal("ammu",29000));
console.log(employee_sal("hepsi",20000));

let emp_details1=employee_sal("vinya",21000);
let emp_details2=employee_sal("navya",22000);
console.log(emp_details1[0])
console.log(emp_details2[1])



let hello = function(){
    console.log("")
}


let n = Number(prompt("enter no of values"))
for(let i=0;i<n;i++){
    let values = Number(prompt("enter a value"));
    if(values % 2 == 0){
        console.log(values + " is even");
    }else{
        console.log(values + " is odd");
    }
}






