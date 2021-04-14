// *Import every thing from HTML*
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// *Mention the evnt listners*

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// *The main function*

function addTodo(event){
    // !Stop this from submitting! 
    event.preventDefault();

    //* Create the todo div *
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // * Create the Li *
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // * Create check mark button *
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // * Create trash button *
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // ! Append to list very important !
    todoList.appendChild(todoDiv);
    //! Clear todo input value very important !
    todoInput.value = "";
}


// ! Function to  check which item is used item !
function deleteCheck(e){
    const item = e.target;
    // ! Delete Todo !
    if(item.classList[0] === 'trash-btn'){
      const todo = item.parentElement;
      // *Animation* 
      todo.classList.add('fall');
      todo.addEventListener('transitionend' , function(){
          todo.remove();
      });  
    }

    // ! Task done check mark !
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}