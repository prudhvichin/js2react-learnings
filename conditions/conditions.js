// let age=22;
// if (age>=18){
//     console.log("eligible")
// }else{
//     console.log("nooo...not eligible")
// }


// let username="amulya";
// let password="abc123456";
// let username=prompt("enter username here");
// let password=prompt("enter password here")
// if(username=="amulya"){
//     if(password=="123a456"){
//         console.log("login successfully");
//     }else{
//         console.log("invalid password")
//     }

// }else{
//     console.log("invalid username")
// }



//nested if .....difficult to read
// function registerEmployee(username, password, email, age, department, verified) {

//     if (username) {
//         if (password) {
//             if (email.includes("@")) {
//                 if (age >= 18) {
//                     if (department) {
//                         if (verified) {
//                             return "Registration successful";
//                         }
//                     }
//                 }
//             }
//         }
//     }

//     return "Registration failed";
// }

// console.log(
//     registerEmployee("Amulya", "12345", "amulya@gmail.com", 22, "IT", true)
// );

// early return (guard clauses)

function regEmp(username,password,email,age,dept,verified){
    if(!username) return "username required";
    if(!password) return "password req";
    if(!email.includes("@")) return "invalid email";
    if(age<18) return "age must be 18 or above";
    if(!dept) return "Select department";
    if (!verified) return "Verification required";
    return "registartion successful";
}
console.log(regEmp("amulya","123","amulya@gmail.com",23,"IT",true))

/*How it works:
- Checks the first condition.
- If it fails, returns immediately.
- If it passes, moves to the next condition.
- If all conditions pass, registration succeeds. */



function checkAttendance(status, loginTime, logoutTime, hours) {

    if (status === "ON_LEAVE") {
        return "On Leave";
    }
    else if (status === "HOLIDAY") {
        return "Holiday";
    }
    else if (status === "ABSENT") {
        return "Absent";
    }
    else if (loginTime > 9.15) {
        return "Half Day - Late Login";
    }
    else if (logoutTime < 5.45) {
        return "Half Day - Early Logout";
    }
    else if (hours >= 8) {
        return "Present";
    }
    else {
        return "Attendance needs review";
    }
}

console.log(checkAttendance("WORKING", 9.30, 6.00, 8));