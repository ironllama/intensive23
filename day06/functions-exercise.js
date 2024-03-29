// 1. Create a function that says hello to the person name provided as an argument.
function greetPerson(inName) {
    console.log("Hello,", inName + "!");
}
greetPerson("everyone");

// 2. Create a function that will tell you if a provided year is a leap year or not.
// A year is a leap year if it is divisible by 4 but not 100, or else is divisible by 400.
function isLeapYear(inYear) {
    let leapYear = false;  // Since most years are NOT leap years, we'll start the return value with false.

    if (inYear % 4 === 0) {  // Divisibly by 4
        if (inYear % 100 !== 0) {  // ... but not 100
            leapYear = true;
        }
        else if (inYear % 400 === 0) {  // ... unless it's divisible by 400
            leapYear = true;
        }
    }

    return leapYear;  // Make sure we return something!
}
console.log("Leap Year 2000: true:", isLeapYear(2000));
console.log("Leap Year 2003: false:", isLeapYear(2003));
console.log("Leap Year 2008: true:", isLeapYear(2008));
console.log("Leap Year 2012: true:", isLeapYear(2012));
console.log("Leap Year 2023: false:", isLeapYear(2023));
console.log("Leap Year 2024: true:", isLeapYear(2024));

// 3. Create a function that will return all the vowels in an array of letters. It should return the vowels found as a new array.
// Use the lotsOfLetters array from the provided letters.js file.
const { lotsOfLetters } = require("./letters.js");
const allVowels = ['a', 'e', 'i', 'o', 'u'];
function getVowels(letterArray) {
    let retArray = [];

    // for (let i = 0; i < letterArray.length; i++) {
    //     let currLetter = letterArray[i];
    //     ...
    // }

    // letterArray.forEach(currLetter => {  // Same loop behavior as above.
    //     ...
    // })

    // for (const currLetter of letterArray) {  // Same loop behavior as above.
    //     let isVowel = false;

    //     for (const currVowel of allVowels) {
    //         if (currLetter === currVowel) {
    //             isVowel = true;
    //             break;  // If we find that currLetter is a vowel, no need to keep testing other vowels.
    //         }
    //     }

    //     if (isVowel) {
    //         retArray.push(currLetter);
    //     }
    // }

    for (const currLetter of letterArray) {  // Same as above logic, streamlined with other array functions.
        // if (allVowels.indexOf(currLetter) !== -1) {
        if (allVowels.includes(currLetter)) {  // Same as "*.indexOf() !== -1" above.
            retArray.push(currLetter);
        }
    }

    return retArray;
}
console.log("Num vowels: ['e']:", getVowels(['e']));
console.log("Num vowels: ['i', 'a', 'o', 'e']:", getVowels(['z', 'i', 'g', 'l', 'a', 'b', 'o', 'e']));
console.log("Num vowels: ['i', 'i', 'i', 'e']:", getVowels(['v', 'i', 'q', 'i', 'i', 'e']));
console.log("Num vowels: []:", getVowels(['z', 'g', 'l', 'b']));
console.log("Num vowels: []:", getVowels([]));
console.log("Num vowels: [u, o, o, a, o, i, i, e, u, i, o, e, e]:", getVowels(lotsOfLetters));


// 4. Create a function that takes an array of people and a name and will return back the age of that person.
// Use the lotsOfPeople array from the provided people.js file.
const { lotsOfPeople } = require("./people.js");
function getAgeOfPerson(allPeople, personName) {
    let age = 0;

    for (let i = 0; i < allPeople.length; i++) {
        if (personName === allPeople[i][0]) {  // Test for match on name.
            age = allPeople[i][1];  // Found a match! Get the age.
            break;  // Stop checking the rest of the names.
        }
    }

    return age;
}
console.log("Age of Boyd: 52:", getAgeOfPerson(lotsOfPeople, "Boyd"));
console.log("Age of Geovanny: 51:", getAgeOfPerson(lotsOfPeople, "Geovanny"));
console.log("Age of Pedro: 26:", getAgeOfPerson(lotsOfPeople, "Pedro"));
console.log("Age of Ezequiel: 57:", getAgeOfPerson(lotsOfPeople, "Ezequiel"));
console.log("Age of Michael: 0:", getAgeOfPerson(lotsOfPeople, "Michael"));


// 5. Create a function that take an array of people, a name, and a age and will add a new person into the lotsOfPeople array.
// Use the lotsOfPeople array from the provided people.js file.

function addPerson(people, name, age) {
    // if ((name !== undefined && age !== undefined)
    // || (name !== null && age !== null)
    // || (name !== "" && age !== 0)) {
    if (name && age) {  // Same as above, but with implicit coersion/cast to boolean.
        // lotsOfPeople.push
        const newPerson = [name, age];
        people.push(newPerson);
    }
}
addPerson(lotsOfPeople, "Nina", 33);
console.log("Add person: [[\"Ezequiel\", 57], [\"Nina\", 33]]:", lotsOfPeople.slice(-2));
addPerson(lotsOfPeople, "Eden", 25);
console.log("Add person: [[\"Ezequiel\", 57], [\"Nina\", 33], [\"Eden\", 25]]:", lotsOfPeople.slice(-3));
addPerson(lotsOfPeople);  // Left off second argument
console.log("Add person: [[\"Ezequiel\", 57], [\"Nina\", 33], [\"Eden\", 25]]:", lotsOfPeople.slice(-3));


// 6. Create a function that takes two arguments: an array of numbers and a multiplier.
// The function should update the array with each number multiplied by the multiplier parameter.
// Ex : [2,5,1,10] with multiplier 2 should update the array to [4,10,2,20]
function multiplyArrayBy(inArray, inMult = 1) {
    // if (isNaN(inMult)) return

    for (let i = 0; i < inArray.length; i++) {
        // if (isNaN(inMult)) continue
        inArray[i] *= inMult;
    }
}
let testArr = [2, 5, 1, 10];
multiplyArrayBy(testArr, 2);
console.log("Multiply: [4, 10, 2, 20]:", testArr);

testArr = [1, -2, 0];
multiplyArrayBy(testArr, -3)
console.log("Multiply: [-3, 6, 0]:", testArr);

testArr = [90];
multiplyArrayBy(testArr, 10)
console.log("Multiply: [900]:", testArr);

testArr = [5, -20, 49];
multiplyArrayBy(testArr);  // Left off second argument
console.log("Multiply: [5, -20, 49]:", testArr);

testArr = [];
multiplyArrayBy(testArr, 12);
console.log("Multiply: []:", testArr);

// 7. Create a function that will sort an array of people so the people are ordered by their age in numerical order.
// Use the lotsOfPeople array from the provided people.js file.
// Ex: [["Carolina", 28], ["Alex", 18], ["Georges", 31], ["Betty", 64]]
// becomes
// [["Alex", 18], ["Carolina", 28], ["Georges", 31], ["Betty", 64]]

function sortThePeople(inArray) {
    // inArray.sort();  // Only sorts by name.
    // inArray.sort((a, b) => a[1] < b[1]);  // Compare functio needs to return a number, not a boolean.
    // inArray.sort((a, b) => {
    //     if (a[1] < b[1]) return -1; // Should return a negative number, if a is less than b.
    //     else if (a[1] > b[1]) return 1;  // Positive if a is greater than b.
    //     else return 0;  // Otherwise, return 0 if equal.
    // });

    inArray.sort((a, b) => a[1] - b[1]);  // Same as above.

    // let sortedPeople = [];
    // for (let i = 0; i < inArray.length; i++) {
    //     let currPerson = inArray[i];

    //     // Insert into the proper place in sortedPeople. Iterate through the loop from beginning to end and place the currPerson at the proper spot. (ie. the first spot the currPersons's age is greater than the spot's age)
    // }
    // inArray = sortThePeople;
}

sortThePeople(lotsOfPeople)
console.log("SORTED:", lotsOfPeople);
