document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  taskForm.addEventListener("submit", function(event) {
    event.preventDefault()	
    const taskResults = getInfo(event);
    const htmlTask = taskHtml(taskResults)
    attachTask(htmlTask)
    clearForm()
	})
});

function getInfo(event) {
	return {
		description: event.target.querySelector("#new-task-description").value
	}
}

function taskHtml(task) {
  return `
  <li>${task.description}</li>
  `
};

const attachTask = function(task) {
  document.querySelector("#tasks").innerHTML += task
}

const clearForm = () => {
  document.getElementById("new-task-description").value = ""
}
