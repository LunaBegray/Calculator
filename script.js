const display = document.querySelector('.display')
const num0 = document.querySelector('.num0');
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const num3 = document.querySelector('.num3');
const num4 = document.querySelector('.num4');
const num5 = document.querySelector('.num5');
const num6 = document.querySelector('.num6');
const num7 = document.querySelector('.num7');
const num8 = document.querySelector('.num8');
const num9 = document.querySelector('.num9');
let displayValue;
num0.addEventListener('click', () => {
    displayValue = 0;
    display.textContent = displayValue;
});
num1.addEventListener('click', () => {
    displayValue = 1;
    display.textContent = displayValue;
});
num2.addEventListener('click', () => {
    displayValue = 2;
    display.textContent = displayValue;
});
num3.addEventListener('click', () => {
    displayValue = 3;
    display.textContent = displayValue;
});
num4.addEventListener('click', () => {
    displayValue = 4;
    display.textContent = displayValue;
});
num5.addEventListener('click', () => {
    displayValue = 5;
    display.textContent = displayValue;
});
num6.addEventListener('click', () => {
    displayValue = 6;
    display.textContent = displayValue;
});
num7.addEventListener('click', () => {
    displayValue = 7;
    display.textContent = displayValue;
});
num8.addEventListener('click', () => {
    displayValue = 8;
    display.textContent = displayValue;
});
num9.addEventListener('click', () => {
    displayValue = 9;
    display.textContent = displayValue;
});
const add = function(a,b){
    let result = a + b;
        return result
}
const subtract = function(a,b){
    let result = a - b;
        return result
}
const multiply = function(a,b){
    let result = a * b;
        return result
}
const divide = function(a,b){
    let result = a / b;
        return result
}
function operate(a,b){
    let finalResult = multiply(a,b)
        return finalResult
}
