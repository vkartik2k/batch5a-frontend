var count = 0

function addTask() {
    var task = document.getElementById('taskField').value

    var taskContainer = document.getElementsByClassName('taskContainer')[0]

    taskContainer.innerHTML = `
    <div class="task" id="task${count}">
        <span class="taskDes">${task}</span><button id="deleteBtn${count}">Delete</button>
    </div>
    ` + taskContainer.innerHTML;

    console.log('deleteBtn'+count)

    count++;

    for(var i =0; i<count; i++) {

        document.getElementById(`deleteBtn${i}`).addEventListener('click', function () {
            console.log(i)
            document.getElementById(`task${i}`).remove()
        })
    }
    
}

document.getElementById('add').addEventListener('click', addTask);