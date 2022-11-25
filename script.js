// variables

const input = document.querySelector("input"),
 btn = document.querySelector("button"),
 todoList = document.querySelector(".to-do-list"),
 clear = document.querySelector(".clear");


// ADD LIST ITEM
const addTASK = () => {
    const newListItem = document.createElement("li");
    const delBtn = document.createElement("button");

    delBtn.innerHTML = '<i class="fas fa-trash-alt">';

    if (input.value != "") {
        newListItem.textContent = input.value;
        newListItem.appendChild(delBtn);
        todoList.appendChild(newListItem);
        input.value = "";
    }
    else {
        alert("Please enter a task")
    }

    //deleting list item

    delBtn.addEventListener("click", function () {
        const del = confirm("Proceed to delete task");
        if (del == true) {
            const parent = this.parentNode;
            parent.remove()
        }
    })
}

btn.addEventListener("click", addTASK);

clear.addEventListener("click", () => {
    todoList.innerHTML = "";
})




