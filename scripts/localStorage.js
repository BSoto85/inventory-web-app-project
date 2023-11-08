const names = document.querySelector('#name')
const flavors = document.querySelector('#flavors')
const price = document.querySelector('#price')

p

names.addEventListener('submit', storedInputs)
flavors.addEventListener('submit', storedInputs)
price.addEventListener('submit', storedInputs)

function storedInputs() {
  localStorage.setItem('name', names.value)
  localStorage.setItem('flavor', flavors.value)
  localStorage.setItem('price', price.value)
}