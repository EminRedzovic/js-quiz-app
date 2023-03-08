const questions = [
  {
    id: "1",
    question: "Koliko je Cristiano Ronaldo pobedio liga sampiona?",
    answers: ["1", "3", "5", "6"],
    points: 10,
    correct: "5",
  },
  {
    id: "2",
    question: "Koje godine je Francuska zadnji put pobedila Svetsko Prvenstvo?",
    answers: ["1998", "2006", "1994", "2018"],
    points: 15,
    correct: "2018",
  },
  {
    id: "3",
    question: "Ko je osvojio ligu sampiona 2008 godine?",
    answers: ["Manchester United", "Juventus", "Porto", "Barcelona"],
    points: 15,
    correct: "Manchester United",
  },
  {
    id: "4",
    question: "Koja je liga prva rangirana na svetu?",
    answers: ["Premier Ligue", "La liga", "Bundes liga", "Serie A"],
    points: 10,
    correct: "Premier Ligue",
  },
  {
    id: "5",
    question: "Gde se odrzavalo Svetsko Prvenstvo godine 2015",
    answers: ["Morroco", "Albania", "America", "Nije se odrzavalo tada"],
    points: 10,
    correct: "Nije se odrzavalo tada",
  },
];
let possiblepoints = 0;
for (let i = 0; i <= questions.length - 1; i++) {
  possiblepoints = possiblepoints + questions[i].points;
}
let points = 0;
let i = 0;
let answer = "";
let isClicked = true;
let pitanje = document.getElementById("pitanje");
let odgovor1 = document.getElementById("odgovor1");
let odgovor2 = document.getElementById("odgovor2");
let odgovor3 = document.getElementById("odgovor3");
let odgovor4 = document.getElementById("odgovor4");
let point = document.getElementById("point");
const SubmitAnswer = (num, ans) => {
  if (ans === questions[i].correct) {
    switch (num) {
      case 1:
        odgovor1.style.backgroundColor = "green";
        break;
      case 2:
        odgovor2.style.backgroundColor = "green";
        break;
      case 3:
        odgovor3.style.backgroundColor = "green";
        break;
      case 4:
        odgovor4.style.backgroundColor = "green";
        break;
    }
    setTimeout(() => {
      points = points + questions[i].points;
      i = i + 1;
      if (questions[i] === undefined) {
        return EndTest();
      }
      return StartTest();
    }, 1000);
  } else {
    switch (num) {
      case 1:
        odgovor1.style.backgroundColor = "red";
        break;
      case 2:
        odgovor2.style.backgroundColor = "red";
        break;
      case 3:
        odgovor3.style.backgroundColor = "red";
        break;
      case 4:
        odgovor4.style.backgroundColor = "red";
        break;
    }
    setTimeout(() => {
      i = i + 1;
      if (questions[i] === undefined) {
        return EndTest();
      }
      return StartTest();
    }, 1000);
  }
};
const StartTest = () => {
  odgovor1.style.backgroundColor = "";
  odgovor2.style.backgroundColor = "";
  odgovor3.style.backgroundColor = "";
  odgovor4.style.backgroundColor = "";
  isClicked = true;
  pitanje.textContent = questions[i].question;
  odgovor1.textContent = questions[i].answers[0];
  odgovor2.textContent = questions[i].answers[1];
  odgovor3.textContent = questions[i].answers[2];
  odgovor4.textContent = questions[i].answers[3];
  odgovor1.onclick = () => {
    if (isClicked) {
      isClicked = false;
      answer = questions[i].answers[0];
      SubmitAnswer(1, answer);
    }
  };
  odgovor2.onclick = () => {
    if (isClicked) {
      isClicked = false;
      answer = questions[i].answers[1];
      SubmitAnswer(2, answer);
    }
  };
  odgovor3.onclick = () => {
    if (isClicked) {
      isClicked = false;
      answer = questions[i].answers[2];
      SubmitAnswer(3, answer);
    }
  };
  odgovor4.onclick = () => {
    if (isClicked) {
      isClicked = false;
      answer = questions[i].answers[3];
      SubmitAnswer(4, answer);
    }
  };
};
const EndTest = () => {
  window.location.href = "succes.html?points=" + points;
  localStorage.setItem("points", possiblepoints);
};
StartTest();
