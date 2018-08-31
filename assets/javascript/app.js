$(document).ready(function(e){

// variables
let userPick;
let correctAnswer = 0;
let wrongAnswer = 0;
let question = 0;
let count = 10;

let movieQuestion = [{
    question: "Which of the following is NOT one of Derek Zoolander's signature looks?",
    choices: ["Magnum", "Blue Steel", "Kryptonite"],
    validAnswer: 2
}, {
    question: "What is the name of Moana's pet pig in her namesake movie?",
    choices: ["Pua", "Hei Hei", "Te Fiti"],
    validAnswer: 0
}, {
    question: "Which Jane Austen book is the movie <i>Clueless</i> based on?",
    choices: ["Emma", "Persuasion", "Pride and Prejudice"],
    validAnswer: 0
}];

// function to switch between screen views
function showView(viewName) {
    $('.view').hide();
    $('#' + viewName).show();
}
$('[data-launch-view]').click(function (e) {
    e.preventDefault();
    var viewName = $(this).attr('data-launch-view');
    showView(viewName);
});
// end of screen view function

// Initializing the game
function initializeGame(){

//When "Let's Play" button is clicked
$(".btn-primary").click(function(){
    
//Set timer to time remaining, count down per second
counter = setInterval(timer, 1000);

//Display all question and answer options 
displayTrivia();
});
}
//Timer function
function timer(){
    count--;
    if (count <= 0) {
        clearInterval(counter);
        $(".timer").html("Time's up!");
    }
    $(".timer").html("Time remaining: " + count);
} 
    
//Display questions function
function displayTrivia() {
    $(".card-header").html(movieQuestion[0].question);
    question++;

    let choicesArr = movieQuestion[0].choices;

    for (let i = 0; i < choicesArr.length; i++) {
        let radioButton = $('<radio>');
        radioButton.text(choicesArr[i]);
        radioButton.attr('data-id', i);
        $(".label1").append(radioButton);
        
    }

} 
// Choosing an answer   
$('.blockquote').on('click', 'radio', function(e){
    userPick = $(this).data("id");
    movieQuestion[0].validAnswer;
    if(userPick !== movieQuestion[0].validAnswer) {
   
    $('.blockquote').text("Wrong Answer! The correct answer is" + movieQuestion[0].validAnswer);
    incorrectAnswer++;
   
   } else if (userPick === movieQuestion[0].validAnswer) {
   $('.blockquote').text("Correct!!! The pet tiger name is" + movieQuestion[0].validAnswer);
   correctAnswer++;
   
   }
});

initializeGame();

});
