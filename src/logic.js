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

const createTask = ()=>{
    let newTitle = prompt("choose title");
    let newDescription = prompt("describe task");
    let newDuedate = prompt("what date");
    let newPriority = prompt("priority");
    let newFilter = prompt("where does it belong");
    let newTask = new Task(newTitle, newDescription, newDuedate, newPriority, newFilter);

    return newTask
}
export{
    createTask,
    taskA,
    taskB,
    taskC
}