# arrow function 

> arrow functions are shorter form and cleaner way to write functions on JS

> arrow function is defined by  =>  
> => it is replaced by function keyword

// without parameters

const calculateBill = (price , quantity) => {
    return price*quantity
}
console.log(calculateBill(290,7));

> here if i mentioned 2 parameters in function creation and in function calling if i give only one parameter it returns NaN

> here for single expression we use this formate
const calculateBill_ = (price,quantity) => {
    return price*quantity
}
console.log(290)

