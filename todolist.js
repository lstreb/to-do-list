const toDoList = [];

function renderToDoList(){
    let todoListHTML = '';

    toDoList.forEach((toDoObject, index) => {
        const {name, dueDate} = toDoObject;

        const html = `
            <div class="name">${name}</div>
            <div class="due-date">${dueDate}</div>
            <button onclick="toDoList.splice(${index}, 1); renderToDoList();" class="delete-button">X</button>
        `;
        todoListHTML += html;
    });    
    document.getElementById('js-list').innerHTML = todoListHTML;
}

function add(){
    debugger;
    const inputElement = document.getElementById('name-input');
    const name = inputElement.value;

    const dateInputElement = document.getElementById('date-input');
    const dueDate = dateInputElement.value;

    if(inputElement.value == ''){
        alert('Add a title to the task!');
    }

    else{
        toDoList.push({
            name,
            dueDate
        });

        renderToDoList();
        inputElement.value = '';
        dateInputElement.value = '';   
    }
}