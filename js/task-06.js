const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const trimmedInput = input.value.trim();
  if (trimmedInput.length === parseInt(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
