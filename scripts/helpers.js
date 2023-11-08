const form = document.querySelector('form')

function bakedGoodTemplate(image, name, flavors, calories, allergens, price) {
  const li = document.createElement("li");
  li.classList.add("baked-good");
  const img = document.createElement('img')
  img.src = image
  const pCalories = document.createElement('p')
  const pAllergens = document.createElement('p')
  pCalories.innerText = `Calories: ${calories}`
  pAllergens.innerText = `Allergens: ${allergens}`
  const pPrice = document.createElement('p')
  pPrice.innerText = `Price: $${(price/100).toFixed(2)}`
  pCalories.classList.add('hide')
  pCalories.setAttribute('id', 'hide')
  pAllergens.classList.add('hide')
  pAllergens.setAttribute('id', 'hide')
  const removeButton = document.createElement('button')
  removeButton.classList.add('remove-button')
  removeButton.textContent = 'Remove'
  removeButton.addEventListener('click', (event)=>{
    event.target.closest('.baked-good').remove()
  })
  if (name && flavors && calories && allergens && price) {
    li.innerHTML = 
    `<p>Good: ${name}</p>
    <p>Flavor: ${flavors}</p>`
    li.append(pCalories, pAllergens, pPrice, createStockButton(), removeButton)
    li.prepend(img)
  }
  li.addEventListener('mouseenter', ()=>{
    changeOnMouseOn()
  })
  li.addEventListener('mouseleave', ()=>{
    changeOnMouseOff()
  })
  return li;
}

form.addEventListener('submit', (event)=>{
  event.preventDefault()
  const {type, name, flavors, calories, price} = event.target
  const image = goodsImageObject[type.value]
  generateBakedGood(image, name.value, flavors.value, calories.value, getAllergens(), price.value)
  form.reset()
})

function createStockButton() {
  const stockButton = document.createElement('button')
  stockButton.classList.add('in-stock-button')
  if(document.getElementById('in-stock').checked) {
    stockButton.textContent = 'In Stock'
  } else if(document.getElementById('out-of-stock').checked) {
    stockButton.textContent = 'Out of Stock'
    stockButton.style.backgroundColor = 'red'
  }
  stockButton.addEventListener('click', ()=>{
    if(stockButton.textContent === 'In Stock') {
      stockButton.textContent = 'Out of Stock'
      stockButton.style.backgroundColor = 'red'
    } else {
      stockButton.textContent = 'In Stock'
      stockButton.style.backgroundColor = 'aquamarine'
    }
  })
  return stockButton
}

function getAllergens() {
  const allergens = document.querySelectorAll('.checkbox')
  const checkedAllergens = []
  for(let allergen of allergens) {
    if(allergen.checked) {
      checkedAllergens.push(allergen.id)
    }
  }
  return checkedAllergens[0] ? checkedAllergens.join(', ') : 'No allergens listed'
}

function changeOnMouseOn() {
  const elementsToBeShown = document.querySelectorAll('#hide')
  for(let element of elementsToBeShown) {
    element.className = 'show'
  }
}

function changeOnMouseOff() {
  const elementsToBeShown = document.querySelectorAll('#hide')
  for(let element of elementsToBeShown) {
    element.className = 'hide'
  }
}
