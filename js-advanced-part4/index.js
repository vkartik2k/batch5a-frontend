console.log("Advanced JS Part - 4")

// spread and rest operators

// let a = [1,2 ,3 , 4]

// let b = [5, 6, 7]

// let cp = [...a]

// a.push(5)

// console.log(cp)

// let namea = ["Ram", "singh"]

// function print(firstName, lastName, address) {
//     console.log(`Hello ${lastName} ${firstName}`)
// }

// print(...namea, "Delhi")
// print(namea[0], namea[1], "delhi")

// a = [10, ...a]
// let c = []

// a.forEach((e) => c.push(e))
// b.forEach((e) => c.push(e))

// let c = [...a, ...b, 8]

// rest

// function add(a, b, ...arr) {
//     console.log(a)
//     console.log(b)
//     console.log(arr)

//     return arr.reduce((s, e) => s+e, 0);
// } 

// let sum = add(1, 2, 3, 4, -10);

// console.log(sum);

// let c = a + b;

// console.log(c)

// let arr = [1,2,3]

// let cpy = [...arr, 4]

// cpy = [1,2,3,4]

// function add(...arr) {
//     arr = [1,2 ,3]
// }

// add(1, 2, 3)


// let arr = [
//     4,
// ]

// arr.reduce((acc, ele) => { return acc+ele}, 0)















// JS is a synchronous and single threaded language


// console.log(10)

// setTimeout(() => {
//     console.log(20)
// }, 1000)

//  // x sec

// console.log(30)

// // async task in js 
// 1. setTimeout(() => {
    
// }, timeout);
// 2. promises
// 3. async await
// 4. fetch


// add(1, 2)

// callbacks in js

setTimeout(() => {
    console.log(10)
}, 1000);

// scope in js

// closure in js
function outer(f) {
    console.log(1);
    f(10);
    console.log(2);
}

let inner = function (a) {
    console.log(a);
}

outer(inner)