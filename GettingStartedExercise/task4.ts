//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

console.log("Name\tAge\tGender");
console.log("John\t25\tMale");
console.log("Jane\t30\tFemale");

/*
Name    Age     Gender
John    25      Male
Jane    30      Female
*/


let hisName:string = " Muhammad Asif Shahzad "
console.log(hisName);

let hisNameStrip:string = " Muhammad Asif Shahzad "
console.log(hisName.trim());
