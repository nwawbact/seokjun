let currentNumber = '';
const calcResult = document.getElementById('calcResult');
let resultScript = '';
let currentResult = 0;
let currentOperater = '';
const addBtn = document.getElementById('+');
const subtractBtn = document.getElementById('-');
const multipleBtn = document.getElementById('x');
const divideBtn = document.getElementById('/');
const resultBtn = document.getElementById('=');
const removeBtn = document.getElementById('c');

removeBtn.addEventListener('click', removeAll);
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multipleBtn.addEventListener('click', multiple);
divideBtn.addEventListener('click', divide);
resultBtn.addEventListener('click', printCalcResult);

let temp = 0;

function operationProcess(operater){
    if (temp === 0){
        currentResult = currentNumber;
        temp++;
        currentNumber = `${operater}`;
        printCalcScript()
        currentNumber = '';
    }
    else{

        if (currentNumber !== ''){
            switch (currentOperater){
                case '+':
                    currentResult = parseFloat(currentResult) + parseFloat(currentNumber);
                    console.log(currentResult);
                    break;
                case '-':
                    currentResult = parseFloat(currentResult) - parseFloat(currentNumber);
                    console.log(currentResult);
                case 'x':
                    currentResult = parseFloat(currentResult) * parseFloat(currentNumber);
                    console.log(currentResult);
                    break;
                case '/':
                    currentResult = parseFloat(currentResult) / parseFloat(currentNumber);
                    console.log(currentResult);
                    break;
                
            }
        

        }
        
        
    }
    currentOperater = `${operater}`;
    currentNumber = `${operater}`;
    printCalcScript()
    currentNumber = '';
    console.log(currentResult);
        

}

function add() {
    operationProcess('+');
}
function subtract(){
   operationProcess('-');
}
function multiple(){
    operationProcess('x');
}
function divide(){
    operationProcess('/');
}
let printbool = 0;
let tempcurrentResult;
let tempcurrentNumber;
let tempcurrentOperater;
function printCalcResult(){

    tempcurrentResult = currentResult;
    tempcurrentNumber = currentNumber;
    tempcurrentOperater = currentOperater;
    
    printbool = 1;
    
    
    switch (tempcurrentOperater){
        case '+':
            tempcurrentResult = parseFloat(tempcurrentResult) + parseFloat(tempcurrentNumber);
            console.log(tempcurrentResult);
            tempcurrentNumber = '+';
            printCalcScript()
            tempcurrentNumber = '';
            break;
        case '-':
            tempcurrentResult = parseFloat(tempcurrentResult) - parseFloat(tempcurrentNumber);
            console.log(tempcurrentResult);
            tempcurrentNumber = '-';
            printCalcScript()
            tempcurrentNumber = '';
            break;
        case 'x':
            tempcurrentResult = parseFloat(tempcurrentResult) * parseFloat(tempcurrentNumber);
            console.log(tempcurrentResult);
            tempcurrentNumber = 'x';
            printCalcScript()
            tempcurrentNumber = '';
            break;
        case '/':
            tempcurrentResult = parseFloat(tempcurrentResult) / parseFloat(tempcurrentNumber);
            console.log(tempcurrentResult);
            tempcurrentNumber = '/';
            printCalcScript()
            tempcurrentNumber = '';
            break;
        
    }
   

    calcResult.innerHTML = `<p> = ${tempcurrentResult}</p>`;
    
    printbool = 0;
  


    
    
}

function printCalcScript(){
   if (printbool === 1){
    resultScript  = tempcurrentNumber;
    calcResult.innerHTML = `<p>${resultScript}</p>`;
   }
   resultScript  = currentNumber;
   calcResult.innerHTML = `<p>${resultScript}</p>`;
   
}

function removeAll() {
    resultScript = '';
    currentResult = '';
    currentNumber = '';
    printCalcScript();
    temp = 0;
}

for (let i = 0 ; i <= 9 ; i++){
    const numberButton = document.getElementById(`${i}`);
    numberButton.addEventListener('click', function() {
        
        currentNumber += i;
        printCalcScript();

    });
}








console.log(currentNumber);






