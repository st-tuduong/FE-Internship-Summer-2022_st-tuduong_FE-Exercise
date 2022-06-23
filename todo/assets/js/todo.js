var listTodo = [];

function renderTodo() {
  var getListToDo = JSON.parse(localStorage.getItem('todos'));
  var html = '';
  if(getListToDo) {
    getListToDo.map(function(key) {
      html += "<li class='todo-content'>" + 
                "<p>"+key.text+"</p>" +
                "<button id="+key.date+" class='btn btn-primary js-btn-delete'>Delete</button>" +
              "</li>"
    })
    document.querySelector('.list-todo').innerHTML = html;
  }
  var btnAdd = document.querySelector('.js-btn-add')
    btnAdd.addEventListener('click', function(e) {
      addTodo();
    })
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
      date: Date.now(),
      text: getContent
    });
    localStorage.setItem('todos', JSON.stringify(listTodo));
    renderTodo();
  }
}

function removeTodo(id) {
  var getStorageItem = localStorage.getItem('todos');
  var listTodo = JSON.parse(getStorageItem) || [];
  listTodo.map(function(key){
    if(key.date === +id) {
      listTodo.splice(key, 1);
    }
  })
  localStorage.setItem('todos', JSON.stringify(listTodo));
  renderTodo();
}
renderTodo();