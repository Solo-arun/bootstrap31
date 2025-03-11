document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTask = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Load tasks from local storage
    function loadTasks() {
        taskList.innerHTML = "";
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach((task, index) => addTaskToDOM(task, index));
    }

    // Add task to DOM
    function addTaskToDOM(task, index) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = `${task} 
            <button class="btn btn-danger btn-sm delete" data-index="${index}">Delete</button>`;
        taskList.appendChild(li);
    }

    // Add Task
    addTask.addEventListener("click", () => {
        let task = taskInput.value.trim();
        if (task) {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            taskInput.value = "";
            loadTasks();
        }
    });

    // Delete Task
    taskList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.splice(e.target.dataset.index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            loadTasks();
        }
    });

    // Initialize
    loadTasks();
});
