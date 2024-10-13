import {allQuestions} from './questions.js';

let playerPoints = 0;

const input = document.getElementById("text");
const numberOfQuestions = 100;
document.querySelector(".tela2").style.display = 'none';

function generateRandomNumber() {
  return Math.floor(Math.round(Math.random() * (numberOfQuestions - 1)));
}

let rNumber = generateRandomNumber();

const randomQuestion = obj => {
    const randProp = Object.keys(obj)[(rNumber) | 0];
    return obj[randProp].question;
  }

const randomImage = obj => {
    const randProp = Object.keys(obj)[(rNumber) | 0];
    return obj[randProp].img;
  }

const randomAnswer = obj => {
    const randProp = Object.keys(obj)[(rNumber) | 0];
    return obj[randProp].answer;
  }


function changeQuestion(){
  rNumber = generateRandomNumber()
  document.querySelector(".question").innerHTML = randomQuestion(allQuestions);
  document.querySelector(".questionImage").src = randomImage(allQuestions);
  timeSecond = 15;
}

function showAnswer(){
  document.querySelector(".answer").textContent = randomAnswer(allQuestions); // Supondo que você mostre a resposta na tela2
  document.querySelector(".tela1").style.display = 'none';
  document.querySelector(".tela2").style.display = 'block';
}

const timer = document.querySelector('.timer');
let timeSecond = 15;
let intervalId = null;  // Manter uma referência ao ID do intervalo

function resetTimer() {
  if (intervalId !== null) {
    clearInterval(intervalId);  // Limpa o intervalo anterior
  }
  intervalId = setInterval(() => {
    timeSecond--;
    timer.innerHTML = timeSecond;
    if (timeSecond <= 0) {
      showAnswer();  // Mostra a resposta quando o tempo acabar
      clearInterval(intervalId);  // Importante: limpar o intervalo quando o tempo acabar
      setTimeout(() => {
        changeQuestion();  // Muda a pergunta após 3 segundos
        timeSecond = 15;  // Reinicia o temporizador
        document.querySelector(".tela2").style.display = 'none';
        document.querySelector(".tela1").style.display = 'block';
        resetTimer();  // Reinicia o temporizador de forma recursiva
      }, 3000);
    }
  }, 1000);
}

resetTimer();

const searchBox = document.querySelector(".tBox input");

function checkAnswer(){
  if(randomAnswer(allQuestions) === searchBox.value.trim().toUpperCase() || randomAnswer(allQuestions)[0] === searchBox.value.trim().toUpperCase() || randomAnswer(allQuestions)[1] === searchBox.value.trim().toUpperCase() || randomAnswer(allQuestions)[2] === searchBox.value.trim().toUpperCase() || randomAnswer(allQuestions)[3] === searchBox.value.trim().toUpperCase() || randomAnswer(allQuestions)[4] === searchBox.value.trim().toUpperCase() || randomAnswer(allQuestions)[5] === searchBox.value.trim().toUpperCase()){
    console.log("Correct Answer")
    playerPoints += 10;
    document.querySelector(".score").innerHTML = `Score: ${playerPoints}`;
    console.log(`Score: ${playerPoints}`);
    rNumber = generateRandomNumber()
    changeQuestion()
    // document.querySelector(".tBox").style.display = 'none';
  }
}

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("submit").click();
    checkAnswer()
    document.getElementById('text').value = "";
  }
});

changeQuestion()

