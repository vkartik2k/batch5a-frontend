console.log("Advanced JS Part - 7")

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