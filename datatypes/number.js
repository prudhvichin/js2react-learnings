
console.log(age=26,typeof(age));
console.log(price=98.99,typeof(price));
console.log(temperature= -5,typeof(temperature));

// toFixed
console.log('toFixed : ')

let prices = 99.4567;
console.log(prices)
console.log(prices.toFixed(2));

// restaurant bill
let biryani = 249.9998;
let coke = 39.99;

let total = biryani + coke
console.log("Total : ",total)
console.log("toFixed : ",total.toFixed(2))


let subtotal = 450.78;
let gst = subtotal * 0.18;

let finalBill = subtotal + gst;

console.log("finalBill : ",finalBill)
console.log("finalBilltoFixed : ",finalBill.toFixed(2))

// toPrecision  
console.log('toFixed : ')
console.log(finalBill.toPrecision(3))
console.log(finalBill.toPrecision(4))

console.log("toString : ")

// here orderId

let orderNumber = 1025;
console.log(orderNumber,typeof(orderNumber))
let orderId = "ORD-"+orderNumber.toString()
console.log(orderId,typeof(orderId))

//here we conert the number into string

let num = 09876543210       // when a number starts with 0 it raising an error
console.log(typeof(num))
let nums = num.toString()
console.log(typeof(nums))
console.log("Call us : ",nums.toString());
// it doesnt store number 0 at the starting

// here it is used to convert into string 

let invoice = 5001;
console.log(invoice,typeof(invoice))
let invoiceNo = "INV- " + invoice.toString();
console.log(invoiceNo,typeof(invoiceNo))


let payment = true;
let paymentSuccess = payment.toString()

console.log(payment ,typeof(payment));
console.log(paymentSuccess,typeof(paymentSuccess))

console.log("Number : ")

let ages = "35";
let agees = Number(ages)
console.log(typeof(ages))
console.log(typeof(agees))

let state = true
console.log(state,typeof(state))
let states = Number(state)
console.log(states,typeof(states))


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

// if we want to increase size of width

let width = "250px";    // here it concates
console.log(width + 50);


let widths = parseInt("250px");  // here it adds the pixels and increases its width
console.log(widths + 50);

console.log("parseFloat : ")

let Price = parseFloat("249.99");

console.log(Price + 50);