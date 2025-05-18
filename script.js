import { resetTimer } from './timer.js';
import { startGame, changeQuestion, checkAnswer} from './game.js';
import { onTimeOver } from './timer.js';

const input = document.getElementById("text");

document.querySelector(".tela2").style.display = 'none';

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