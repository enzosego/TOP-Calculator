let expression = ['', null, ''];

let result = '';

const one = document.querySelector('#btn1');
const two = document.querySelector('#btn2');
const three = document.querySelector('#btn3');
const four = document.querySelector('#btn4');
const five = document.querySelector('#btn5');
const six = document.querySelector('#btn6');
const seven = document.querySelector('#btn7');
const eight = document.querySelector('#btn8');
const nine = document.querySelector('#btn9');
const zero = document.querySelector('#btn0');
const clear = document.querySelector('#btnAC');
const plus = document.querySelector('#btnPlus');
const minus = document.querySelector('#btnMinus');
const times = document.querySelector('#btnTimes');
const divide = document.querySelector('#btnDivide');
const perc = document.querySelector('#btnPerc');
const dot = document.querySelector('#btnDot');
const equal = document.querySelector('#btnEqual');
const back = document.querySelector('#btnBackspace');

const numButtons = document.querySelectorAll('.numButtons');

const resultText = document.querySelector('#result-text');


function sum(a, b) {
    return Math.round((+a + +b) * 10) / 10;
}
function rest(a, b) {
    return Math.round((+a - +b) * 10) / 10;
}

function division(a, b) {
    if (a == 0 || b == 0) {
        return 'Can\'t divide by zero';
    } else {
    return Math.round((+a / +b) * 10) / 10;
    }
}

function multiply(a , b) {
    return Math.round((+a * +b) * 10) / 10;
}

function percentage(a) {
    return a / 100;
}

function process([a, op, b]) {
    if (op == '*') {
        return multiply(a, b);
    } else if (op == '/') {
        return division(a, b);
    } else if (op == '+') {
        return sum(a, b);
    } else if (op == '-') {
        return rest(a, b);
    } else if (op == '%') {
        return percentage(a);
    }
}

if (expression != ['', null, '']) {
    equal.addEventListener('click', function equalC() {
        result = process(expression);  
        resultText.textContent = result;
        expression = ['', null, ''];
    })
}

one.addEventListener('click', function oneC() {
    if (resultText.textContent == result) {
        
        resultText.textContent = '';
    }
        
    if (expression[1] == null) {
        if (expression[0].length < 11) {
            expression[0] += '1';
            resultText.textContent += 1;
        }
    } else if (expression[2].length < 11){
        expression[2] += '1';
        resultText.textContent += 1;
    }
});

two.addEventListener('click', function twoC() {
    
    if (resultText.textContent == result) {
        
        resultText.textContent = '';
    }
    if (expression[1] == null) {       
        if (expression[0].length < 11) {    
        expression[0] += '2';
        resultText.textContent += 2;
        }
    } else if (expression[2].length < 11) {
        expression[2] += '2';
        resultText.textContent += 2;
    }
});

three.addEventListener('click', function threeC() {
    
    if (resultText.textContent == result) {
        
        resultText.textContent = '';
    }         
    if (expression[1] == null) {      
        if (expression[0].length < 11) {
            expression[0] += '3';     
            resultText.textContent += 3;
        }     
    } else if (expression[2].length < 11) {        
        expression[2] += '3';     
        resultText.textContent += 3;       
    }
});

four.addEventListener('click', function fourC() {
    
    if (resultText.textContent == result) {
        
        resultText.textContent = '';
    }
    if (expression[1] == null) {
        if (expression[0].length < 11) {
        expression[0] += '4';
        resultText.textContent += 4;
        }
    } else if (expression[2].length < 11) {
        expression[2] += '4';
        resultText.textContent += 4;
    }
});

five.addEventListener('click', function fiveC() {
    
    if (resultText.textContent == result) {
        
        resultText.textContent = '';
    }
    if (expression[1] == null) {
        if (expression[0].length < 11) {
        expression[0] += '5';
        resultText.textContent += 5;
        }
    } else if (expression[2].length < 11) {
        expression[2] += '5';
        resultText.textContent += 5;
    }
});

six.addEventListener('click', function sixC() {
    
    if (resultText.textContent == result) {
        
        resultText.textContent = '';
    }
    if (expression[1] == null) {
        if (expression[0].length < 11) {
        expression[0] += '6';
        resultText.textContent += 6;
        }
    } else if (expression[2].length < 11) {
        expression[2] += '6';
        resultText.textContent += 6;
    }
});

seven.addEventListener('click', function sevenC() {
    
    if (resultText.textContent == result) {
        
        resultText.textContent = '';
    }
    if (expression[1] == null) {
        if (expression[0].length < 11) {
        expression[0] += '7';
        resultText.textContent += 7;
        }
    } else if (expression[2].length < 11) {
        expression[2] += '7';
        resultText.textContent += 7;
    }
});

eight.addEventListener('click', function eightC() {
    
    if (resultText.textContent == result) {
        
        resultText.textContent = '';
    }
    if (expression[1] == null) {
        if (expression[0].length < 11) {
        expression[0] += '8';
        resultText.textContent += 8;
        }
    } else if(expression[2].length < 11) {
        expression[2] += '8';
        resultText.textContent += 8;
    }
});

nine.addEventListener('click', function nineC() {
    
    if (resultText.textContent == result) {
        
        resultText.textContent = '';
    }
    if (expression[1] == null) {
        if (expression[0].length < 11) {
        expression[0] += '9';
        resultText.textContent += 9;
        }
    } else if (expression[2].length < 11) {
        expression[2] += '9';
        resultText.textContent += 9;
    }
});

zero.addEventListener('click', function zeroC() {
    
    if (resultText.textContent == result) {
        
        resultText.textContent = '';
    }
    if (expression[1] == null) {
        if (expression[0].length < 11) {
        expression[0] += '0';
        resultText.textContent += 0;
        }
    } else if (expression[2].length < 11) {
        expression[2] += '0';
        resultText.textContent += 0;
    }
});

dot.addEventListener('click', function dotC() {
    if (resultText.textContent == result) {
        
        resultText.textContent = '';
    }
    const firstP = expression[0].includes('.');
    const secondP = expression[2].includes('.');
    
    if (expression[1] == null && firstP == false) {
        expression[0] += '.';
        resultText.textContent += '.';
    } else if (expression[1] != null && secondP == false) {
        expression[2] += '.';
        resultText.textContent += '.';
    }
});

plus.addEventListener('click', function plusC() {
    
    if (resultText.textContent == result) {
        expression[0] = result;
    }
    if (expression[1] != null && expression[2] != '') {
        expression[0] = process(expression);
        resultText.textContent = expression[0];
        resultText.textContent += ' + ';
        expression[1] = '+';
        expression[2] = '';
    }
    if (expression[1] == null && expression[0] !== '') {
        expression[1] = '+';
        resultText.textContent += ' + ';
    }
});

minus.addEventListener('click', function minusC() {
    
    if (resultText.textContent == result) {
        expression[0] = result;
    }
    if (expression[1] != null && expression[2] != '') {
        expression[0] = process(expression);
        resultText.textContent = expression[0];
        resultText.textContent += ' - ';
        expression[1] = '-';
        expression[2] = '';
    }
    if (expression[1] == null && expression[0] !== '') {
        expression[1] = '-';
        resultText.textContent += ' - '
    }
});

times.addEventListener('click', function timesC() {
    
    if (resultText.textContent == result) {
        expression[0] = result;
    }
    if (expression[1] != null && expression[2] != '') {
        expression[0] = process(expression);
        resultText.textContent = expression[0];
        resultText.textContent += ' * ';
        expression[1] = '*';
        expression[2] = '';
    }
    if (expression[1] == null && expression[0] != '') {
        expression[1] = '*';
        resultText.textContent += ' * '
    }
});

divide.addEventListener('click', function divideC() {
    
    if (resultText.textContent == result) {
        expression[0] = result;
    }
    if (expression[1] != null && expression[2] != '') {
        expression[0] = process(expression);
        resultText.textContent = expression[0];
        resultText.textContent += ' / ';
        expression[1] = '/';
        expression[2] = '';
    }    
    if (expression[1] == null && expression[0] != '') {
        expression[1] = '/';
        resultText.textContent += ' / '
    }
});

perc.addEventListener('click', function percC() {
    
    if (resultText.textContent == result) {
        expression[0] = result;
    }
    if (expression[0] != '') {
        expression[1] = '%';
        resultText.textContent += ' %';
    }
});

clear.addEventListener('click', function clearC() {
    resultText.textContent = '';
    result = '';
    expression = ['', null, ''];
});

back.addEventListener('click', function backC() {
    
    if (expression[0] != '' && expression[1] == null && expression[2] == '') {
        expression[0] = expression[0].slice(0, -1);
        resultText.textContent = resultText.textContent.slice(0, -1);
    }

    if (expression[1] != null && expression[2] == '') {
        expression[1] = null;
        resultText.textContent = resultText.textContent.slice(0, -3);
    }

    if (expression[2] != '') {
        expression[2] = expression[2].slice(0, -1);
        resultText.textContent = resultText.textContent.slice(0, -1);

    }
});

window.addEventListener('keydown', function (e) {
    const keyPress = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!keyPress) return;
    
    keyPress.click();
})