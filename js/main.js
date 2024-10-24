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
  numberOneEl.classList.remove("text-bg-danger", "text-bg-success");
  numberTwoEl.classList.remove("text-bg-danger", "text-bg-success");
  numberThreeEl.classList.remove("text-bg-danger", "text-bg-success");
  numberFourEl.classList.remove("text-bg-danger", "text-bg-success");
  numberFiveEl.classList.remove("text-bg-danger", "text-bg-success");
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
  // * Reset Classes
  numberOneEl.classList.remove("text-bg-danger", "text-bg-success");
  numberTwoEl.classList.remove("text-bg-danger", "text-bg-success");
  numberThreeEl.classList.remove("text-bg-danger", "text-bg-success");
  numberFourEl.classList.remove("text-bg-danger", "text-bg-success");
  numberFiveEl.classList.remove("text-bg-danger", "text-bg-success");
  displayResultEl.classList.add("d-none");
  displayResultEl.classList.remove("d-block");

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

  // * Validate User Input
  let isInputValid = true;

  const isInputNan = numbersToValidate.includes(NaN);
  const isInputInRange = !numbersToValidate.every(
    (number) => number <= 99 && number >= 1
  );

  if (isInputNan) {
    isInputValid = false;
    numbersToValidate.forEach((number, i) => {
      if (isNaN(number)) {
        switch (i) {
          case 0:
            numberOneEl.classList.add("text-bg-danger");
            break;
          case 1:
            numberTwoEl.classList.add("text-bg-danger");
            break;
          case 2:
            numberThreeEl.classList.add("text-bg-danger");
            break;
          case 3:
            numberFourEl.classList.add("text-bg-danger");
            break;
          case 4:
            numberFiveEl.classList.add("text-bg-danger");
            break;
        }
      }
    });
  }

  if (isInputInRange) {
    isInputValid = false;
    numbersToValidate.forEach((number, i) => {
      if (number > 99 || number < 1) {
        switch (i) {
          case 0:
            numberOneEl.classList.add("text-bg-danger");
            break;
          case 1:
            numberTwoEl.classList.add("text-bg-danger");
            break;
          case 2:
            numberThreeEl.classList.add("text-bg-danger");
            break;
          case 3:
            numberFourEl.classList.add("text-bg-danger");
            break;
          case 4:
            numberFiveEl.classList.add("text-bg-danger");
            break;
        }
      }
    });
  }

  // * Check User Numbers
  let correctChoiceCunter = 0;
  if (isInputValid) {
    numbersToValidate.forEach((number, i) => {
      if (savedArray.includes(number)) {
        correctChoiceCunter++;
        switch (i) {
          case 0:
            numberOneEl.classList.add("text-bg-success");
            break;
          case 1:
            numberTwoEl.classList.add("text-bg-success");
            break;
          case 2:
            numberThreeEl.classList.add("text-bg-success");
            break;
          case 3:
            numberFourEl.classList.add("text-bg-success");
            break;
          case 4:
            numberFiveEl.classList.add("text-bg-success");
            break;
        }
      } else {
        if (!numberOneEl.classList.contains("text-bg-success"))
          numberOneEl.classList.add("text-bg-danger");
        if (!numberTwoEl.classList.contains("text-bg-success"))
          numberTwoEl.classList.add("text-bg-danger");
        if (!numberThreeEl.classList.contains("text-bg-success"))
          numberThreeEl.classList.add("text-bg-danger");
        if (!numberFourEl.classList.contains("text-bg-success"))
          numberFourEl.classList.add("text-bg-danger");
        if (!numberFiveEl.classList.contains("text-bg-success"))
          numberFiveEl.classList.add("text-bg-danger");
      }
    });
  } else {
    alert("Input NON Validi: Controllo Risposte NON Effettuato");
  }

  // * Output
  correctAnswersEl.innerText = `${correctChoiceCunter}`;
  displayResultEl.classList.add("d-block");
  displayResultEl.classList.remove("d-none");
});

// # Reset on Refresh
addEventListener("beforeunload", () => {
  // * Reset Classes
  numberOneEl.classList.remove("text-bg-danger", "text-bg-success");
  numberTwoEl.classList.remove("text-bg-danger", "text-bg-success");
  numberThreeEl.classList.remove("text-bg-danger", "text-bg-success");
  numberFourEl.classList.remove("text-bg-danger", "text-bg-success");
  numberFiveEl.classList.remove("text-bg-danger", "text-bg-success");
  displayResultEl.classList.add("d-none");
  displayResultEl.classList.remove("d-block");

  // * Reset Values
  numberOneEl.value = "—";
  numberTwoEl.value = "—";
  numberThreeEl.value = "—";
  numberFourEl.value = "—";
  numberFiveEl.value = "—";
});
