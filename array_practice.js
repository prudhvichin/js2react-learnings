// let employees = ["Amulya", "Ravi", "Priya", "Kiran"];

// 1. Print all employees
// 2. Print the first employee
// 3. Print the last employee using length
// 4. Add "Sita" to the end
// 5. Remove the last employee
// 6. Print the total number of employees


let employees = ["Amulya", "Ravi", "Priya", "Kiran"];
console.log(employees);
console.log(employees[0]);
console.log(employees[employees.length-1]);

employees.push("sita");
console.log(employees)

employees.pop();
console.log(employees);

console.log(employees.length);

// HR wants to remove an employee from a temporary selection list.
let selectedEmployees = [101, 102, 103, 104, 105];
selectedEmployees.splice(2,1);
console.log(selectedEmployees);

// Remove employee 103 using splice()

// HR wants to display only the first three employee IDs without changing the original list.
let employeeIds = [101, 102, 103, 104, 105];
let mployeeids3=employeeIds.slice(0,3);
console.log(employeeids3)
