function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function operate(firstNum, operation, secondNum) {
  let calculation;
  switch (operation) {
    case "+":
      calculation = add(firstNum, secondNum);
      break;
    case "-":
      calculation = sub(firstNum, secondNum);
      break;
    case "*":
      calculation = mult(firstNum, secondNum);
      break;
    case "/":
      calculation = div(firstNum, secondNum);
      break;

    default:
      calculation = 0;
  }
  return calculation;
}

function isDividingByZero(operation, secondNum) {
  if (operation === "/" && secondNum === 0) {
    return true;
  }
  return false;
}

function includesOperator(input) {
  return (
    input.includes("+") ||
    input.includes("-") ||
    input.includes("/") ||
    input.includes("*")
  );
}

let firstNum = 0;
let secondNum = 0;
let operation = "";
let instructions = [];
let isFloatingPoint = false;
let isResult = false;

// change display based on button that is pressed
// do this for all numbers buttons, keep adding it to the display as a string
const displayScreen = document.querySelector(".screen");
const numberButtons = document.querySelectorAll(".numbers");
let displayValue;
displayScreen.innerText = "Hello";

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (includesOperator(displayScreen.innerText) || isResult) {
      displayScreen.innerText = "";
      displayValue = "";
      isResult = false;
    }
    console.log(instructions);
    if (displayScreen.innerText.length <= 12) {
      displayScreen.innerText += button.innerText;
      displayValue = displayScreen.innerText;
    }
  });
});

// when pressing a operation button push the firstvalue
// and push the oparation and wait for the last value
const operationButtons = document.querySelectorAll(".operation");
operationButtons.forEach((button) => {
  console.log(instructions);
  button.addEventListener("click", () => {
    isFloatingPoint = false;
    if (displayValue === "" || includesOperator(displayScreen.innerText)) {
      return;
    }
    instructions.push(displayValue);
    instructions.push(button.innerText);
    displayScreen.innerText = button.innerText;
  });
});

// when the user presses =
// get the last value and push it to the array
const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", () => {
  if (includesOperator(displayScreen.innerText) || displayValue === 0) {
    return;
  }
  isResult = true;
  displayScreen.innerText = "";
  instructions.push(displayValue);
  let answer = 0;

  for (let i = 0; i < instructions.length; i++) {
    firstNum = parseFloat(instructions.shift());
    operation = instructions.shift();
    secondNum = parseFloat(instructions.shift());
    answer = operate(firstNum, operation, secondNum);
    instructions.unshift(answer);
  }

  if (isDividingByZero(operation, secondNum)) {
    displayScreen.innerText = "I be popping bottles, sparkles and champagne";
    return;
  }
  console.log(instructions);
  displayScreen.innerText = answer;
  displayValue = answer;
  instructions = [];
  isFloatingPoint = false;
});

// Clear the screen when C is pressed
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  displayScreen.innerText = "";
  displayValue = "";
  instructions = [];
  isFloatingPoint = false;
  isResult = false;
});

const backspaceBtn = document.querySelector("#backspace");
backspaceBtn.addEventListener("click", () => {
  let screenLength = displayScreen.innerText.length;
  let slice = displayScreen.innerText.slice(0, screenLength - 1);
  displayScreen.innerText = slice;
});

const dotBtn = document.querySelector("#dot");
dotBtn.addEventListener("click", () => {
  if (!isFloatingPoint) {
    console.log("hello");
    isFloatingPoint = true;
    displayValue += ".";
    displayScreen.innerText += ".";
  }
});

// make it look nice with css
// add keyboard support
// refactor code to use functions
