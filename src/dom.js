import { logic } from "./logic";
import { projects } from "./projects";

const dom = (() => {
  const sidebarProjects = document.getElementById("sidebarProjects");

  const tasks = document.getElementById("tasks");

  let currentProject = document.getElementById("currentProject");

  const addTaskBtn = document.getElementById("addTaskButton");
  const taskDialog = document.getElementById("taskDialog");
  const taskTitle = document.getElementById("taskTitle");
  const taskDescription = document.getElementById("taskDescription");
  const taskDueDate = document.getElementById("taskDueDate");
  const form = document.querySelector("form");

  const projectDialog = document.getElementById("projectDialog");
  const addProjectBtn = document.getElementById("addProjectButton");
  const projectTitle = document.getElementById("projectTitle");
  const submitProject = document.getElementById("submitProject");

  currentProject.textContent = "Home";
  let repetitionCount = 1;

  const clearDialog = () => {
    taskTitle.value = "";
  };
  addTaskBtn.addEventListener("click", () => {
    taskDialog.showModal();
  });
  form.addEventListener("submit", () => {
    for (let i = 0; i <= logic.taskArray.length; i++) {
      if (logic.taskArray.length === 0) {
        logic.createTask();
        displayTasks();
        console.log(logic.taskArray);
        taskDialog.close();
        break;
      } else if (logic.taskArray[i].title === taskTitle.value) {
        taskTitle.value = taskTitle.value + " " + "(" + repetitionCount + ")";
        logic.createTask();
        displayTasks();
        console.log(logic.taskArray);
        taskDialog.close();
        clearDialog();
        repetitionCount++;
        break;
      } else {
        logic.createTask();
        displayTasks();
        console.log(logic.taskArray);
        taskDialog.close();
        break;
      }
    }
  });

  addProjectBtn.addEventListener("click", () => {
    projectDialog.showModal();
  });

  submitProject.addEventListener("click", () => {
    sidebarProjects.appendChild(projects.createProject());
    projectDialog.close();
  });

  const clearContent = () => {
    while (tasks.firstChild) {
      tasks.removeChild(tasks.firstChild);
    }
  };
  const displayTasks = () => {
    clearContent();
    if (currentProject.textContent === "Home") {
      for (let i = 0; i < logic.taskArray.length; i++) {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("taskDiv");

        let taskDivLeft = document.createElement("div");
        taskDivLeft.classList.add("taskDivLeft");

        let taskDivTitle = document.createElement("div");
        taskDivTitle.textContent = logic.taskArray[i].title;
        taskDivTitle.classList.add("taskDivTitle");

        let taskDivDescription = document.createElement("div");
        taskDivDescription.textContent = logic.taskArray[i].description;
        taskDivDescription.classList.add("taskDivDescription");

        let taskDivRight = document.createElement("div");
        taskDivRight.classList.add("taskDivRight");

        let taskDivPriority = document.createElement("div");
        taskDivPriority.textContent = logic.taskArray[i].priority;
        taskDivPriority.classList.add("taskDivPriority");

        let taskDivDate = document.createElement("div");
        taskDivDate.textContent = logic.taskArray[i].dueDate;
        taskDivDate.classList.add("taskDivDate");

        let taskDivButtons = document.createElement("div");
        taskDivButtons.classList.add("taskDivButtons");
        let taskDivComplete = document.createElement("button");
        taskDivComplete.textContent = "C";
        taskDivComplete.classList.add("btn");
        let taskDivOptions = document.createElement("button");
        taskDivOptions.textContent = "O";
        taskDivOptions.classList.add("btn");

        taskDivLeft.appendChild(taskDivTitle);
        taskDivLeft.appendChild(taskDivDescription);
        taskDivRight.appendChild(taskDivPriority);
        taskDivRight.appendChild(taskDivDate);
        taskDiv.appendChild(taskDivLeft);
        taskDiv.appendChild(taskDivRight);
        taskDiv.appendChild(taskDivButtons);
        taskDivButtons.appendChild(taskDivComplete);
        taskDivButtons.appendChild(taskDivOptions);

        taskDivComplete.addEventListener("click", () => {
          for (let i = 0; i < logic.taskArray.length; i++) {
            if (logic.taskArray[i].title === taskDivTitle.textContent) {
              logic.taskArray.splice(i, 1);
            }
          }
          console.log(logic.taskArray);
          displayTasks();
        });
        tasks.appendChild(taskDiv);
      }
    } else {
      for (let i = 0; i < logic.taskArray.length; i++) {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("taskDiv");

        let taskDivLeft = document.createElement("div");
        taskDivLeft.classList.add("taskDivLeft");

        let taskDivTitle = document.createElement("div");
        taskDivTitle.textContent = logic.taskArray[i].title;
        taskDivTitle.classList.add("taskDivTitle");

        let taskDivDescription = document.createElement("div");
        taskDivDescription.textContent = logic.taskArray[i].description;
        taskDivDescription.classList.add("taskDivDescription");

        let taskDivRight = document.createElement("div");
        taskDivRight.classList.add("taskDivRight");

        let taskDivPriority = document.createElement("div");
        taskDivPriority.textContent = logic.taskArray[i].priority;
        taskDivPriority.classList.add("taskDivPriority");

        let taskDivDate = document.createElement("div");
        taskDivDate.textContent = logic.taskArray[i].dueDate;
        taskDivDate.classList.add("taskDivDate");

        let taskDivButtons = document.createElement("div");
        taskDivButtons.classList.add("taskDivButtons");
        let taskDivComplete = document.createElement("button");
        taskDivComplete.textContent = "C";
        taskDivComplete.classList.add("btn");
        let taskDivOptions = document.createElement("button");
        taskDivOptions.textContent = "O";
        taskDivOptions.classList.add("btn");

        taskDivLeft.appendChild(taskDivTitle);
        taskDivLeft.appendChild(taskDivDescription);
        taskDivRight.appendChild(taskDivPriority);
        taskDivRight.appendChild(taskDivDate);
        taskDiv.appendChild(taskDivLeft);
        taskDiv.appendChild(taskDivRight);
        taskDiv.appendChild(taskDivButtons);
        taskDivButtons.appendChild(taskDivComplete);
        taskDivButtons.appendChild(taskDivOptions);

        if (currentProject.textContent === logic.taskArray[i].filter) {
          taskDivTitle.textContent = logic.taskArray[i].title;

          taskDivComplete.addEventListener("click", () => {
            for (let i = 0; i < logic.taskArray.length; i++) {
              if (logic.taskArray[i].title === taskDivTitle.textContent) {
                logic.taskArray.splice(i, 1);
              }
            }
            console.log(logic.taskArray);
            displayTasks();
          });
          tasks.appendChild(taskDiv);
        } else {
          //DO NOTHING
        }
      }
    }
  };

  return {
    taskTitle,
    taskDescription,
    taskDueDate,
    projectTitle,
    currentProject,
    displayTasks,
  };
})();
export { dom };
