const form = document.querySelector('form')

function bakedGoodTemplate(name, flavors, image, price) {
  const li = document.createElement("li");
  li.classList.add("baked-good");
  const removeButton = document.createElement('button')
  removeButton.textContent = 'Remove'
  removeButton.addEventListener('click', (event)=>{
    event.target.closest('.baked-good').remove()
  })
  if (name && flavors && price) {
    li.innerHTML = 
    `<img src=${image}>
    <p>${name}</p>
    <p>${flavors}</p>
    <p>$${(price/100).toFixed(2)}</p>`
    li.append(removeButton);
  }
  return li;
}

function generateBakedGood(name, flavors, image, price) {
  const li = bakedGoodTemplate(name, flavors, image, price)
    const ul = document.querySelector("ul");
    ul.append(li);
}

form.addEventListener('submit', (event)=>{
  event.preventDefault()
  const {type, name, flavors, price} = event.target
  const image = goodsImageObject[type.value].toLowerCase()
  generateBakedGood(image, name.value, flavors.value, price.value)
  form.reset()
})