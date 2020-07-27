const tasks = []
const ulEl = document.querySelector('#tasks ul')

function removeTask(index){
  tasks.splice(index, 1)
  const taskEl = document.querySelector(`#tasks li#item-${index}`)
  ulEl.removeChild(taskEl)
}

function addTask(text){
  const total = tasks.push(text)
  const index = total - 1
  const taskEl = document.createElement('li')
  const textEl = document.createElement('span')
  const btnEl = document.createElement('button')

  taskEl.setAttribute('id',`item-${index}`)

  btnEl.addEventListener('click', () => {
    removeTask(index)
    updateStorage(localStorage)
  })

  taskEl.appendChild(textEl)
  taskEl.appendChild(btnEl)

  textEl.innerHTML = text
  btnEl.innerHTML = 'remover'

  ulEl.appendChild(taskEl)
}

const btnEl = document.querySelector('#form button')
const inputEl = document.querySelector('input')

btnEl.addEventListener('click', () => {
  if(inputEl.value) addTask(inputEl.value)
  updateStorage(localStorage)
  inputEl.value = ''
})

function updateStorage(storage){
  storage.setItem('tasks', JSON.stringify(tasks))
}

function loadStorage(storage) {
  var taskStorage = JSON.parse(localStorage.getItem('tasks'))
  if(taskStorage) taskStorage.forEach(item => addTask(item));
}

loadStorage(localStorage)
