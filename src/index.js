import "./style.css";
import {addProjectEnter, renderProjects, getProjects} from "./addProject";
import {createAndSaveTask, clearAddTask} from "./addTask";
// import { addTaskEnter } from "./addTask";

const taskTitle = document.querySelector('.task-title');
const dayFont = document.querySelectorAll('.day-font');
const newProjectInput = document.querySelector('.newProjectInput')
const addTask = document.querySelector('.addTask');
const containerTask = document.querySelector('.container-task');
const addToDoBtn = document.querySelector('.addToDo');
const cancel = document.querySelector('.cancle');
// Side bar
dayFont.forEach((e) => {
    e.addEventListener('click', () => {
        taskTitle.textContent = e.textContent;
        console.log(taskTitle);
        console.log(e.textContent);
    });
})

const initializeApp = () => {
    const projects = getProjects();
    
    if (Object.keys(projects).length === 0) {
        projects.Gift = [];
        localStorage.setItem('Projects', JSON.stringify(projects));
    }

    // Render existing projects
    Object.keys(projects).forEach(renderProjects);
};

document.querySelector('.addProject').addEventListener('click', () => {
    newProjectInput.classList.toggle('hidden');
    if (!newProjectInput.classList.contains('hidden')) {
        newProjectInput.focus();
    }
});
newProjectInput.addEventListener("keydown",  (event) => {
    if (event.key === "Enter") {
        addProjectEnter(newProjectInput.value)
        newProjectInput.value = '';
        // newProjectInput.classList.add('hidden');
    }
});

initializeApp();

// ADD TASK
addTask.addEventListener('click', () => {
    containerTask.classList.toggle('hidden');
});

// Set default date to today
window.addEventListener('DOMContentLoaded', (event) => {
    date.value = new Date().toISOString().split('T')[0];;
});

addToDoBtn.addEventListener('click', function() {
    createAndSaveTask();
    containerTask.classList.toggle('hidden');;
})

cancel.addEventListener('click', clearAddTask)