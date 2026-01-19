
const taskInput = document.querySelector('.taskInput');
const date = document.querySelector('#date');
const priority = document.querySelector('#priority');
const note = document.querySelector("#note");
const tasksContainer = document.querySelector(".tasks");

let projectName = JSON.parse(localStorage.getItem('Projects')) || { Gift: [] };
function getTaskTitle() { return document.querySelector('.task-title') }

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const priorityEmoji = ['🔴', '🟠', '🟢'];

function renderTask(text, formattedDate, priorityIcon) {
    const box = document.createElement('div');
    box.className = 'boxChecktask';
    
    box.innerHTML = `
        <div class="checktask"></div>
        <span>${text}</span>
        <span class="checktaskDate">${formattedDate}</span>
        <span>${priorityIcon}</span>
        span
    `;

    box.querySelector('.checktask').addEventListener('click', () => {
        box.classList.toggle('done');
    });

    tasksContainer.appendChild(box);
}

function saveAndRender(text, formattedDate, priorityIcon) {
    console.log(getTaskTitle().textContent);
    
    if (Object.hasOwn(projectName, getTaskTitle().textContent)) {
        projectName[getTaskTitle().textContent].push([text, formattedDate, priorityIcon]);
    } else { return; }
    localStorage.setItem('Projects', JSON.stringify(projectName));
}   

export function createAndSaveTask() {
    const oldDate = date.value.split('-');
    if (oldDate[1][0] == 0) {oldDate[1] = oldDate[1][1]};
    const formattedDate = oldDate[2]+" "+months[oldDate[1]-1]
    const priorityIcon = priorityEmoji[priority.value];
    
    renderTask(taskInput.value, formattedDate, priorityIcon);
    saveAndRender(taskInput.value, formattedDate, priorityIcon);

    // Reset UI
    clearAddTask()
}

export function clearAddTask() {
    taskInput.value = '';
    note.value = '';
}