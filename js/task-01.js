const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);
console.log("");
const items = categories.querySelectorAll(".item");

// for (let i = 0; i < items.length; i++) {
//   console.log(`Category: ${items[i].firstElementChild.textContent}`);
//   console.log(`Elements: ${items[i].lastElementChild.children.length}`);
//   console.log("");
// }

items.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
  console.log("");
});
