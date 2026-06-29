import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const suits = ["heart", "diamond", "spade", "club"];
  const icons = { heart: "♥", diamond: "♦", spade: "♠", club: "♣" };
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

 
  const cardElement = document.getElementById("poker-card");
  const numberElement = cardElement.querySelector(".card-number");
  const topSuitElement = cardElement.querySelector(".top-suit");
  const bottomSuitElement = cardElement.querySelector(".bottom-suit");

  const btnNewCard = document.getElementById("new-card-btn");
  const inputWidth = document.getElementById("card-width");
  const inputHeight = document.getElementById("card-height");

 
  function generateCard() {
    
    suits.forEach(suit => cardElement.classList.remove(suit));

    
    const randomSuitIndex = Math.floor(Math.random() * 4);
    const randomValueIndex = Math.floor(Math.random() * 13);

    const chosenSuit = suits[randomSuitIndex];
    const chosenValue = values[randomValueIndex];

    
    cardElement.classList.add(chosenSuit);

    
    numberElement.textContent = chosenValue;
    topSuitElement.textContent = icons[chosenSuit];
    bottomSuitElement.textContent = icons[chosenSuit];
  }

  
  function updateCardSize() {
    const widthVal = inputWidth.value;
    const heightVal = inputHeight.value;

    cardElement.style.width = widthVal + "px";
    cardElement.style.height = heightVal + "px";

    
    const dynamicFontSize = widthVal / 4.5;
    numberElement.style.fontSize = (dynamicFontSize * 1.6) + "px";
    topSuitElement.style.fontSize = dynamicFontSize + "px";
    bottomSuitElement.style.fontSize = dynamicFontSize + "px";
  }

  
  generateCard();
  updateCardSize();

  
  btnNewCard.addEventListener("click", generateCard);

  
  setInterval(generateCard, 10000);

  
  inputWidth.addEventListener("input", updateCardSize);
  inputHeight.addEventListener("input", updateCardSize);
};
