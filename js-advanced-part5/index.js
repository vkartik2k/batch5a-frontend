console.log("Advanced JS Part - 5")



// console.log(1)

// console.log((1))



// immediately invoked functions

// let a = 10; // global variable

// (function () {

//     let b = 10; // local


//     console.log(a, b)
// })();

// function my() {
//     console.log(a, b)
    
// }

// scope in js

// let age = 10;

// function greet(name) {
//     if(true) {
//         let age = 16;
//         console.log(`${name}'s age is ${age}` )
//     }

// }

// greet("Harry")

// closure in js

// function outer() {
//     let a = 10;
//     function inner () {
//         a+=1;
//         console.log(a);
//     }

//     return inner;
// } 

// let output = outer();

// output()
// output()
// output()
// output()


// Q1

// (function immediate(a) {
//     return (function inner(b) {
//         console.log(a);
//     })(1);
// })(2);


// Q2

// var count =0;
// (function immediate() {
//     if (count===0) {
//         var count = 1;
//         console.log(count);
//     }
//     console.log(count);
// })();

// Q3

// function createIncrement() {
//     let count = 0;
//     function increment() {
//         count++;
//     }

    
//     function log() {
//         let message = `The count is ${count}`;
//         console.log(message);
//     }
//     return [increment, log];
// }

// const [increment, log] = createIncrement();

// increment();
// increment();
// increment();
// log();

// promise in js 

// let myPromise = new Promise(function(resolve, reject){
//     let x = 10;

//     // Some process which might take some time

//     if(x==0) {
//         resolve("OK");
//     }
//     else {
//         reject("Error");
//     }
// })