let inp = document.querySelector("input");
let btn = document.querySelector("#addBtn");
let showhtask = document.querySelector(".showhtask");
let closebtn = document.querySelector(".close-btn");


// load from localStorage
let todos = JSON.parse(localStorage.getItem("todo")) || [];

btn.addEventListener("click", function () {

  if (inp.value === "") {
    alert("Please enter a task");
    return;
  }

  todos.push(inp.value);

  localStorage.setItem("todo", JSON.stringify(todos));

  showalltask();

  inp.value = "";
});

function showalltask() {

  showhtask.innerHTML = "";   

  todos.forEach(function (todotask, index) {

    let taskbox = document.createElement("div");
    taskbox.classList.add("box");

    let showinput = document.createElement("p");
    showinput.classList.add("showinput");
    showinput.textContent = todotask;
    taskbox.appendChild(showinput);

    let markclose = document.createElement("h3");
    markclose.classList.add("markclose");
    markclose.textContent = "✖";

     // delete task
    markclose.addEventListener("click", function () {
      todos.splice(index, 1);
      localStorage.setItem("todo", JSON.stringify(todos));
      showalltask();
    });

    taskbox.appendChild(markclose);
    showhtask.appendChild(taskbox);
  });
}

    
//  close all task
  closebtn.addEventListener("click", function () {
  todos = [];                 
  localStorage.removeItem("todo"); 
  showalltask();              
});


 //  Add click button to enter
inp.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    btn.click();   
  }
});


showalltask();
