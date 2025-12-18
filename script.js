let todoInput = document.querySelector("#todoInput");
let addBtn = document.querySelector("#addBtn");
let todoList = document.querySelector("#todoList");

// load todos from localStorage
let todos = JSON.parse(localStorage.getItem("todo")) || [];

// show saved todos on page load
showTodos();

// add todo
addBtn.addEventListener("click", function () {
  let task = todoInput.value.trim();
  if (task === "") return;

  todos.push(task);
  localStorage.setItem("todo", JSON.stringify(todos));

  todoInput.value = "";
  showTodos();
});

// show todos
function showTodos() {
  todoList.innerHTML = "";

  todos.forEach(function (task, index) {
    let li = document.createElement("li");
    li.textContent = task;

    // delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.className = "del";

    delBtn.addEventListener("click", function () {
      todos.splice(index, 1);
      localStorage.setItem("todo", JSON.stringify(todos));
      showTodos();
    });

    li.appendChild(delBtn);
    todoList.appendChild(li);
  });
}
