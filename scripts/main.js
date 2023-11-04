const form = document.querySelector('form')

function bakedGoodTemplate(image, name, flavors, price) {
  const li = document.createElement("li");
  li.classList.add("baked-good");
  const img = document.createElement('img')
  img.src = image
  console.log(img)
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
    li.append(removeButton);
    li.prepend(img)
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
  const image = goodsImageObject[type.value]
  console.log(image)
  generateBakedGood(image, name.value, flavors.value, price.value)
  form.reset()
})