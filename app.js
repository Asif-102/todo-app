const lists = [];

const addTodoBtn = document.getElementById("todo-btn");
const todoInput = document.getElementById("todo-text");
const todoList = document.getElementById("todo-list");
const totalItem = document.getElementById("total-item");

addTodoBtn.addEventListener("click", () => {
    lists.push(todoInput.value);
    todoInput.value = "";
    todoList.textContent = "";
    
    updateDisplay();
})

function updateDisplay()
{
    totalItem.innerText = lists.length;

    for(const list of lists)
    {
        const li = document.createElement("li");
        li.setAttribute("class", "list-group-item d-flex justify-content-between");
        li.innerHTML = `<span>${list}</span><span class="btn btn-light btn-sm">X</span>`
        todoList.appendChild(li);
    }
}