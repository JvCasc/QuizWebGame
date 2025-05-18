import { normalizeText } from './auxiliar.js';
import { allQuestions } from './questions.js';

let playerPoints = 0;
let currentQuestion = null;
const searchBox = document.querySelector(".tBox input");

// Gera uma pergunta aleatória e atualiza a tela
function changeQuestion() {
  const questionKeys = Object.keys(allQuestions);
  const randKey = questionKeys[Math.floor(Math.random() * questionKeys.length)];
  const q = allQuestions[randKey];

  currentQuestion = {
    text: q.question,
    img: q.img,
    answers: q.answer
  };

  document.querySelector(".question").innerHTML = currentQuestion.text;
  document.querySelector(".questionImage").src = currentQuestion.img;
}



// Verifica se a resposta do jogador está correta
function checkAnswer(onTimeOver) {
  const userInput = normalizeText(searchBox.value);
  const answerList = currentQuestion.answers;
  let isCorrect;

  if (Array.isArray(answerList)) {
    isCorrect = answerList.some(ans => normalizeText(ans) === userInput);
  } else {
    isCorrect = normalizeText(answerList) === userInput;
  }

  if (isCorrect) {
    console.log("Correct Answer");
    playerPoints += 10;
    document.querySelector(".score").innerHTML = `Score: ${playerPoints}`;
    onTimeOver();
  }
}

function startGame() {
  changeQuestion();
}

function getCurrentQuestion() {
  return currentQuestion;
}

export { startGame, changeQuestion, checkAnswer, getCurrentQuestion };