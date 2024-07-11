import { logic } from "./logic";
import { projects } from "./projects";

const dom =(()=>{
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const addTaskBtn = document.getElementById('addTaskButton');
    const taskDialog = document.getElementById('taskDialog')
    const taskTitle = document.getElementById('taskTitle');
    const taskDescription = document.getElementById('taskDescription');
    const addProjectBtn = document.getElementById('addProjectButton');
    const projectTitle = document.getElementById('projectTitle')
    const submitTask = document.getElementById('submitTask');

    addTaskBtn.addEventListener('click', ()=>{
        taskDialog.showModal();
        
    })
    submitTask.addEventListener('click', ()=>{
        logic.createTask();
        displayTasks();
        taskDialog.close()
    })



    const clearContent = ()=>{
         while(content.firstChild){
            content.removeChild(content.firstChild);
        }
    }
    const displayTasks = ()=>{
        clearContent();
        for (let i = 0; i < logic.taskArray.length; i++){
            let taskDiv = document.createElement('div');
            taskDiv.setAttribute('id', i);
            taskDiv.textContent = logic.taskArray[i].title;
            content.appendChild(taskDiv);
        }
    }


    return{
        taskTitle,
        taskDescription,
        projectTitle
    }
})();
export{
    dom
}