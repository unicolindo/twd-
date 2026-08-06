const questions = [
  {
    question: "1. Qual era a profissão de Rick Grimes antes do apocalipse zumbi?",
    options: ["Médico", "Xerife / Policial", "Bombeiro", "Professor"],
    answer: 1
  },
  {
    question: "2. Em qual cidade Rick acorda do coma no primeiro episódio?",
    options: ["Nova York", "Miami", "Atlanta", "Washington D.C."],
    answer: 2
  },
  {
    question: "3. Qual é a arma de assinatura de Daryl Dixon?",
    options: ["Katana", "Besta (Arbalete)", "Revolver Python", "Taco de beisebol"],
    answer: 1
  },
  {
    question: "4. Qual o nome do bastão de beisebol com arame farpado do Negan?",
    options: ["Lucille", "Lori", "Judith", "Maggie"],
    answer: 0
  },
  {
    question: "5. Quem foi o vilão responsável por matar Glenn na 7ª temporada?",
    options: ["O Governador", "Alpha", "Negan", "Shane"],
    answer: 2
  },
  {
    question: "6. Qual a arma favorita de Michonne?",
    options: ["Arco e flecha", "Katana", "Pistola 9mm", "Faca de caça"],
    answer: 1
  },
  {
    question: "7. Qual o nome da tigresa de estimação do Rei Ezekiel?",
    options: ["Rajah", "Shiva", "Tigress", "Simba"],
    answer: 1
  },
  {
    question: "8. Onde se passa a maior parte dos acontecimentos da 2ª temporada?",
    options: ["Na Prisão", "Em Alexandria", "Na Fazenda de Hershel", "No Hospital"],
    answer: 2
  },
  {
    question: "9. Quem corta a própria mão para escapar de um telhado em Atlanta?",
    options: ["Daryl", "Merle", "T-Dog", "Rick"],
    answer: 1
  },
  {
    question: "10. Qual segredo o Dr. Jenner revela a Rick no CDC ao fim da 1ª temporada?",
    options: [
      "Existe uma cura na Europa",
      "O vírus foi criado pelo governo",
      "Todos já estão infectados com o vírus",
      "Os zumbis morrem de fome em um ano"
    ],
    answer: 2
  },
  {
    question: "11. Quem mata Shane Walsh (enquanto humano) no final da 2ª temporada?",
    options: ["Rick Grimes", "Carl Grimes", "Daryl Dixon", "Um zumbi"],
    answer: 0
  },
  {
    question: "12. Qual é o nome da líder do grupo dos Sussurradores (Whisperers)?",
    options: ["Beta", "Alpha", "Gamma", "Jadis"],
    answer: 1
  },
  {
    question: "13. Qual o nome da comunidade liderada por Gregory e posteriormente por Maggie?",
    options: ["O Reino", "Hilltop", "Santuário", "Terminus"],
    answer: 1
  },
  {
    question: "14. O que o grupo habitante de Terminus praticava secretamente?",
    options: ["Escravidão", "Canibalismo", "Culto religioso", "Experimentos genéticos"],
    answer: 1
  },
  {
    question: "15. Quem fingiu ser um cientista com a cura do vírus para ser protegido?",
    options: ["Eugene", "Gabriel", "Aaron", "Alden"],
    answer: 0
  },
  {
    question: "16. Como se chama a filha de Lori Grimes?",
    options: ["Beth", "Enid", "Judith", "Sasha"],
    answer: 2
  },
  {
    question: "17. Qual o vilão caolho que ataca a prisão na 3ª e 4ª temporada?",
    options: ["Negan", "O Governador (Philip Blake)", "Gareth", "Simon"],
    answer: 1
  },
  {
    question: "18. Qual é o grau de parentesco entre Daryl e Merle?",
    options: ["Irmãos", "Primos", "Pai e Filho", "Amigos de infância"],
    answer: 0
  },
  {
    question: "19. Qual personagem marcante usava chapéu de palha e dirigia um RV (trailer)?",
    options: ["Dale", "Hershel", "Bob", "T-Dog"],
    answer: 0
  },
  {
    question: "20. Como Lori Grimes morre na 3ª temporada?",
    options: [
      "Devorada por zumbis no pátio",
      "Baleada pelo Governador",
      "Complicações no parto de emergência",
      "Em um acidente de carro"
    ],
    answer: 2
  },
  {
    question: "21. Qual o nome do ator que interpreta o protagonista Rick Grimes?",
    options: ["Norman Reedus", "Andrew Lincoln", "Jeffrey Dean Morgan", "Steven Yeun"],
    answer: 1
  },
  {
    question: "22. Quem resgata Rick quando ele fica preso dentro do tanque no 1º episódio?",
    options: ["Glenn", "Shane", "Daryl", "Morgan"],
    answer: 0
  },
  {
    question: "23. Qual o nome da comunidade murada onde o grupo se abriga na 5ª temporada?",
    options: ["O Reino", "O Santuário", "Alexandria", "Oceanside"],
    answer: 2
  },
  {
    question: "24. Quem é o segundo no comando do grupo dos Sussurradores?",
    options: ["Alpha", "Beta", "Gamma", "Delta"],
    answer: 1
  },
  {
    question: "25. Qual acessório marca o visual de Carl Grimes durante a série?",
    options: ["Jaqueta de couro", "Chapéu de cowboy do pai", "Colete com asas", "Lenço vermelho"],
    answer: 1
  },
  {
    question: "26. Qual é o nome do padre introduzido na 5ª temporada?",
    options: ["Padre Gabriel", "Padre Paul", "Padre Ezekiel", "Padre Aaron"],
    answer: 0
  },
  {
    question: "27. Qual é o nome oficial da facção liderada por Negan?",
    options: ["Os Salvadores (The Saviors)", "Os Sussurradores", "Os Catadores", "Os Lobos"],
    answer: 0
  },
  {
    question: "28. Como Carol mata os dois doentes contaminados na prisão na 4ª temporada?",
    options: ["Envenenados", "Carbonizados (Queimados)", "Baleados na cabeça", "Sufocados"],
    answer: 1
  },
  {
    question: "29. Qual personagem perde um olho após levar um tiro acidental?",
    options: ["Rick", "Carl", "Daryl", "Glenn"],
    answer: 1
  },
  {
    question: "30. Qual era o trabalho de Glenn Rhee antes do apocalipse?",
    options: ["Entregador de pizza", "Mecânico", "Estudante de medicina", "Contador"],
    answer: 0
  }
];

let currentQuestionIndex = 0;
let score = 0;
let canAnswer = true;

const questionTextElement = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const questionNumberElement = document.getElementById("question-number");
const scoreTrackerElement = document.getElementById("score-tracker");
const feedbackElement = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const finalScoreElement = document.getElementById("final-score");

function loadQuestion() {
  canAnswer = true;
  feedbackElement.textContent = "";
  feedbackElement.className = "feedback";
  nextBtn.style.display = "none";
  
  const currentQ = questions[currentQuestionIndex];
  
  questionNumberElement.textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
  questionTextElement.textContent = currentQ.question;
  
  optionsContainer.innerHTML = "";
  
  currentQ.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("option-btn");
    button.textContent = option;
    button.addEventListener("click", () => selectOption(index, button));
    optionsContainer.appendChild(button);
  });
}

function selectOption(selectedIndex, selectedButton) {
  if (!canAnswer) return;
  canAnswer = false;

  const currentQ = questions[currentQuestionIndex];
  const allButtons = optionsContainer.querySelectorAll(".option-btn");

  // Desabilita todos os botões para evitar múltiplos cliques
  allButtons.forEach((btn) => btn.disabled = true);

  if (selectedIndex === currentQ.answer) {
    selectedButton.classList.add("correct");
    feedbackElement.textContent = "Resposta Correta! 🎉";
    feedbackElement.classList.add("correct");
    score++;
    scoreTrackerElement.textContent = `Pontos: ${score}`;
  } else {
    selectedButton.classList.add("wrong");
    allButtons[currentQ.answer].classList.add("correct");
    feedbackElement.textContent = `Incorreto! A resposta certa era: "${currentQ.options[currentQ.answer]}"`;
    feedbackElement.classList.add("wrong");
  }

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
});

function showResults() {
  quizBox.style.display = "none";
  resultBox.style.display = "block";
  finalScoreElement.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
}

// Inicializa a primeira pergunta
loadQuestion();