import { dom } from "./dom";
import { format, startOfToday } from "date-fns";

const logic = (() => {
  const taskArray = [];
  let id = 4;
  const Task = function (
    title,
    description,
    dueDate,
    priority,
    filter,
    completed,
    id
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.filter = filter;
    this.completed = completed;
    this.id = id;
  };

  let taskA = new Task(
    "Do Homework",
    "Have to do homework soon",
    format("2024-07-13", "d MMMM yyyy"),
    "High Priority",
    "",
    true,
    1
  );
  let taskB = new Task(
    "Clean Room",
    "Room needs to be cleaned",
    format("2024-07-13", "d MMMM yyyy"),
    "Medium Priority",
    "",
    false,
    2
  );
  let taskC = new Task(
    "Do shopping",
    "Fridge is empty",
    format("2024-07-13", "d MMMM yyyy"),
    "Low Priority",
    "",
    false,
    3
  );
  taskArray.push(taskA);
  taskArray.push(taskB);
  taskArray.push(taskC);

  const createTask = () => {
    let newTitle = dom.taskTitle.value;
    let newDescription = dom.taskDescription.value;
    let newDueDate = "";
    if (dom.taskDueDate.value === "") {
      newDueDate = startOfToday();
    } else {
      newDueDate = dom.taskDueDate.value;
    }
    let newPriority = dom.taskPriority.value;
    let newFilter = "";
    if (dom.currentProject.textContent !== "Home") {
      newFilter = dom.currentProject.textContent;
    }
    let newCompleted = false;
    let newId = id;
    id++;
    let newTask = new Task(
      newTitle,
      newDescription,
      newDueDate,
      newPriority,
      newFilter,
      newCompleted,
      newId
    );
    taskArray.push(newTask);
  };

  const displayTasks = () => {
    dom.clearContent();
    if (dom.currentProject.textContent === "Today") {
      dom.todayTasks();
    } else if (dom.currentProject.textContent === "High Priority") {
      dom.highPriorityTasks();
    } else if (dom.currentProject.textContent === "Medium Priority") {
      dom.mediumPriorityTasks();
    } else if (dom.currentProject.textContent === "Low Priority") {
      dom.lowPriorityTasks();
    } else if (dom.currentProject.textContent === "Completed") {
      dom.completedTasks();
    } else if (dom.currentProject.textContent === "Home") {
      dom.homeTasks();
    } else {
      dom.projectTasks();
    }
  };

  return {
    taskArray,
    createTask,
    displayTasks,
  };
})();
export { logic };
