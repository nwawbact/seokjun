numbers = document.querySelectorAll("button");
let currentNumber = '';
let lastNumber = '';
const calcResult = document.getElementById('calcResult');
let resultScript = '';
let currentResult = 0;
let currentOperater = '';
const addBtn = document.getElementById('+');
const subtractBtn = document.getElementById('-');
const multipleBtn = document.getElementById('x');
const divideBtn = document.getElementById('/');
const resultBtn = document.getElementById('=');

let lastScript = '';

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multipleBtn.addEventListener('click', multiple);
divideBtn.addEventListener('click', divide);
resultBtn.addEventListener('click', printCalcResult);
let temp = 0;
function add() {
    if (temp === 0){
        currentResult = currentNumber;
        temp++;
        currentNumber = '+';
        printCalcScript()
        currentNumber = '';
    }
    else{
        switch (currentOperater){
            case '+':
                currentResult = parseFloat(currentResult) + parseFloat(currentNumber);
                console.log(currentResult);
                currentNumber = '+';
                printCalcScript()
                currentNumber = '';
                break;
            case '-':
                currentResult = parseFloat(currentResult) - parseFloat(currentNumber);
                console.log(currentResult);
                currentNumber = '-';
                printCalcScript()
                currentNumber = '';
                break;
            case 'x':
                currentResult = parseFloat(currentResult) * parseFloat(currentNumber);
                console.log(currentResult);
                currentNumber = 'x';
                printCalcScript()
                currentNumber = '';
                break;
            case '/':
                currentResult = parseFloat(currentResult) / parseFloat(currentNumber);
                console.log(currentResult);
                currentNumber = '/';
                printCalcScript()
                currentNumber = '';
                break;
            
        }
    }
    currentOperater = '+';
    
    
    
    console.log(currentResult);
        
    
}


function subtract(){
    if (temp === 0){
        currentResult = currentNumber;
        temp++;
        currentNumber = '-';
        printCalcScript()
        currentNumber = '';
    }
    else{
        switch (currentOperater){
            case '+':
                currentResult = parseFloat(currentResult) + parseFloat(currentNumber);
                console.log(currentResult);
                currentNumber = '+';
                printCalcScript()
                currentNumber = '';
                break;
            case '-':
                currentResult = parseFloat(currentResult) - parseFloat(currentNumber);
                console.log(currentResult);
                currentNumber = '-';
                printCalcScript()
                currentNumber = '';
                break;
            case 'x':
                currentResult = parseFloat(currentResult) * parseFloat(currentNumber);
                console.log(currentResult);
                currentNumber = 'x';
                printCalcScript()
                currentNumber = '';
                break;
            case '/':
                currentResult = parseFloat(currentResult) / parseFloat(currentNumber);
                console.log(currentResult);
                currentNumber = '/';
                printCalcScript()
                currentNumber = '';
                break;
            
        }
    }
    currentOperater = '-';
    
    
    
    console.log(currentResult);

}

function multiple(){
    if (temp === 0){
        currentResult = currentNumber;
        temp++;
        currentNumber = 'x';
        printCalcScript()
        currentNumber = '';
    }
    else{
        switch (currentOperater){
            case '+':
                currentResult = parseFloat(currentResult) + parseFloat(currentNumber);
                console.log(currentResult);
                currentNumber = '+';
                printCalcScript()
                currentNumber = '';
                break;
            case '-':
                currentResult = parseFloat(currentResult) - parseFloat(currentNumber);
                console.log(currentResult);
                currentNumber = '-';
                printCalcScript()
                currentNumber = '';
                break;
            case 'x':
                currentResult = parseFloat(currentResult) * parseFloat(currentNumber);
                console.log(currentResult);
                currentNumber = 'x';
                printCalcScript()
                currentNumber = '';
                break;
            case '/':
                currentResult = parseFloat(currentResult) / parseFloat(currentNumber);
                console.log(currentResult);
                currentNumber = '/';
                printCalcScript()
                currentNumber = '';
                break;
            
        }
    }
    currentOperater = 'x';
    
    
    
    console.log(currentResult);

}

function divide(){
    if (temp === 0){
        currentResult = currentNumber;
        temp++;
        currentNumber = '/';
        printCalcScript()
        currentNumber = '';
    }
    else{
        switch (currentOperater){
            case '+':
                currentResult = parseFloat(currentResult) + parseFloat(currentNumber);
                console.log(currentResult);
                currentNumber = '+';
                printCalcScript()
                currentNumber = '';
                break;
            case '-':
                currentResult = parseFloat(currentResult) - parseFloat(currentNumber);
                console.log(currentResult);
                currentNumber = '-';
                printCalcScript()
                currentNumber = '';
                break;
            case 'x':
                currentResult = parseFloat(currentResult) * parseFloat(currentNumber);
                console.log(currentResult);
                currentNumber = 'x';
                printCalcScript()
                currentNumber = '';
                break;
            case '/':
                currentResult = parseFloat(currentResult) / parseFloat(currentNumber);
                console.log(currentResult);
                currentNumber = '/';
                printCalcScript()
                currentNumber = '';
                break;
            
        }
    }
    currentOperater = '/';
    
    
    
    console.log(currentResult);

}

function printCalcResult(){

    switch (currentOperater){
        case '+':
            currentResult = parseFloat(currentResult) + parseFloat(currentNumber);
            console.log(currentResult);
            currentNumber = '+';
            printCalcScript()
            currentNumber = '';
            break;
        case '-':
            currentResult = parseFloat(currentResult) - parseFloat(currentNumber);
            console.log(currentResult);
            currentNumber = '-';
            printCalcScript()
            currentNumber = '';
            break;
        case 'x':
            currentResult = parseFloat(currentResult) * parseFloat(currentNumber);
            console.log(currentResult);
            currentNumber = 'x';
            printCalcScript()
            currentNumber = '';
            break;
        case '/':
            currentResult = parseFloat(currentResult) / parseFloat(currentNumber);
            console.log(currentResult);
            currentNumber = '/';
            printCalcScript()
            currentNumber = '';
            break;
        
    }



    calcResult.innerHTML = `<p> = ${currentResult}</p>`;
    resultScript = '';
    currentResult = 0;

}



function printCalcScript(){
   resultScript  = currentNumber;

   calcResult.innerHTML = `<p>${resultScript}</p>`;
   
}


for (let i = 0 ; i < 9 ; i++){
    const numberButton = document.getElementById(`${i}`);
    numberButton.addEventListener('click', function() {
        
        currentNumber += i;
        printCalcScript();

    });
}








console.log(currentNumber);


