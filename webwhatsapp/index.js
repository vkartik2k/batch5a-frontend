console.log("hello")

let arr = [{
    name: "Sarthak Sharma",
    lastMsgTime: "10:06 pm",
    messages: [
        {
            content: "Hello",
            user: true // true means message was received i.e. white color
        },
        {
            content: "How are you doing? Will you goto college tomm?",
            user: true // true means message was received i.e. white color
        },{
            content: "Hello",
            user: false // true means message was received i.e. white color
        },
        ,{
            content: "Yes, I'll go",
            user: false // true means message was received i.e. white color
        },
    ]
},
{
    name: "Vaibhav Singh",
    lastMsgTime: "2:00 pm",
    messages: [
        {
            content: "Hello",
            user: true // true means message was received i.e. white color
        },
    ]
},
{
    name:"Aakash",
    lastMsgTime: "1:16 am",
    messages: [
        {
            content: "Hello",
            user: true // true means message was received i.e. white color
        },
        {
            content: "How are you doing? Will you goto college tomm?",
            user: true // true means message was received i.e. white color
        },{
            content: "Hello",
            user: false // true means message was received i.e. white color
        },
        ,{
            content: "Yes, I'll go",
            user: false // true means message was received i.e. white color
        },
    ]
}]


function getPerson(i) {
    let person = `
    <div class="personChat" id="person${i}">
        <div>
            <img src="person1.png" height="40" id="profilePic">
        </div>
        <div class="chatName">
            ${this.name}
            <div class="chatMessage">${this.messages[this.messages.length-1].content}</div>
        </div>
        <div class="chatTime">
            ${this.lastMsgTime}
        </div>
    </div>
    `
    return person
}

function getReceiveMsg(content) {
    msg = `
    <div class="msgBox">
        <div class="receivedMsg">${content}</div>
    </div>
    `
    return msg;
}

function getSendMsg(content) {
    msg = `
    <div class="msgBox msgBox2">
        <div class="sendMsg">${content}</div>
    </div>
    `
    return msg;
}

let content = ``

arr.forEach((ele, i)=> {
    let myCopy = getPerson.bind(ele)
    content += myCopy(i)
})

document.getElementById('peopleContainer').innerHTML = content

arr.forEach((ele, i) => {
    document.getElementById(`person${i}`).addEventListener('click', () => {
        console.log(i)
        document.getElementById('personName').innerText = ele.name
        let innerContent = ``;
        ele.messages.forEach(m => {
            if(m.user===true) {
                innerContent += getReceiveMsg(m.content)
            }
            else {
                innerContent += getSendMsg(m.content)
            }
        })


        document.getElementById('main').innerHTML = innerContent
    })
})
