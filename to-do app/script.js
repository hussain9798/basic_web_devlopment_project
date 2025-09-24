let inputs = document.querySelector('input');
let btn = document.querySelector('button');
let tasklist = document.getElementById('Task-list');
let task = [];

// Load from localStorage
let store_data = localStorage.getItem("task array");
if (store_data != null) {
    task = JSON.parse(store_data);
    maketodo();
}

btn.addEventListener("click", function ()  {
    let query = inputs.value;
    inputs.value = "";

    if(query.trim() === "" ) {
        alert("No value entered!");
        return;
    }

    let taskobj = {
        id: Date.now(),
        text: query
    }
    task.push(taskobj);
    localStorage.setItem("task array", JSON.stringify(task));
    maketodo();
});

function maketodo() {
    tasklist.innerHTML = "";

    for(let i=0;i<task.length;i++) {
        let {id, text} = task[i];
        let element = document.createElement('div');
        element.classList.add('todo');

        element.innerHTML = `
            <span class="task" contenteditable="false">${text}</span>
            <button class='edit'>Edit</button>
            <span class="delete">❌</span>
        `;

        let delbtn = element.querySelector('.delete');
        let editbtn = element.querySelector('.edit');
        let textTask = element.querySelector('.task');

        // Delete
        delbtn.addEventListener("click", function () {
            task = task.filter(taskobj => taskobj.id !== id);
            localStorage.setItem("task array", JSON.stringify(task));
            tasklist.removeChild(element);
        });

        // Edit
        editbtn.addEventListener("click", function () {
            if (editbtn.innerText === 'Edit') {
                textTask.setAttribute('contenteditable', 'true');
                textTask.focus();
                editbtn.innerText = 'Save';
            } else {
                textTask.setAttribute('contenteditable', 'false');
                let update_text = textTask.innerText.trim();
                if(update_text !== "") {
                    task = task.map(taskobj => {
                        if (taskobj.id === id) taskobj.text = update_text;
                        return taskobj;
                    });
                    localStorage.setItem("task array", JSON.stringify(task));
                }
                editbtn.innerText = 'Edit';
            }
        });

        tasklist.appendChild(element);
    }
}
