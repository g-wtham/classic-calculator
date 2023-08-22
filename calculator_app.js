const buttons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
const operators = ["+", "-", "*", "/"];

const getNumBtn = document.getElementById('calc-number-buttons');
buttons.forEach((numEle)=>{
    const numButtons = document.createElement('button');
    numButtons.textContent = numEle;
    getNumBtn.appendChild(numButtons);
    numButtons.addEventListener('click', ()=>{
        display.value += numEle;
        if (!operator) {
            firstNum += numEle;
        } else {
            secondNum += numEle;
        }
    }
    );
}
);

const getOperBtn = document.getElementById('calc-operation-buttons');
operators.forEach((operEle)=>{
    const operButtons = document.createElement('button');
    operButtons.textContent = operEle;
    getOperBtn.appendChild(operButtons);
    operButtons.addEventListener('click', ()=>{
        display.value += operEle;
        operator = operEle;
    }
    );
}
);

const getCalcBody = document.querySelector('.calc-body');

const display = document.querySelector('.display-class');

const clearAllBtn = document.createElement('button');
clearAllBtn.textContent = "C";
clearAllBtn.classList.add('clearAllBtn');
getCalcBody.appendChild(clearAllBtn);
clearAllBtn.addEventListener('click', ()=>{
    display.value = '';
    firstNum = '';
    operator = '';
    secondNum = '';
}
);

const equalBtn = document.createElement('button');
equalBtn.textContent = "=";
equalBtn.classList.add('equalBtn');
getCalcBody.appendChild(equalBtn);
equalBtn.addEventListener('click', ()=>{
    if (operator && firstNum && secondNum) {
        performCalculation();
    }
}
);

let firstNum = '';
let operator = '';
let secondNum = '';

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return 'Cannot divide by zero';
    }
    return a / b;
}

// Function to perform the calculation
function performCalculation() {
    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(secondNum);
    let result;

    switch (operator) {
    case '+':
        result = addition(num1, num2);
        break;
    case '-':
        result = subtraction(num1, num2);
        break;
    case '*':
        result = multiplication(num1, num2);
        break;
    case '/':
        result = division(num1, num2);
        break;
    default:
        result = 'Invalid operator';
    }

    display.value += ' = ' + result;
    firstNum = result;
    operator = '';
    secondNum = '';
}
