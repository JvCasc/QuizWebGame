import {allQuestions} from './questions.js';

let playerPoints = 0;

const input = document.getElementById("text");
const numberOfQuestions = 5;

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
  document.querySelector(".question").innerHTML = randomQuestion(allQuestions);
  document.querySelector(".questionImage").src = randomImage(allQuestions); 
}

const timer = document.querySelector('.timer');
let timeSecond = 15;

timer.innerHTML = timeSecond;

const countDown = setInterval(()=>{
    timeSecond--;
    timer.innerHTML = timeSecond;
    if(timeSecond<1){
        rNumber = generateRandomNumber()
        changeQuestion()
        timeSecond = 15;
    }
},1000)


const searchBox = document.querySelector(".tBox input");

function checkAnswer(){
  if(randomAnswer(allQuestions) === searchBox.value){
    console.log("Correct Answer")
    playerPoints += 10;
    console.log(`Score: ${playerPoints}`);
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