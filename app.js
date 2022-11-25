window.onload = function () {
    displayTasks()
}

// variables

const input = document.querySelector("input"),
 btn = document.querySelector("button"),
 todoList = document.querySelector(".to-do-list"),
 clear = document.querySelector(".clear");


btn.addEventListener("click", addTask);

//get tasks from the local storage
let tasks;
function getTasks() {
    if (localStorage.getItem("tasks") == null) {
        tasks = [];
        
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
}

function addTask() {
    if (input.value != "") {
        addTaskToLs();
        todoList.innerHTML = "";
        displayTasks();
    }
    else {
        alert("Please enter a task")
    }
}


// save task to local storage

function addTaskToLs() {
    getTasks()
    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
};


//display task on the page

function displayTasks() {
    getTasks();

    tasks.forEach((task, index) => {
        const newListItem = document.createElement("li");
        const delBtn = document.createElement("button");
        delBtn.innerHTML = `<i class="fas fa-trash-alt" id="${index}" onclick="deleteTask(this.id)"></i>`;


        newListItem.appendChild(document.createTextNode(task));
        newListItem.appendChild(delBtn);
        todoList.appendChild(newListItem)
    });
};

//delet tasks

function deleteTask(index) {
    const del = confirm("Proceed to delete task");
    if (del == true) {
        getTasks();
    }

    tasks.splice(index, 1)
    localStorage.setItem("tasks", JSON.stringify(tasks));
    todoList.innerHTML = "";
    displayTasks();

}


//clear tasks

clear.addEventListener("click", clearTasks)

function clearTasks() {
    const delTasks = confirm("Are you sure you want to delete all TASKS!!")

    if (delTasks == true) {
        localStorage.clear();
        todoList.innerHTML = "";
        displayTasks();
    }
}