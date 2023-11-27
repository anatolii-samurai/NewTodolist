const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-button');
const todoItems = document.querySelector('.todo-items');



const STATUS = {
    TODO:"To Do",
    // IN_PROGRESS:"In Progress" ,   
    DONE:"Done"
}
const PRIORITY = {
LOW: 'low',
HIGH:'high',
// MEDIUM:'medium'
}
   const list = [];




todoForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    if( todoInput.value.length < 3){
        throw new Error("Строка слишком short")
    }else if(todoInput.value.length > 30){
        throw new Error("Строка слишком длинная")
    }
    addTask(todoInput.value);
    console.log(list);
})

function addTask(task){
    if(task == '' || task.trim() == ''){
        alert('Enter task ...')
    }else{
        const newItem = document.createElement('li');
        newItem.className = 'item'
        newItem.innerHTML =`
        <input class="checkbox" type="checkbox">
        ${todoInput.value}
        <button class="delete-button">X</button>`;
        todoItems.insertBefore(newItem,todoItems.firstChild);
        addName();
        const checkBox = document.querySelector('.checkbox');
        checkBox.addEventListener('click',()=>{
            if(checkBox.checked){
                newItem.style.textDecoration = 'line-through'
                
            }else{
                newItem.style.textDecoration = 'none'
            }
        })
        const deleteBtn = document.querySelector('.delete-button')
        deleteBtn.addEventListener('click',() =>{
         newItem.closest('li').remove();
         deleteTask();   
     }) 
      
    todoInput.value = ''
}
}
// function render(){
//     addName();

// }
function addName (){
    list.push({name:todoInput.value,status:STATUS.TODO,priority:PRIORITY.HIGH})
    
  }
function deleteTask(){
    let findTaskIndex = list.findIndex(item => item.name ===name);
    list.splice(findTaskIndex,1)
    console.log(list);
}
