const apiUrl = 'http://localhost:3000/tasks';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Fetch tasks from the server when the page loads
    const response = await fetch(apiUrl);
    const tasks = await response.json();

    // Process tasks and update the UI
    const taskListContainer = document.getElementById('taskList');
    tasks.forEach(task => {
      const listItem = createTaskListItem(task);
      taskListContainer.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
});

// Function to create a task list item
function createTaskListItem(task) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <input type="checkbox" id="task${task._id}" ${task.completed ? 'checked' : ''}>
    <label for="task${task._id}">${task.description}</label>
    <button class="deleteButton" data-taskid="${task._id}">Delete</button>
  `;
  return listItem;
}

// Event listener for task form submission (Add Task button)
const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const taskDescription = document.getElementById('taskDescription').value.trim();

  if (taskDescription) {
    try {
      // Send a POST request to create a new task
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: taskDescription }),
      });

      // Handle the response
      if (response.ok) {
        const newTask = await response.json();
        const listItem = createTaskListItem(newTask);
        const taskListContainer = document.getElementById('taskList');
        taskListContainer.appendChild(listItem);
        document.getElementById('taskDescription').value = ''; // Clear input field
      } else {
        throw new Error('Failed to create task');
      }
    } catch (error) {
      console.error('Error creating task:', error);
    }
  }
});

// Event listener for task completion (checkbox)
const taskListContainer = document.getElementById('taskList');
taskListContainer.addEventListener('change', async (event) => {
  if (event.target.type === 'checkbox') {
    const taskId = event.target.id.replace('task', ''); // Extract task ID
    const completed = event.target.checked;

    try {
      // Send a PUT request to update task completion status
      const response = await fetch(`${apiUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed }),
      });

      // Handle the response
      if (!response.ok) {
        throw new Error('Failed to update task');
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  }
});

// Event listener for task deletion (delete button)
taskListContainer.addEventListener('click', async (event) => {
  if (event.target.classList.contains('deleteButton')) {
    const taskId = event.target.dataset.taskid;

    try {
      // Send a DELETE request to delete the task
      const response = await fetch(`${apiUrl}/${taskId}`, {
        method: 'DELETE',
      });

      // Handle the response
      if (response.ok) {
        event.target.parentElement.remove(); // Remove task from UI
      } else {
        throw new Error('Failed to delete task');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }
});
