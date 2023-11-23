const addBtn = document.querySelector("#add-btn")
const inputBar = document.querySelector("#inputBar")
const ul = document.querySelector(".todo-list")
const inputContainer = document.querySelector(".input-container")


let editTodo;
let editBtn;
let deleteBtn;

// adding task function is here

function newTodo (){
    // if input value is nothing then the shake animation
    
    if (inputBar.value.trim()=== "") {
        inputContainer.classList.add("shake")
        setTimeout(() => {
            inputContainer.classList.remove("shake")
        }, 400);
        return;
    }
    // if edit button clicked
    if (addBtn.innerText === "Edit") {
        editTodo.target.previousElementSibling.innerText = inputBar.value
        inputBar.value = ""
        addBtn.innerText = "Add"
    }
    
    // otherwise this will execute 
    else{
    //Creating li and p 
    const li = document.createElement("li")
    const p = document.createElement("p")
    li.appendChild(p)
    p.innerHTML = inputBar.value;

    //creating buttons
    editBtn = document.createElement("button")
    editBtn.innerText = "Edit"

    deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"
    
    //Appending child in the ul tag
    li.appendChild(editBtn)
    li.appendChild(deleteBtn)
    ul.appendChild(li)
    
    inputBar.value = ""
}
    saveTodo()

}

// adding eventlisteners
addBtn.addEventListener("click", newTodo)

inputBar.addEventListener("keydown",function(event){
    if (event.key === "Enter") {
        newTodo()
    }
})
const mainList = document.querySelector(".todo-list li")

//deleting task function is here
function updatingTask(e) {
    if (e.target.innerHTML === "Delete") {
        e.target.parentElement.remove()
        inputBar.value =""
    }
    if(e.target.innerText === "Edit"){
        inputBar.value = e.target.previousElementSibling.innerHTML;
        inputBar.focus();
        addBtn.innerText = "Edit"
        editTodo = e;
    }
    saveTodo()
}
ul.addEventListener("click", updatingTask)


ul.addEventListener("click", (e)=>{
    if (e.target.tagName === "P") {
        e.target.classList.toggle("checked")
    }
    saveTodo()
})

// saving todos
function saveTodo() {
    localStorage.setItem("data", ul.innerHTML)
}

function showData() {
    ul.innerHTML = localStorage.getItem("data")
}
showData()