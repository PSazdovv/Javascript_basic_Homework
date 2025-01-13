const display = document.getElementById("display");

let currentInput = "";
let lastOperator = null;

function clearDisplay() {
  currentInput = "";
  lastOperator = null;
  display.textContent = "0";
}

function deleteLast() {
  let newInput = "";
  for (let i = 0; i < currentInput.length - 1; i++) {
    newInput += currentInput[i];
  }
  currentInput = newInput;
  display.textContent = currentInput === "" ? "0" : currentInput;
}

function appendNumber(num) {
  currentInput += num;
  display.textContent = currentInput;
}

function appendOperator(op) {
  if (currentInput === "" && op !== "-") return;

  const lastChar = currentInput[currentInput.length - 1];
  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/"
  ) {
    let newInput = "";
    for (let i = 0; i < currentInput.length - 1; i++) {
      newInput += currentInput[i];
    }
    currentInput = newInput;
  }

  currentInput += op;
  display.textContent = currentInput;
}

function appendDot() {
  let hasDot = false;
  for (let i = currentInput.length - 1; i >= 0; i--) {
    if (currentInput[i] === ".") {
      hasDot = true;
    }
    if (
      currentInput[i] === "+" ||
      currentInput[i] === "-" ||
      currentInput[i] === "*" ||
      currentInput[i] === "/"
    ) {
      break;
    }
  }
  if (!hasDot) {
    currentInput += ".";
    display.textContent = currentInput;
  }
}

function calculate() {
  if (currentInput === "") {
    display.textContent = "Error";
    return;
  }

  if (currentInput.includes("/0")) {
    display.textContent = "Error: Division by 0";
    return;
  }

  const result = compute(currentInput);
  if (result === null) {
    display.textContent = "Error";
    currentInput = "";
  } else {
    display.textContent = result;
    currentInput = result + "";
  }
}

function compute(expression) {
  let num1 = "";
  let num2 = "";
  let operator = null;

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (char === "+" || char === "-" || char === "*" || char === "/") {
      if (operator !== null) {
        return null;
      }
      operator = char;
    } else if (operator === null) {
      num1 += char;
    } else {
      num2 += char;
    }
  }

  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);
  if (isNaN(number1) || isNaN(number2)) {
    return null;
  }

  if (operator === "+") return number1 + number2;
  if (operator === "-") return number1 - number2;
  if (operator === "*") return number1 * number2;
  if (operator === "/") {
    if (number2 === 0) return null;
    return number1 / number2;
  }

  return null;
}
