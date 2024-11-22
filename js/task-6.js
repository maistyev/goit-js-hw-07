function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxContainer = document.querySelector('#boxes');

const createBox = size => {
  return `<div style="background-color: ${getRandomHexColor()}; height: ${
    30 + size * 10
  }px; width: ${30 + size * 10}px"></div>`;
};
createButton.addEventListener('click', event => {
  const boxCountInput = document.querySelector('input').value;
  if (boxCountInput >= 1 && boxCountInput <= 100) {
    let boxesHTML = '';
    for (let i = 0; i < boxCountInput; i++) {
      boxesHTML += createBox(i);
    }
    boxContainer.innerHTML = boxesHTML;
  }
});

destroyButton.addEventListener('click', event => (boxContainer.innerHTML = ''));
