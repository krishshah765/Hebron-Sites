function render() {
  document.getElementById('todo-title');
  document.getElementById('todo-list').innerHTML = '';

  todos.forEach(function (todo) {
    let element = document.createElement('div');
    element.classList = "todo-item";
    element.innerText = todo.title;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;
    element.appendChild(deleteButton);

    const todoList = document.getElementById('todo-list');
    todoList.appendChild(element);

    /*element.addEventListener('click', (e) => {
      console.log('hi');
      element.id = todo.id;
      deleteTodo(element);
    })*/
  });
}

let todos;

const savedTodos = JSON.parse(localStorage.getItem('todos'));

if(Array.isArray(savedTodos)) {
  todos = savedTodos;
  render();
} else {
  todos = [];
  render();
}

function createTodo(title) {
  const id = '' + new Date().getTime();

  todos.push({
    title: title,
    id: id
  });

  saveTodos();
}

function removeTodo(idToDelete) {
  todos = todos.filter(function (todo) {
    if(todo.id === idToDelete){
      return false;
    } else {
      return true;
    }
  });

  saveTodos();
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo() {
  if(document.getElementById('todo-title') === null || document.getElementById('todo-title') === undefined || document.getElementById('todo-title') === '') {
    console.log('hi');
  } else {
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;
  
    createTodo(title);
  
    render();
  }
  
}

function deleteTodo(event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;

  removeTodo(idToDelete);
   
  render();
}

function clearFields() {
  document.getElementById('todo-title').value = '';
}

let todoTitle = document.getElementById('todo-title');

todoTitle.addEventListener('keyup', (e) => {
  if(e.key === 'Enter') {
    addTodo();
    clearFields();
  }
})

let todoButton = document.getElementById('todobutton');

todoButton.addEventListener('click', (e) => {
  let element = document.getElementById('todomodal');
  if (element.classList.contains('active') ? element.classList.remove('active'):element.classList.add('active'));
})


