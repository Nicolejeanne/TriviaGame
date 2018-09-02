$(document).ready(function(e){
   
// variables
let userPick;
let correctAnswer = 0;
let wrongAnswer = 0;
let index = 0;
let count;
let intervalId;
let clockRunning = false;

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

//Display all question and answer options 
displayTrivia();
}

//Timer function
function timer(){
    if(!clockRunning){
        intervalId = setInterval(decrement, 1000);
        clockRunning = true;
    }
}
function decrement() {
    count--;
    $(".clock").text("Time remaining: " + count);
    if (count <= 0) {
        $(".clock").html("Time's up!");
        stop();
    }
    console.log(count);
}
function stop() {
    clearInterval(intervalId);
  }
  
 
//Display questions function
function displayTrivia() {
    count = 10;
    timer();
    $(".card-img-top").attr("src", movieQuestion[index].image);
    $(".card-header").html(movieQuestion[index].question);
    $(".button1").html(movieQuestion[index].choices[0]);
    $(".button2").html(movieQuestion[index].choices[1]);
    $(".button3").html(movieQuestion[index].choices[2]);
    index++;
 

$("button").on("click", function() {
    displayTrivia();
});
}
// Choosing an answer
$('.questions').on('click', function(e){
    userPick = $('button').data("value", movieQuestion[index].choices);
    // movieQuestion[index].validAnswer;
    if(userPick !== movieQuestion[index].validAnswer) {
        userpick = wrongAnswer;
   
    console.log("Wrong Answer!");
    wrongAnswer++;
    console.log(wrongAnswer);
   
   } else if (userPick === movieQuestion[index].validAnswer) {
       userPick = correctAnswer;
   console.log("Correct!!!")
   correctAnswer++;
   console.log(correctAnswer);
   }
});

initializeGame();

});
