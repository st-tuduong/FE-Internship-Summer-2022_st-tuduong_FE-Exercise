var listTodo = [];

var btnAdd = document.querySelector('.js-btn-add')
  btnAdd.addEventListener('click', function(e) {
    addTodo();
  })
  
  function renderTodo() {
    var getListToDo = JSON.parse(localStorage.getItem('todos'));
    var html = '';
    if(getListToDo) {
      getListToDo.forEach(function(key) {
        html += "<li class='todo-content'>" + 
        "<p>"+key.text+"</p>" +
        "<button id="+key.id+" class='btn btn-primary js-btn-delete'>" +
          "<i class='fa-solid fa-trash'></i>" +
        "</button>" +
        "</li>"
      })
      document.querySelector('.list-todo').innerHTML = html;
    }
    var btnDelete = document.querySelectorAll('.js-btn-delete')
    btnDelete.forEach(function(item){
      item.addEventListener('click', function(e) {
        removeTodo(e.target.id);
      })
    })    
}

function addTodo() {
  var getContent = document.querySelector('.text-todo').value;
  var getStorageItem = localStorage.getItem('todos');
  var listTodo = JSON.parse(getStorageItem) || [];
  if (listTodo) {
    listTodo.push({
      id: Date.now(),
      text: getContent
    });
    localStorage.setItem('todos', JSON.stringify(listTodo));
    renderTodo();
  }
}

function removeTodo(id) {
  var getStorageItem = localStorage.getItem('todos');
  var listTodo = JSON.parse(getStorageItem) || [];
  listTodo.map(function(key, index){
    if(key.id === +id) {
      listTodo.splice(index, 1);
    }
  })
  localStorage.setItem('todos', JSON.stringify(listTodo));
  renderTodo();
}

renderTodo();