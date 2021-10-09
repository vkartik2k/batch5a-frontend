// console.log("Hello")

// var name = document.getElementById('name').innerText

// var counter = document.getElementsByClassName('counter')[0].innerText

// console.log(counter)



// function modifyCounter(count) {
//     document.getElementsByClassName('counter')[0].innerText = count
// }

// modifyCounter(2)

var count = 0
document.getElementsByClassName('counter')[0].innerText = count

function increment() {
    count = count + 1
    document.getElementsByClassName('counter')[0].innerText = count
    console.log(`Counter is ${count}`)
}

document.getElementById('btn').addEventListener('click', increment)


// -------------------------------------------------------

function getName() {
     document.getElementById('name').value = 'Ron'

    

    console.log("Btn2 clicked!")
}


document.getElementById('name_btn').addEventListener('click', getName)

// -------------------------------------------------------

var person = {
    firstName: '',
    lastName: ''
}


var myList = document.getElementById('myList')

console.log(myList.innerHTML)


var newItem = document.createElement('li')
newItem.innerText = 'Third'

myList.appendChild(newItem)

myList.innerHTML += '<li>Third</li>'