window.addEventListener('load', ()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const listElement = document.querySelector("#tasks");

    form.addEventListener('submit', (e)=>{
        e.preventDefault() //prevents page from refreshing after submit
        
        const task = input.value;

        if(!task){
            alert("Please fill out task");
            return
        }

        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        const taskContentElement = document.createElement("div");
        taskContentElement.classList.add("content");

        const taskInput = document.createElement("input");
        taskInput.setAttribute("type", "text")
        taskInput.classList.add("text")
        taskInput.setAttribute("value", task)
        taskInput.setAttribute("readOnly",true)


        taskContentElement.appendChild(taskInput)
        

        taskElement.appendChild(taskContentElement);

        listElement.appendChild(taskElement);

        

        const actions = document.createElement("div")
        actions.classList.add("actions")

        taskElement.appendChild(actions)

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit")
        editBtn.innerText = "edit"

        

        const deleteBtn = document.createElement("button")
        deleteBtn.classList.add("delete")
        deleteBtn.innerText = "delete"

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        input.value = "";


        editBtn.addEventListener("click", ()=>{
            if(editBtn.innerText.toLowerCase() =="edit"){
                
                taskInput.removeAttribute("readOnly");
                taskInput.focus();
                
                editBtn.innerText = "Save"

            }else{
                taskInput.setAttribute("readOnly", "readOnly")
                editBtn.innerText = "Edit"                


            }
        })

        deleteBtn.addEventListener("click", ()=>{
            taskElement.remove();
        })






    })
})