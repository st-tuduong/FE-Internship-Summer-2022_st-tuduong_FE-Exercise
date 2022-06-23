var listTodo = [];
var btnAdd = document.querySelector('.js-btn-add')
btnAdd.addEventListener('click', function(e) {
  addTodo();
})

function addTodo() {
  var getContent = document.querySelector('.text-todo').value;
  var getStorageItem = localStorage.getItem('todos');
  var listTodo = JSON.parse(getStorageItem) || [];
  if (listTodo) {
    listTodo.push({
      text: getContent,
      date: Date.now()
    });
  }
  localStorage.setItem('todos', JSON.stringify(listTodo))
  renderTodo();
}

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
}
renderTodo()

var btnDelete = document.querySelectorAll('.js-btn-delete')
btnDelete.forEach(function(item){
  item.addEventListener('click', function(e) {
    removeTodo(e.target.id)
  })
})


function removeTodo(id) {
  var getStorageItem = localStorage.getItem('todos');
  var listTodo = JSON.parse(getStorageItem) || [];
  listTodo.map(function(key){
    if(key.date === +id) {
      delete key
    }
  })
  localStorage.setItem('todos', JSON.stringify(listTodo))
  renderTodo();
}



