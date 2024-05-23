// script.js
document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task-btn');
    const selectAllBtn = document.getElementById('select-all-btn');
    const deleteAllBtn = document.getElementById('delete-all-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);
    selectAllBtn.addEventListener('click', selectAllTasks);
    deleteAllBtn.addEventListener('click', deleteAllTasks);
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <input type="text" value="${taskText}" readonly>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        const editBtn = li.querySelector('.edit-btn');
        const deleteBtn = li.querySelector('.delete-btn');
        const taskInput = li.querySelector('input[type="text"]');

        editBtn.addEventListener('click', () => {
            if (editBtn.textContent === 'Edit') {
                taskInput.removeAttribute('readonly');
                taskInput.focus();
                editBtn.textContent = 'Save';
            } else {
                taskInput.setAttribute('readonly', true);
                editBtn.textContent = 'Edit';
            }
        });

        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        taskList.appendChild(li);
        newTaskInput.value = '';
    }

    function selectAllTasks() {
        const tasks = taskList.querySelectorAll('li');
        tasks.forEach(task => {
            task.classList.add('completed');
        });
    }

    function deleteAllTasks() {
        taskList.innerHTML = '';
    }
});
