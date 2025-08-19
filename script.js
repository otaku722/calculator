let display = document.querySelector('#display');
let numbers = document.querySelectorAll('.numbers');
let operators = document.querySelectorAll('#operators button');
let equals = document.querySelector('#equals');
let operatorPushed = false;
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
    });
});

equals.addEventListener('click', e => {

});

function add(number) {
    
}

function subtract() {

}

function multiply() {

}

function divide() {

}

function operate() {

}