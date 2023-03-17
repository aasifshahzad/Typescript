// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let pName: string = "asif SHAHZAD" 
console.log(pName.toLowerCase());   //string methods
console.log(pName.toUpperCase());   //String methods

let resultLower:string = pName.toLowerCase();
let result: string[] = resultLower.split(" "); //Spliting a sentence into words
console.log(result);
console.log(result[0].toLowerCase());
console.log(result[0].charAt(0).toUpperCase()); //Converting first letter to capital
console.log(result[1].charAt(0).toUpperCase());
console.log(result[0].charAt(0).toUpperCase()+ result[0].slice(1));
// Performing title case with a function
function titlecase(text:string) {
    let elementArray: string[] = [];
    let textLower:string = text.toLowerCase();
    let textsplit:string[] = textLower.split(" ");
    for (let index = 0; index < textsplit.length; index++) {
        var element:string = textsplit[index].charAt(0).toUpperCase() + textsplit[index].slice(1);
        //console.log(element);
        elementArray.push(element);
    }
    return elementArray.join(" ");
}
var outputString:string = titlecase("i am READING book on CODING")
console.log(outputString);