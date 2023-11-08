function generateBakedGood(name, flavors, image, calories, allergens, price) {
  const li = bakedGoodTemplate(name, flavors, image, calories, allergens, price)
    const ul = document.querySelector("ul");
    ul.append(li);
}
