const display = document.querySelector('.display')
//all the number button section
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
let a;
let b;

let displayValue = '';
num0.addEventListener('click', () => {
    displayValue = '0';
    display.textContent += displayValue;
    if(a === undefined){
        a = 0;
    }
    if(b === undefined && a !== 0){
        b = 0;
    }
});
num1.addEventListener('click', () => {
    displayValue = '1';
    display.textContent += displayValue;
    if(a === undefined){
        a = 1;
    }
    if(b === undefined && a !== 1){
        b = 1;
    }
});
num2.addEventListener('click', () => {
    displayValue = '2';
    display.textContent += displayValue;
    if(a === undefined){
        a = 2;
    }
    if(b === undefined && a !== 2){
        b = 2;
    }
});
num3.addEventListener('click', () => {
    displayValue = '3';
    display.textContent += displayValue;
    if(a === undefined){
        a = 3;
    }
    if(b === undefined && a !== 3){
        b = 3;
    }
});
num4.addEventListener('click', () => {
    displayValue = '4';
    display.textContent += displayValue;
    if(a === undefined){
        a = 4;
    }
    if(b === undefined && a !== 4){
        b = 4;
    }
});
num5.addEventListener('click', () => {
    displayValue = '5';
    display.textContent += displayValue;
    if(a === undefined){
        a = 5;
    }
    if(b === undefined && a !== 5){
        b = 5;
    }
});
num6.addEventListener('click', () => {
    displayValue = '6';
    display.textContent += displayValue;
    if(a === undefined){
        a = 6;
    }
    if(b === undefined && a !== 6){
        b = 6;
    }
});
num7.addEventListener('click', () => {
    displayValue = '7';
    display.textContent += displayValue;
    if(a === undefined){
        a = 7;
    }
    if(b === undefined && a !== 7){
        b = 7;
    }
});
num8.addEventListener('click', () => {
    displayValue = '8';
    display.textContent += displayValue;
    if(a === undefined){
        a = 8;
    }
    if(b === undefined && a !== 8){
        b = 8;
    }
});
num9.addEventListener('click', () => {
    displayValue = '9';
    display.textContent += displayValue;
    if(a === undefined){
        a = 9;
    }
    if(b === undefined && a !== 9){
        b = 9;
    }
});
//all the operator buttons section
const equalBtn = document.querySelector('.opEq');
const addBtn = document.querySelector('.opPl');
const subtractBtn = document.querySelector('.opSu');
const multiplyBtn = document.querySelector('.opMu');
const divideBtn = document.querySelector('.opDi');
const clearBtn = document.querySelector('.opC');
let whichOp;

equalBtn.addEventListener('click', () => {
    display.textContent = '';
    displayValue = operate(a,b);
    display.textContent += displayValue;
});
addBtn.addEventListener('click', () => {
    displayValue = '+';
    display.textContent += displayValue;
    whichOp = add;
});
subtractBtn.addEventListener('click', () => {
    displayValue = '-';
    display.textContent += displayValue;
    whichOp = subtract;
});
multiplyBtn.addEventListener('click', () => {
    displayValue = '*';
    display.textContent += displayValue;
    whichOp = multiply;
});
divideBtn.addEventListener('click', () => {
    displayValue = '/';
    display.textContent += displayValue;
    whichOp = divide;
});
clearBtn.addEventListener('click', () => {
    displayValue = '';
    display.textContent = displayValue;
    a = undefined;
    b = undefined;
    result = undefined;
    whichOp = undefined;
});
//calculator math section
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
    let finalResult = whichOp(a,b);
        return finalResult
}
