// 1. Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.

// function ucFirstLetters(str) {
//     if (!str) return ""; 
//     return str[0].toUpperCase() + str.slice(1);
//   }

// defining my function and calling it ucFirstLetters and targeting my sting ("los angeles").
// Ref: https://www.w3schools.com/jsref/jsref_charat.asp ** 
// I'm seeing that there are a couple ways I can do this. .charAt() and str[0]. Since w3 is using Char, that's the route I'm going to take.
// My output was: Los angeles, but I'm aiming for Los Angeles.

// function ucFirstLetters(str) {
//     if (!str) return ""; 
//     return str
//     .split(" ") 
//     .charAt(0).toUpperCase() + str.slice(1);
//   }

// I'm still getting the output of Los angeles. 
  // Googled: capitlizing the first letter of my second word in my string javascript
  // Sider (the Side Bar Ai) recommended the split method: "you can split the string into an array of words, target the second word.. etc."
  // Tried to add split, but the code crashed. (asked ChatGPT what I did wrong here - "But then you immediately do .charAt(0) on that array.
// Arrays don’t have .charAt() (that’s only for strings). That’s why your logic breaks.") Recomends the Map method. 


// function ucFirstLetters(str) {
//     if (!str) return "";
//     return str
//     .split(" ") 
//     .map(word => word.charAt(0).toUpperCase()) 
// }

// Using .split to split my string into two strings. Should be "los", "angeles" now.
// Ref: https://www.reddit.com/r/learnjavascript/comments/e2nn19/whats_the_difference_between_map_and_for_loop/?utm_source=chatgpt.com (map method vs loop method)
// Ref: https://stackoverflow.com/questions/60786111/for-loops-vs-map-to-iterate-arrays?utm_source=chatgpt.com
// Ref: https://medium.com/%40ExplosionPills/map-vs-for-loop-2b4ce659fb03 ** 
// What's throwing me off here, is map turns my string into an array, but if that's the case, do I still need to split Los Angeles? 
// Using the arrow method to run each word.
// Char method to focus on the first letter or charter.
// OutPut was 'L' 'A' - I think I'm getting close but now I'm missing the rest of the name. Lol. My brain is spinning. Moving onto the next.

  
// console.log(ucFirstLetters("los angeles") ) //Los Angeles


// Ref: https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript ** many of these are using var - var is no good.
// Ref: https://community.lambdatest.com/t/how-do-i-use-javascript-to-capitalize-the-first-letter-of-a-string/30187 **
// 1. str.charAt(0): This extracts the first character of the input string str.
// 2. toUpperCase(): This method is used to convert the first character to uppercase.
// 3. str.slice(1): This extracts the rest of the string starting from the second character. 


// 2. Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
// ellipsis (...) added to the end if it was too long, or the original text otherwise.

// b) Write another variant of the truncate function that uses a conditional operator.


// function truncate(str, max) {
//     if (str.length > max) {
//         return str.slice(0, max) + "...";  
//       } else {
//         return str;  
//       }
//   }


// console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat...

// if/else. 
// https://www.w3schools.com/js/js_if_else.asp ** if (condition) {} else {} ..
// if the string length is greater than the max (max is 25, we declared that in console.log)
// String slice to stop at my max. Starting at character 0.
// "..." is a string, and I'm adding it to my current string. since it's a string it'll add right at the end. return string should give me my results.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
// https://stackoverflow.com/questions/1301512/truncate-a-string-straight-javascript
// https://www.w3schools.com/jsref/jsref_trunc.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
// I already did B because I thought that 'if/else' was the best method and the method I should use.. So I guess I need to know what else should I have done? Did I use a longer method?



// 3. Use the following animals array for the below tasks. Test each one by printing the result to
// the console. Review the following link for tips:

// https://developer.mozilla.org/en-
//US/docs/Web/JavaScript/Reference/Global_Objects/Array

// a) Add 2 new values to the end

// b) Add 2 new values to the beginning

// c) Sort the values alphabetically

// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue

// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.

// const animals = ['Tiger', 'Giraffe']
// //Output: [ 'Tiger', 'Giraffe' ]
// animals.push('Lion', 'Bear');
// //Output: [ 'Tiger', 'Giraffe', 'Lion', 'Bear' ]
// animals.unshift('Piggie', 'Bird');
// //Output: [ 'Piggie', 'Bird', 'Tiger', 'Giraffe', 'Lion', 'Bear' ]
// animals.sort();
// //Output: [ 'Bear', 'Bird', 'Giraffe', 'Lion', 'Piggie', 'Tiger' ]

// function replaceMiddleAnimal(newValue) {
//     const middleIndex = Math.floor((animals.length -1) / 2);
//     animals[middleIndex] = newValue;
//   }

// replaceMiddleAnimal('Kittie');
// [ 'Bear', 'Bird', 'Giraffe', 'Kittie', 'Piggie', 'Tiger' ] I needed to replace Giraffe with Kittie. 
// Added -1 to remove the Giraffe and replace it with Kittie.
// [ 'Bear', 'Bird', 'Kittie', 'Lion', 'Piggie', 'Tiger' ]

// console.log(animals);



// https://www.w3schools.com/jsref/jsref_push.asp#:~:text=The%20push()%20method%20adds,method%20returns%20the%20new%20length.
// https://stackoverflow.com/questions/8073673/how-can-i-add-new-array-elements-at-the-beginning-of-an-array-in-javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://www.geeksforgeeks.org/javascript/how-to-replace-an-item-from-an-array-in-javascript/
// https://community.make.com/t/replace-values-from-array-in-a-string-and-provide-the-updated-string/41274/4
// https://stackoverflow.com/questions/74078461/best-way-to-replace-middle-element-of-array-dynamic-in-javascript (Math.floor ???)
// https://www.w3schools.com/jsref/jsref_floor.asp#:~:text=Description,DOWN%20to%20the%20nearest%20integer. Math.floor(x)
// Asked ChatGPT: 'Please give me examples using the Math.floor method in Javascript.'
// Examples it provdided: Rounding Down a Decimal, Random Numbers in a Range, ** Indexing into an Array **, Converting Minutes to Hours, Flooring Negative Numbers
// Giraffe is character 2, which is in the middle. 




// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.

// b) Create variants of the camelCase function that use different types of for loops, and

// c) with and without the conditional operator.

// function camelCase(cssProp) {
//     return cssProp
//       .split('-') 
//       .map((word, index) => 
//         index === 0 
//           ? word   
//           : word.charAt(0).toUpperCase() + word.slice(1) 
//       )
//       .join('');
//   }

// using split again to slit my string inn half. This turns my string into an array.
// .map((word, index) =>  is going to loop through each word. Index represents the position of the word.
// index === 0 ? word : ... represents my ternary operator.
// word.charAt(0) is going to get the first letter of the word.
// .toUpperCase() will make it upper case.
// word.slice(1) is going to get the rest of the word after character. (Example) like "M" and "argin"
// https://stackoverflow.com/questions/4969605/javascript-regexp-to-camelcase-a-hyphened-css-property **
// .join('') Join is going to bring everything back from the array into a string. ( "M" and "argin" turns into Margin)
// https://www.w3schools.com/jsref/jsref_join.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join


// function camelCase(cssProp) {
//   return cssProp
//     .split('-')
//     .map((word, i) => i === 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('');
// }

//  using split again to slit my string inn half. This turns my string into an array.
// .map((word, index) =>  is going to loop through each word. 
//  .join('') Join is going to bring everything back from the array into a string. ( "M" and "argin" turns into Margin)

// console.log(camelCase('margin-left')) // marginLeft
// console.log(camelCase('background-image')) // backgroundImage
// console.log(camelCase('display')) // display











// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the following:

// a) Explain why the above code returns the wrong answer

// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.

// c) Create a function currencyOperation(float1, float2, operation) which
// safely performs the given operation (either +, -, / or *) on the two numbers and returns

// the correct float result. https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

// d) (Extension) Extend the above function to include a fourth argument numDecimals
// which allows the operation to support different amounts of decimal places from 1 to 10.

// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
// different values as well as the below:



// let twentyCents = 0.20
// let tenCents = 0.10

// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

// a) Explain why the above code returns the wrong answer -  JavaScript uses binary floating-point numbers to represent decimals.
// Some decimals can't be represented exactly in binary. The most common that I'm seeing are 0.1, 0.2, and 0.3 which aren't represented exactly in binary.
// We can sometimes avoid this using the toFixed function to force the number of decimal
// places as below, but it’s not always useful:

// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen) //why is this not working?

// toFixed changes the format from number to string.
// 0.2 becomes "0.20"
// 0.1 becomes "0.10"
// By adding the strings, the equation looks like "0.20" + "0.10" Output: "0.200.10"

// B) Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and returns the correct float result.
// B) float1 is the first decimal number and float2 is the second decimal number.
// B) https://stackoverflow.com/questions/596467/how-do-i-convert-a-float-number-to-a-whole-number-in-javascript#:~:text=Results%20Copy%20Expand-,Math.,rounded%20to%20the%20nearest%20integer.&text=Results%20Copy%20Expand-,Math.,by%20removing%20any%20fractional%20digits.
// B) https://www.geeksforgeeks.org/javascript/how-to-convert-a-float-number-to-the-whole-number-in-javascript/
// B) https://www.geeksforgeeks.org/javascript/how-to-convert-a-float-number-to-the-whole-number-in-javascript/
// B) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// B) I need to multiply 0.1 and 0.2 to get a whole number/s. 
// B) let int1 = Math.round(float1 * 100); = 0.1 * 100 = 10
// B) let int2 = Math.round(float2 * 100); = 0.2 * 100 = 20
// B) Now that I have whole numbers I can add them together. let sum = int1 + int2; which is the equivilant of 10 + 20 = 30
// B) Lastly, dividing 30 by 100 gives me the output of 0.3. The line return sum / 100; is equivalent to 30 / 100 = 0.3.

// function currencyAddition(float1, float2) {
  
//   let int1 = Math.round(float1 * 100);
//   let int2 = Math.round(float2 * 100);

  
//   let sum = int1 + int2;

  
//   return sum / 100;
// }

// C) float1 is the first decimal number and float2 is the second decimal number.
// C) let int1 (integers) = Math.round(float1 * 100); = 0.1 * 100 = 10
// C) let int2 (integers) = Math.round(float2 * 100); = 0.2 * 100 = 20
// C) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// C) https://www.w3schools.com/js/js_switch.asp 
// C) https://medium.com/@hxu0407/9-smart-ways-to-replace-if-else-in-javascript-28f82ad6dcb9
// C) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch 
// C) https://www.w3schools.com/jsref/jsref_switch.asp#:~:text=The%20switch%20statement%20evaluates%20an,default%20keyword%20(or%20both).
// C) switch (operation) { - using switch as a conidition/decision method instead of if...else.
// C) Using the switch statement -  case '+' (if equation)
// C) Then run result = (int1 + int2) / 100;
// C)  break; - stop my switch.

// function currencyOperation(float1, float2, equation) {
//   let int1 = Math.round(float1 * 100);
//   let int2 = Math.round(float2 * 100);
//   let result;

//   switch (equation) {
//     case '+':
//       result = (int1 + int2) / 100;
//       break;
//     case '-':
//       result = (int1 - int2) / 100;
//       break;
//     case '*':
//       result = (int1 * int2) / (100 * 100);
//       break;
//     case '/':
//       result = int1 / int2;
//       break;
//     default:
//       return "Invalid equation";
//   }

//   return result;
// }


// console.log(0.3 == currencyAddition(0.1, 0.2)) // output is true
// console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // output is true


// D) adding numDecimals = 2) 
// D) using If for   if (numDecimals < 1) numDecimals = 1; and if (numDecimals > 10) numDecimals = 10; to make sure I stay between 1-10.
// D) using const factor = 10 ** numDecimals; to convert and round to a whole number.
// D) let result; - wondering If I should have been using const instead of let.
// D) switch (equation) { - looks at my string and runs the matching case
// D) ** - 2 to the power of 3
// D) - I started off thinking I was doing this right.. But I'm not sure if I placed numDecimals in the correct place, or using it properly. Moving on.
// D) https://docs.oracle.com/en/applications/enterprise-performance-management/11.2/hfmam/numdecimals.html
// D) https://help.tradestation.com/10_00/eng/tsdevhelp/elword/function/numdecimals_function_.htm


// function currencyOperation(float1, float2, equation, numDecimals = 2) {
  
//   if (numDecimals < 1) numDecimals = 1;
//   if (numDecimals > 10) numDecimals = 10;

//   const factor = 10 ** numDecimals;
//   const int1 = Math.round(float1 * factor);
//   const int2 = Math.round(float2 * factor);

//   let result;


// https://stackoverflow.com/questions/12511057/float-sum-with-javascript/12511233
// https://stackoverflow.com/questions/3730019/why-not-use-double-or-float-to-represent-currency
// https://www.geeksforgeeks.org/javascript/javascript-program-to-convert-a-number-to-binary/
// https://stackoverflow.com/questions/9553354/how-do-i-get-the-decimal-places-of-a-floating-point-number-in-javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// https://www.w3schools.com/js/js_numbers.asp























// 6. Create a function unique(duplicatesArray) which takes an array parameter that may
// include duplicates. Your function should return an array containing only the unique values
// from duplicatesArray.

// Test with the following arrays and create another one of your own.

// const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
// const travelPlaces = ['Bangkok', 'Tokyo', 'Paris', 'New York', 'London'];

// function unique(duplicatesArray) {
//   const result = [];               

//   for (const item of duplicatesArray) {  
//     if (!result.includes(item)) {        
//       result.push(item);                 
//     }
//   }

//   return result;                     
// }

// function unique(duplicatesArray) {
//   const result = [];               

//   for (const item of duplicatesArray) {  
//     if (!result.includes(item)) {        
//       result.push(item);                 
//     }
//   }

//   return result;                     
// }

// console.log(unique(colors)) // Output results [ 'red', 'green', 'blue', 'yellow', 'orange' ]
// console.log(unique(testScores)) // Output results  [ 55, 84, 97, 63, 32, 91, 43 ] - brackets were on different lines.
// console.log(unique(travelPlaces));

// 6) const result = []; - is my empty box. 
// 6) for (const item of duplicatesArray) - one value at a time.
// 6) if (!result.includes(item)) - sees is this already saved. (! means not) 
// 6) result.push(item); - If its not already in my result then put the new
// 6) return result; - pretty self explanatory, return my results.
// 6) To make my own I'm choosing places I'd like to travel to.
// 6) https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates










// 7. Use the following array of book objects to practice the array functions for map, find and
// filter. Test each of your answers to the below tasks.

const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

// a) Write a function getBookTitle(bookId) that uses the find function to return the
// title of the book object with the matching id.

// function getBookTitle(bookId) {
//   const book = books.find(myBook => myBook.id === bookId);
//   return book ? book.title : "Book not found";
// }

// console.log(getBookTitle(3));
// Output: 1984
// console.log(getBookTitle(5));
// Output: The Catcher in the Rye
// console.log(getBookTitle(4));
// Output: Brave New World
// console.log(getBookTitle(6));
// Output: Book not found

// A) function getBookTitle(bookId) { - creating my function.
// A) const book = books.find(myBook => myBook.id === bookId); - myBook.id is equal to (=>) bookId, find() looks through my array and should return the first item. using an arrow function to test.
// A) return book ? book.title : "Book not found"; - Return with the title of a book, if not, return with "Book not found"
// A) console.log(getBookTitle(3)); -  print output to terminal.

// find -  looks through the array and gives me the first book with the matching id.
// We return the title
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://www.w3schools.com/jsref/jsref_find.asp


// b) Write a function getOldBooks() that uses the filter function to return all book
// objects written before 1950.

// function getOldBooks() {
//   const oldBooks = books.filter(myBook => myBook.year < 1950);
//   return oldBooks;
// }

// console.log(getOldBooks());
// Output: [
//   {
//     id: 1,
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     year: 1925
//   },
//   { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
//   {
//     id: 4,
//     title: 'Brave New World',
//     author: 'Aldous Huxley',
//     year: 1932
//   }
// ]

// b) function getOldBooks() { - new function.
// b) books.filter(...) goes through each item in my books
// b) myBook => myBook.year < 1950 - this is how I’d check to confirm each book is less than 1950.
// b) return oldBooks; - returns answer. Should only be old books.
// b) console.log(getOldBooks()); - prints.


// c) Write a function addGenre() that uses the map function to add a new genre property
// to all of the above books, with the value ‘classic’.


function addGenre() {
  return books.map(myBook => {
    return { ...myBook, genre: 'classic' };
  });
}

console.log(addGenre());

// c)  Output: 
// [
//   {
//     id: 1,
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     year: 1925,
//     genre: 'classic'
//   },
//   {
//     id: 2,
//     title: 'To Kill a Mockingbird',
//     author: 'Harper Lee',
//     year: 1960,
//     genre: 'classic'
//   },
//   {
//     id: 3,
//     title: '1984',
//     author: 'George Orwell',
//     year: 1949,
//     genre: 'classic'
//   },
//   {
//     id: 4,
//     title: 'Brave New World',
//     author: 'Aldous Huxley',
//     year: 1932,
//     genre: 'classic'
//   },
//   {
//     id: 5,
//     title: 'The Catcher in the Rye',
//     author: 'J.D. Salinger',
//     year: 1951,
//     genre: 'classic'
//   }
// ]


// c) function addGenre() { - new function. 
// c) return books.map(myBook => { - (map does the same thing ‘books.filter(...)’ does. Sorts through each item/array.
// c) return { ...myBook, genre: 'classic' }; - using spread to make a copy of the current book and its properties. Also gave my genre the property name of classic.
// c) console.log(addGenre()); - prints to terminal.












// d) ****** (Extension) Write a function getTitles(authorInitial) that uses map and
// filter together to return an array of book titles for books written by authors whose
// names start with authorInitial.


// e) ******  (Extension) Write a function latestBook() that uses find and forEach to get the
// book with the most recent publication date.



// 7 Ref): https://www.northcoders.com/blog/the-beginners-guide-to-foreach-map-and-filter-in-javascript
// 7 Ref): https://jefflongbeard.medium.com/understanding-foreach-map-filter-and-find-in-javascript-f91da93b9f2c
// 7 Ref):  https://dev.to/wafa_bergaoui/understanding-javascript-array-methods-foreach-map-filter-reduce-and-find-2o4f
// 7 Ref): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 7 Ref): https://javascript.info/array-methods
// 7 Ref): https://www.geeksforgeeks.org/javascript/map-vs-filter-in-javascript/
















// 8. The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.

// const phoneBookABC = new Map() //an empty map to begin with
// phoneBookABC.set('Annabelle', '0412312343')
// phoneBookABC.set('Barry', '0433221117')
// phoneBookABC.set('Caroline', '0455221182')

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F

// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values

// c) Update the phone number for Caroline

// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map

// e) Combine the contents of the two individual Maps into a single phoneBook Map

// f) Print out the full list of names in the combined phone book



















// 9. Given the below salaries object, perform the following tasks.

// let salaries = {
// "Timothy" : 35000,
// "David" : 25000,
// "Mary" : 55000,
// "Christina" : 75000,
// "James" : 43000
// };

// a) Write a function sumSalaries(salaries) that calculates and returns the total of all
// salaries

// b) Write a function topEarner(salaries) that calculates and returns the name of the
// person earning the highest salary
















// 10.The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:

// const today = new Date();
// console.log('Current time is ' + today.toLocaleTimeString())
// console.log(today.getHours() + ' hours have passed so far today')

// a) Print the total number of minutes that have passed so far today

// b) Print the total number of seconds that have passed so far today

// c) Calculate and print your age as: 'I am x years, y months and z days old'

// d) Write a function daysInBetween(date1, date2) which calculates and returns the
// amount of days in between the two given dates.