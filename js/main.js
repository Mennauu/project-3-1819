const modal = document.getElementById('add-new-modal')
const button = document.getElementById('add-new-button')
const darkness = document.getElementById('darkness')
const close = document.querySelector('.close')

button.addEventListener('click', () => {
  modal.classList.add("visible")
  darkness.classList.add("d-block")
})

close.addEventListener('click', () => {
  modal.classList.remove("visible")
  darkness.classList.remove("d-block")
})