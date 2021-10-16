// var count = 0

// function addTask() {
//     var task = document.getElementById('taskField').value

//     var taskContainer = document.getElementsByClassName('taskContainer')[0]

//     taskContainer.innerHTML = `
    // <div class="task" id="task${count}">
    //     <span class="taskDes">${task}</span><button id="deleteBtn${count}">Delete</button>
    // </div>
//     ` + taskContainer.innerHTML;

//     console.log('deleteBtn'+count)

//     count++;

//     for(var i =0; i<count; i++) {

//         document.getElementById(`deleteBtn${i}`).addEventListener('click', function () {
//             console.log(i)
//             document.getElementById(`task${i}`).remove()
//         })
//     }
    
// }

// document.getElementById('add').addEventListener('click', addTask);

let task = []

var taskContainer = document.getElementsByClassName('taskContainer')[0]

// taskContainer.innerHTML = task.reduce((inner, current, idx) => {
//     console.log(idx)

//     return inner + `
//     <div class="task" id="task${idx}">
//         <span class="taskDes">${current}</span><button id="deleteBtn${idx}">Delete</button>
//     </div>
//     `
// }, ``)

// task.forEach((currTask, idx) => {
//     document.getElementById(`deleteBtn${idx}`).addEventListener('click', () => {
//         document.getElementById(`task${idx}`).remove()
//         task = task.filter((ele) => {
//             return ele!==currTask;
//         })
//     })
// })


function addTask() {
    var curr = document.getElementById('taskField').value

    // task.push(curr);

    task = [curr, ...task];
    taskContainer.innerHTML = task.reduce((inner, current, idx) => {
        console.log(idx)
    
        return inner + `
        <div class="task" id="task${idx}">
            <span class="taskDes">${current}</span><button id="deleteBtn${idx}">Delete</button>
        </div>
        `
    }, ``)
    
    task.forEach((currTask, idx) => {
        document.getElementById(`deleteBtn${idx}`).addEventListener('click', () => {
            document.getElementById(`task${idx}`).remove()
            task = task.filter((ele) => {
                return ele!==currTask;
            })
        })
    })
}

document.getElementById('add').addEventListener('click', addTask);