let tasks=JSON.parse(localStorage.getItem('tasks'))||[];
updateToDo();
countChecks();
function updateToDo() {
    let todoHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        todoHTML += `
        <div class="todo-list">
            <input type="checkbox" data-task-id="${i}" class="cb" ${tasks[i].checked ? 'checked' : ''}>
            <div class="task">${tasks[i].task}</div>
            <button class="del-btn" onclick="
            tasks.splice(${i},1);
            updateToDo();
            countChecks();">Delete</button>
        </div>`;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.querySelector('.todo-list-container').innerHTML = todoHTML;

    const checkboxes = document.querySelectorAll('.cb');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            const taskId = checkbox.dataset.taskId;
            tasks[taskId].checked = checkbox.checked; 
            console.log(checkbox.checked);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            countChecks(); 
        });
    });
}
const addTask = ()=>{
    const task = document.querySelector('.to');
    const tsk = task.value;
    tasks.push({task:tsk,checked:''});
    task.value ='';
    updateToDo();
    countChecks();

};

function chkEnter(event){
    if(event.key==='Enter'){
        addTask();
    }
}
function countChecks(){
    let count=0;
    tasks.forEach((task)=>{
        if(task.checked){
            count+=1;
        }
    })
    console.log(count);
    const progressBar = document.querySelector('.elem-pres');
    progressBar.style.width = (count/tasks.length)*100+'%';

}


const add_btn = document.querySelector('.add-btn');

add_btn.addEventListener('click',addTask);
