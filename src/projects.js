import { dom } from "./dom";

const projects =(()=>{
    let createProject = ()=>{
        let projectButton = document.createElement('button');
        projectButton.textContent = dom.projectTitle.value;

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