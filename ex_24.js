/*
You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
// equality and inequality
var myName = "Ali";
console.log(myName == "Ali"); // true       equal to
console.log(myName !== "ali"); //true        not equal to
// numberics
var myNumber = 10;
console.log(myNumber == 10); //true
console.log(myNumber !== 10); //true
console.log(myNumber > 5); //true    greater than
console.log(myNumber < 5); //true    less than
console.log(myNumber <= 5); //true    less than or equal to
console.log(myNumber >= 5); //true    less than  or equal to
// and && ====== or || (pipe)
var num1 = 10;
var num2 = 5;
console.log(num1 > 9 && num2 < 5); //false
// true stat      false stat
console.log(num1 > 9 || num2 < 5); //true
// true stat      false stat
var myArray = [2, 3, "Ali"];
var myString = "Yashal";
console.log(Array.isArray(myArray)); // true
console.log(Array.isArray(myString)); // false
