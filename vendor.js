const hsjBtn = document.getElementById('hsj');
const userName = document.getElementById('username');
const greetName = document.getElementById('greeting');

const game2048Btn = document.getElementById('2048');

game2048Btn.addEventListener('click', game2048);
 
hsjBtn.addEventListener('click', hsjInformation);

greetName.innerHTML = `<p>환영합니다, <strong>${userInput}</p>`
