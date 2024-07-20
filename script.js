document.addEventListener ('DOMContentLoaded', function(){

  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  
  
  function addTask() {
   let taskText = taskInput.value.trim();
   if (taskText === '') {
    alert('Please enter a task');
    return;
   }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn .classList.add('remove-btn');

    removeBtn.onclick = function() {
      taskList.removeChild(listItem);
      };

      listItem.appendChild(removeBtn);
      taskList.appendChild(listItem);

      taskInput.value = '';
   }

    addButton.addEventListener('click', addTask);

   taskInput.addEventListener('keypress',function(event) {
    if (event.key === 'Enter') {
        addTask();
       }
    });

    addTask();

});