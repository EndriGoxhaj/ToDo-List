import { dom } from "./dom";

const projects =(()=>{
    let createProject = ()=>{
        let projectButton = document.createElement('button');
        projectButton.textContent = dom.projectTitle;
    }

return {
    createProject
}
})();
export {
    projects
}