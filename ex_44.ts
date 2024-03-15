/*
 Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
 */

 // array as a parameter

 function mySandwiches(...items: string []){
    return `I want Sandwich of ${items}`;
};

let collection1 = mySandwiches("cheese", " chicken", " Tomato ketchup");  // can add as many you wish
let collection2 = mySandwiches("Mayo", " Turkey", " swiss");
let collection3 = mySandwiches();   // without arrguments

console.log(collection1);
console.log(collection2);
console.log(collection3);