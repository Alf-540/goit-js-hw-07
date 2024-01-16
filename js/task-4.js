const form = document.querySelector(".login-form");
const input = document.querySelector("input");

const formSubmitHandler = (event) => {
  event.preventDefault();

  if (form.elements.password.value !== "" && form.elements.email.value !== "") {
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const dataForm = { email, password };
    form.reset();
    return console.log(dataForm);
  }
  form.reset();
  return alert("Все поля должны быть заполнены!");
};

form.addEventListener("submit", formSubmitHandler);