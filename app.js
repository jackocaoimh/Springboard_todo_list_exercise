
const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
for(const todo of savedTodos){
   appendTodo(todo);
}

document.getElementById('todoForm').addEventListener('submit', function(e){
    e.preventDefault();

    const todoInput = document.getElementById('todoInput');
    const todoValue = todoInput.value;
    
    appendTodo(todoValue);

    const currentTodos = JSON.parse(localStorage.getItem('todos')) || [];
    currentTodos.push(todoValue);
    localStorage.setItem('todos', JSON.stringify(currentTodos));

    todoInput.value = '';
});    


function appendTodo(todoValue){       

    const listItem = document.createElement('li');
    listItem.textContent = todoValue;

    listItem.addEventListener('click', function(){
        listItem.style.textDecoration = ('line-through');
        listItem.style.opacity = '0.5';
    });

    listItem.addEventListener('dblclick', function(){
        listItem.remove();
    
        const currentTodos = JSON.parse(localStorage.getItem('todos')) || [];
        const index = currentTodos.indexOf(todoValue);
        if(index > -1){
            currentTodos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(currentTodos));   
        }
    });

    document.getElementById('todoList').appendChild(listItem);
}