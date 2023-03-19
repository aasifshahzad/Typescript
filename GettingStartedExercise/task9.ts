//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner
let guestList:string[] = ["asif", "saqib", "sadiq", "wasif"];
let myaddress:string = "Camp Town, Florida"
for (let index = 0; index < guestList.length; index++) {
    let print:string = `Sir, ${guestList[index].toUpperCase()} you are invited to dinner on 23 August. Venue would be ${myaddress}.`;
    console.log(print);  
}

//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guestAddition:string[] = ["Jamal","kashif", "Nasir","wasif"];
let guestDeletion:string[] = ["sadiq", "asif"]
//console.log(guestList);
guestList = guestList.concat(guestAddition); // Add the name of the guest to be added
//console.log(guestList);
guestList = [...new Set(guestList)];  // remove duplicate strings in an array of string 
console.log(`Guest list after adding new guests and removing duplicates ${guestList}`);
//console.log(guestList.find((element) => element === "asif")); // find and element in an array

for (let index = 0; index < guestDeletion.length; index++) { // iterate through the guest Deletion list
    let gName = guestList.find((element) => element === guestDeletion[index]); // check if the name of the guest to be deleted is in the main guest list
    if (gName === "string"){
        let indexOfGname = guestList.indexOf(gName); // find index of the guest name
        console.log(`Guest name ${guestDeletion[index]} is in Guest List`);    // display the name of the guest to be deleted is in guest list
        guestList = guestList.splice(indexOfGname,1)
        console.log(`The guest name ${guestDeletion[index]} deleted from Guest list`);
    } else {
        console.log(`Guest name ${guestDeletion[index]} is in Guest List`);
    }
}


