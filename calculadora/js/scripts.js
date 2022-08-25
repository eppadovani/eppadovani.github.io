const display = document.getElementById("display");

let operator = document.getElementsByClassName("operator");
let numbers = document.getElementsByClassName("number");
let result = document.getElementById("result");

let previousValue, newValue;

let operation = false;

for(let num of numbers) {
    num.onclick = function() {
        if(operation) {
            display.value = num.value;
        } else if(display.value == "0.") {
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
                    display.value = (parseInt(previousValue) + parseInt(display.value));
                    operation = false;

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