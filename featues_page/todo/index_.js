function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');
  var taskText = taskInput.value.trim();

  if (taskText !== '') {
    var li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
      <input type="checkbox" class="complete-checkbox" onclick="completeTask(this)">
      <span>${taskText}</span>
      <button class="delete-btn" onclick="deleteTask(this)"> X </button>
    `;
  
    taskList.appendChild(li);
    taskInput.value = '';
  } else {
    alert('Please enter a task!');
  }
}

function deleteTask(element) {

  element.parentElement.remove();
}

function completeTask(element) {
  var taskItem = element.parentElement;
  taskItem.classList.toggle('completed');
}
