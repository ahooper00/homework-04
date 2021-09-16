var startBtn = document.querySelector("#start-button");
var timerEl = document.querySelector("#timer-count");
var selectedAnswers = [];

// Need to have a sample of questions for the quiz
const myQuestions = [
    {
        question: "How would you style a HTML file?",
        answers: {
            a: 'Node.js',
            b: 'React',
            c: 'CSS',
            d: 'Google'
        },
        correctAnswer: 'c'
    },
    {
        question: "What term refers to 'introducing meaning to a web page'?",
        answers: {
            a: 'Soprano',
            b: 'Semantic',
            c: 'Seminar',
            d: 'Sematic'
        },
        correctAnswer: 'b'
    },
    {
        question: "What does HTML stand for?",
        answers: {
            a: "Hypertext Markup Language",
            b: "Hipstertext Market Language",
            c: "Hypotoast Madeup Language",
            d: "Homeostatis Monochrome Lifestyle"
        },
        correctAnswer: 'a'
    },
    {
        question: "What boolean operators does Javascript have?",
        answers: {
            a: '**, $$, !',
            b: '^^, %%, #',
            c: '&&, ||, !',
            d: '||, ++, $',
        },
        correctAnswer: 'c'
    },
    {
        question: "How would you comment out a line/s?",
        answers: {
            a: "//, /* */",
            b: "/- -/, ==",
            c: "//, ()",
            d: "<>, ~~",
        },
        correctAnswer: 'a'
    },
]

// A start button will begin the countdown and show the quiz questions one by one
startBtn.addEventListener("click", start)

var timeLeft = 19;
var currentQuestionIndex;

function start() {
    var countdownTimer = setInterval(function () {
        if (myQuestions.length <= selectedAnswers.length) {
            timerEl.textContent = '';
            clearInterval(countdownTimer);
        } else if (timeLeft >= 0) {
            timerEl.textContent = timeLeft + "s";
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(countdownTimer);
            alert("Out of time!")
        }
    }, 1000);
    showNextQuestion();
}

// Once an answer is selected, the next question is shown
function showNextQuestion() {
    if (currentQuestionIndex === undefined) {
        currentQuestionIndex = 0;
    } else if (currentQuestionIndex >= myQuestions.length - 1) {
        showResults();
    }
    else {
        currentQuestionIndex += 1;
    };
    var currentQuestion = myQuestions[currentQuestionIndex];
    console.log(currentQuestion.question);
    document.querySelector('#question-text').innerText = currentQuestion["question"];
    document.querySelector('#a').innerText = currentQuestion["answers"]["a"];
    document.querySelector('#b').innerText = currentQuestion["answers"]["b"];
    document.querySelector('#c').innerText = currentQuestion["answers"]["c"];
    document.querySelector('#d').innerText = currentQuestion["answers"]["d"];
}

// Gives a click event to all of the answer options
document.querySelector("#a").addEventListener('click', function () {
    selectedAnswers.push("a");
    showNextQuestion();
});

document.querySelector("#b").addEventListener('click', function () {
    selectedAnswers.push("b");
    showNextQuestion();
});

document.querySelector("#c").addEventListener('click', function () {
    selectedAnswers.push("c");
    showNextQuestion();
});

document.querySelector("#d").addEventListener('click', function () {
    selectedAnswers.push("d");
    showNextQuestion();
});

function showResults() {
    var score = 0;
    // showResults() will validate whether or not the correctAnswer has been selected for each question.
    // if the correctAnswer has been selected, give 1 point; if it has not been selected, give 0 points.
    // final score given at the end
    for (var i = 0; i < myQuestions.length; i++) {
        var selectedAnswer = selectedAnswers[i];
        var question = myQuestions[i];
        if (question.correctAnswer === selectedAnswer) {
            score += 1;
        }
    }
    document.querySelector("#score").innerHTML = "Your score is " + score + "!";
}
