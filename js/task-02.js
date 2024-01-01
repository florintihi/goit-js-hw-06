const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const liIngredient = document.createElement("li");
  liIngredient.textContent = ingredient;
  ulIngredients.append(liIngredient);
});
