const calcResult = document.getElementById('calcResult');
const logDescription = document.getElementById('logwrite');

let currentNumber = '';
let resultScript = '';
let currentResult = '';
let currentOperator = '';
let temp = 0;
let printBool = 0;
let tempCurrentResult;
let tempCurrentNumber;
let tempCurrentOperator;


const addBtn = document.getElementById('+');
const subtractBtn = document.getElementById('-');
const multipleBtn = document.getElementById('x');
const divideBtn = document.getElementById('/');
const resultBtn = document.getElementById('=');
const removeBtn = document.getElementById('c');


addBtn.addEventListener('click', () => operationProcess('+'));
subtractBtn.addEventListener('click', () => operationProcess('-'));
multipleBtn.addEventListener('click', () => operationProcess('x'));
divideBtn.addEventListener('click', () => operationProcess('/'));
resultBtn.addEventListener('click', printCalcResult);
removeBtn.addEventListener('click', removeAll);

for (let i = 0; i <= 9; i++) {
  const numberButton = document.getElementById(`${i}`);
  numberButton.addEventListener('click', () => {
    currentNumber += i;
    printCalcScript();
  });
}


function operationProcess(operator) {
  if (temp === 0) {
    if (currentNumber === '' || currentNumber === '0') {
      alert('지원되지 않는 수식입니다.');
      removeAll();
      return;
    }
    currentResult = currentNumber;
    temp++;
    currentNumber = operator;
    printCalcScript();
    currentNumber = '';
  } else {
    if (currentNumber !== '') {
      switch (currentOperator) {
        case '+':
          currentResult = parseFloat(currentResult) + parseFloat(currentNumber);
          break;
        case '-':
          currentResult = parseFloat(currentResult) - parseFloat(currentNumber);
          break;
        case 'x':
          currentResult = parseFloat(currentResult) * parseFloat(currentNumber);
          break;
        case '/':
          currentResult = parseFloat(currentResult) / parseFloat(currentNumber);
          break;
      }
    }
  }
//
  currentOperator = operator;
  currentNumber = operator;
  printCalcScript();
  currentNumber = '';
}

function printCalcResult() {
  tempCurrentResult = currentResult;
  tempCurrentNumber = currentNumber;
  tempCurrentOperator = currentOperator;
  printBool = 1;

  switch (tempCurrentOperator) {
    case '+':
      tempCurrentResult = parseFloat(tempCurrentResult) + parseFloat(tempCurrentNumber);
      break;
    case '-':
      tempCurrentResult = parseFloat(tempCurrentResult) - parseFloat(tempCurrentNumber);
      break;
    case 'x':
      tempCurrentResult = parseFloat(tempCurrentResult) * parseFloat(tempCurrentNumber);
      break;
    case '/':
      tempCurrentResult = parseFloat(tempCurrentResult) / parseFloat(tempCurrentNumber);
      break;
  }

  calcResult.innerHTML = `<p> = ${tempCurrentResult}</p>`;
  printBool = 0;
}

function printCalcScript() {
  if (printBool === 1) {
    resultScript = tempCurrentNumber;
  } else {
    resultScript = currentNumber;
  }
  calcResult.innerHTML = `<p>${resultScript}</p>`;
  logWrite();
}

function logWrite() {
  logDescription.innerHTML += `<p>${currentNumber}</p>`;
}

function removeAll() {
  resultScript = '';
  currentResult = '';
  currentNumber = '';
  printCalcScript();
  temp = 0;
}

console.log(currentNumber);


