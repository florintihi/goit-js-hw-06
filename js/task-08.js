const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);
const loginData = {};

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const {
    elements: { username, password },
  } = event.currentTarget;

  if (username.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }

  loginData[element.name] = element.value;

  form.reset();
  console.log(loginData);
}
