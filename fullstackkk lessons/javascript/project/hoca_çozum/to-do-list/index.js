const inputText = document.querySelector("#task");
const button = document.querySelector(".add-btn");
const form = document.querySelector("#add-task");
const ul = document.querySelector(".todolist-list-container");

//Functions
const createTask = (taskText)=>{
return ` <div class="list-group">
<li class="unchecked">${taskText}</li>
<button class="btn">&#128473;</i></button>
</div>`
};
//Complete
const complete = ()=>{
    let sayi1 = ul.getElementsByClassName("checked").length;
    let sayi2 = ul.getElementsByClassName("list-group").length;
    let checkedTasks = document.querySelector("#checkedTasks");
    let allTasks = document.querySelector("#allTasks");
    checkedTasks.innerText = sayi1;
    allTasks.innerText = sayi2;
}


// Events
//Add task
button.addEventListener("click",e=>{
e.preventDefault();
if (inputText.value){


ul.innerHTML += createTask(inputText.value)
form.reset();

}else{
    alert("Please enter a value")
}complete();
});

//Delete Task
ul.addEventListener("click", e=>{
if(e.target.classList.contains("btn")){
    e.target.parentElement.remove()

}complete();
});

//Check & Uncheck
ul.addEventListener("click", e=>{
    if(e.target.classList.contains("unchecked")){
        e.target.className = "checked"
    }else{
        e.target.className = "unchecked"
    }complete();
});