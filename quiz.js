const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hyper Text Preprocessor", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which of the following is a JavaScript framework?",
      options: ["React", "Laravel", "Django", "Flask"],
      answer: "React"
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Netscape", "Microsoft", "Google", "Apple"],
      answer: "Netscape"
    },
    {
      question: "What is the output of '2' + 2 in JavaScript?",
      options: ["22", "4", "NaN", "undefined"],
      answer: "22"
    },
    {
      question: "Which method is used to parse a string to an integer in JavaScript?",
      options: ["parseInt()", "parseFloat()", "Number()", "Integer()"],
      answer: "parseInt()"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timer;
  let timeLeft = 20;
  let username = '';
  
  function login() {
    username = document.getElementById('username').value;
    if (username) {
      document.getElementById('login-container').classList.add('d-none');
      document.getElementById('quiz-container').classList.remove('d-none');
      showQuestion();
    } else {
      alert('Please enter a username');
    }
  }
  
  function startTimer() {
    timeLeft = 20;
    document.getElementById('timer').innerText = timeLeft;
    timer = setInterval(() => {
      timeLeft--;
      document.getElementById('timer').innerText = timeLeft;
      if (timeLeft === 0) {
        nextQuestion();
      }
    }, 1000);
  }
  
  function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
      showResult();
      return;
    }
  
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question-title').innerText = currentQuestion.question;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    currentQuestion.options.forEach(option => {
      const button = document.createElement('button');
      button.classList.add('btn', 'btn-secondary', 'btn-block', 'mb-2');
      button.innerText = option;
      button.onclick = () => selectOption(option);
      optionsContainer.appendChild(button);
    });
  
    startTimer();
  }
  
  function selectOption(selectedOption) {
    clearInterval(timer);
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      score++;
    }
    currentQuestionIndex++;
    setTimeout(() => {
      nextQuestion();
    }, 500);
  }
  
  function nextQuestion() {
    clearInterval(timer);
    showQuestion();
  }
  
  function showResult() {
    document.getElementById('quiz-container').classList.add('d-none');
    document.getElementById('result-container').classList.remove('d-none');
    document.getElementById('result-text').innerText = `${username}, you scored ${score} out of ${questions.length}.`;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // The quiz will only start after login
  });