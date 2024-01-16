function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);
function createBoxes(amount) {
 amount = input.value;
  if (amount < 1 || amount > 100) {
    //alert('Значення має бути в межах від 1 до 100 включно');
    return;
  }
  destroyBoxes();
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
  input.value = '';
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}