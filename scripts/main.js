function generateBakedGood(name, flavors, image, price) {
  const li = bakedGoodTemplate(name, flavors, image, price)
    const ul = document.querySelector("ul");
    ul.append(li);
}
