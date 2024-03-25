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
const instructions = [];

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
  });
});

// when the user presses =
// get the last value and push it to the array
const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", () => {
  displayScreen.innerText = "";
  instructions.push(displayValue);

  // pop 3 values
  firstNum = parseInt(instructions.pop());
  operation = instructions.pop();
  secondNum = parseInt(instructions.pop());
  let answer = operate(firstNum, operation, secondNum);
  displayScreen.innerText = answer;
});

// Clear the screen when C is pressed
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  displayScreen.innerText = "";
  displayValue = "";
});
