import "../styles/style.css"; // если есть стили
import getCardType from "./cardType"; // если у тебя есть логика для определения типа карты

// Инициализация каких-либо обработчиков событий или взаимодействий
document.querySelector("#submit-button").addEventListener("click", () => {
  const cardNumber = document.querySelector("#card-number").value;
  const cardType = getCardType(cardNumber);
  alert(`Card type: ${cardType}`);
});
