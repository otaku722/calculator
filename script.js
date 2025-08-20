let display = document.querySelector('#display');
let numbers = document.querySelectorAll('.numbers');
let operators = document.querySelectorAll('#operators button');
let equals = document.querySelector('#equals');
let consecutiveOperations = 0;
let operatorPushed = false;
let operationsPerformed = 0;
let firstNumber = 0;
let secondNumber = 0;
let operation = '';

numbers.forEach(number => {
    number.addEventListener('click', e => {
        if (operatorPushed === true) {
            display.innerText = '';
            operatorPushed = false;
        }        
        display.innerText += number.innerText;
        consecutiveOperations = 0;
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', e => {
        if (e.target.id === 'add' || e.target.id === 'subtract' || e.target.id === 'multiply' || e.target.id === 'divide') {
            operation = e.target.id;
            if (consecutiveOperations < 1) {
                if (operationsPerformed === 0) {
                    firstNumber = +display.innerText;
                    display.innerText = e.target.innerText;
                } else {
                    secondNumber = +display.innerText;
                    display.innerText = operate(firstNumber, secondNumber);
                    firstNumber = +display.innerText;
                }
                consecutiveOperations++;
                operatorPushed = true;
                operationsPerformed++;
            } else {
                display.innerText = e.target.innerText;
            }
        } else if (e.target.id === '=' && operationsPerformed > 0) {
            secondNumber = +display.innerText;
            display.innerText = operate(firstNumber, secondNumber);
            firstNumber = +display.innerText;
            operationsPerformed = 0;
        } else if (e.target.id === 'clear') {
            clearAll();
        }
    });
});

document.addEventListener('keypress', e => {
    if (operatorPushed === true) {
        display.innerText = '';
        operatorPushed = false;
    }       

    if (!isNaN(e.key)) {
        display.innerText += e.key;
        consecutiveOperations = 0;
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        operation = e.key;
        if (consecutiveOperations < 1) {
            if (operationsPerformed === 0) {
                firstNumber = +display.innerText;
                display.innerText = e.key;
            } else {
                secondNumber = +display.innerText;
                display.innerText = operate(firstNumber, secondNumber);
                firstNumber = +display.innerText;
            }
            consecutiveOperations++;
            operatorPushed = true;
            operationsPerformed++;
        } else {
            display.innerText = e.key;
        }
    } else if (e.key === 'Enter' && operationsPerformed > 0) {
        secondNumber = +display.innerText;
        display.innerText = operate(firstNumber, secondNumber);
        firstNumber = +display.innerText;
        operationsPerformed = 0;
    }
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Nice try, but math says no.");
        clearAll();
    }
    let answer = a / b;
    return Math.round(answer * 1000) / 1000;
}

function operate(a, b) {
    switch (operation) {
        case 'add':
        case '+':
            return add(a, b);
        case 'subtract':
        case '-':
            return subtract(a, b);
        case 'multiply':
        case '*':
            return multiply(a, b);
        case 'divide':
        case '/':
            return divide(a, b);          
    }
}

function clearAll() {
    operatorPushed = false;
    operationsPerformed = 0;
    firstNumber = 0;
    secondNumber = 0;
    operation = '';
    display.innerText = '';
}