const questions = [
  {
    question: "What is your best food?",
    answers: [
      { text: "Dodo", correct: "false" },
      { text: "Eggs", correct: "false" },
      { text: "Yam", correct: "false" },
      { text: "Any-Food", correct: "true" }
    ]
  },

  {
    question: "Which is the best rapper?",
    answers: [
      { text: "Tony", correct: "true" },
      { text: "Stark", correct: "false" },
      { text: "Evans John", correct: "false" },
      { text: "China", correct: "false" }
    ]
  },

  {
    question: "What is my name?",
    answers: [
      { text: "Amaiah", correct: "false" },
      { text: "Mercy", correct: "true" },
      { text: "Anna", correct: "false" },
      { text: "Brianca", correct: "false" }
    ]
  },

  {
    question: "What is my hobby?",
    answers: [
      { text: "Reading", correct: "false" },
      { text: "Sleeping", correct: "false" },
      { text: "Rapping", correct: "true" },
      { text: "Cooking", correct: "false" }
    ]
  }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function resetState() {
  // nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
};

function showQuestion() {
  resetState();
  /****This above is to remove the dummy question above which is "Answer 1"****/
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  /*****This above is to quickly add a real question in place of the dummy question that has been removed
   *****/
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
};


function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
    /****Here is saying "If the correct answer is selected, then let the score be increased by 1*****/
  } else {
    selectedBtn.classList.add("incorrect");
    /****Here is saying "Then let the false answer be coloured red!*****/
  }
  nextButton.style.display = "block";
  Array.from(answerButtons.children).forEach((butt) => {
    if (butt.dataset.correct === "true") {
      butt.classList.add("correct");
    }
    butt.disabled = "true";
  });
};

/*****THIS Array.from is asking "Where is the array from?" (THE ARRAY IS FROM THE CHILDREN OF THE ANSWER BUTTONS*****/

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
})

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

startQuiz();
