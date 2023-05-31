let userInput;
let passwordConfirmation;
const password = '12345678';
let masterConfirmation;

alert("hello");


userInput = prompt("당신의 이름은? : ");

if (userInput == ''){
    userInput = 'guest';
    alert("게스트로 입장하셨습니다.")
} else if (userInput == '황석준'){
    passwordConfirmation = prompt("비밀번호를 입력하세요");
    if (passwordConfirmation == password){
        alert("관리자로 입장하셨습니다.");
        masterConfirmation = True;
    }
    else{
        alert("잘못된 비밀번호입니다.");
        userInput = 'guest';
    }
}
else{
    alert(userInput + ", 구리네요");
    alert("대신 더 멋진 걸 보여드리겠습니다.");
}





function hsjInformation() {
    window.open("./popup.html", '황석준팝업', 'width=800, height=800');
}

function game2048(){
    window.open("./2048.html");
}

