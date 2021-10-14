console.log("Advanced JS Part - 3")

// function statement or function declaration

// var a = 10;

// greet("kartik")

// function greet(name) {
//     console.log(name)
// }


// function expression

// console.log(greet2) // undefined

// greet2("kartik") //invalid

// var greet2 = function(name) {
//     console.log(name)
// }

// var greet3 = (name) => {
//     console.log(name)
// }
// anonymous functions

// setTimeout( function () {

// }, 1000)

// function () {
//     console.log("hello")
// }

// greet()

// Difference b/w arguments and parameters

// function greet(name, location) { // parameters
//     console.log(`I am ${name} and I am from ${location}`)
// }

// greet("Harry Potter", "London") //arguments

// First Class functions

// ternary operator

// let p1 = {
//     name: "Sachin",
//     age: 33
// }

// let p2 = {
//     name: 'Ron',
//     age: 14
// }

// function isVoter(person) {
//     person.age = (person.age >= 18 ?  18 : person.age);

//     if(person.age >= 18) {
//         person.age = 18;
//     }
//     else {
//         person.age = person.age;
//     }


//     return person;
// }

// p1 = isVoter(p1);

// console.log(isVoter(p1));
// console.log(isVoter(p2));

// forEach

let ages = [18, 33, 21, 9, 11, 80, 25, 17, 19];

// let voters = [];

let person = [
    {
        name: "Raghav",
        age: 19
    },
    {
        name: "Khushi",
        age: 27
    },
    {
        name: "Ram",
        age: 10
    }
]


ages.push(76);

// console.log(ages);

// for(let i=0; i<ages.length; i++) {
//     if(ages[i]>=18) {
//         console.log(ages[i]);
//     }
// }

// ages.forEach((ele) => {
//     if(ele>=18) voters.push(ele);
// })

// // console.log(voters)

// person.forEach((p) => {
//     if(p.age >=18) console.log(p.name)
// })

// // map, filter, reduce

// // filter

// ages.filter( function (ele) {} )

// let voters = ages.filter(ele => ele>=18? true: false)

// console.log(voters)


// map

let x = [2, 9, 4, 10, 12, 3];

// let x2 = [];

// for(let i=0; i<x.length; i++) {
//     x2.push(x[i]*x[i]);
// }

// let out = x.filter((e) => e>2?true:false).map((e) => e*e)

// let arr = x.map((e) => {
//     if(e>2) return e*e;
//     else return false;
// })

// console.log(arr)

// let x2 = x.map(ele=> ele);

// console.log(x);

// console.log(x2);

// reduce

// let mul = x.reduce((s, e) => s + (e*e), 0)


// console.log(mul);

// spread and rest operators

// try and catch statement

// Errors

// Logical Error

// syntax



try {
    console.log(a);
}

catch(e) {
    console.log("Error is here")
}

let a = 10;

console.log(b);