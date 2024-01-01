const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);
const loginData = {};

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  for (const element of form.elements) {
    if (element.type === "email" || element.type === "password") {
      if (element.value === "") {
        alert("Please fill in all the fields!");
        return;
      }
      loginData[element.name] = element.value;
    }
  }

  form.reset();
  console.log(loginData);
}
