// Start with an array of strings. Print only the words that include the letter combination "ing".

//we want to log in the console words that include 'ing' We will have to check each of the strings in the array for that character combination. It seems like a good moment for a for loop, or a for each loop. the data is strings in an array
//pseudo code: create array of strings. create a loop. inside the loop we will try the .includes() method to check and see if an element has 'ing' in it, if it does, print the string, if not, do nothing. 


var arrayOfStrings = ["spooning", "ingtablecloth", "forking", "knife", "spatula", "Teapot", "bowl", "plate", "tenderizing"];

arrayOfStrings.forEach(element => {
    if (element.includes('ing')){
       console.log(element);
    }
});

/* this bit of code I was able to work out via the mdn web docs .forEach() page, specifically the example of "converting a for loop to forEach" and copied the syntax to model my logic onto. 
Let me try to explain how it works. There is a function inside of the .forEach() parenthesis. This is an arrow function syntax, which is a shortened syntax. 
There is an if statement conditional that is using the .includes() method. This method produces a true/false boolean value. So, it can be used inside the conditional, and if it evaluates to true, it will move on to the function body. And it will print the array element. 

Below I'm going to practice using a for loop to solve it as well, since this is something we learned in class.
*/

for(var i = 0; i < arrayOfStrings.length; i++ ){
    if(arrayOfStrings[i].includes('ing')){
        //console.log(arrayOfStrings[i]);
    }
}

/* this solution differs because it does not use a local variable, the forEach method uses the parameter 'element' to point to each string in the array. The for loop uses bracket notation to point to each element of the array. 
A question I have is: Do I have to use the parameters exactly as listed in the mdn docs or can it be any word as long as it's in the proper order. I'm not sure I see any benefit to using a different word. The question is about what's built in to the method and how much wiggle room I have while using it.

I decided to test this by changing the word element to 'str' and it works as it did before! I guess there is some wiggle room.

example:

arrayOfStrings.forEach(str => {
    if (str.includes('ing')){
       console.log(str);
    }
});

*/
