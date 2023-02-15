const tasks = document.querySelector("#tasks")

const addTaskBtn = document.querySelector("#new-task-submit")



addTaskBtn.addEventListener("click",event=>{
    const inputText = document.querySelector("#new-task-input")

    alert(inputText.value)
    
})

function addNewTask(){
    const newTaskElement = document.createElement("div")
    newTaskElement.classList.add("task")

    const taskContentElement = document.createElement("div")
    taskContentElement.classList.add("content")

    newTaskElement.appendChild(taskContentElement)
}






