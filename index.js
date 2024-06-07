// //calculator

const records = [];
const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        const result = eval(display.value);
        records.push(display.value + ' = ' + result);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}

function showHistory() {
    if (records.length === 0) {
        display.value = "EMPTY";
    } else {
        display.value = records.join(' | ');
    }
}
