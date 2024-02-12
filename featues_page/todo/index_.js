function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    
    // Get the task value
    var taskText = taskInput.value.trim();
  
    // Check if the task is not empty
    if (taskText !== '') {
      // Create new list item
      var li = document.createElement('li');
      li.className = 'task-item';
      li.innerHTML = `
        <span>${taskText}</span>
        <button class="complete-btn" onclick="completeTask(this)">✓</button>
        <button class="delete-btn" onclick="deleteTask(this)">X</button>
      `;
      
      // Append the new list item to the task list
      taskList.appendChild(li);
      
      // Clear the input field after adding the task
      taskInput.value = '';
    } else {
      alert('Please enter a task!');
    }
  }
  
  function deleteTask(element) {
    // Remove the parent list item of the clicked delete button
    element.parentElement.remove();
  }
  
  function completeTask(element) {
    var taskItem = element.parentElement;
    taskItem.classList.toggle('completed');
  }
  