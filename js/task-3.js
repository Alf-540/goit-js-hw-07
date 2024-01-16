const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const outputText = output.textContent;

textInput.addEventListener("input", (event) => {
  const noValue = event.currentTarget.value.trim();
  output.textContent = noValue || outputText;
});