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
  switch (operation) {
    case "+":
      add(firstNum, secondNum);
      break;
    case "-":
      sub(firstNum, secondNum);
      break;
    case "*":
      mult(firstNum, secondNum);
      break;
    case "/":
      div(firstNum, secondNum);
      break;

    default:
      console.log("Enter a operation");
  }
}

let firstNum = 0;
let secondNum = 0;
let operation = "";
