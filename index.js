const $startGameButton = document.querySelector(".start-quiz");
const $nextQuestionButton = document.querySelector(".next-question");
const $questionsContainer = document.querySelector(".questions-container");
const $questionText = document.querySelector(".question");
const $answersContainer = document.querySelector(".answers-container");
const $answers = document.querySelectorAll(".answer");

let currentQuestionIndex = 0;
let totalCorrect = 0;

$startGameButton.addEventListener("click", startGame);
$nextQuestionButton.addEventListener("click", displayNextQuestion);

function startGame() {
  $startGameButton.classList.add("hide");
  $questionsContainer.classList.remove("hide");
  displayNextQuestion();
}

function displayNextQuestion() {
  resetState();

  if (questions.length === currentQuestionIndex) {
    return finishGame();
  }

  $questionText.textContent = questions[currentQuestionIndex].question;
  questions[currentQuestionIndex].answers.forEach((answer) => {
    const newAsnwer = document.createElement("button");
    newAsnwer.classList.add("button", "answer");
    newAsnwer.textContent = answer.text;
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct;
    }
    $answersContainer.appendChild(newAsnwer);

    newAsnwer.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  while ($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild);
  }

  document.body.removeAttribute("class");
  $nextQuestionButton.classList.add("hide");
}

function selectAnswer(event) {
  const answerClicked = event.target;

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct");
    totalCorrect++;
  } else {
    document.body.classList.add("incorrect");
  }

  document.querySelectorAll(".answer").forEach((button) => {
    button.disabled = true;

    if (button.dataset.correct) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  });

  $nextQuestionButton.classList.remove("hide");
  currentQuestionIndex++;
}

function finishGame() {
  const totalQuestions = questions.length;
  const performance = Math.floor((totalCorrect * 100) / totalQuestions);

  let message = "";

  switch (true) {
    case performance >= 80:
      message = "Full box 200 :)";
      break;
    case performance >= 60:
      message = "Very Good :)";
      break;
    case performance >= 40:
      message = "nice!";
      break;
    default:
      message = "Da para melhorar!";
  }

  $questionsContainer.innerHTML = `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `;
}

const questions = [
  {
    question: "Quais organismos fazem parte do reino Protista?",
    answers: [
      { text: "Algas e Fungos", correct: false },
      { text: "Protozoários e fungos", correct: false },
      { text: "Algas e protozoários", correct: true },
      { text: "Fungos, algas e protozoários", correct: false },
    ],
  },
  {
    question:
      "Qual é a principal característica que define os organismos do Reino Protista?",
    answers: [
      {
        text: "São procariontes",
        correct: false,
      },
      { text: "São multicelulares", correct: false },
      { text: "São autotróficos", correct: false },
      {
        text: "São eucariontes",
        correct: true,
      },
    ],
  },
  {
    question: 'Como são chamadas as algas que produzem diatomito?',
    answers: [
      { text: "Bacilariófitas", correct: true },
      { text: "Euglenófitas", correct: false },
      { text: "Clorófitas", correct: false },
      { text: "Feófitas", correct: false },
    ],
  },
  {
    question:
      "O reino Protista não inclui organismos que podem realizar fotossíntese.",
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true },
    ],
  },
  {
    question:
      "Qual das alternativas abaixo é uma doença causada por um protozoário?",
    answers: [
      { text: "Sapinho", correct: false },
      { text: "Malária", correct: true },
      { text: "Micoses", correct: false },
      { text: "Sarampo", correct: false },
    ],
  },
  {
    question:
      "Como são chamadas as algas que possuem capacidade de emitir luz, fenômeno conhecido como bioluminescência?",
    answers: [
      { text: "Clorófitas", correct: false },
      { text: "Pirrófitas", correct: true },
      { text: "Bacilariófitas", correct: false },
      { text: "Euglenófitas", correct: false },
    ],
  },
  {
    question: "Qual das alternativas abaixo é uma alga euglenófita?",
    answers: [
      { text: "Cândita albicans", correct: false },
      { text: "Penicilium notatum", correct: false },
      { text: "Trypanossoma cruzi", correct: false },
      { text: "Eguelena viridis", correct: true },
    ],
  },
  {
    question: "Qual é o habitat mais comum dos protistas?",
    answers: [
      {
        text: "Ambientes terrestres",
        correct: false,
      },
      {
        text: "Ambientes aéreos",
        correct: false,
      },
      {
        text: "Ambientes aquáticos",
        correct: true,
      },
      {
        text: "Ambientes subterrâneos",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é a função dos vacúolos contráteis em muitos protistas?",
    answers: [
      {
        text: "Digestão de alimentos",
        correct: false,
      },
      {
        text: "Movimento.",
        correct: false,
      },
      {
        text: "Reprodução",
        correct: false,
      },
      {
        text: "Regular o equilíbrio osmótico",
        correct: true,
      },
    ],
  },
  {
    question: "Qual é o nome do protozoário causador da malária?",
    answers: [
      {
        text: "Plasmodium",
        correct: true,
      },
      {
        text: "Trypanosoma",
        correct: false,
      },
      {
        text: "Entamoeba",
        correct: false,
      },
      {
        text: "Giardia",
        correct: false,
      },
    ],
  },
  {
    question: "Todos os protistas são unicelulares.",
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true },
    ],
  },
  {
    question: "A reprodução assexuada é comum entre os protistas.",
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false },
    ],
  },
  {
    question: "Os protistas não possuem organelas membranosas.",
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true },
    ],
  },
];
