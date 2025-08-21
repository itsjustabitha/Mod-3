// What are the results of these expressions? (answer first, then use console.log() to check)

 "" + 1 + 0
// console.log("" + 1 + 0)

 "" - 1 + 0
// console.log("" - 1 + 0)

true + false
// console.log(true + false)

!true
// console.log(!true)

6 / "3"
// console.log(6 / "3")

"2" * "3"
// console.log("2" * "3")

4 + 5 + "px"
// console.log(4 + 5 + "px")

"$" + 4 + 5
// console.log("$" + 4 + 5)

"4" - 2
// console.log( "4" - 2)

"4px" - 2
// console.log("4px" - 2)

" -9 " + 5
// console.log( " -9 " + 5)

" -9 " - 5
// console.log(" -9 " - 5)

null + 1
// console.log(null + 1)

undefined + 1
// console.log(undefined + 1)

undefined == null
// console.log(undefined == null)

undefined === null
// console.log(undefined === null)

" \t \n" - 2
// console.log(" \t \n" - 2)


// 2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

let three = "3"

let four = "4"

let thirty = "30"

//what is the value of the following expressions?

let addition = three + four
// console.log("addition:", addition)

let multiplication = three * four
// console.log("multiplication:", multiplication) 

let division = three / four
// console.log("division:", division)

let subtraction = three - four
// console.log("subtraction:", subtraction)

let lessThan1 = three < four
// console.log("lessThan1:", lessThan1)


let lessThan2 = thirty < four
// console.log("lessThan2:", lessThan2)
// console.log(Number(thirty) < Number(four)); 


// 3. Which of the following console.log messages will print? Why?

// if (0) console.log('#1 zero is true')
// This should be false. I expected this to print and it didn't. I had to do some digging to find out that If statements don't print.

// if ("0") console.log('#2 zero is true')
// // This should be true. This is an empty string.

// if (null) console.log('null is true')
// // This should be false. Won't print.

// if (-1) console.log('negative is true')
// This should be true. Non-zero number.

// if (1) console.log('positive is true')
// This should be true.


// 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?

let a = 2, b = 3;

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


// let a = 6, b = 3;
// let result = `${a} + ${b} is ` + (a + b < 10 ? 'less than 10' : 'greater than 10');
// console.log(result);

// let result = `${6} + ${3} is ` + (6 + 3 < 10 ? 'less than 10'

// let a = 10, b = 12;
// let result = `${a} + ${b} is ` + (a + b < 10 ? 'less than 10' : 'greater than 10');
// console.log(result);

//let result = `${10} + ${12} is ` + (10 + 12 < 10 ? 'greater than 10');



// 5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

function getGreeting(name) {
return 'Hello ' + name + '!';
}

// const getGreeting = (name) => {
//     return 'Hello ' + name + '!';
//   };

// console.log(getGreeting("Tabitha"));



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