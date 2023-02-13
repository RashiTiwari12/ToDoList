let addBtn=document.querySelector('.add-btn')
let addPriority=document.querySelector('.add-prior-btn')
let deleteAll=document.querySelector('.del-all-btn')
let toDoList=document.querySelector('.to-do-list')
let inputItem=document.querySelector('.input-box')



function createItem(){
    let divbox=document.createElement('div')
    divbox.classList.add('todo')

    
let li2=document.createElement('li')
li2.classList.add('todo-item')
li2.innerText=`${inputItem.value}`

let completeBtn=document.createElement('button')
completeBtn.setAttribute('class','complete-btn')
completeBtn.innerText="completed"
completeBtn.addEventListener('click',completeTask)

let deleteBtn=document.createElement('button')
deleteBtn.setAttribute('class','delete-btn')
deleteBtn.innerText="delete"
deleteBtn.addEventListener('click',deleteTask)

divbox.append(li2)
divbox.append(completeBtn)
divbox.append(deleteBtn)

return divbox
}


function completeTask(e){
let parentOfCompleted=e.target.parentElement;
parentOfCompleted.style.opacity="0.3"

}
function deleteTask(e){
    let parentOfCompleted=e.target.parentElement;
    parentOfCompleted.remove()
}
function addTask(){
    if(inputItem.value!==""){
let taskElem=createItem()
toDoList.append(taskElem)
    }
}
function addPTask(){
    if(inputItem.value!==""){
let taskElem=createItem()
toDoList.prepend(taskElem)
    }
}
function delAllTask(){
    
toDoList.innerText=""
    }


