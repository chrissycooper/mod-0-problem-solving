// Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.

//we are writing a function that given an array of strings with a mixture of upper and lower case letters can be made all lowercase. 
//we are working with strings and arrays. 
//it says print, so logging to the console is the end goal. Should we print them one at a time or as a new array? Let's start with one at a time
//I'll start by making a test array. then I'll need to iterate through the array, and I'll use a for loop for that. Then I'll need to change any uppercase letters to lowercase and I believe the .toLowerCase method should work for that. Then add the console.log!

var testArray = ["spOOn", "Fork", "knifE", "SPATULA", "bowl", "pLaTe"];

for (i = 0; i < testArray.length; i++){
    console.log(testArray[i].toLowerCase());
}

//this time I had the opposite issue in my first test, I didn't add the parentheses after .toLowerCase to see if it would work without them, and it did not. I added them and it is working! all of the words are made into lowercase letters

function lowerCaseArray(array){
    for (i = 0; i < array.length; i++){
        console.log(array[i].toLowerCase());
    }
}

console.log(lowerCaseArray(testArray));
