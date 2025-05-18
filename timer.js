import { showAnswer } from './ui.js';
import { changeQuestion, getCurrentQuestion } from './game.js';

let intervalId = null; 
let timeSecond = 15;
const timerDisplay = document.querySelector('.timer');

function resetTimer(onTimeOver, initialTime = 15) {
  clearInterval(intervalId);
  timeSecond = initialTime;
  timerDisplay.innerHTML = timeSecond;

  intervalId = setInterval(() => {
    timeSecond--;
    timerDisplay.innerHTML = timeSecond;

    if (timeSecond <= 0) {
      clearInterval(intervalId);
      onTimeOver();  // ⬅️ callback disparado quando o tempo acaba
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

function onTimeOver() {
  showAnswer(getCurrentQuestion()); // ou outra função
  setTimeout(() => {
    changeQuestion();
    resetTimer(onTimeOver); // reinicia o timer após mudar a pergunta
    document.querySelector(".tela2").style.display = 'none';
    document.querySelector(".tela1").style.display = 'block';
  }, 3000);
}


export { resetTimer, stopTimer, onTimeOver };
