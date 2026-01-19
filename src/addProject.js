let projectName = JSON.parse(localStorage.getItem('Projects')) || { Gift: [] };

export function getProjects() { return JSON.parse(localStorage.getItem('Projects')) || { Gift: [] }; }

export function addProjectEnter(text) {
    if (!text) return;
    projectName[text] = [];
    saveAndRender();
    renderProjects(text);
}

export function deleteProject(text) { 
    const name = text.parentElement.querySelector('.days-project-topic').textContent
    delete projectName[name];
    text.parentElement.remove();
    saveAndRender();
}

function saveAndRender() {
    localStorage.setItem('Projects', JSON.stringify(projectName));
}

export function renderProjects(text) {
    const container = document.querySelector('.days-project-container'); 
    const div = document.createElement('div');
    const topic = document.createElement('p');
    const span = document.createElement('span');

    div.className = 'days-project'
    topic.textContent = text
    topic.className = "days-project-topic"
    span.textContent = '🗑️'
    span.className = "delete-btn"
    div.addEventListener('click', () => renderTask(text))
    span.addEventListener("click", () => deleteProject(span))

    div.appendChild(topic);
    div.appendChild(span);
    container.appendChild(div);
    
}

// inport
const tasks = document.querySelector(".tasks");

export function renderTask(text) {
    if (Object.hasOwn(projectName, text)) {
        tasks.innerHTML = `<h2 class="task-title">${text}</h2>`;

        getProjects()[text].forEach(element => {
            const box = document.createElement('div');
            const checktask = document.createElement('div');
            const span = document.createElement('span');
            const checktaskDate = document.createElement('span');
            const sPan = document.createElement('span');

            box.className = 'boxChecktask';
            checktask.className = 'checktask';
            checktaskDate.className = 'checktaskDate';

            checktask.addEventListener('click', () => {
                checktask.parentElement.classList.toggle('done')
            })
            span.textContent = element[0];
            checktaskDate.textContent = element[1];
            sPan.textContent = element[2];

            box.appendChild(checktask);
            box.appendChild(span);
            box.appendChild(checktaskDate);
            box.appendChild(sPan);
            tasks.appendChild(box)
        });
        
    }

}
