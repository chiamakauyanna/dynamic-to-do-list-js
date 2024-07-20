# To-Do List Application

A simple and interactive To-Do List application built using vanilla JavaScript. This application allows users to add, remove, and persist tasks using Local Storage, ensuring that tasks are retained even after closing or refreshing the browser.

## Features

- **Add Tasks:** Quickly add new tasks to your list with a click or by pressing the Enter key.
- **Remove Tasks:**  Easily remove tasks with a dedicated "Remove" button next to each task.
- **Persistent Storage:**  All tasks are saved in Local Storage, so they remain available even after closing or refreshing the browser.
- **Responsive Design:** The application is designed to be simple and intuitive, working well on various devices and screen sizes.

## Screenshots
 ![Screenshot](images/to-do-screenshot.PNG)

## Installation

1. Clone the Repository:

git clone https://github.com/chiamakauyanna/dynamic-to-do-list-js.git

2. Navigate to the project directory

cd dynamic-to-do-list-js

3. Open `index.html` in your browser.

open index.html

or

start index.html

Alternatively, you can use any local server to serve the index.html file.

## Usage

1. Add tasks using the input field and button.

Enter your task in the input field.
Click the "Add Task" button or press Enter to add it to the list.

2. Remove tasks with the "Remove" button.

Click the "Remove" button next to the task you want to delete.

3. Persistence.

Tasks are automatically saved to your browser's Local Storage. They will be available even after you close or refresh the browser.


## Code Overview

- **index.html:** Contains the basic structure and elements of the application.
- **styles.css:** Includes the styling for the task list and buttons.
- **script.js:** Manages the functionality of the to-do list, including adding, removing, and saving tasks to Local Storage.


## script.js Functions:

- **loadTasks():** Loads tasks from Local Storage and populates the task list on page load.
- **addTask(taskText, save = true):** Adds a new task to the list and optionally saves it to Local Storage.
- **createTaskElement(taskText):** Creates and appends a new task element to the DOM.
- **updateLocalStorage():** Updates Local Storage with the current list of tasks.


## Contributing
Contributions are welcome! If you have suggestions, improvements, or bug fixes, please create a pull request or open an issue.

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -am 'Add new feature').
5. Push to the branch (git push origin feature-branch).
6. Create a new Pull Request.

## Contact
For any questions or inquiries, please reach out to:
[Chiamaka Uyanna](Chiamakauyanna@gmail.com).