import { logic } from "./logic";
import { projects } from "./projects";
import { format } from "date-fns";
import { isToday } from "date-fns";
const dom = (() => {
  const sidebarProjects = document.getElementById("sidebarProjects");

  const tasks = document.getElementById("tasks");

  let currentProject = document.getElementById("currentProject");

  const addTaskBtn = document.getElementById("addTaskButton");
  const taskDialog = document.getElementById("taskDialog");
  const taskTitle = document.getElementById("taskTitle");
  const taskDescription = document.getElementById("taskDescription");
  const taskDueDate = document.getElementById("taskDueDate");
  const taskPriority = document.getElementById("prioritySelection");
  const form = document.getElementById("tasksForm");

  const projectDialog = document.getElementById("projectDialog");
  const addProjectBtn = document.getElementById("addProjectButton");
  const projectTitle = document.getElementById("projectTitle");
  const submitProject = document.getElementById("projectsForm");

  currentProject.textContent = "Home";

  const clearDialog = () => {
    taskTitle.value = "";
  };

  addTaskBtn.addEventListener("click", () => {
    taskDialog.showModal();
  });

  form.addEventListener("submit", () => {
    logic.createTask();
    logic.displayTasks();
    taskDialog.close();
    console.log(logic.taskArray);
    clearDialog();
  });

  addProjectBtn.addEventListener("click", () => {
    projectDialog.showModal();
  });

  submitProject.addEventListener("submit", () => {
    sidebarProjects.appendChild(projects.createProject());
    projectDialog.close();
  });

  const clearContent = () => {
    while (tasks.firstChild) {
      tasks.removeChild(tasks.firstChild);
    }
  };

  const todayTasks = () => {
    for (let i = 0; i < logic.taskArray.length; i++) {
      if (
        isToday(logic.taskArray[i].dueDate) &&
        logic.taskArray[i].completed === false
      ) {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("taskDiv");
        taskDiv.setAttribute("id", logic.taskArray[i].id);

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
        if (taskDivPriority.textContent === "High Priority") {
          taskDivPriority.style.background = "#f9a1a1";
        } else if (taskDivPriority.textContent === "Medium Priority") {
          taskDivPriority.style.background = "#f0edb5";
        } else taskDivPriority.style.background = "#c2ecc4";

        let taskDivDate = document.createElement("div");
        taskDivDate.textContent = format(
          logic.taskArray[i].dueDate,
          "d MMMM yyyy"
        );
        taskDivDate.classList.add("taskDivDate");

        let taskDivButtons = document.createElement("div");
        taskDivButtons.classList.add("taskDivButtons");
        let taskDivComplete = document.createElement("button");
        taskDivComplete.textContent = "Complete";
        taskDivComplete.classList.add("btn");
        let taskDivOptions = document.createElement("button");
        taskDivOptions.textContent = "Edit";
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
            if (logic.taskArray[i].id == taskDiv.id) {
              logic.taskArray[i].completed = true;
            }
          }
          console.log(logic.taskArray);
          logic.displayTasks();
        });

        taskDivOptions.addEventListener("click", () => {
          for (let i = 0; i < logic.taskArray.length; i++) {
            if (logic.taskArray[i].id == taskDiv.id) {
              logic.taskArray[i].title = prompt("new title");
            }
            console.log(logic.taskArray);
            logic.displayTasks();
          }
        });
        tasks.appendChild(taskDiv);
      }
    }
  };

  const completedTasks = () => {
    for (let i = 0; i < logic.taskArray.length; i++) {
      if (logic.taskArray[i].completed === true) {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("taskDiv");
        taskDiv.setAttribute("id", logic.taskArray[i].id);

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
        if (taskDivPriority.textContent === "High Priority") {
          taskDivPriority.style.background = "#f9a1a1";
        } else if (taskDivPriority.textContent === "Medium Priority") {
          taskDivPriority.style.background = "#f0edb5";
        } else taskDivPriority.style.background = "#c2ecc4";

        let taskDivDate = document.createElement("div");
        taskDivDate.textContent = format(
          logic.taskArray[i].dueDate,
          "d MMMM yyyy"
        );
        taskDivDate.classList.add("taskDivDate");

        let taskDivButtons = document.createElement("div");
        taskDivButtons.classList.add("taskDivButtons");
        let taskDivComplete = document.createElement("button");
        taskDivComplete.textContent = "Delete";
        taskDivComplete.classList.add("btn");
        let taskDivOptions = document.createElement("button");
        taskDivOptions.textContent = "Edit";
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
            if (logic.taskArray[i].id == taskDiv.id) {
              logic.taskArray.splice(i, 1);
            }
          }
          console.log(logic.taskArray);
          logic.displayTasks();
        });
        tasks.appendChild(taskDiv);
      }
    }
  };

  const homeTasks = () => {
    for (let i = 0; i < logic.taskArray.length; i++) {
      if (logic.taskArray[i].completed === false) {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("taskDiv");
        taskDiv.setAttribute("id", logic.taskArray[i].id);

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
        if (taskDivPriority.textContent === "High Priority") {
          taskDivPriority.style.background = "#f9a1a1";
        } else if (taskDivPriority.textContent === "Medium Priority") {
          taskDivPriority.style.background = "#f0edb5";
        } else taskDivPriority.style.background = "#c2ecc4";

        let taskDivDate = document.createElement("div");
        taskDivDate.textContent = format(
          logic.taskArray[i].dueDate,
          "d MMMM yyyy"
        );
        taskDivDate.classList.add("taskDivDate");

        let taskDivButtons = document.createElement("div");
        taskDivButtons.classList.add("taskDivButtons");
        let taskDivComplete = document.createElement("button");
        taskDivComplete.textContent = "Complete";
        taskDivComplete.classList.add("btn");
        let taskDivOptions = document.createElement("button");
        taskDivOptions.textContent = "Edit";
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
            if (logic.taskArray[i].id == taskDiv.id) {
              logic.taskArray[i].completed = true;
            }
          }
          console.log(logic.taskArray);
          logic.displayTasks();
        });

        taskDivOptions.addEventListener("click", () => {
          for (let i = 0; i < logic.taskArray.length; i++) {
            if (logic.taskArray[i].id == taskDiv.id) {
              logic.taskArray[i].title = prompt("new title");
            }
            console.log(logic.taskArray);
            logic.displayTasks();
          }
        });
        tasks.appendChild(taskDiv);
      }
    }
  };

  const projectTasks = () => {
    for (let i = 0; i < logic.taskArray.length; i++) {
      if (
        currentProject.textContent === logic.taskArray[i].filter &&
        logic.taskArray[i].completed === false
      ) {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("taskDiv");
        taskDiv.setAttribute("id", logic.taskArray[i].id);

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
        if (taskDivPriority.textContent === "High Priority") {
          taskDivPriority.style.background = "#f9a1a1";
        } else if (taskDivPriority.textContent === "Medium Priority") {
          taskDivPriority.style.background = "#f0edb5";
        } else taskDivPriority.style.background = "#c2ecc4";

        let taskDivDate = document.createElement("div");
        taskDivDate.textContent = format(
          logic.taskArray[i].dueDate,
          "d MMMM yyyy"
        );
        taskDivDate.classList.add("taskDivDate");

        let taskDivButtons = document.createElement("div");
        taskDivButtons.classList.add("taskDivButtons");
        let taskDivComplete = document.createElement("button");
        taskDivComplete.textContent = "Complete";
        taskDivComplete.classList.add("btn");
        let taskDivOptions = document.createElement("button");
        taskDivOptions.textContent = "Edit";
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
            if (logic.taskArray[i].id == taskDiv.id) {
              logic.taskArray[i].completed = true;
            }
          }
          console.log(logic.taskArray);
          logic.displayTasks();
        });

        taskDivOptions.addEventListener("click", () => {
          for (let i = 0; i < logic.taskArray.length; i++) {
            if (logic.taskArray[i].id == taskDiv.id) {
              logic.taskArray[i].title = prompt("new title");
            }
            console.log(logic.taskArray);
            logic.displayTasks();
          }
        });
        tasks.appendChild(taskDiv);
      }
    }
  };

  const highPriorityTasks = () => {
    for (let i = 0; i < logic.taskArray.length; i++) {
      if (
        logic.taskArray[i].priority === "High Priority" &&
        logic.taskArray[i].completed === false
      ) {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("taskDiv");
        taskDiv.setAttribute("id", logic.taskArray[i].id);

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
        if (taskDivPriority.textContent === "High Priority") {
          taskDivPriority.style.background = "#f9a1a1";
        } else if (taskDivPriority.textContent === "Medium Priority") {
          taskDivPriority.style.background = "#f0edb5";
        } else taskDivPriority.style.background = "#c2ecc4";

        let taskDivDate = document.createElement("div");
        taskDivDate.textContent = format(
          logic.taskArray[i].dueDate,
          "d MMMM yyyy"
        );
        taskDivDate.classList.add("taskDivDate");

        let taskDivButtons = document.createElement("div");
        taskDivButtons.classList.add("taskDivButtons");
        let taskDivComplete = document.createElement("button");
        taskDivComplete.textContent = "Complete";
        taskDivComplete.classList.add("btn");
        let taskDivOptions = document.createElement("button");
        taskDivOptions.textContent = "Edit";
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
            if (logic.taskArray[i].id == taskDiv.id) {
              logic.taskArray[i].completed = true;
            }
          }
          console.log(logic.taskArray);
          logic.displayTasks();
        });

        taskDivOptions.addEventListener("click", () => {
          for (let i = 0; i < logic.taskArray.length; i++) {
            if (logic.taskArray[i].id == taskDiv.id) {
              logic.taskArray[i].title = prompt("new title");
            }
            console.log(logic.taskArray);
            logic.displayTasks();
          }
        });
        tasks.appendChild(taskDiv);
      }
    }
  };

  const mediumPriorityTasks = () => {
    for (let i = 0; i < logic.taskArray.length; i++) {
      if (
        logic.taskArray[i].priority === "Medium Priority" &&
        logic.taskArray[i].completed === false
      ) {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("taskDiv");
        taskDiv.setAttribute("id", logic.taskArray[i].id);

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
        if (taskDivPriority.textContent === "High Priority") {
          taskDivPriority.style.background = "#f9a1a1";
        } else if (taskDivPriority.textContent === "Medium Priority") {
          taskDivPriority.style.background = "#f0edb5";
        } else taskDivPriority.style.background = "#c2ecc4";

        let taskDivDate = document.createElement("div");
        taskDivDate.textContent = format(
          logic.taskArray[i].dueDate,
          "d MMMM yyyy"
        );
        taskDivDate.classList.add("taskDivDate");

        let taskDivButtons = document.createElement("div");
        taskDivButtons.classList.add("taskDivButtons");
        let taskDivComplete = document.createElement("button");
        taskDivComplete.textContent = "Complete";
        taskDivComplete.classList.add("btn");
        let taskDivOptions = document.createElement("button");
        taskDivOptions.textContent = "Edit";
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
            if (logic.taskArray[i].id == taskDiv.id) {
              logic.taskArray[i].completed = true;
            }
          }
          console.log(logic.taskArray);
          logic.displayTasks();
        });

        taskDivOptions.addEventListener("click", () => {
          for (let i = 0; i < logic.taskArray.length; i++) {
            if (logic.taskArray[i].id == taskDiv.id) {
              logic.taskArray[i].title = prompt("new title");
            }
            console.log(logic.taskArray);
            logic.displayTasks();
          }
        });
        tasks.appendChild(taskDiv);
      }
    }
  };

  const lowPriorityTasks = () => {
    for (let i = 0; i < logic.taskArray.length; i++) {
      if (
        logic.taskArray[i].priority === "Low Priority" &&
        logic.taskArray[i].completed === false
      ) {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("taskDiv");
        taskDiv.setAttribute("id", logic.taskArray[i].id);

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
        if (taskDivPriority.textContent === "High Priority") {
          taskDivPriority.style.background = "#f9a1a1";
        } else if (taskDivPriority.textContent === "Medium Priority") {
          taskDivPriority.style.background = "#f0edb5";
        } else taskDivPriority.style.background = "#c2ecc4";

        let taskDivDate = document.createElement("div");
        taskDivDate.textContent = format(
          logic.taskArray[i].dueDate,
          "d MMMM yyyy"
        );
        taskDivDate.classList.add("taskDivDate");

        let taskDivButtons = document.createElement("div");
        taskDivButtons.classList.add("taskDivButtons");
        let taskDivComplete = document.createElement("button");
        taskDivComplete.textContent = "Complete";
        taskDivComplete.classList.add("btn");
        let taskDivOptions = document.createElement("button");
        taskDivOptions.textContent = "Edit";
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
            if (logic.taskArray[i].id == taskDiv.id) {
              logic.taskArray[i].completed = true;
            }
          }
          console.log(logic.taskArray);
          logic.displayTasks();
        });

        taskDivOptions.addEventListener("click", () => {
          for (let i = 0; i < logic.taskArray.length; i++) {
            if (logic.taskArray[i].id == taskDiv.id) {
              logic.taskArray[i].title = prompt("new title");
            }
            console.log(logic.taskArray);
            logic.displayTasks();
          }
        });
        tasks.appendChild(taskDiv);
      }
    }
  };

  return {
    taskTitle,
    taskDescription,
    taskDueDate,
    projectTitle,
    currentProject,
    taskPriority,
    clearContent,
    todayTasks,
    homeTasks,
    completedTasks,
    projectTasks,
    highPriorityTasks,
    mediumPriorityTasks,
    lowPriorityTasks,
  };
})();
export { dom };
