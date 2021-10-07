console.log("hello world")

var name = "harry potter";


// var a = 1.01

// console.log(a)


var arr = [1, 2, "harry"];

// arr.push("potter")
// arr.push(4)

// arr.pop()

var len = arr.length

console.log(arr)

console.log(len)

var student = {
    // key value pairs
    firstName : "Harry",
    lastName : "Potter",
    age : 14
}

console.log("Hello My name is "+ student.firstName + " " + student.lastName + ", my age is "+ student.age)

console.log(`Hello my name is ${1+2}`)

var arr2 = [1, 2, {
    name: 'Ron',
    age: 15
}] 

console.log(arr2[2].name)

var teacher = {
    name: 'Snape',
    students: ["Harry", "Ron"]
}

console.log(teacher.students)

var arr2d = [
    [1, 2], 
    [3, 4]
]

console.log(arr2d[1][0])

var board = [['X', 'O', 'X'], ['X', 'X', 'X'], ['X', 'O', 'O']]

console.log(board)

var a = 1;
var b = 3;

if(a+b===3) {
    console.log("Correct ANs")
}
else {
    console.warn("Wrong Math")
}

for(var i=0; i<10; i++) {
    console.log("Hello " + i)
}

var arr3 = [4, 3, 2, 1]

for(var i =0; i<arr3.length; i++) {
    console.log(arr3[i]);
}