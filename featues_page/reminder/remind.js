function addReminder() {
  var reminderInput = document.getElementById('reminderInput');
  var reminderDateTime = document.getElementById('reminderDateTime');
  var reminderList = document.getElementById('reminderList');
  
  var reminderText = reminderInput.value.trim();
  var reminderDateTimeValue = reminderDateTime.value;

  if (reminderText !== '' && reminderDateTimeValue !== '') {
    var reminderItem = document.createElement('div');
    reminderItem.className = 'reminder-item';
    reminderItem.innerHTML = `
      <span>${reminderText} - ${formatDateTime(reminderDateTimeValue)}</span>
      <button class="delete-btn" onclick="deleteReminder(this)">X</button>
    `;
    reminderList.appendChild(reminderItem);
    reminderInput.value = '';
    reminderDateTime.value = '';
  } else {
    alert('Please enter a reminder and select a date and time!');
  }
}
function deleteReminder(element) {
  element.parentElement.remove();
}
function formatDateTime(dateTimeString) {
  var dateTime = new Date(dateTimeString);
  var options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' };
  return dateTime.toLocaleDateString('en-US', options);
}
