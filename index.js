window.addEventListener('load',()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input")
    const list_el = document.querySelector("#tasks") 

    document.addEventListener("DOMContentLoaded", getTodos);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task){
            alert("please fill out the task");
            return;
        }

        const task_el = document.createElement("div")
        task_el.classList.add("task");
    
    
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
    
    
        task_el.appendChild(task_content_el);
    
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");
    
        saveTodos(input.value);
    
        task_content_el.appendChild(task_input_el);
    
        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");
    
        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerText = "Edit";
    
        const task_delete_el = document.createElement("div");
        task_delete_el.classList.add("delete");
        task_delete_el.innerText = "Delete";
    
    
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
    
        task_el.appendChild(task_actions_el);
    
        list_el.appendChild(task_el);
    
        input.value = "";
    
        task_edit_el.addEventListener("click", (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                task_edit_el.innerText = "edit";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });
    
        task_delete_el.addEventListener("click", (e) => {
            list_el.removeChild(task_el);
        }
        )
    })
    //save data local storage
    function saveTodos(todo){
        let todos;
        if(localStorage.getItem("todos") === null){
            //if no data create one
            todos = [];
        } else{
            //if yes get all data
            todos = JSON.parse(localStorage.getItem("todos"));
            //JSON stand for javascript object notation(its the way the way we store data in object format)
        }
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    //get data from local storage
    function getTodos() {
        let todos;
        if(localStorage.getItem("todos") === null){
            //if no data create one
            todos = [];
        } else{
            //if yes get all data
            todos =     JSON.parse(localStorage.getItem("todos"));
            //JSON (javascriptovject notation{})
        }
        todos.forEach(function (todo) {
            const task_el = document.createElement("div")
            task_el.classList.add("task");
        
        
            const task_content_el = document.createElement("div");
            task_content_el.classList.add("content");
        
        
            task_el.appendChild(task_content_el);
        
            const task_input_el = document.createElement("input");
            task_input_el.classList.add("text");
            task_input_el.type = "text";
            task_input_el.value = task;
            task_input_el.setAttribute("readonly", "readonly");
    
            task_content_el.appendChild(task_input_el);
        
            const task_actions_el = document.createElement("div");
            task_actions_el.classList.add("actions");
        
            const task_edit_el = document.createElement("button");
            task_edit_el.classList.add("edit");
            task_edit_el.innerText = "Edit";
        
            const task_delete_el = document.createElement("div");
            task_delete_el.classList.add("delete");
            task_delete_el.innerText = "Delete";
        
        
            task_actions_el.appendChild(task_edit_el);
            task_actions_el.appendChild(task_delete_el);
        
            task_el.appendChild(task_actions_el);
        
            list_el.appendChild(task_el);
        
        });
    }
});