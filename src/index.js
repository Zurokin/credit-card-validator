import "../styles/style.css";
import getCardType from "./cardType";

document.querySelector("#submit-button").addEventListener("click", () => {
  const cardNumber = document.querySelector("#card-number").value;
  const cardType = getCardType(cardNumber);
  alert(`Card type: ${cardType}`);
});
