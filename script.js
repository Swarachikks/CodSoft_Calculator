var number1;
var number2;
var operator;
var result = '';

const buttons = document.querySelectorAll('button');
console.log(buttons);

for (var i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", (event) => {
        let currValue = event.target.value;
        if(!isNaN(currValue)) {
            result += currValue;
        } 
        if(currValue === 'c') {
            result = result.toString().slice(0, result.length-1);
        }
        if(currValue === 'ac') {
            result = "";
        }
        if(currValue === '.') {
            result += currValue;
        }
        if(currValue === '+' || 
        currValue === '-' ||
        currValue === '*' ||
        currValue === '/' ||
        currValue === '%' 
        ) {
            operator = currValue;
            number2 = result;
            result = '';
        }
        if(currValue === '=') {
           result = getResult();
        }
        document.getElementById('result').value = result;
    });
}

function getResult() {
    if(operator == "+") {
        result = Number(number2) + Number(result);  
    } else if (operator == "-") {
        result = Number(number2) - Number(result);   
    } else if (operator == "*"){
        result = Number(number2) * Number(result);   
    } else if (operator == "/"){
        result = Number(number2) / Number(result);   
    } else if (operator == "%") {
        result = Number(number2) % Number(result);   
    }
    return result;
}
