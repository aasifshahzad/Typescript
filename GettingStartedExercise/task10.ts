// 18. Seeing the World: Think of at least five places in the world you’d like to visit. 
let placesToVisit:string[] = ["Madina Tyaaba","Yinchuan","Qahira", "Makkah Sharif", "Istambol", "Beging","Jagrata", "Maldives"]
// • Store the locations in a array. Make sure the array is not in alphabetical order. 
// • Print your array in its original order. 
// console.log(placesToVisit);

// • Print your array in alphabetical order without modifying the actual list. 
let sortedPlacesToVisit:string[] = placesToVisit.sort();
// console.log(sortedPlacesToVisit);



// • Show that your array is still in its original order by printing it. 
console.log(placesToVisit);

// • Print your array in reverse alphabetical order without changing the order of the original list. 
let reverseSortedPlacesToVisit:string[] = placesToVisit.sort((a,b) => b.localeCompare(a));
console.log(reverseSortedPlacesToVisit);

// • Show that your array is still in its original order by printing it again. 
console.log("Original Array");
console.log(placesToVisit);
// • Reverse the order of your list. Print the array to show that its order has changed. 
console.log(reverseSortedPlacesToVisit);
console.log("Reverse Sorted Array");
// • Reverse the order of your list again. Print the list to show it’s back to its original order. 
let doubleReverse:string[] = reverseSortedPlacesToVisit.sort();
console.log("Double Reverse Sorted Array");
console.log(doubleReverse);


