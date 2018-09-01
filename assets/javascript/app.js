$(document).ready(function(e){
   
// variables
let userPick;
let correctAnswer = 0;
let wrongAnswer = 0;
let index = 0;
let count;
let counter;

let movieQuestion = [{
    question: "Which of the following is NOT one of Derek Zoolander's signature looks?",
    choices: ["Magnum", "Blue Steel", "Kryptonite"],
    image: ["../TriviaGame/assets/images/zoolander.jpg"],
    validAnswer: 2
}, {
    question: "What is the name of Moana's pet pig in her namesake movie?",
    choices: ["Pua", "Hei Hei", "Te Fiti"],
    image: ["../TriviaGame/assets/images/moana.jpg"],
    validAnswer: 0
}, {
    question: "Which Jane Austen book is the movie <i>Clueless</i> based on?",
    choices: ["Emma", "Persuasion", "Pride and Prejudice"],
    image: ["../TriviaGame/assets/images/clueless.jpg"],
    validAnswer: 0
}];


// Initializing the game
function initializeGame(){

//Set timer to time remaining, count down per second

//Display all question and answer options 
displayTrivia();

}

//Timer function
function timer(){
    count--;
    console.log(count);
    $(".timer").html("Time remaining: " + count);
    if (count <= 0) {
        clearInterval(counter);
        $(".timer").html("Time's up!");
    } 
} 

//Display questions function
function displayTrivia() {
    count = 10;
    counter = setInterval(timer, 1000);
    $(".card-img-top").attr("src", movieQuestion[index].image);
    $(".card-header").html(movieQuestion[index].question);
    $(".button1").html(movieQuestion[index].choices[0]);
    $(".button2").html(movieQuestion[index].choices[1]);
    $(".button3").html(movieQuestion[index].choices[2]);
    index++;
} 

$("button").click(function(){
    displayTrivia();
});

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
