// Given an array of strings, return only the words that begin with the letter "t".

//So we will be making a function that given any array of strings can return only the strings that begin with the letter t
//clarifying question: what if a string in the array has more than one word and the second word in the string starts with 't'? That seems somewhat complex, and might be a way to iterate our function later to account for that. But, I'm not going to worry about that yet
//second clarifying question: Will I have to convert the character to lower or uppercase? Or will it be simpler to account for either upper or lowercase in the conditional. 
//pseudocode: we will use a for loop to look at each element in the array. inside the loop, I'll use a conditional to check for the letter t. I might use the .charAt(0) method or someone used I think .startsWith in class, so I'll look that one up. 
//I looked up the .startsWith() method and I haven't used it yet so I'll try that one out. I can already tell it will need parentheses :)

var arrayOfStrings = ["spoon", "tablecloth", "fork", "knife", "spatula", "Teapot", "bowl", "plate", "tenderizer"];

for (i = 0; i < arrayOfStrings.length; i++){
    if (arrayOfStrings[i].startsWith('t') || arrayOfStrings[i].startsWith('T')){
        console.log(arrayOfStrings[i]);
        // console.log(arrayOfStrings[i]);
    }
}

// function printTWords(array) {
    
//     var newArray = []
//     for (i = 0; i < array.length; i++){
//         if (array[i].startsWith('t') || array[i].startsWith('T')){
//             newArray = newArray + " " + array[i];
//             // console.log(arrayOfStrings[i]);
//         }
//     } return newArray
// }

//console.log(printTWords(arrayOfStrings));
//technically, it's working at this point, but I'd like to try something new.

function printTWords(array) {
    
    for (i = 0; i < array.length; i++){
        if (array[i].startsWith('t') || array[i].startsWith('T')){
            return array[i];
            // console.log(arrayOfStrings[i]);
        } 
    } 
}

console.log(printTWords(arrayOfStrings));

//for some reason I'm not sure I understand, when I run this function in console.log, I am only getting the first value to print. But when I have the for statement outside of a function shell, like in lines 11-16, all of the "t" words print. I'm going to come back to this challenge at another time, but if you see this before that and have any thoughts, I'd love to hear them!