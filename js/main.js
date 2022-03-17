let userInput = 20;

function calcFeet() {
  let feet = userInput * 3.281;
}

function calcMeters() {
  let meters = userInput / 3.281
  console.log(meters.toFixed(3))
}

function calcGallon() {
  let gallons = userInput / 3.785;
}

function calcLiters() {
  let liters = userInput * 3.785
}

function calcKilo() {
  let kilos = userInput / 2.205;
  console.log(kilos.toFixed(3))
}

function calcPounds() {
  let pounds = userInput * 2.205;
  console.log(pounds.toFixed(3))
}

calcPounds()
calcKilo()
calcMeters()
