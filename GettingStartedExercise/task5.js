"use strict";
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
function calculator(num1, sign, num2) {
    //var ans:number
    if (sign == "-") {
        return (num1 - num2);
        //console.log(num1,sign,num2,"=", ans); 
    }
    else if (sign == "+") {
        return (num1 + num2);
        //console.log(num1,sign,num2,"=", ans); 
    }
    else if (sign == "/") {
        return (num1 / num2);
        //console.log(num1,sign,num2,"=", ans); 
    }
    else if (sign == "*") {
        return (num1 * num2);
        //console.log(num1,sign,num2,"=", ans); 
    }
}
console.log(calculator(4, "+", 4));
console.log(calculator(12, "-", 4));
console.log(calculator(4, "*", 2));
console.log(calculator(32, "/", 4));