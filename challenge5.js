/*
Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!"


first we need to alphabetize the array, and then print it inside a message. it looks like the .sort() method should be helpful, and then perhaps we can use the .forEach() method again to print them inside the message. 
*/

var travelDestinations = ["South Island", "Paris", "Maui", "Bora Bora", "Tahiti", "London"];

travelDestinations.sort();
console.log(travelDestinations);

travelDestinations.forEach(element => console.log(`The next place I want to visit is ${element}!`));

/*
 a question I had was whether the array would be permanently sorted outside of the .sort() method, and I checked that by logging the array to the console after using the method. 
*/