console.log("Advanced JS Part - 2")

// Hoisting in js

// console.log(a)

// greet("Harry")

// console.log(greet2)
// greet2()

// var a = 10;

// function greet(name) {
//     console.log(`Greeting of the day, ${name}`)
// }

// var greet2 = () => {
//     console.log("Greet2!")
// }



// Call, Apply and bind

// var person = {
//     firstName: "Harry",
//     lastName: "Potter",
//     greet: function (location, house) {
//         console.log(`Hello and welcome ${this.firstName} ${this.lastName} from ${location} and house ${house}`)
//     }
// }

// var person2 = {
//     firstName: 'Ron',
//     lastName: 'Weasly',
// }

// var person3 = {
//     firstName: 'Darco',
//     lastName: 'Malfoy'
// }

// person.greet.apply(person3, ['paris', 'A'])
// person.greet.call(person3, 'paris', 'A')


// person.greet('london', 'A')

let greet = function (location, house) {
    console.log(`Hello and welcome ${this.firstName} ${this.lastName} from ${location} and house ${house}`)
}

let greet2 = function () {
    console.log("hello")
}

var person = {
    firstName: "Harry",
    lastName: "Potter",
}

var person2 = {
    firstName: 'Ron',
    lastName: 'Weasly',
}

var person3 = {
    firstName: 'Darco',
    lastName: 'Malfoy'
}

let greetP1 = greet.bind(person2)

greetP1('london', 'A')

greet2()

greet('london', 'A')

// polyfill for bind -> v. imp.

// spread and rest operators

// try and catch statement

// forEach

// map, filter, reduce


// [1,2, 2, 3, 2] count(2) >= 3

// even : [2, 2, 2, 1] // invalid

// function sol(arr) {
//     let n = arr.length;
//     let majority = -1;

//     for(let i=0; i<n; i++) {
//         let count = 0; // count of ith element

//         for(let j=0; j<n; j++) {
//             if(arr[i]===arr[j]) {
//                 count++;
//             }
//         }

//         if(count > Math.floor(n/2)) {
//             majority = arr[i];
//         }
//     }

//     return majority;
// }