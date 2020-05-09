const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");
let showScore = document.getElementById("show-score");
let currentQuestion = document.getElementById("current-question");
let off = document.getElementById("of");
let finalScore = document.getElementById("final-score");
let shuffledQuestion, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
nextButton.addEventListener("click", () => {
  currentQuestion.innerText++;
});
answerButtonElement.addEventListener("click", displayScore);

function startGame() {
  console.log("game started");
  startButton.classList.add("hide");
  currentQuestion.classList.remove("hide");
  showScore.classList.remove("hide");
  off.classList.remove("hide");
  shuffledQuestion = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  showScore.innerText = 0;
  currentQuestion.innerText = 1;
  finalScore.classList.add("hide");
  questionContainer.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestion[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(button);
  });
}
function resetState() {
  clearStatusclass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}
function selectAnswer(e) {
  selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestion.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "RESTART";
    startButton.classList.remove("hide");
    finalScore.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusclass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}
function clearStatusclass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
function displayScore(e) {
  selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
    console.log("right answer");
    showScore.innerText++;
  }
}
const questions = [
  {
    question: "WHO IS AN ADJUDICATOR",
    answers: [
      { text: "JUDGE", correct: true },
      { text: "DOCTOR", correct: false },
      { text: "TEACHER", correct: false },
      { text: "MARRIAGE OFFICER", correct: false },
    ],
  },
  {
    question: "WHEN DID NIGERIA GAIN INDEPENDENCE",
    answers: [
      { text: "1795", correct: false },
      { text: "1972", correct: false },
      { text: "1963", correct: false },
      { text: "1960", correct: true },
    ],
  },
  {
    question: "WHICH OF THESE IS A MUSICAL INSTRUMENT",
    answers: [
      { text: "SHELLER", correct: false },
      { text: "MUMP", correct: false },
      { text: "UKELELE", correct: true },
      { text: "PIPER", correct: false },
    ],
  },
  {
    question: "WHEN WAS THE TWIN TOWERS DESTROYED",
    answers: [
      { text: "1986", correct: false },
      { text: "2001", correct: true },
      { text: "2011", correct: false },
      { text: "2009", correct: false },
    ],
  },
  {
    question: "WHICH OF THESE IS A CORRECT SPELLING",
    answers: [
      { text: "ACCOMMODATION", correct: true },
      { text: "ACCOMODATION", correct: false },
      { text: "ACOMODATION", correct: false },
      { text: "ACCOMODATTION", correct: false },
    ],
  },
];
