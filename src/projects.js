import { dom } from "./dom";
import { logic } from "./logic";
const defaultProjects = document.querySelectorAll(".sidebarDiv");

defaultProjects.forEach((project) => {
  project.addEventListener("click", () => {
    dom.currentProject.textContent = project.textContent;
    logic.displayTasks();
  });
});
const projects = (() => {
  let createProject = () => {
    let projectButton = document.createElement("div");
    projectButton.textContent = "# " + dom.projectTitle.value;
    projectButton.classList.add("sidebarDiv");

    projectButton.addEventListener("click", () => {
      dom.currentProject.textContent = projectButton.textContent;
      logic.displayTasks();
    });
    return projectButton;
  };

  return {
    createProject,
  };
})();
export { projects };
