var btnAdd = document.querySelector('.js-btn-add')
btnAdd.addEventListener('click', function(e) {
  addTodo();
})

function addTodo() {
  var inputTodo = document.querySelector('.text-todo').value;
  var storageItem = localStorage.getItem('todos');
  var listTodo = JSON.parse(storageItem) || [];
  var todoItem = {
    id: Date.now(),
    text: inputTodo
  }
  if (listTodo) {
    listTodo.push(todoItem);
  }
    localStorage.setItem('todos', JSON.stringify(listTodo));
    renderTodoItem(todoItem);
  }

function renderTodoItem(listTodo) {
  var itemTodo = document.createElement('li');
  itemTodo.classList.add('item-todo');
  var idRemove = listTodo.id;
  var contentTodo = document.createElement('p');
  contentTodo.classList.add('content-todo');
  contentTodo.innerText = listTodo.text;
  var removeBtnTodo = document.createElement('button');
  var listTodo = document.querySelector('.list-todo');
  removeBtnTodo.classList.add('btn', 'btn-primary', 'js-btn-remove-');
  removeBtnTodo.setAttribute('id',idRemove);
  removeBtnTodo.innerHTML = '<i class="fa-solid fa-trash"></i>';
  removeBtnTodo.addEventListener('click', function() {
    removeTodo(this);
  })
  listTodo.appendChild(itemTodo);
  itemTodo.appendChild(contentTodo);
  itemTodo.appendChild(removeBtnTodo);
}

function renderTodo() {
  var listTodo = JSON.parse(localStorage.getItem('todos'));
    listTodo.forEach(function(item) {
      renderTodoItem(item);
    });
  }  

function removeTodo(btnDelete) {
  var id = btnDelete.id;
  var storageItem = localStorage.getItem('todos');
  var listTodo = JSON.parse(storageItem) || [];
  var index = listTodo.findIndex(function(item) {
    return item.id == id;
  })
  btnDelete.parentElement.remove();
  listTodo.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(listTodo));
}

renderTodo();
