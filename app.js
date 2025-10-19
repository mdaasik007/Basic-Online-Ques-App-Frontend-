// Sample questions (15 questions)
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: "4",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correct: "Pacific",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Shakespeare", "Dickens", "Tolkien", "Austen"],
    correct: "Shakespeare",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "NaCl", "O2"],
    correct: "H2O",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Everest", "Kilimanjaro", "Denali"],
    correct: "Everest",
  },
  {
    question: "Which country is home to the kangaroo?",
    options: ["Australia", "Africa", "India", "Brazil"],
    correct: "Australia",
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Onion", "Pepper"],
    correct: "Avocado",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Picasso", "Da Vinci", "Monet"],
    correct: "Da Vinci",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Yen", "Won", "Dollar"],
    correct: "Yen",
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    correct: "2",
  },
  {
    question: "Which element has the atomic number 1?",
    options: ["Helium", "Hydrogen", "Carbon", "Oxygen"],
    correct: "Hydrogen",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correct: "Tokyo",
  },
  {
    question: "Who discovered penicillin?",
    options: ["Einstein", "Fleming", "Newton", "Curie"],
    correct: "Fleming",
  },
];

let currentUser = null;
let currentQuestion = 0;
let score = 0;
let answers = [];

const regSection = document.getElementById("registration");
const quizSection = document.getElementById("quiz");
const resultsSection = document.getElementById("results");
const regForm = document.getElementById("regForm");
const regError = document.getElementById("regError");
const progressBar = document.getElementById("progressBar");
const questionCount = document.getElementById("questionCount");
const questionText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const userName = document.getElementById("userName");
const scoreElem = document.getElementById("score");
const passFail = document.getElementById("passFail");
const retakeBtn = document.getElementById("retakeBtn");
const logoutBtn = document.getElementById("logoutBtn");

// Load users from localStorage
let users = JSON.parse(localStorage.getItem("users")) || [];

regForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!validateEmail(email)) {
    regError.textContent = "Invalid email format.";
    return;
  }

  if (password.length < 6) {
    regError.textContent = "Password must be at least 6 characters.";
    return;
  }

  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    regError.textContent = "User with this email already exists.";
    return;
  }

  currentUser = { name, email, password, scores: [] };
  users.push(currentUser);
  localStorage.setItem("users", JSON.stringify(users));

  startQuiz();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function startQuiz() {
  regSection.classList.add("hidden");
  quizSection.classList.remove("hidden");
  currentQuestion = 0;
  score = 0;
  answers = [];
  loadQuestion();
}

function loadQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = q.question;
  questionCount.textContent = `Question ${currentQuestion + 1} of ${
    questions.length
  }`;
  optionsDiv.innerHTML = "";
  q.options.forEach((opt, index) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = opt;
    radio.addEventListener("change", () => {
      nextBtn.disabled = false;
    });
    label.appendChild(radio);
    label.appendChild(document.createTextNode(opt));
    optionsDiv.appendChild(label);
  });
  nextBtn.disabled = true;
  updateProgress();
}

function updateProgress() {
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (selected) {
    answers.push(selected.value);
    if (selected.value === questions[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
});

function showResults() {
  quizSection.classList.add("hidden");
  resultsSection.classList.remove("hidden");

  userName.textContent = `User: ${currentUser.name}`;
  scoreElem.textContent = `You got ${score} out of ${questions.length} questions correct.`;

  const passed = score >= 10;
  passFail.textContent = passed ? "Pass!" : "Fail!";
  passFail.classList.add(passed ? "pass" : "fail");

  // Save result
  currentUser.scores.push({ score, passed });
  updateUsers();
}

function updateUsers() {
  const index = users.findIndex((u) => u.email === currentUser.email);
  if (index !== -1) {
    users[index] = currentUser;
    localStorage.setItem("users", JSON.stringify(users));
  }
}

retakeBtn.addEventListener("click", () => {
  resultsSection.classList.add("hidden");
  startQuiz();
});

logoutBtn.addEventListener("click", () => {
  currentUser = null;
  resultsSection.classList.add("hidden");
  regSection.classList.remove("hidden");
  regForm.reset();
  regError.textContent = "";
});
