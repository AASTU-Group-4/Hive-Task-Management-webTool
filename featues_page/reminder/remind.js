function addReminder() {
  var reminderInput = document.getElementById('reminderInput');
  var reminderDateTime = document.getElementById('reminderDateTime');
  var reminderList = document.getElementById('reminderList');
  
  // Get the reminder text and date-time
  var reminderText = reminderInput.value.trim();
  var reminderDateTimeValue = reminderDateTime.value;

  // Check if the reminder is not empty
  if (reminderText !== '' && reminderDateTimeValue !== '') {
    // Create new reminder item
    var reminderItem = document.createElement('div');
    reminderItem.className = 'reminder-item';
    reminderItem.innerHTML = `
      <span>${reminderText} - ${formatDateTime(reminderDateTimeValue)}</span>
      <button class="delete-btn" onclick="deleteReminder(this)">X</button>
    `;
    
    // Append the new reminder item to the reminder list
    reminderList.appendChild(reminderItem);
    
    // Clear the input fields after adding the reminder
    reminderInput.value = '';
    reminderDateTime.value = '';
  } else {
    alert('Please enter a reminder and select a date and time!');
  }
}

function deleteReminder(element) {
  // Remove the parent reminder item of the clicked delete button
  element.parentElement.remove();
}

function formatDateTime(dateTimeString) {
  var dateTime = new Date(dateTimeString);
  var options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' };
  return dateTime.toLocaleDateString('en-US', options);
}
