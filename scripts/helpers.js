const form = document.querySelector('form')

function bakedGoodTemplate(image, name, flavors, price) {
  const li = document.createElement("li");
  li.classList.add("baked-good");
  const img = document.createElement('img')
  img.src = image
  const removeButton = document.createElement('button')
  removeButton.classList.add('remove-button')
  removeButton.textContent = 'Remove'
  removeButton.addEventListener('click', (event)=>{
    event.target.closest('.baked-good').remove()
  })
  if (name && flavors && price) {
    li.innerHTML = 
    `<p>Good: ${name}</p>
    <p>Flavor: ${flavors}</p>
    <p>Price: $${(price/100).toFixed(2)}</p>`
    li.append(createStockButton())
    li.append(removeButton);
    li.prepend(img)
  }
  return li;
}

form.addEventListener('submit', (event)=>{
  event.preventDefault()
  const {type, name, flavors, price} = event.target
  const image = goodsImageObject[type.value]
  generateBakedGood(image, name.value, flavors.value, price.value)
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
      stockButton.textContent === 'In Stock'
    }
  })
  return stockButton
}
