let display = document.getElementById('display');
let currentInput = '';
let result = null;

function appendNumber(number) {
    if (currentInput === '' && number === '.') {
        currentInput = '0.';
    } else {
        currentInput += number;
    }
    updateDisplay(currentInput);
}

function clearDisplay() {
    currentInput = '';
    result = null;
    updateDisplay('0');
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || '0');
}

function calculate() {
    try {
        result = eval(currentInput);
        updateDisplay(result);
        currentInput = result.toString();
    } catch {
        updateDisplay('Error');
    }
}

function updateDisplay(value) {
    display.textContent = value;
}