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

// let myPromise = new Promise(function (resolve, reject) {
//     // ...


//     let price = 1999

//     if(price < 1000) {
//         resolve(price) // fullfilled
//     }
//     else {
//         reject("Error") // not fullfilled
//     }
    
// })

// myPromise.then(function (data) {
//     console.log("Promise is fullfilled!")
//     console.log(`Book Purchased for ${data}`)
// }).catch(function(err) {
//     console.log(err)
// })


// async and await

// function makeRequest(location) {
//     return new Promise((resolve, reject) => {
//         console.log(`Making Request to ${location}`);
//         setTimeout(() => {
//             if(location==='google') {
//                 resolve("Google says Hello");
//             }
//             else {
//                 reject("We can only connect to google");
//             }
//         }, 15000)

//     })
// }

// function processResponse(response) {
//     return new Promise((resolve, reject) => {
//         console.log("Processing Response");
//         resolve("Extra Info :" + response)
//         // reject("Error")
//     })
// }

// // makeRequest('google').then(function (res) {
// //     return processResponse(res);
// // }).then(function(pres) {
// //     console.log(pres)
// // }).catch(function(err) {
// //     console.error(err)
// // });
// // console.log("Hello")

// // async await
// async function exec() {
//     try {
//         let myans = await makeRequest('google') // 15 sec

//         let processedAns = await processResponse(myans) // 15 sec
//         console.log(processedAns)
        
//     }
//     catch(e) {
//         console.log("Received an Error in connecting")
//     }
//     console.log("Hello")
// }

// exec() // async
// console.log("Hello2")



// makeRequest('facebook').then(function (myRes) {
//     console.log(myRes)
// }).catch(function (myRes) {
//     console.log(myRes)
// })
// console.log("Hello")

// console.log(1)

// setTimeout(()=> {
//     console.log(2)
// }, 1000)

// console.log(3)

// function mul(a, b) {
//     return a*b;
// }

// add(mul(1,2), 3) //6


// fetch
// fetch('https://reqres.in/api/users?page=2')
//   .then(function(res) {
//       return res.json();
//   })
//   .then(function(res) {
//       console.log(res.data)
//   })

document.getElementById('sd').value

fetch(`https://codeforces.com/api/user.info?handles=${username}`, {})
  .then(function(res) {
      return res.json();
  })
  .then(function(res) {
      console.log(res.result[0].rating)
      document.getElementById('rating').innerText = res.result[0].rating
  })


// POST

let obj = {
    name: "Harry",
    email: "harry@potter.com",
    password: "school@123"
}

let username= "Kartik"

fetch('https://example.com/profile' + username, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(obj),
})
.then(response => response.json())
.then(data => {
  console.log(data);
})

console.log( JSON.stringify(obj))




