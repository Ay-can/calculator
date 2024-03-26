// Add proper error checking if string 0 etc
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
      console.log("Enter a operation");
  }
  return calculation;
}

let firstNum = 0;
let secondNum = 0;
let operation = "";
let instructions = [];

// change display based on button that is pressed
// do this for all numbers buttons, keep adding it to the display as a string
const displayScreen = document.querySelector(".screen");
const numberButtons = document.querySelectorAll(".numbers");
let displayValue;

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      displayScreen.innerText === "+" ||
      displayScreen.innerText === "-" ||
      displayScreen.innerText === "/" ||
      displayScreen.innerText === "*"
    ) {
      displayScreen.innerText = "";
      displayValue = "";
    }
    displayScreen.innerText += button.innerText;
    displayValue = displayScreen.innerText;
  });
});

// when pressing a operation button push the firstvalue
// and push the oparation and wait for the last value
const operationButtons = document.querySelectorAll(".operation");
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    instructions.push(displayValue);
    instructions.push(button.innerText);
    displayScreen.innerText = button.innerText;
    console.log(instructions);
  });
});

// when the user presses =
// get the last value and push it to the array
const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", () => {
  displayScreen.innerText = "";
  instructions.push(displayValue);
  console.log(instructions);
  let answer = 0;

  for (let i = 0; i < instructions.length; i++) {
    firstNum = parseInt(instructions.shift());
    operation = instructions.shift();
    secondNum = parseInt(instructions.shift());
    answer = operate(firstNum, operation, secondNum);
    instructions.unshift(answer);
  }
  // display answer and set value
  displayScreen.innerText = answer;
  displayValue = answer;
  instructions = [];
});

// Clear the screen when C is pressed
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  displayScreen.innerText = "";
  displayValue = "";
  instructions = [];
});
