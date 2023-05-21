const hsjBtn = document.getElementById('hsj');
const userName = document.getElementById('username');
const greetName = document.getElementById('greeting');


hsjBtn.addEventListener('click', hsjInformation);

greetName.innerHTML = `<p>환영합니다, <strong>${userInput}</p>`
