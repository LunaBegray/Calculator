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
let a = "";
let b = "";

let displayValue = '';
num0.addEventListener('click', () => {
    displayValue = '0';
    display.textContent += displayValue;
    if(display.textContent.includes("/") === false && display.textContent.includes("*") === false && display.textContent.includes("+") === false && display.textContent.includes("-") === false){
        a += "0";
    }
    if(display.textContent.includes("/") || display.textContent.includes("*") || display.textContent.includes("+") || display.textContent.includes("-")){
        b += "0";
    }
});
num1.addEventListener('click', () => {
    displayValue = '1';
    display.textContent += displayValue;
    if(display.textContent.includes("/") === false && display.textContent.includes("*") === false && display.textContent.includes("+") === false && display.textContent.includes("-") === false){
        a += "1";
    }
    if(display.textContent.includes("/") || display.textContent.includes("*") || display.textContent.includes("+") || display.textContent.includes("-")){
        b += "1";
    }
});
num2.addEventListener('click', () => {
    displayValue = '2';
    display.textContent += displayValue;
    if(display.textContent.includes("/") === false && display.textContent.includes("*") === false && display.textContent.includes("+") === false && display.textContent.includes("-") === false){
        a += "2";
    }
    if(display.textContent.includes("/") || display.textContent.includes("*") || display.textContent.includes("+") || display.textContent.includes("-")){
        b += "2";
    }
});
num3.addEventListener('click', () => {
    displayValue = '3';
    display.textContent += displayValue;
    if(display.textContent.includes("/") === false && display.textContent.includes("*") === false && display.textContent.includes("+") === false && display.textContent.includes("-") === false){
        a += "3";
    }
    if(display.textContent.includes("/") || display.textContent.includes("*") || display.textContent.includes("+") || display.textContent.includes("-")){
        b += "3"
    }
});
num4.addEventListener('click', () => {
    displayValue = '4';
    display.textContent += displayValue;
    if(display.textContent.includes("/") === false && display.textContent.includes("*") === false && display.textContent.includes("+") === false && display.textContent.includes("-") === false){
        a += "4";
    }
    if(display.textContent.includes("/") || display.textContent.includes("*") || display.textContent.includes("+") || display.textContent.includes("-")){
        b += "4"
    }
});
num5.addEventListener('click', () => {
    displayValue = '5';
    display.textContent += displayValue;
    if(display.textContent.includes("/") === false && display.textContent.includes("*") === false && display.textContent.includes("+") === false && display.textContent.includes("-") === false){
        a += "5";
    }
    if(display.textContent.includes("/") || display.textContent.includes("*") || display.textContent.includes("+") || display.textContent.includes("-")){
        b += "5"
    }
});
num6.addEventListener('click', () => {
    displayValue = '6';
    display.textContent += displayValue;
    if(display.textContent.includes("/") === false && display.textContent.includes("*") === false && display.textContent.includes("+") === false && display.textContent.includes("-") === false){
        a += "6";
    }
    if(display.textContent.includes("/") || display.textContent.includes("*") || display.textContent.includes("+") || display.textContent.includes("-")){
        b += "6"
    }
});
num7.addEventListener('click', () => {
    displayValue = '7';
    display.textContent += displayValue;
    if(display.textContent.includes("/") === false && display.textContent.includes("*") === false && display.textContent.includes("+") === false && display.textContent.includes("-") === false){
        a += "7";
    }
    if(display.textContent.includes("/") || display.textContent.includes("*") || display.textContent.includes("+") || display.textContent.includes("-")){
        b += "7"
    }
});
num8.addEventListener('click', () => {
    displayValue = '8';
    display.textContent += displayValue;
    if(display.textContent.includes("/") === false && display.textContent.includes("*") === false && display.textContent.includes("+") === false && display.textContent.includes("-") === false){
        a += "8";
    }
    if(display.textContent.includes("/") || display.textContent.includes("*") || display.textContent.includes("+") || display.textContent.includes("-")){
        b += "8"
    }
});
num9.addEventListener('click', () => {
    displayValue = '9';
    display.textContent += displayValue;
    if(display.textContent.includes("/") === false && display.textContent.includes("*") === false && display.textContent.includes("+") === false && display.textContent.includes("-") === false){
        a += "9";
    }
    if(display.textContent.includes("/") || display.textContent.includes("*") || display.textContent.includes("+") || display.textContent.includes("-")){
        b += "9"
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
let numA;
let numB;

equalBtn.addEventListener('click', () => {
    numB = Number(b);
    console.log(numB);
    display.textContent = '';
    displayValue = operate(numA,numB);
    display.textContent += displayValue;
});
addBtn.addEventListener('click', () => {
    numA = Number(a);
    console.log(numA);
    if(whichOp == null){
        displayValue = '+';
        display.textContent += displayValue;
        whichOp = add;
    }
});
subtractBtn.addEventListener('click', () => {
    numA = Number(a);
    console.log(numA);
    if(whichOp == null){
        displayValue = '-';
        display.textContent += displayValue;
        whichOp = subtract;
    }
});
multiplyBtn.addEventListener('click', () => {
    numA = Number(a);
    console.log(numA);
    if(whichOp == null){
        displayValue = '*';
        display.textContent += displayValue;
        whichOp = multiply;
    }
});
divideBtn.addEventListener('click', () => {
    numA = Number(a);
    console.log(numA);
    if(whichOp == null){
        displayValue = '/';
        display.textContent += displayValue;
        whichOp = divide;
    }
});
clearBtn.addEventListener('click', () => {
    displayValue = '';
    display.textContent = displayValue;
    a = undefined;
    b = undefined;
    numA = undefined;
    numB = undefined;
    result = undefined;
    whichOp = undefined;
    console.log("a:" + a + " b:" + b + " numA:" + numA + 
               " numB:" + numB + " result:" + result + 
                " whichOp:" + whichOp);
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
