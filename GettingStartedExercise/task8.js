//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let friendsName = ["kashif", "akhtar", "israr", "nasir"];
for (let index = 0; index < friendsName.length; index++) {
    console.log(friendsName[index]);
}
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
for (let index = 0; index < friendsName.length; index++) {
    console.log(`Welcome! ${friendsName[index].toUpperCase()}, have a seat please!`);
}
;
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportMode = ["Train", "Bus", "Truck", "Motorcycle"];
for (let index = 0; index < transportMode.length; index++) {
    let print = `I would like to own a ${transportMode[index]}.`;
    console.log(print);
}
export {};
