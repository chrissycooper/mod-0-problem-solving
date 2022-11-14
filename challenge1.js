//1. Given an array of strings, return only the strings that have exactly 4 characters.

//The overall goal is to look at each element in a given array and return the strings that have exactly four characters. we are going to make this into a function.
//psuedocode: first we will create a test array, and work out the logic. We are working with strings and arrays, so it might be helpful to look up methods that relate to strings and arrays. let's try working with a for loop to check each element of the array. the method .length() might be useful, since it can check how many characters are in each element.

var arrayOfStrings = ["spoon", "fork", "knife", "spatula", "bowl", "plate"];

for (i = 0; i < arrayOfStrings.length; i++){
    if (arrayOfStrings[i].length === 4){
        console.log(arrayOfStrings[i]);
    }
}
//when I wrote the shell of the for loop, around line 8 I realized I wanted to use a conditional to pick out the correct strings. So I'm adding that to my pseudocode here so it's somewhat in real time. 
//Then I ran the test to see if it would work, i got an error, so I looked up the .length method and saw that it didnt use parentheses. I had arrayOfStrings[i].length() originally. So I removed them and ran it again and it worked! So on to the next step of my pseudo code which is to translate that into a function that accepts other arrays

// function fourCharacters(array){
//     for (i = 0; i < array.length; i++){
//         if (array[i].length === 4){
//             console.log(array[i]);
//         }
//     }
// }

//I'm keeping it as console.log so I can test it. It works! final step is to change it to return the value instead:

function fourCharacters(array){
    for (i = 0; i < array.length; i++){
        if (array[i].length === 4){
            return(array[i]);
        }
    }
    console.log(array[i]);
}

//I refactored it so that it will both return the value and console.log it so that it's easy to see that it works. At this point some questions I have are: does this make sense in terms of scope? i.e. will where the return value is make sense when building longer more complex projects.

fourCharacters(arrayOfStrings);
