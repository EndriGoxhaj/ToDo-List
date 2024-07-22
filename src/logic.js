import { dom } from "./dom";

const logic = (() =>{

const taskArray = [];

const Task = function (title, description, dueDate, priority, filter){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.filter = filter;
}

let taskA = new Task('Do Homework', 'Have to do homework soon', '08/07/2024', 'High Priority', '');
let taskB = new Task('Clean Room', 'Room needs to be cleaned', '08/07/2024', 'Medium Priority', '');
let taskC = new Task('Do shopping', 'Fridge is empty', '08/07/2024', 'High Priority', '');
taskArray.push(taskA);
taskArray.push(taskB);
taskArray.push(taskC);



const createTask = ()=>{
    let newTitle = dom.taskTitle.value;
    let newDescription = dom.taskDescription.value;
    let newDueDate = dom.taskDueDate.value;
    let newPriority = '5';
    let newFilter = '';
    if(dom.currentProject.textContent !== 'home'){
        newFilter = dom.currentProject.textContent;
    }
    let newTask = new Task(newTitle, newDescription, newDueDate, newPriority, newFilter);
    taskArray.push(newTask);
}

return{
    taskArray,
    createTask,
}
})();
export{
    logic
}