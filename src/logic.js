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

let taskA = new Task('a', 'a', 'a', 'a', 'a');
let taskB = new Task('b', 'b', 'b', 'b', 'b');
let taskC = new Task('c', 'c', 'c', 'c', 'a');
taskArray.push(taskA);
taskArray.push(taskB);
taskArray.push(taskC);


const createTask = ()=>{
    let newTitle = dom.taskTitle.value;
    let newDescription = dom.taskDescription;
    let newTask = new Task(newTitle, newDescription);
    taskArray.push(newTask);
}

return{
    taskArray,
    createTask
}
})();
export{
    logic
}