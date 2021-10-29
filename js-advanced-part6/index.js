console.log("Advanced JS Part - 6")

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

// async and await

// function makeRequest(location) {
//     return new Promise((resolve, reject) => {
//         console.log(`Making Request to ${location}`);
//         if(location==='google') {
//             resolve("Google says Hello");
//         }
//         else {
//             reject("We can only connect to google");
//         }
//     })
// }

// function processRequest(response) {
//     return new Promise((resolve, reject) => {
//         console.log("Processing Response");
//         resolve("Extra Info :" + response)
//     })
// }

// polyfill for bind

// let obj = {
//     firstName: 'Harry',
//     lastName: 'Potter'
// }

// function greet(location, age) {
//     console.log(`Hello and welcome ${this.firstName} ${this.lastName} from ${location}`);
//     console.log(age)
// }

let greetObj = greet.bind(obj, 'London')

// greetObj(14)

Object.prototype.myBind = function (...args) {
    let obj = this //referring to greet
    let params = args.slice(1)
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}

let greetObj2 = greet.myBind(obj)

// greetObj2('London', 14)

// currying using bind

// function mul(a, b) {
//     return a*b;
// }

// // let mulBy2 = mul.bind(this, 2)

// // console.log(mulBy2(6))

// console.log(mul(2, 4))

// // currying using closure

// function mulGen(a) {
//     return function (b) {
//         return a*b;
//     }
// }

// let mulBy3 = mulGen(3);

// console.log(mulBy3(3))

// mulGen(3)(3)

