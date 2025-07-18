document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    function addTask() {
        if (taskInput.value.trim() === "") return;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskInput.value}</span>
            <button class="deleteBtn">X</button>
        `;
        taskList.appendChild(li);

        taskInput.value = "";
        saveTasks();
    }

    taskList.addEventListener("click", (e) => {
        if (e.target.classList.contains("deleteBtn")) {
            e.target.parentElement.remove();
            saveTasks();
        }
    });

    addTaskBtn.addEventListener("click", addTask);
    
    function saveTasks() {
        localStorage.setItem("tasks", taskList.innerHTML);
    }

    function loadTasks() {
        taskList.innerHTML = localStorage.getItem("tasks") || "";
    }

    loadTasks();
});






