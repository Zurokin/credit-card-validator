import getCardType from "./cardType";

// Функция для отображения типа карты
function displayCardType(cardType) {
  const resultElement = document.querySelector("#result");
  resultElement.textContent = `Card type: ${cardType}`;
}

// Обработчик события на кнопку
document.querySelector("#submit-button").addEventListener("click", () => {
  const cardNumber = document.querySelector("#card-number").value;

  if (cardNumber) {
    const cardType = getCardType(cardNumber);
    displayCardType(cardType);
  } else {
    displayCardType("Please enter a valid card number.");
  }
});
