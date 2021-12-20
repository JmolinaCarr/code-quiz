var timerEl = document.getElementById('countdown')
var timeLeft = 30;
var score = 0;
var questions = [
    {
        question: "what does the ! mean?",
        answer: {
            A: "excited",
            B: "yelling",
            C: "logic not",
            D: "All the above",
        },
        correctAnswer: "C"
    },
    {
        question: "Which of the following type of variable is visible only within a function where it is defined?",
        answer: {
            A: "global variable",
            B: "local variable",
            C: "Both of the above",
            D: "None of the aboce",
        },
        correctAnswer: "B"
    },
    {
        question: "Which built-in method sorts the elements of an array?",
        answer: {
            A: "changeOrder(order)",
            B: "order()",
            C: "sort()",
            D: "None of the above",
        },
        correctAnswer: "C"
    },
    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        answer: {
            A: "JavaScript variable names must begin with a letter or the underscore character",
            B: "JavaScript variable anes are case sensitive",
            C: "Both of the above",
            D: "None of the above",
        },
        correctAnswer: "C"
    },
    {
        question: "Which built-in method combines the text of two strings and returns a new string?",
        answer: {
            A: "append",
            B: "concat",
            C: "attach",
            D: "None of the above",
        },
        correctAnswer: "B"
    }

]

document.getElementById*("start-quiz").addEventListener("click", startGame, false);
    function startGame() {};

    var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);


// Timer that counts down from 30
function countdown() {
    var timeLeft = 30;
//message display when time is out
var displayMessage = "Time is up!";

}

countdown();


//onClick on the startButton start quiz and timer coundown 60 seconds.
//answer first question correct get 5 pts
//if answer question reduce 5 second from current time.
// if time runs out message "time is up? 
//else continue answering questions"
//once time has run out ask for initials and add them to the high score stored in local storage.
