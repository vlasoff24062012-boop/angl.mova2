let score = 0;
let answered = {};
let currentQuizId = null;

function showQuiz(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));

  document.querySelectorAll('.quiz').forEach(q => {
    q.style.display = 'none';
    q.classList.remove('show');
  });

  score = 0;
  answered = {};
  currentQuizId = id;

  resetScoreBox(id);
  resetResults(id);

  const quiz = document.getElementById(id);
  quiz.style.display = 'block';

  setTimeout(function() {
    quiz.classList.add('show');
  }, 10);
}

function backToMenu() {
  document.querySelectorAll('.quiz').forEach(q => {
    q.style.display = 'none';
    q.classList.remove('show');
  });

  document.querySelectorAll('.page').forEach(p => p.classList.remove('hidden'));

  score = 0;
  answered = {};
  currentQuizId = null;
}

function checkAnswer(button, isCorrect, resultId) {
  const result = document.getElementById(resultId);

  if (!answered[resultId]) {
    if (isCorrect) {
      score++;
      result.textContent = "Correct!";
      result.style.color = "green";
    } else {
      result.textContent = "Wrong!";
      result.style.color = "red";
    }
    answered[resultId] = true;
  }

  updateScoreBox();
}

function updateScoreBox() {
  if (!currentQuizId) return;

  let scoreBoxId = "";

  if (currentQuizId === "quiz1") {
    scoreBoxId = "scoreBox1";
  } else if (currentQuizId === "quiz2") {
    scoreBoxId = "scoreBox2";
  } else if (currentQuizId === "quiz3") {
    scoreBoxId = "scoreBox3";
  }

  if (scoreBoxId) {
    const box = document.getElementById(scoreBoxId);
    box.textContent = "Score: " + score + "/4";
  }
}

function resetScoreBox(id) {
  if (id === "quiz1") {
    document.getElementById("scoreBox1").textContent = "Score: 0";
  } else if (id === "quiz2") {
    document.getElementById("scoreBox2").textContent = "Score: 0";
  } else if (id === "quiz3") {
    document.getElementById("scoreBox3").textContent = "Score: 0";
  }
}

function resetResults(id) {
  let ids = [];

  if (id === "quiz1") {
    ids = ["r1", "r2", "r3", "r4"];
  } else if (id === "quiz2") {
    ids = ["g1", "g2", "g3", "g4"];
  } else if (id === "quiz3") {
    ids = ["v1", "v2", "v3", "v4"];
  }

  ids.forEach(function(resultId) {
    const el = document.getElementById(resultId);
    if (el) {
      el.textContent = "";
      el.style.color = "black";
    }
  });
}
