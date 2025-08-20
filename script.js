let display = document.querySelector('#display');
let numbers = document.querySelectorAll('.numbers');
let operators = document.querySelectorAll('#operators button');
let equals = document.querySelector('#equals');
let operatorPushed = false;
let firstNumber;
let secondNumber;
let operation = '';

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
        if (e.target.id !== 'equals' && e.target.id !== 'clear') {
            if (operatorPushed === false) {
                firstNumber = +display.innerText;
            } else {
                secondNumber = +display.innerText;
            }
            display.innerText = e.target.innerText;
            operation = e.target.id;
            operatorPushed = true;
        }
        if (e.target.id === 'clear') {
            location.reload();
        }
        if (e.target.id === 'equals') {
            secondNumber = +display.innerText;
            firstNumber = operate(firstNumber, secondNumber);
            display.innerText = firstNumber;
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
    return a / b;
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