const toDoList = [];

function renderToDoList(){
    let todoListHTML = '';

    for(let i=0; i<toDoList.length; i++){
        const toDoObject = toDoList[i];
        const {name, dueDate} = toDoObject;

        const html = `
            <div class="name">${name}</div>
            <div class="due-date">${dueDate}</div>
            <button onclick="toDoList.splice(${i}, 1); renderToDoList();" class="delete-button">X</button>
        `;
        todoListHTML += html;
    }
    document.getElementById('js-list').innerHTML = todoListHTML;
}

function add(){
    debugger;
    const inputElement = document.getElementById('name-input');
    const name = inputElement.value;

    const dateInputElement = document.getElementById('date-input');
    const dueDate = dateInputElement.value;

       toDoList.push({
            name,
            dueDate
        });

        renderToDoList();
        inputElement.value = '';
        dateInputElement.value = ''; 
}
