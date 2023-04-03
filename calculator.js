export function calculator(num1, sign, num2) {
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
let ans = calculator(4, "*", 3);
console.log(ans);
// calculator(4,"/",3);
// calculator(4,"+",3);
// calculator(4,"-",3);
let a = "10";
let b = "25";
calculator(parseInt(a), "+", parseInt(b));
