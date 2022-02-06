const form = document.querySelector('.form-add-todo')
const todosUl = document.querySelector('.todos-container')
const searchInput = document.querySelector('.form-search input')

form.addEventListener('submit', event => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim()

  todosUl.innerHTML += `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${inputValue}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`

  event.target.reset()
})

todosUl.addEventListener('click', event => {
  const clickedElement = event.target
  const ifClickedElementHasADeleteClass = clickedElement.classList.contains('delete')

  if(ifClickedElementHasADeleteClass) {
    clickedElement.parentElement.remove()
  }

})

searchInput.addEventListener('input', event => {
  const inputValue = event.target.value
  const todosContainerChildren = Array.from(todosUl.children)

  todosContainerChildren.forEach(todo => {
    if(!todo.textContent.includes(inputValue)) {
      todo.classList.remove('d-flex')
      todo.classList.add('d-none')

    }else{
      todo.classList.remove('d-none')
      todo.classList.add('d-flex')
    }

  })
})


