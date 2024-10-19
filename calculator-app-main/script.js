const ratio1 = document.querySelector('.ratio-1 div');
const ratio2 = document.querySelector('.ratio-2 div');
const ratio3 = document.querySelector('.ratio-3 div');

let i = 1;

const ratio = document.querySelector('.ratio');

ratio.addEventListener('click', () => {
  i += 1;

  if (i === 4) {
    i = 1;
  }

  if (i === 1) {
    ratio3.classList.remove('active');
    ratio1.classList.add('active');

    document.getElementById("stylesheet").href = 'style.css';
  } else if (i === 2) {
    ratio1.classList.remove('active');
    ratio2.classList.add('active');
    ratio2.style.backgroundColor = 'blackhsl(25, 98%, 40%)';

    document.getElementById("stylesheet").href = 'style1.css';
  } else if (i === 3) {
    ratio2.classList.remove('active');
    ratio3.classList.add('active');
    ratio3.style.backgroundColor = 'hsl(176, 100%, 44%)';

    document.getElementById("stylesheet").href = 'style2.css';
  }
});

const display = document.querySelector('.display');

let displayVal = '';

button1 = document.querySelector('.button-1');
button2 = document.querySelector('.button-2');
button3 = document.querySelector('.button-3');
button4 = document.querySelector('.button-4');
button5 = document.querySelector('.button-5');
button6 = document.querySelector('.button-6');
button7 = document.querySelector('.button-7');
button8 = document.querySelector('.button-8');
button9 = document.querySelector('.button-9');
button0 = document.querySelector('.button-0');

buttonReset = document.querySelector('.button-reset');
buttonEq = document.querySelector('.button-eq');
buttonDel = document.querySelector('.button-del');

buttonPlus = document.querySelector('.button-plus');
buttonMinus = document.querySelector('.button-minus');
buttonMul = document.querySelector('.button-x');
buttonDiv = document.querySelector('.button-div');
buttonDot = document.querySelector('.button-dot');

let left = '0';

let afterOperator = false;
let right = '0';
let prevOperand = '';
let dot = false;


function calc(operand){
    if(operand === '+'){
        return  Number(left) + Number(right);
    }else if(operand === '-'){
        return Number(left) - Number(right);
    }else if(operand === 'x'){
        return Number(left) * Number(right);
    }else if(operand === '/'){
        return Number(left) / Number(right);
    }
}

function buttonOperand(operand){
    if (afterOperator) {
        left = calc(prevOperand);
        right = '0';
        displayVal = left;
        document.querySelector('.display').innerHTML = displayVal;
    }
    
    prevOperand = operand;
    left = displayVal;
    
    displayVal += operand;
    afterOperator = true;
    document.querySelector('.display').innerHTML = displayVal;
}

function button_val(val){
    if (afterOperator) {
        right += val;
    }
    
    displayVal += val;
    document.querySelector('.display').innerHTML = displayVal;
}


buttonEq.addEventListener('click', () => {
  let ans = calc(prevOperand);
  document.querySelector('.display').innerHTML = ans;
  displayVal = ans;
  afterOperator = false;
  right = '0';
});

buttonReset.addEventListener('click', () => {
  displayVal = '0';
  document.querySelector('.display').innerHTML = displayVal;
  displayVal = '';
  left = '0';
  afterOperator = false;
  right = '0';  
});


buttonDot.addEventListener('click', () => {
    if(!dot){
        displayVal += '.';
        document.querySelector('.display').innerHTML = displayVal;
        dot = true;
    }
});

buttonDel.addEventListener('click', () => {
    if(displayVal.length === 1){
        displayVal = '0';
        display.innerHTML = displayVal;
    }

    displayVal = displayVal.slice(0, displayVal.length-1);

    if(displayVal !== ''){
        display.innerHTML = displayVal;
    }
})

button1.addEventListener('click', () => button_val('1'));
button2.addEventListener('click', () => button_val('2'));
button3.addEventListener('click', () => button_val('3'));
button4.addEventListener('click', () => button_val('4'));
button5.addEventListener('click', () => button_val('5'));
button6.addEventListener('click', () => button_val('6'));
button7.addEventListener('click', () => button_val('7'));
button8.addEventListener('click', () => button_val('8'));
button9.addEventListener('click', () => button_val('9'));
button0.addEventListener('click', () => button_val('0'));
buttonPlus.addEventListener('click', () => buttonOperand('+'));
buttonMinus.addEventListener('click', () => buttonOperand('-'));
buttonMul.addEventListener('click', () => buttonOperand('x'));
buttonDiv.addEventListener('click', () => buttonOperand('/'));