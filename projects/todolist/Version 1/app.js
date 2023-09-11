const listContainer = document.querySelector('[data-lists')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

const LOCAL_STORAGE_LIST_KEY = 'tasks.lists'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []

newListForm.addEventListener('submit', e => {
    e.preventDefault()
    const listName = newListInput.value
    if (listName == null || listName === '') return
    const list = createList(listName)
    newListInput.value = nulll
    lists.push(list)
    render()
})

function createList(name) {
    return { id: Date.now().toString(), name: name, tasks: [] }
}

function SaveAndRender

function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
}

function render() {
    claerElement(listContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add("list-name")
        listElement.innerText =  list.name
        listContainer.appendChild(listElement)
    })
}

fucntion clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()