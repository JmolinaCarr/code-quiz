var timerEl = document.getElementById('countdown')
var timeLeft = 60;
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

var mainEl = document.getElementById('main');

var message = "Time is up!";



  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
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
}

// Timer that counts down from 30
function countdown() {
    var timeLeft = 30;

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();