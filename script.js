const button = document.querySelector('.button'); 
const  document.getElementById('message').innerText = displayMessage;

let isCorrect = true;

button.addEventListener('click', () => {
    if (isCorrect) {
         displayMessage = "Correct";
         console.log("meeeeeh");
    } else {
        displayMessage = "Wrong, Try Again";
        console.log("meeeeeh");
}
    isCorrect = !isCorrect;
});

let answerList = ['1', '2', '3']
const question = document.querySelector('.shell')
question.textContent = answerList[0]

let score = 0; 
