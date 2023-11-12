// Obtén una referencia al elemento con la clase .circle
const circleElement = document.querySelector(".circle");

// Agrega un event listener para el evento de clic
circleElement.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random(1) * 200);
  apiUrl = `https://api.adviceslip.com/advice/${randomNumber}`;
  
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Almacena el objeto JSON en la variable jsonObject
    const jsonObject = data;
    const objectID = jsonObject.slip.id;
    const objectAdvice = jsonObject.slip.advice;

    let idAdvice = document.querySelector(".id-advice");
    let adviceText = document.querySelector(".advice");
    idAdvice.innerHTML = objectID;
    adviceText.innerHTML = objectAdvice
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
});