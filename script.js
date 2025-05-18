import { resetTimer } from './timer.js';
import { startGame, changeQuestion, checkAnswer, setPlayerPoints} from './game.js';
import { onTimeOver } from './timer.js';
import { showAnswer, updateScore } from './ui.js';



const input = document.getElementById("text");

document.querySelector(".tela2").style.display = 'none';

const savedScore = Number(localStorage.getItem("lastScore")) || 0;

setPlayerPoints(savedScore);
updateScore(savedScore);

// Captura Enter pressionado para enviar a resposta
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit").click();
    checkAnswer(onTimeOver);
    document.getElementById('text').value = "";
  }
});

// Início do jogo
changeQuestion();
resetTimer(onTimeOver);
startGame();