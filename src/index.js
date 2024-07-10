
import { createTask } from "./logic";
import { taskA } from "./logic";
import { taskB } from "./logic";
import { taskC } from "./logic";

const content = document.getElementById('content');
const btn = document.querySelectorAll('.btn');
const addTaskBtn = document.getElementById('new');

const taskArray = [];

taskArray.push(taskA);
taskArray.push(taskB);
taskArray.push(taskC);


addTaskBtn.addEventListener('click', ()=>{
    taskArray.push(createTask());
    console.log(taskArray);
    displayTasks();
})
const clearContent = ()=>{
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
}
const displayTasks = ()=>{
    clearContent();
    for (let i = 0; i < taskArray.length; i++){
        let taskDiv = document.createElement('div');
        taskDiv.setAttribute('id', i);
        taskDiv.textContent = taskArray[i].title;
        content.appendChild(taskDiv);
    }
}

btn.forEach((button)=>{
    button.addEventListener('click', ()=>{
        for (let i = 0; i < taskArray.length; i++){
            if(taskArray[i].filter === button.textContent){
                console.log(taskArray[i].title);
            }
        }
})
})
