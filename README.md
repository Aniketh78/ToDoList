# 📝 To-Do List Application

## 🔍 Project Overview

This project is a simple and interactive 📝 To-Do List app built using HTML 🧱, CSS 🎨, and JavaScript 💻. It allows users to ➕ add tasks, ✅ mark them as completed, ❌ delete them, and provides a progress bar to visualize task completion. The app also stores tasks and their completion statuses in localStorage 💾, ensuring data persistence across 🔄 page reloads.

### Screenshot 📸
![image](https://github.com/user-attachments/assets/79b69a81-13fb-4547-b689-925e3f2592a0)

## 🌟 Features

- ➕ **Add Tasks**: Users can add new tasks to the list by typing in the input field and pressing "Enter" on the keyboard.
- ✅ **Mark as Completed**: Users can check tasks, and the state is saved in localStorage.
- ❌ **Delete Tasks**: Users can remove tasks from the list.
- 💾 **Data Persistence**: Tasks and their completion statuses are saved in localStorage, so they remain available even after 🔄 page reloads.
- 📊 **Progress Bar**: The app displays a progress bar that visually tracks the percentage of tasks completed. As tasks are checked off, the progress bar updates accordingly.

## 💻 Technologies Used

- **HTML 🧱**: Structure of the web app.
- **CSS 🎨**: Styling for a visually appealing interface.
- **JavaScript 💻**: Handles dynamic behavior, task management, localStorage interaction, and progress bar updates.

## 🛠️ How It Works

### 🚀 Initial Load:

- The app loads tasks from localStorage (if any exist).
- Tasks are displayed with checkboxes, reflecting their completion status.
- The progress bar is initialized and updated based on the number of completed tasks.

### ➕ Adding a Task:

- Users enter a task in the input field and press "Enter" to add it to the list.
- The task is added to the tasks array and displayed.
- The tasks array is updated in localStorage.
- The progress bar is updated based on the total number of tasks and their completion statuses.

### ✅ Marking a Task as Completed:

- Users check the checkbox ☑️ next to a task.
- The checked property of the task is updated in the tasks array.
- Changes are saved in localStorage.
- The progress bar updates to reflect the new task completion ratio.

### ❌ Deleting a Task:

- Users click the "Delete" button 🗑️ next to a task.
- The task is removed from the tasks array.
- The updated tasks array is saved in localStorage.
- The progress bar updates accordingly based on the remaining tasks.

## ⚙️ Installation and Setup

1. 📥 Clone or download the project files.

```bash
git clone https://github.com/your-username/to-do-list.git
```
2. Open the `index.html` file in your browser to start using the To-Do List app.

## 🚀 Future Enhancements

- ✏️ **Add a feature to edit tasks.**
- 🗂️ **Implement categories for tasks.**
- ⏰ **Allow users to set deadlines and reminders for tasks.**
- 🌀 **Add animations for a better user experience.**

