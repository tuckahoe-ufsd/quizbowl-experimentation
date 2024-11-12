const button = document.querySelector('.button'); 
const  document.getElementById('message').innerText = displayMessage;

let isCorrect = true;


button.addEventListener('click', () => {
    if (isCorrect) {
         displayMessage = "Correct";
    } else {
        displayMessage = "Wrong, Try Again";
}
    isCorrect = !isCorrect;
});
