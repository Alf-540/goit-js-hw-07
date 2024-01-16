function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const description = document.querySelector(".color");
const button = document.querySelector(".change-color");

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  description.textContent = `${body.style.backgroundColor}`;
}

button.addEventListener("click", changeColor);