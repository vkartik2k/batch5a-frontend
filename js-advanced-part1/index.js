// console.log("Hello")

// var a = 10;

// console.log(a)

// a = [1, 2, 3];

// console.log(a)

// a = function () {
//     console.log("A")
// }

// console.log(a)
// a()

// // function greet(name) {
// //     console.log("Hello "+ name);
// // }



// // // valid

// // var greet2 = function (name) {
// //     console.log("hello" + name)
// // }

// // // invalid

// // function () {
// //     console.log("hello")
// // }

// function greet() {
//     let a = 10;
// }

// console.log(greet)




// function incrementby10(q) {
//     q = q + 10;
//     return q;
// }

// function gen() {
//     var a = 10;

//     var fun = function () {
//         console.log("hello from inside")
//     }

//     return fun;

// }

// var out = gen();

// out()

// a

// incrementby10(20);

// function greetGen() {
//     var a = 20

//     var greet = function (name) {

//         var innerFunc = function () {

//         }
//         console.log("Greetings "+name)

//         return name
//     }


//     return greet;
// }

// var out = function (name) {

//     var innerFunc = function () {

//     }
//     console.log("Greetings "+name)

//     return name
// }

// var greet = function (name) {
//     return "Hello " + name;
// }

// var output = greet("ram")

// console.log(output)

// function outer(f1, s) {
//     var out = f1(s);

//     console.log(out)


// }


// outer(greet, "ram")






// function outer() {

//     return function () {
//         a = 10
//     }
// }

// var out = outer()


// let const and var

// var a = 10;

// let b = 10;

// function hello() {
//     var c = 10;
//     if(c===10) {
//         var d = 10;
//         console.log("true")
//     }
//     else {
//         let d = 11;
//         console.log("false")
//     }
//     console.log(d)
//     console.log(c);
// }
// hello();
// console.log(c);


const p = 10;

// p++; // invalid

// const greet = function (name) {
//     console.log(name)
// }

// greet("ram")
// greet("kartik")

// greet = function () {

// }

// setTimeout


// const output = setInterval(function () {
//     console.log("Hello")
// }, 1000)

// setTimeout(function (){
//     clearInterval(output) 
// }, 5000);





// var a = 10;
// console.log(a);

// arrow functions

function myfunc(name) {
    return "Hello " + name;
}

let myfunc2 = function (name) {
    return "Hello " + name;
}

let myfunc3 = (name) => {
    return "Hello " + name;
}

let myfunc4 = (a, b) => a+b;

function add(a, b) {
    return a + b;
}


setTimeout(() => console.log("hello after 1 sec"), 1000);