// function checkAnswer () {
//     // Identify correct answer
//     const correctAnswer = "4";

//     const checkedRadioButton = document.querySelector('input[name="quiz"]:checked');

//     let userAnswer;
//     if (checkedRadioButton) {
//         userAnswer = checkedRadioButton.value;
//     } else {
//         userAnswer = null;
//     }

//     //compare the user's answer with the correct answer

//     const feedbackElement = document.getElementById('feedback');
//     let message;

//     if (userAnswer === correctAnswer) {
//         message = "Correct! Well done.";
//     } else {
//         message = "That's incorrect. Try again!"
//     }

//     feedbackElement.textContent = message;
// } 

// //add an event listener
//  const submitButton = document.getElementById('submit-answer');
//  submitButton.addEventListener('click', checkAnswer);

function checkAnswer() {
    const correctAnswer = "4";

    const checkedRadio = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = checkedRadio ? checkedRadio.value : null;

    // Compare the user's answer with the correct answer
    const feedbackElement = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the "Submit Answer" button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
