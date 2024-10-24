// # Selecting DOM Elements
const numberOneEl = document.querySelector("#numberOne");
const numberTwoEl = document.querySelector("#numberTwo");
const numberThreeEl = document.querySelector("#numberThree");
const numberFourEl = document.querySelector("#numberFour");
const numberFiveEl = document.querySelector("#numberFive");
const startGameEl = document.querySelector("#startGame");
const submitChoicesEl = document.querySelector("#submitChoices");
const displayResultEl = document.querySelector("#displayResult");
const correctAnswersEl = document.querySelector("#correctAnswers");

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

let savedArray = [];
/**
 *
 * Saves a given array
 *
 * @param {object} array to be saved
 * @param {boolean} override true: save array | false: retrieve saved array
 * @returns {object}
 */
function saveArray(array = [], override) {
  if (override) savedArray = array;
  return savedArray;
}

// # Variable Init
const minNumber = 1;
const maxNumber = 99;

// # Game Start
startGameEl.addEventListener("click", () => {
  // * Reset Classes
  numberOneEl.classList.remove("text-success", "fw-bold");
  numberTwoEl.classList.remove("text-success", "fw-bold");
  numberThreeEl.classList.remove("text-success", "fw-bold");
  numberFourEl.classList.remove("text-success", "fw-bold");
  numberFiveEl.classList.remove("text-success", "fw-bold");
  displayResultEl.classList.add("d-none");
  displayResultEl.classList.remove("d-block");

  // * Generate Random Numbers
  const numberOne = randomIntegerNumberInRange(minNumber, maxNumber);
  const numberTwo = randomIntegerNumberInRange(minNumber, maxNumber);
  const numberThree = randomIntegerNumberInRange(minNumber, maxNumber);
  const numberFour = randomIntegerNumberInRange(minNumber, maxNumber);
  const numberFive = randomIntegerNumberInRange(minNumber, maxNumber);

  const numbers = [numberOne, numberTwo, numberThree, numberFour, numberFive];
  saveArray(numbers, true);

  // * Show Numbers in DOM
  numberOneEl.value = numberOne;
  numberTwoEl.value = numberTwo;
  numberThreeEl.value = numberThree;
  numberFourEl.value = numberFour;
  numberFiveEl.value = numberFive;

  // * Reset Values
  setTimeout(() => {
    numberOneEl.value = "—";
    numberTwoEl.value = "—";
    numberThreeEl.value = "—";
    numberFourEl.value = "—";
    numberFiveEl.value = "—";
  }, 2000);
});

// # Submit Choices

submitChoicesEl.addEventListener("click", () => {
  // * Init User Numbers
  const numberOneToValidate = parseInt(numberOneEl.value.trim());
  const numberTwoToValidate = parseInt(numberTwoEl.value.trim());
  const numberThreeToValidate = parseInt(numberThreeEl.value.trim());
  const numberFourToValidate = parseInt(numberFourEl.value.trim());
  const numberFiveToValidate = parseInt(numberFiveEl.value.trim());

  const numbersToValidate = [
    numberOneToValidate,
    numberTwoToValidate,
    numberThreeToValidate,
    numberFourToValidate,
    numberFiveToValidate,
  ];

  // * Check User Numbers
  let correctChoiceCunter = 0;
  numbersToValidate.forEach((number, i) => {
    if (savedArray.includes(number)) {
      correctChoiceCunter++;
      switch (i) {
        case 0:
          numberOneEl.classList.add("text-success", "fw-bold");
          break;
        case 1:
          numberTwoEl.classList.add("text-success", "fw-bold");
          break;
        case 2:
          numberThreeEl.classList.add("text-success", "fw-bold");
          break;
        case 3:
          numberFourEl.classList.add("text-success", "fw-bold");
          break;
        case 4:
          numberFiveEl.classList.add("text-success", "fw-bold");
          break;
      }
    }
  });

  // * Output
  correctAnswersEl.innerText = `${correctChoiceCunter}`;
  displayResultEl.classList.add("d-block");
  displayResultEl.classList.remove("d-none");
});
