const display = document.getElementById("display");
const checkbox = document.getElementById("checkbox");

let operator = document.getElementsByClassName("operator");
let numbers = document.getElementsByClassName("number");
let result = document.getElementById("result");
let previousValue, newValue;
let operation = false;
let resultClicked = false;

for(let num of numbers) {
    num.onclick = function() {
        if(operation) {
            display.value = num.value;
            operation = false;
        } else if(resultClicked) {
            display.value = num.value;
            resultClicked = false;
        } else if(display.value.includes("0.")) {
            display.value += num.value;
        } else if(display.value == 0) {
            display.value = num.value;
        } else {
            display.value += num.value;
        }
    };
}

function dotCheck() {
    if(!display.value.includes(".")) {
        display.value += ".";
    }
}

for(let op of operator) {
    op.onclick = function() {
        switch(op.value) {
            case "+": 
                operation = true;

                previousValue = display.value;
                
                result.onclick = function() {
                    display.value = (parseFloat(previousValue) + parseFloat(display.value));
                    
                    operation = false;
                    resultClicked = true;

                    previousValue = "";
                }

                break;
            
            case "-": 
                operation = true;

                previousValue = display.value;
                
                result.onclick = function() {
                    display.value = (parseFloat(previousValue) - parseFloat(display.value));
                    
                    operation = false;
                    resultClicked = true;

                    previousValue = "";
                }

                break;
            
            case "*": 
                operation = true;

                previousValue = display.value;
                
                result.onclick = function() {
                    display.value = (parseFloat(previousValue) * parseFloat(display.value));
                    
                    operation = false;
                    resultClicked = true;

                    previousValue = "";
                }

                break;
            
            case "/": 
                operation = true;

                previousValue = display.value;
                
                result.onclick = function() {
                    display.value = (parseFloat(previousValue) / parseFloat(display.value));
                    
                    operation = false;
                    resultClicked = true;

                    previousValue = "";
                }

                break;
        }
    }
}

function clearDisplay() {
    display.value = 0;
    operation = false;
}

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('light');
})