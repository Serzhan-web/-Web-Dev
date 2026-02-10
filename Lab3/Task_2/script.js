const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

function addTask(text) {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    const span = document.createElement('span');
    span.textContent = text;
    span.className = 'task-text';

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '🗑';
    deleteBtn.className = 'delete-btn';


    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            span.classList.add('done');
        } else {
            span.classList.remove('done');
        }
    });

    deleteBtn.addEventListener('click', function() {
        list.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    list.appendChild(li);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskValue = input.value.trim();

    if (taskValue !== "") {
        addTask(taskValue);
        input.value = "";
    }
});