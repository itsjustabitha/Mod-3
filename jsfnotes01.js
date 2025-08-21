// What are the results of these expressions? (answer first, then use console.log() to check)

// "" + 1 + 0
// console.log("" + 1 + 0)


// Two quotes with no data inside means it's an empty string. If I'm correct, "" + 1 => "1"
// I think It'll either be 1 or undefined. (It was 10, I was incorrect.)


// "" - 1 + 0
// console.log("" - 1 + 0)


// Two quotes with no data inside means it's an empty string.  If I'm correct, "" - 1 => -1
// Then -1 + 0 SHOULD equal -1. Which means -1 => -1 so I should get -1.


// true + false
// console.log(true + false)


// True and false are Booleans. 0 is False and True is 1. That means this SHOULD be 1.
// Ref: https://www.cs.uic.edu/~jbell/CourseNotes/CPlus/Decisions.html#:~:text=Boolean%20Variables%20and%20Data%20Type&text=Zero%20is%20used%20to%20represent,zero%20is%20interpreted%20as%20true.


// !true
// console.log(!true)


// ! turns or inverts the value. So if this is 'True' it becomes not true which is false. If it's not false that means it's true.
// Ref: https://forum.freecodecamp.org/t/what-does-mean/655393
// The logical NOT (!) (logical complement, negation) operator takes truth to falsity and vice versa.
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT


// 6 / "3"
// console.log(6 / "3")


// 6 is a number but 3 is a string. A number can't be divided by a string. 
//The string converts to a number. So "3" becomes 3.That means 6 divided by 3 equals 2. So if I'm right, the result should be "2"
// Ref: https://stackoverflow.com/questions/26277979/is-it-possible-to-divide-a-number-with-string-in-javascript
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division


// "2" * "3"
// console.log("2" * "3")

// Both "2" and "3" are strings. They should convert to numbers and turn to 2 and 3. Which should then be 2 * 3 which should equal 6.


// 4 + 5 + "px"
// console.log(4 + 5 + "px")
//4 + 5 should be 9 and since px is a string and not a number, you'll just add it to 9. 9px or "9px" I believe it'll be "9px"


// "$" + 4 + 5
// console.log("$" + 4 + 5)
// This portion is throwing me off. "$" is a string. 4+5 is a number. At first I was considering it being "$9". 
// But 4 is a number. "$" is a string. It should become "$4" because "$" + 4 => "$4"
// So now "$4" + 5 is a string + a number. Which should turn to "$45" So my guess is "$45".


//  "4" - 2
// console.log( "4" - 2)
// "4" => 4
// 4 - 2 = 2.
// So this is a string minus a number. But the string is converted to a number, so "4" => 4
// Our new equation is now 4 - 2 which would be 2.
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction?utm_source=chatgpt.com


// "4px" - 2
// console.log("4px" - 2)
// 4px is a string. 
// Since I'm trying to substratct a string from a number, 4px should be converted to a number BUT it can't because of the px. 
// I believe this will either be undefined or NAN. I think this because I can't technically subtract anything. 
// It was NAN, not undefined.


//  " -9 " + 5
// console.log( " -9 " + 5)
// I believe that the string "-9" is converted to a number, -9 so I'd then add -9 + 5 which should be -4.
// "-9" => -9
// -9 + 5 = -4
// Oh, I was completely wrong.. the answer was -9 5. I'm assuming that maybe instead of converting the string to a number, maybe it did the opporsite. Converted the number (5) to a string.
// That would turn this equation to "-9" + "5" => "-95"
// Ref: https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion?utm_source=chatgpt.com


// " -9 " - 5
// console.log(" -9 " - 5)
// "-9" is a string and 5 is a number. I think that it's similar to the last problem.  
// The 5 should be converted to a string as well. So that'll change the equation to "-9" - "5". which should become "-14".
// The answer was -14. So I think that this also did the opposite. I think this converted the string to a number instead of converting the number to a string.


// null + 1
// console.log(null + 1)
// I had to do some digging with Null. At first glance, I believed this would come back as null.
// But according to my 2nd reference, null = zero. "2. NULL Conversion
// In Javascript, when null is used in a numeric context it will be treated as ZERO. The same behavior happens with "" , [] , and false ."
// if Null is the equivilant to zero, then the equation is 0 + 1 and should = 1.
// 1Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null
// 2Ref: https://medium.com/@m9hmood/the-truth-behind-null-0-in-javascript-6a3842cee932


// undefined + 1
// console.log(undefined + 1)
// undefined is unintentional emptiness
// I believe this will come back as NaN. Because if undefined is unintentional emptiness, that means it isn't a number.
// Ref: https://stackoverflow.com/questions/6604749/what-reason-is-there-to-use-null-instead-of-undefined-in-javascript
// Ref: https://mortoray.com/the-many-faces-of-undefined-in-javascript/
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined?utm_source=chatgpt.com
// Ref: https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion?utm_source=chatgpt.com

// undefined == null
// console.log(undefined == null)
// I think the answer is NaN. The answer was true.
// null is an intentionally empty value.
// undefined is unintentional emptiness.
// null = zero.
// Ref: https://tc39.es/ecma262/
// Ref: https://stackoverflow.com/questions/21001320/is-null-considered-zero-and-undefined-not-a-number-on-arithmetic-expressions
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness

// undefined === null
// console.log(undefined === null)
// Because this is a triple, I believe it'll be false instead of true.
// === — strict equality (triple equals)
// == — loose equality (double equals)
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness


// " \t \n" - 2
// console.log(" \t \n" - 2)
// I believe that " \t \n" is a string. But if \t means tab and \n means a new line, then technically this is blank. (an empty string)
// So it would be like this "0" - 2 Which would equal -2
// Ref: https://en.wikipedia.org/wiki/Escape_character?utm_source=chatgpt.com
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#using_number


// 2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

// let three = "3"

// let four = "4"

// let thirty = "30"

//what is the value of the following expressions?

// let addition = three + four
// console.log("addition:", addition)

// "3" + "4"
// These are two strings being added together. which means my answer should be "34"
// Correct.


// let multiplication = three * four
// console.log("multiplication:", multiplication) 

// "3" * "4"
// These are two strings.
// because it is (*), it forces numeric conversion.
// My answer should be 12. 
// Ref: https://stackoverflow.com/questions/51476556/how-to-convert-a-string-with-mathematical-operators-to-number-integer-or-float
// Ref: https://www.gnu.org/software/units/manual/html_node/Operators.html
// Correct.

// let division = three / four
// console.log("division:", division)

// "3" / "4"
// These are two strings.
// Because it is (/), it forces numeric conversion.
// 3 / 4 = 0.75
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#description
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic
// Correct.

// let subtraction = three - four
// console.log("subtraction:", subtraction)

// "3" - "4"
// These are two strings.
// 3 - 4 = -1
// Correct.

// let lessThan1 = three < four
// console.log("lessThan1:", lessThan1)
// "3" < "4"
// These are two strings.
// 3 < 4 = True.
// Correct.

// let lessThan2 = thirty < four
// console.log("lessThan2:", lessThan2)
// console.log(Number(thirty) < Number(four)); 
// "30" < "4"

// These are two strings.
// 4 is not greater than 30. This is incorrect.
// The output should be false. 
// The output was true. But that's not the correct answer.

// In order to fix this, I believe I need to change these strings to numbers. 
// "You convert a string to a number by calling the Parse or TryParse method found on numeric types ( int , long , double , and so on), or by using methods in the System. 
// Convert class. It's slightly more efficient and straightforward to call a TryParse method (for example, int"
// Ref: https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/how-to-convert-a-string-to-a-number
// Ref: https://learn.microsoft.com/en-us/dotnet/api/system.int32.tryparse?view=net-9.0
// Ref: https://www.w3schools.com/js/js_type_conversion.asp
// I'm seeing that I can use Number() or parseInt() to change strings to numbers, but which one is preferred in this situation? 
// I used Number, I got the output of false.



// 3. Which of the following console.log messages will print? Why?

// if (0) console.log('#1 zero is true')
// This should be false. I expected this to print and it didn't. I had to do some digging to find out that If statements don't print.
// if ("0") console.log('#2 zero is true')
// // This should be true. This is an empty string.
// if (null) console.log('null is true')
// // This should be false. Won't print.
// if (-1) console.log('negative is true')
// // This should be true. Non-zero number.
// if (1) console.log('positive is true')
// This should be true.

// Ref: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
// Ref: https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// Ref: https://frontend.turing.edu/lessons/module-1/js-truthy-falsy-expressions.html?ads_cmpid=6451354298&ads_adid=76255849919&ads_matchtype=&ads_network=g&ads_creative=582477081488&utm_term=&ads_targetid=dsa-19959388920&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gad_source=1&gad_campaignid=6451354298&gbraid=0AAAAADFpKZ9sqqO2evXh7FlllBZXYQvun&gclid=Cj0KCQjw2IDFBhDCARIsABDKOJ68aKvm83HkTzOeLHdfMPxyqegcIBJPVy5_PDQ-WxNuwuXE0fhaAPQaAnHYEALw_wcB
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR?utm_source=chatgpt.com

// I asked ChatGPT to give me more examples of Falsy and Truthy because I don't feel very confident about this section.
// According to ChatGPT: Falsy Values (only 6)
// false → literally the boolean false.
// 0 → number zero.
// "" (empty string) → string with nothing inside.
// null → intentional absence of any object value.
// undefined → variable declared but not assigned.
// NaN → Not-a-Number.
// Truthy Values:
// Everything else in JavaScript is truthy. Some common examples:
// Non-zero numbers → 1, -1, 3.14
// Non-empty strings → "0", "false", "hello"
// Objects → {}, [] (even empty ones!)
// Functions → function() {}
// Dates → new Date()
// Infinity and -Infinity




// 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?

// let a = 2, b = 3;

// let result = `${a} + ${b} is `;

//`${2} + ${3} is `;

// (2 + 3 < 10 ? 'less than 10' : 'greater than 10');

// let result = ${2} + ${3} is + (2 + 3 < 10 ? 'less than 10' : 'greater than 10');

// Reading this in parts, ${a} + ${b} is `equates to 2 + 3 is

// If a + b is less than 10 => 'less than 10'

// Else => 'greater than 10'

// These two parts get joined with together with (+)

// let result = `${a} + ${b} is ` + (a + b < 10 ? 'less than 10' : 'greater than 10');

// if (a + b < 10) {
// result += 'less than 10';
// } else {
// result += 'greater than 10';
// }

// console.log(result);

// a = 2 and b = 3
// I need to make a string called result

// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
// a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), 
// and finally the expression to execute if the condition is falsy. 
// This operator is frequently used as an alternative to an if...else statement.
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment

// let a = 6, b = 3;
// let result = `${a} + ${b} is ` + (a + b < 10 ? 'less than 10' : 'greater than 10');
// console.log(result);

// let result = `${6} + ${3} is ` + (6 + 3 < 10 ? 'less than 10'

// let a = 10, b = 12;
// let result = `${a} + ${b} is ` + (a + b < 10 ? 'less than 10' : 'greater than 10');
// console.log(result);

//let result = `${10} + ${12} is ` + (10 + 12 < 10 ? 'greater than 10');







// 5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

// function getGreeting(name) {
// return 'Hello ' + name + '!';
// }

// const getGreeting = (name) => {
//     return 'Hello ' + name + '!';
//   };

// console.log(getGreeting("Tabitha"));

// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// Ref: https://www.w3schools.com/js/js_arrow_function.asp
// Ref: https://stackoverflow.com/questions/48837335/how-to-use-a-function-to-greet-a-person-in-javascript





// 6. a) Complete the inigo object by adding a lastName property and including it in the greeting.

// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console. 
// HINT: see https://www.imdb.com/title/tt0093779/characters/nm0001597.

// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

// const westley = {
//     name: 'Westley',
//     numFingers: 5
// }
// const rugen = {
//     name: 'Count Rugen',
//     numFingers: 6
// }

// const inigo = {
//     firstName: 'Inigo',
//     lastName: 'Montoya',
//     greeting(person) {
//         let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName} `;
//         console.log(greeting + this.getCatchPhrase(person));
//     },
//     // getCatchPhrase(person) {
//         // return 'Nice to meet you.';
//         //return 'You killed my father. Prepare to die.';
//     //}
//     getCatchPhrase: (person) =>
//         person.numFingers === 6
//             ? "You killed my father. Prepare to die."
//             : "Nice to meet you."
// }

// inigo.greeting(westley)
// inigo.greeting(rugen)

// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch

// How this presents itself in my terminal is "Hello Westley, my name is Inigo Montoya You killed my father. Prepare to die.
// Hello Count Rugen, my name is Inigo Montoya You killed my father. Prepare to die."

// I was struggling with this portion because I want my output to be:
// Hello Westley, my name is Inigo Montoya Nice to meet you.
// Hello Count Rugen, my name is Inigo Montoya You killed my father. Prepare to die. - But was not getting this output. 
// ?	Separates the condition from the expression executed if true.
// :	Separates the true expression from the expression executed if false.

// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator?utm_source=chatgpt.com
// Ref: https://www.geeksforgeeks.org/javascript/javascript-ternary-operator/?utm_source=chatgpt.com



// 7. The following object represents a basketball game and keeps track of the score as the
// game progresses.

// a) Modify each of the methods so that they can be ‘chained’ together and the last line of
// the example code works

// b) Add a new method to print the full time final score

// c) Add a new object property to keep track of the number of fouls and a method to
// increment it, similar but separate to the score. Include the foul count in the half time and
// full time console messages

// d) Test your object by chaining all the method calls together in different combinations.

// Assignment Original Code: 
// const basketballGame = {
//     score: 0,
//     freeThrow() {
//     this.score++;
//     },
//     basket() {
//     this.score += 2;
//     },
//     threePointer() {
//     this.score += 3;
//     },
//     halfTime() {
//     console.log('Halftime score is '+this.score);
//     }
//     }
//modify each of the above object methods to enable function chaining as below:
// basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();

// const basketballGame = {
//     score: 0,
//     fouls: 0,
// // This shows that we're starting with 0 points and 0 fouls.

//     freeThrow() {
//         this.score++;
//         return this; 
//     }, 

// }
// basketballGame.freeThrow();
// console.log(basketballGame.score); (TESTING - correct)

// ++ is a increment operator. (adds one to) That means If I'm starting with 0 points, we now have 1 point.
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

    // basket() {
    //     this.score += 2;
    //     return this;
    // },

// }
// basketballGame.freeThrow().basket();
// console.log(basketballGame.score); (TESTING)

// += is a shorthand operator that means "take the current value and add to it."
// The addition assignment (+=)  That means this should increase by 2 and our new score should be 3.
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment?utm_source=chatgpt.com
// Ref: https://discuss.codecademy.com/t/how-does-work/457113?utm_source=chatgpt.com
// Ref: https://teamtreehouse.com/community/shorthand-operators?utm_source=chatgpt.com
// Ref: https://www.geeksforgeeks.org/javascript/javascript-operators/

    // threePointer() {
    //     this.score += 3;
    //     return this;
    // },
// }
// basketballGame.freeThrow().basket().threePointer();
// console.log(basketballGame.score); (TESTING)

// += Addition shorthand, which means we should be adding 3 more points to the score board. Free throw is 1 point, basket adds 2, and three pointer adds 3. Total so far should be 6.

    // addFoul() {
    //     this.fouls++;
    //     return this;
    // },
    
// This should be similar to freethrow, ++ means adding one so we should now have 6 points and 1 foul.
// }
// basketballGame.freeThrow().basket().threePointer().addFoul();
// console.log(basketballGame.fouls); (TESTING) - wasn't printing because I didn't change it to fouls at first.


    // halfTime() {
    //     console.log(`Halftime score is ${this.score} | Fouls: ${this.fouls}`);
    //     return this;
    // },
// }
//     basketballGame.freeThrow().basket().threePointer().addFoul().halfTime();
//     console.log(basketballGame.score); (TESTING)
 // Halftime score is 6 with 1 foul. It should only Print an update. 

//    fullTime() {
//        console.log(`Final score is ${this.score} | Fouls: ${this.fouls}`);
//        return this;
//    }
   
// no points scored, this should just tell me (print) my final score.
// }
// basketballGame.freeThrow().basket().threePointer().addFoul().halfTime().fullTime();
// console.log(basketballGame.score);

// Notes: 
// Ref: https://www.youtube.com/watch?v=J4YhlDsNqeE
// Ref: https://www.youtube.com/watch?v=YIp4fHeO8Rk ***
// Ref: https://www.youtube.com/watch?v=gHTUtEZVIzE
// Ref: https://www.geeksforgeeks.org/javascript/method-chaining-in-javascript/
// Ref: https://forum.freecodecamp.org/t/what-is-method-chaining-and-how-does-it-work/743205

// Ref: https://www.w3schools.com/jsref/jsref_oper_increment.asp




// 8. The object below represents a single city.

// a) Write a function that takes an object as an argument and uses a for...in loop to access
// and print to the console each of those object properties and their values. Test it using
// the sydney object below.

// b) Create a new object for a different city with different properties and call your function
// again with the new object.

// const sydney = {
// name: 'Sydney',
// population: 5_121_000,
// state: 'NSW',
// founded: '26 January 1788',
// timezone: 'Australia/Sydney'
// }

// function printCityInfo(city) {
//     for (let x in city) {
//       console.log(`${x}: ${city[x]}`);
//     }
//   }

//function printCityInfo(city) {}
// printCityInfo is the name of the function
// (city) is my parameter
// 'for...in' is the loop used for objects
// x is my variable name.

// Testing.
//   printCityInfo(sydney);

// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals


//   const dallas = {
//     name: 'Dallas',
//     population: 31_290_000,
//     state: 'Texas',
//     founded: '1845',
//     timezone: 'Central'
//   };

//   function printCityInfo(city) {
//     for (let x in city) {
//       console.log(`${x}: ${city[x]}`);
//     }
//   }
  
//   // Test with Dallas
//   printCityInfo(dallas);

// Ref: https://www.google.com/search?q=what%27s+the+population+of+texas&oq=what%27s+the+population+&gs_lcrp=EgZjaHJvbWUqDAgBEAAYRhj7ARiABDIGCAAQRRg5MgwIARAAGEYY-wEYgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYjwLSAQoxMDI4OWowajE1qAIIsAIB8QWWPgCvyOqqM_EFlj4Ar8jqqjM&sourceid=chrome&ie=UTF-8
// Ref: https://www.history.com/articles/texas






// 9. Use the following variables to understand how JavaScript stores objects by reference.

// a) Create a new moreSports variable equal to teamSports and add some new sport
// values to it (using push and unshift)

// b) Create a new dog2 variable equal to dog1 and give it a new value

// c) Create a new cat2 variable equal to cat1 and change its name property

// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// changed? Why?

// e) Change the way the moreSports and cat2 variables are created to ensure the
// originals remain independent

// let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// let dog1 = 'Bingo';
// let cat1 = { name: 'Fluffy', breed: 'Siberian' };

// console.log (teamSports)
// console.log (dog1)
// console.log (cat1)

// Output with orginial code:

// itsjustabitha@Tabithas-Laptop Module3.1 % node mod0301.js
// [ 'Hockey', 'Cricket', 'Volleyball' ]
// Bingo
// { name: 'Fluffy', breed: 'Siberian' }



// let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// let dog1 = 'Bingo';
// let cat1 = { name: 'Fluffy', breed: 'Siberian' };


// let moreSports = teamSports;
// let moreSports = [...teamSports];

// let dog2 = dog1;
// dog2 = 'Bear';

// let cat2 = cat1;
// let cat2 = { ...cat1 };

// cat2 = {name: 'Flower', breed: 'Siberian'}; 

// teamSports.push('Football', 'Swimming', 'Soccer');
// teamSports.unshift('Soccer');

// let dog2 = 'Bear'; I forgot that dog 2 was already declared, by using let again my code is crashing.
// dog1.push('',) - I misunderstood b and I'm a little confused. I've made the dog 2 = dog 1, but 
// I'm not sure if I'm giving it the new value correctly. Terminal message: SyntaxError: Identifier 'dog2' has already been declared
// D) After printing the original code, there is a lot that's changed with my updates.
// D) The following are my changes: itsjustabitha@Tabithas-Laptop Module3.1 % node mod0301.js [ 'Hockey', 'Cricket', 'Volleyball', 'Football', 'Swimming', 'Soccer' ]
// D) itsjustabitha@Tabithas-Laptop Module3.1 % node mod0301.js { name: 'Fluffy', breed: 'Siberian' } & { name: 'Flower', breed: 'Siberian' }
// D) Unshift added Soccer at the beginning and at the end of my lists.
// Notes for me: 'unshift is the opposite of shift() and inserts element(s) at the beginning of the array'
// Struggling with E.  - I'm not sure if I'm going in the right direction. From what I found, the best method to do this is the spread but I don't think I'm using it correctly.. 

// Ref: https://medium.com/an-idea/javascript-arrays-push-pop-shift-unshift-adc8fb815fc0 ** This resource helped me a ton with this portion.
// Ref: https://forum.freecodecamp.org/t/push-pop-unshift-shift-info-graphic/480531
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Ref: https://stackoverflow.com/questions/45512723/copy-array-of-objects-and-make-changes-without-modifying-original-array // person writing used the map() method.. but the spread method has the most votes..
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//



// console.log (teamSports)
// console.log (dog1)
// console.log (dog2)
// console.log (cat1)
// console.log (cat2)



// 10. The following constructor function creates a new Person object with the given name and
// age values.

// a) Create a new person using the constructor function and store it in a variable

// b) Create a second person using different name and age values and store it in a separate
// variable

// c) Print out the properties of each person object to the console

// d) Rewrite the constructor function as a class called PersonClass and use it to create a
// third person using different name and age values. Print it to the console as well.

// e) Add a canDrive method to both the constructor function and the class that returns true
// if the person is old enough to drive.

// function Person(name, age) {
// this.name = name;
// this.age = age;
// this.human = true;
// }