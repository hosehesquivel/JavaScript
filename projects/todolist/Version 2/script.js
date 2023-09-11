var tasks = JSON.parse(localStorage.getItem('tasks')) || []
const splashPage = document.getElementById('splashpage')

// WINDOW LOAD

window.addEventListener('load', () => {
    const newTask = document.querySelector('#newTask')

    newTask.addEventListener('submit', (e) => {
        e.preventDefault()

        if (newTask.taskentry.value == '') {return}

        const task = {
            content: e.target.elements.taskentry.value,
            done: false,
        }

        tasks.push(task)

        localStorage.setItem('tasks', JSON.stringify(tasks))

        e.target.reset()

        DisplayTasks()
    })

    DisplayTasks()
    
    gsap.to(".splashpage", {
        y: -700,
        opacity: 0,
        delay: 1
    })

})

// FUNCTIONS

function DisplayTasks() {
    const taskList =  document.querySelector('#tasklist')
    taskList.innerHTML = ""

    tasks.forEach(task => {
        const taskItem = document.createElement('div')
        taskItem.classList.add('task')

        const taskInput = document.createElement('input')
        const taskText = document.createElement('input')
        const taskEdit = document.createElement('button')
        const taskDelete = document.createElement('button')

        taskInput.type = 'radio'
        taskInput.checked = task.done
        taskText.classList.add('checkbox')

        taskText.setAttribute("readonly", "true")
        taskText.type = 'text'
        taskText.value = task.content
        taskText.classList.add('text')

        taskEdit.innerHTML = 'Edit'

        taskDelete.innerHTML = 'Delete'
        taskDelete.classList.add('delete-button')

        taskItem.appendChild(taskInput)
        taskItem.appendChild(taskText)
        taskItem.appendChild(taskEdit)
        taskItem.appendChild(taskDelete)

        taskList.appendChild(taskItem)

        if (taskItem.done) { 
            taskItem.classList.add('done')
            console.log(task)
        }

        taskInput.addEventListener('change', (e) => {           
            task.done = e.target.checked;
            taskItem.classList.add('done')
            
            localStorage.setItem('tasks', JSON.stringify)
        })

        taskDelete.addEventListener('click', (e) => {
            if (task.done) {
                tasks = tasks.filter(t => t != task)
                localStorage.setItem('tasks', JSON.stringify(tasks))
                DisplayTasks()
            }

        })

        taskEdit.addEventListener('click', (e) => {
            if (task.done) { return }
            const input = taskText

            input.removeAttribute('readonly');
            input.focus();
            input.select();
            input.addEventListener('blur',(e) => {
                input.setAttribute('readyonly', true);
                task.content = e.target.value;
                localStorage.setItem('tasks', JSON.stringify(tasks));
                DisplayTasks();
            })
        })

        window.addEventListener('onkeydown', () => {
            console.log("key pressed")
            gsap.to(".task", { opacity: 0, scale: 0, duration: .3 })
        })
    })
}

function SlideTask(task) {
    console.log(task)
    gsap.to(task, {
        opacity: 0,
        duration: .3
    })
}