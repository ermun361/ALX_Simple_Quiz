function checkAnswer () {
    // Identify correct answer
    const correctAnswer = "4";

    const checkedRadioButton = document.querySelector('input[name="quiz"]:checked');

    let userAnswer;
    if (checkedRadioButton) {
        userAnswer = checkedRadioButton.value;
    } else {
        userAnswer = null;
    }

    //compare the user's answer with the correct answer

    const feedbackElement = document.getElementById('feedback');
    let message;

    if(userAnswer === correctAnswer) {
        message = "Correct! Well done.";
    } else {
        message = "That's incorrect. Try again!"
    }

    feedbackElement.textContent = message;
} 

//add an event listener
 const submitButton = document.getElementById('submit-answer');
 submitButton.addEventListener('click', checkAnswer);
