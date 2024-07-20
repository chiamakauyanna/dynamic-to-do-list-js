document.addEventListener ('DOMContentLoaded', function(){

  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

   // Load tasks from Local Storage

   function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
  }

  loadTasks();
 
  // Add a task to the list
  function addTask(taskText = taskInput.value.trim(), save = true) {
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
      updateLocalStorage();
      };

      listItem.appendChild(removeBtn);
      taskList.appendChild(listItem);


      if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }

    taskInput.value = '';
   }

    // Update Local Storage with current tasks
    function updateLocalStorage() {
      const tasks = [];
      taskList.querySelectorAll('li').forEach(taskItem => {
        tasks.push(taskItem.textContent.replace('Remove', '').trim());
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
   
     // Attach event listeners
     addButton.addEventListener('click', function() {
      addTask();
    });

   taskInput.addEventListener('keypress',function(event) {
    if (event.key === 'Enter') {
        addTask();
       }
    });
});