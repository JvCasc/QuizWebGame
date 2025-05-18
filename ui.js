// Exibe a resposta correta na tela2
function showAnswer(currentQuestion) {
  let resposta;

  if (Array.isArray(currentQuestion.answers)) {
    resposta = currentQuestion.answers[0];
  } else {
    resposta = currentQuestion.answers;
  }

  document.querySelector(".answer").textContent = resposta;
  document.querySelector(".tela1").style.display = 'none';
  document.querySelector(".tela2").style.display = 'block';
}

export { showAnswer };  