import { dom } from "./dom";
import { logic } from "./logic";
const defaultProjects = document.querySelectorAll('.sidebarDiv');
const priorityFilter = document.querySelectorAll('.projectPriority');

priorityFilter.forEach((priority)=>{
    priority.addEventListener('click', ()=>{
        dom.currentProject.textContent  = priority.textContent;
        for(let i = 0; i <= logic.taskArray.length; i++){
            if(logic.taskArray.filter === priority.textContent){
                dom.displayTasks();
            }
        }
    })
})

defaultProjects.forEach((project)=>{
    project.addEventListener('click', ()=>{
        dom.currentProject.textContent = project.textContent;
        dom.displayTasks();
    })
})
const projects =(()=>{
    let createProject = ()=>{
        let projectButton = document.createElement('div');
        projectButton.textContent = '# '+ dom.projectTitle.value;
        projectButton.classList.add('sidebarDiv')

        projectButton.addEventListener('click', ()=>{
            dom.currentProject.textContent = projectButton.textContent;
            dom.displayTasks();
        })
        return projectButton
    }
    
return {
    createProject
}
})();
export {
    projects
}