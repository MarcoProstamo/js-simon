// # Selecting DOM Elements
const numberOneEl = document.querySelector("#numberOne");
const numberTwoEl = document.querySelector("#numberTwo");
const numberThreeEl = document.querySelector("#numberThree");
const numberFourEl = document.querySelector("#numberFour");
const numberFiveEl = document.querySelector("#numberFive");
const startGameEl = document.querySelector("#startGame");
const submitChoicesEl = document.querySelector("#submitChoices");

// # Utility Fn
/**
 *
 * Returns a random integer in the specified range
 *
 * @param {number} min Minimum value of the range
 * @param {number} max Maximum value of the range
 * @returns {number}
 */
function randomIntegerNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// # Variable Init
const minNumber = 1;
const maxNumber = 99;

startGameEl.addEventListener("click", () => {
  // * Generate Random Numbers
  const numberOne = randomIntegerNumberInRange(minNumber, maxNumber);
  const numberTwo = randomIntegerNumberInRange(minNumber, maxNumber);
  const numberThree = randomIntegerNumberInRange(minNumber, maxNumber);
  const numberFour = randomIntegerNumberInRange(minNumber, maxNumber);
  const numberFive = randomIntegerNumberInRange(minNumber, maxNumber);

  // * Show Numbers in DOM
  numberOneEl.value = numberOne;
  numberTwoEl.value = numberTwo;
  numberThreeEl.value = numberThree;
  numberFourEl.value = numberFour;
  numberFiveEl.value = numberFive;

  setTimeout(() => {
    numberOneEl.value = "—";
    numberTwoEl.value = "—";
    numberThreeEl.value = "—";
    numberFourEl.value = "—";
    numberFiveEl.value = "—";
  }, 3000);
});
