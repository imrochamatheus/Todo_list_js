const form = document.querySelector('.form-add-todo')
const todosUl = document.querySelector('.todos-container')
const searchInput = document.querySelector('.form-search input')

const deleteTodo = event => {
  const clickedElement = event.target

  if (clickedElement.dataset.trash) {
    document.querySelector(`[data-todo="${clickedElement.dataset.trash}"]`)
      .remove()
  }
  
}

const addTodo = event => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim()

  todosUl.innerHTML += `
  <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
    <span>${inputValue}</span>
    <i class="far fa-trash-alt delete" data-trash="${inputValue}"></i>
  </li>`
  event.target.reset()
  
}

form.addEventListener('submit', addTodo)
todosUl.addEventListener('click', deleteTodo)

searchInput.addEventListener('input', event => {
  const inputValue = event.target.value.trim()
  const todosContainerChildren = Array.from(todosUl.children)

  todosContainerChildren.forEach(todo => {

    if(!todo.textContent.toLowerCase().includes(inputValue.toLowerCase())) {
      todo.classList.remove('d-flex')
      todo.classList.add('d-none')

    }else{
      todo.classList.remove('d-none')
      todo.classList.add('d-flex')
    }

  })
})


