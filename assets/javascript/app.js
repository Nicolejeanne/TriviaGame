$(document).ready(function(e){

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

// variables
let userPick;
let correctAnswer = 0;
let wrongAnswer = 0;
let question = 0;
let count = 0;

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

// Initializing the game
function initializeGame(){
    $(".btn").click(function(){
        $(this).hide();
        counter = setInterval(timer, 12000); 
        displayTrivia();
        }); 

        function timer(){
            count--;
            if (count <= 0) {
             clearInterval(counter);
             return;
            }
            $(".card-body").html("Time remaining: " + "00:" + count + " secs");
        }

        function displayTrivia() {
            $(".card-header").html(movieQuestion[0].question);
            question++;
            
              var choicesArr = movieQuestion[0].choices;
              var buttonsArr = [];
            
              for (let i = 0; i < choicesArr.length; i++) {
                var button = $('<radio>');
                button.text(choicesArr[i]);
                button.attr('data-id', i);
                $('.defaultInline1').append(button);
               }
            
              } 
}

initializeGame();
});
