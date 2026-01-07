import "./style.css"



const dayFont = document.querySelectorAll('.day-font');
const taskTitle = document.querySelector('.task-title');
const daysProjectDelete = document.querySelectorAll('.days-project-delete');
const addProjectBtn = document.querySelector('.addProject')
const newProjectInput = document.querySelector('.newProjectInput')
const daysProject = document.querySelectorAll('.days-project')
// const projectName = { name: 'Gift', number: 0 }


function showTasks(e) {
    taskTitle.textContent = e.textContent;
}
function deleteProject(e) {
    e.parentElement.remove()
}
function addProjectBtnFunction() {
    newProjectInput.classList.toggle('hidden');
}
function addProjectEnter() {
    localStorage.setItem('Project', 'Alice');
    const div = document.createElement('div');
    div.innerHTML = `<p class="days-project-topic">${newProjectInput.value}</p>
                    <p class="days-project-delete">🗑️</p>`
    div.className = 'days-project'
    daysProject[daysProject.length - 1].after(div);
    newProjectInput.value = '';
}

dayFont.forEach((e) => {
    e.addEventListener('click', () => showTasks(e));
})

daysProjectDelete.forEach((e) => {
    e.addEventListener('click', () => deleteProject(e));
})

addProjectBtn.addEventListener('click', addProjectBtnFunction)

newProjectInput.addEventListener("keydown",  function(event) {
    if (event.key === "Enter") {
        addProjectEnter()
    }
});

// 1. Storing data
// localStorage.setItem('username', 'Alice');
// localStorage.setItem('theme', 'dark');

// 2. Retrieving data
// const username = localStorage.getItem('username');
// console.log(username); // Outputs: Alice

// 3. Removing a specific item
// localStorage.removeItem('theme');

// 4. Clearing all local storage data for the current domain
// localStorage.clear(); 




