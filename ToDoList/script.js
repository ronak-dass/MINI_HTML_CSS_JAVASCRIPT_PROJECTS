const newToDoInput = document.querySelector('#newToDoInput')
const addTodoBtn = document.querySelector('#addTodoBtn')
const todoList = document.querySelector('#todoList')

addTodoBtn.addEventListener('click', () => {

    const newTodoText = newToDoInput.value;

    if(newTodoText !== ""){
        const newTodoItem  = document.createElement('li');
        newTodoItem.innerText = newTodoText;

        const deleteTodoBtn = document.createElement('button')
        deleteTodoBtn.innerText = 'X';

        deleteTodoBtn.classList.add('deleteBtn')
        deleteTodoBtn.addEventListener('click', () => {
            newTodoItem.remove();
        })

        todoList.appendChild(newTodoItem)
        newTodoItem.appendChild(deleteTodoBtn)
        newTodoText.innerText = "";
    }


})