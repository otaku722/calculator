let display = document.querySelector('#display');
let numbers = document.querySelectorAll('.numbers');
let operators = document.querySelectorAll('#operators button');
let equals = document.querySelector('#equals');
let operatorPushed = false;
let operationsPerformed = 0;
let firstNumber = 0;
let secondNumber = 0;
let operation = '';

// Display every clicked number and clear any displayed operations
numbers.forEach(number => {
    number.addEventListener('click', e => {
        if (operatorPushed === true) {
            display.innerText = '';
            operatorPushed = false;
        }        
        display.innerText += number.innerText;
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', e => {
        if (e.target.id === 'add' || e.target.id === 'subtract' || e.target.id === 'multiply' || e.target.id === 'divide') {
            if (operationsPerformed === 0) {
                firstNumber = +display.innerText;
                display.innerText = e.target.innerText;
                operation = e.target.id;
            } else {
                secondNumber = +display.innerText;
                display.innerText = operate(firstNumber, secondNumber);
                firstNumber = +display.innerText;
                operation = e.target.id;
            }
            operatorPushed = true;
            operationsPerformed++;
        } else if (e.target.id === 'equals' && operationsPerformed > 0) {
            secondNumber = +display.innerText;
            display.innerText = operate(firstNumber, secondNumber);
            firstNumber = +display.innerText;
            operationsPerformed = 0;
        } else if (e.target.id === 'clear') {
            clearAll();
        }
    });
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
    let answer = a / b;
    return Math.round(answer * 1000) / 1000;
}

function operate(a, b) {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
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