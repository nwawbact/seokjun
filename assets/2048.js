let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', (event) => {
    const touch = event.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    });
    let touchKey;
    document.addEventListener('touchend', (event) => {
        for (i = 0 ; i < 16 ; i++){
            currentArray[i] = array[i];
        }
        const touch = event.changedTouches[0];
        const touchEndX = touch.clientX;
        const touchEndY = touch.clientY;

        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) {
                touchKey = 'Right Swipe';
            } else {
                touchKey = 'Left Swipe';
            }
        }
        else {
            if (deltaY > 0) {
                touchKey = 'Down Swipe';
            } else {
                touchKey = 'Up Swipe';
            }
        }

        switch (touchKey){
            case 'Right Swipe':
                rightShift();
                randomCreate();
                graphics();
                logWrite();
                gameOverChecker();
                break;
            case 'Left Swipe':
                leftShift();
                randomCreate();
                graphics();
                logWrite();
                gameOverChecker();
                break;
            case 'Up Swipe':
                upShift();
                randomCreate();
                graphics();
                logWrite();
                gameOverChecker();
                break;
            case 'Down Swipe':
                downShift();
                randomCreate();
                graphics();
                logWrite();
                gameOverChecker();
                break;
            
        
        }
        undodid = 0;
    });






const blocks = document.querySelectorAll(".block");


for (i = 0 ; i < 16 ; i++){
    const newcell = document.createElement("div");
    newcell.className = 'cell';
    blocks[i].appendChild(newcell);
    newcell.style.backgroundColor = "rgb(194, 194, 194)";
}
let undoDid = 0;
const restartBtn = document.querySelector(".restartbutton");
const undoBtn = document.querySelector(".undobutton");
const saveGameBtn = document.querySelector(".savedatabutton");
const loadGameBtn = document.querySelector(".loaddatabutton");

loadGameBtn.addEventListener('click', loadGame);

saveGameBtn.addEventListener('click', saveGame)

undoBtn.addEventListener('click', () =>{
    if (undodid == 1){
        return;
    }
    for (i = 0 ; i < 16 ; i++){
        array[i] = currentArray[i];
    }
    graphics();
    undoDid = 1;
    console.log("undo");
});
restartBtn.addEventListener('click', () =>{

    gamestart();
});

function gameOverChecker() {
    let temp = 0;
    /*for (i = 0 ; i < 16 ; i++){
        
        if (array[i] == 3 || array[i] == 7 || array[i] == 11 ){
            if (array[i] === array[i-1] || array[i] === array[i+4] || array[i] === array[i-4] || array[i] === 0){
                temp++;
            }

        }
        else if (array[i] == 4 || array[i] == 8 || array[i] == 12 ){
            if (array[i] === array[i+1] || array[i] === array[i+4] || array[i] === array[i-4] || array[i] === 0){
                temp++;
            }
        }
        else if (array[i] === array[i+1] || array[i] === array[i-1] || array[i] === array[i+4] || array[i] === array[i-4] || array[i] === 0){
          
            temp++;
            console.log(i);
            
        }


        
    }*/

    for (i = 0 ; i < 16; i++){
        if (array[i] != currentArray[i]){
            temp++;
        }
    }

    if (temp == 0){
        alert("game over!");
        gamestart();
    }
    console.log("checked", temp);
    temp = 0;
    

}

let a = 0;
const rightHandler = window.addEventListener('keydown', (e)=>{
    for (i = 0 ; i < 16 ; i++){
        currentArray[i] = array[i];
    }
    switch (e.key){
        case 'ArrowRight':
            rightShift();
            randomCreate();
            graphics();
            logWrite();
            gameOverChecker();
            break;
        case 'ArrowLeft':
            leftShift();
            randomCreate();
            graphics();
            logWrite();
            gameOverChecker();
            break;
        case 'ArrowUp':
            upShift();
            randomCreate();
            graphics();
            logWrite();
            gameOverChecker();
            break;
        case 'ArrowDown':
            downShift();
            randomCreate();
            graphics();
            logWrite();
            gameOverChecker();
            break;
        
    
    }
    console.log("pressed");

    
    undodid = 0;
    

});
let currentArray = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
let array = 
    [0 , 0 , 0 , 0 ,
     0 , 0 , 0 , 0 ,
     0 , 0 , 0 , 0 ,
     0 , 0 , 0 , 0 ,
    ];


function gamestart(){
    array = 
    [0 , 0 , 0 , 0 ,
     0 , 0 , 0 , 0 ,
     0 , 0 , 0 , 0 ,
     0 , 0 , 0 , 0 ,
    ];
    randomCreate();
    randomCreate();
    graphics();

}
gamestart();

function randomCreate() {
    let tt = 0;
    for (i = 0 ; i <16 ; i++){
        if (array[i] == currentArray[i]){
            tt++;
        }
    }
    if(tt == 16){
        return;
    }
    let ranNum;
    let temp = 0;
    for (i = 0 ; i < 16 ; i++){
        if (array[i] == 0){
                temp++;
        }
    }
    if (temp == 0){
        return;
    }
    while(1){
        ranNum = Math.floor((Math.random() * 99) +1);
        //console.log(ranNum);
        
        if (array[ranNum%16] == 0){
            if (ranNum > 90){
                array[ranNum%16] = 4;
            }
            else{
                array[ranNum%16] = 2;
            }
            break;
        }
        else{
            continue;
        }

    }
}




function rightsort() {
    for (k = 0 ; k <= 3 ; k++){
        let fixedk = k * 4;
        for (i = fixedk+3 ; i >= fixedk+0 ; i--){
            if (array[i] != 0){
                for (j = fixedk+3 ; j > i ; j--){
                    if (array[j] == 0){
                        array[j]= array[i];
                        array[i] = 0;
                        break;
                    }
                }
            }
        }
    }
    
}
function rightShift() {
    for (k = 0 ; k <= 3 ; k++){
        let fixedk = k * 4;
        for (i = fixedk+3 ; i >= fixedk+0 ; i--){
            for (j = i-1 ; j >= fixedk+0 ; j--){
                if (array[j] != 0 ){
                    if (array[j] == array[i]){
                        array[i] *= 2;
                        array[j] = 0;
                        break;
                    }
                    else{
                        break;
                    }
                    
                }
                if (array[j] == 0){
                    continue;
                }
                
            }
        }
    }
    rightsort();
}



function leftsort() {
    for (k = 0 ; k <= 3 ; k++){
        let fixedk = k * 4 + 3;
        for (i = fixedk-3 ; i <= fixedk+0 ; i++){
            if (array[i] != 0){
                for (j = fixedk-3 ; j < i ; j++){
                    if (array[j] == 0){
                        array[j]= array[i];
                        array[i] = 0;
                        break;
                    }
                }
            }
        }
    }
    
}
function leftShift() {
    for (k = 0 ; k <= 3 ; k++){
        let fixedk = k * 4 + 3;
        for (i = fixedk-3 ; i <= fixedk ; i++){
            for (j = i+1 ; j <= fixedk+0 ; j++){
                if (array[j] != 0 ){
                    if (array[j] == array[i]){
                        array[i] *= 2;
                        array[j] = 0;
                        break;
                    }
                    else{
                        break;
                    }
                }
                if (array[j] == 0){
                    continue;
                }
                
            }
        }
    }
    leftsort();
}

function upsort() {
    for (k = 0 ; k <= 3 ; k++){
        
        for (i = 0; i <= 3 ; i++){
            let fixedi = i*4 + k;
            if (array[fixedi] != 0){
                for (j = k ; j < fixedi ; j += 4){
                    if (array[j] == 0){
                        array[j]= array[fixedi];
                        array[fixedi] = 0;
                        break;
                    }
                }
            }
        }
    }
    
}
function upShift() {
    for (k = 0 ; k <= 3 ; k++){
        
        for (i = 0; i <= 3 ; i++){
            let fixedi = i*4 + k;
            for (j = fixedi + 4 ; j <= k + 12 ; j += 4){
                if (array[j] != 0 ){
                    if (array[j] == array[fixedi]){
                        array[fixedi] *= 2;
                        array[j] = 0;
                        break;
                    }
                    else{
                        break;
                    }
                }
                if (array[j] == 0){
                    continue;
                }
                
            }
        }
    }
    upsort();
}



function downsort() {
    for (k = 0 ; k <= 3 ; k++){
        
        for (i = 3; i >= 0 ; i--){
            let fixedi = i*4 + k;
            if (array[fixedi] != 0){
                for (j = k+12 ; j > fixedi ; j -= 4){
                    if (array[j] == 0){
                        array[j]= array[fixedi];
                        array[fixedi] = 0;
                        break;
                    }
                }
            }
        }
    }
    
}
function downShift() {
    for (k = 0 ; k <= 3 ; k++){
        
        for (i = 3; i >= 0 ; i--){
            let fixedi = i*4 + k;
            for (j = fixedi - 4 ; j >= k; j -= 4){
                if (array[j] != 0 ){
                    if (array[j] == array[fixedi]){
                        array[fixedi] *= 2;
                        array[j] = 0;
                        break;
                    }
                    else{
                        break;
                    }
                }
                if (array[j] == 0){
                    continue;
                }
                
            }
        }
    }
    downsort();
}

let  someLog = `
${array[0]}, ${array[1]}, ${array[2]}, ${array[3]}\n
${array[4]}, ${array[5]}, ${array[6]}, ${array[7]}\n
${array[8]}, ${array[9]}, ${array[10]}, ${array[11]}\n
${array[12]}, ${array[13]}, ${array[14]}, ${array[15]}`;

function logWrite() {
    someLog = `
${array[0]}, ${array[1]}, ${array[2]}, ${array[3]}\n
${array[4]}, ${array[5]}, ${array[6]}, ${array[7]}\n
${array[8]}, ${array[9]}, ${array[10]}, ${array[11]}\n
${array[12]}, ${array[13]}, ${array[14]}, ${array[15]}`
    console.log(someLog);


}





function graphics() {
    for (i = 0 ; i < 16 ; i++){
        switch (array[i]) {
            case 0:
                blocks[i].firstChild.style.backgroundColor = 'rgb(194, 194, 194)';
                blocks[i].firstChild.innerHTML="<div ><p style='font-size:50px; text-align:center' ></p></div>"
                break;
            case 2:
                blocks[i].firstChild.style.backgroundColor = 'rgb(255, 229, 229)';
                blocks[i].firstChild.innerHTML="<div ><p style='font-size:50px; text-align:center' >2</p></div>"
                break;
            case 4:
                blocks[i].firstChild.style.backgroundColor= 'rgb(253, 212, 212)';
                blocks[i].firstChild.innerHTML="<div ><p style='font-size:50px; text-align:center' >4</p></div>"
                break;
            case 8:
                blocks[i].firstChild.style.backgroundColor= 'rgb(245, 185, 185)';
                blocks[i].firstChild.innerHTML="<div ><p style='font-size:50px; text-align:center' >8</p></div>"
                break;
            case 16:
                blocks[i].firstChild.style.backgroundColor='rgb(244, 161, 161)';
                blocks[i].firstChild.innerHTML="<div ><p style='font-size:50px; text-align:center' >16</p></div>"
                break;
            case 32:
                blocks[i].firstChild.style.backgroundColor='rgb(244, 161, 161)';
                blocks[i].firstChild.innerHTML="<div ><p style='font-size:50px; text-align:center' >32</p></div>"
                break;
            case 64:
                blocks[i].firstChild.style.backgroundColor='rgb(255, 120, 120)';
                blocks[i].firstChild.innerHTML="<div ><p style='font-size:50px; text-align:center' >64</p></div>"
                break;
            case 128:
                blocks[i].firstChild.style.backgroundColor='rgb(253, 102, 102)';
                blocks[i].firstChild.innerHTML="<div ><p style='font-size:50px; text-align:center' >128</p></div>"
                break;
            case 256:
                blocks[i].firstChild.style.backgroundColor='rgb(252, 85, 85)';
                blocks[i].firstChild.innerHTML="<div ><p style='font-size:50px; text-align:center' >256</p></div>"
                break;
            case 512:
                blocks[i].firstChild.style.backgroundColor='rgb(252, 69, 69)';
                blocks[i].firstChild.innerHTML="<div ><p style='font-size:50px; text-align:center' >512</p></div>"
                break;
            case 1024:
                blocks[i].firstChild.style.backgroundColor='rgb(211, 35, 35)';
                blocks[i].firstChild.innerHTML="<div ><p style='font-size:50px; text-align:center' >1024</p></div>"
                break;
            case 2048:
                blocks[i].firstChild.style.backgroundColor='rgb(211, 35, 35)';
                blocks[i].firstChild.innerHTML="<div ><p style='font-size:50px; text-align:center' >2048</p></div>"
                break;
            default:
                blocks[i].firstChild.style.backgroundColor='rgb(211, 12, 12)';
                blocks[i].firstChild.innerHTML=`<div ><p style='font-size:50px; text-align:center' >${array[i]}</p></div>`;
                break;
            
            
        }
    }
}
let savedArray = [0,0,0,0,0,0,0,0,0,0,0,0,];
function saveGame(){
    localStorage.setItem('localSaveArray', JSON.stringify(array));
}


function loadGame() {
    let savedData = localStorage.getItem('localSaveArray');
    savedData = JSON.parse(savedData);

    for (i = 0 ; i < 16 ; i++){
        array[i] = savedData[i];
    }
    graphics();
}

