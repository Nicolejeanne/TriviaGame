$(document).ready(function(e){
   
// variables
// let userPick;
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
}, {
    question: "Who played Ricky Bobby's nemesis, Jean Girard, in <i>Talladega Nights</i>?",
    choices: ["Will Ferrell", "Sacha Baron Cohen", "Amy Adams"],
    image: ["../TriviaGame/assets/images/talladega.jpg"],
    validAnswer: 1
}, {
    question: "In <i>Bridesmaids</i>, what 90's band performs at the wedding?",
    choices: ["Britney Spears", "Blink 182", "Wilson Phillips"],
    image: ["../TriviaGame/assets/images/bridesmaids.jpg"],
    validAnswer: 2
}, {
    question: "Before Deadpool's healing ability was given to him, what did he suffer from?",
    choices: ["cancer", "a broken foot", "illiteracy"],
    image: ["../TriviaGame/assets/images/deadpool.jpg"],
    validAnswer: 0
}, {
    question: "What is the name of the bar that Patrick Swayze is hired to clean up in <i>Road House</i>?",
    choices: ["Clubhouse", "Double Deuce", "Road House"],
    image: ["../TriviaGame/assets/images/roadhouse.jpg"],
    validAnswer: 1
}, {
    question: "Which Hawaiian resort is featured in <i>Forgetting Sarah Marshall</i>?",
    choices: ["Turtle Bay Resort", "Four Seasons", "Grand Waikiki"],
    image: ["../TriviaGame/assets/images/marshall.jpg"],
    validAnswer: 0
}, {
    question: "What is the name of the featured female acapella group in <i>Pitch Perfect</i>?",
    choices: ["Das Sound Machine", "Treblemakers", "Bellas"],
    image: ["../TriviaGame/assets/images/perfect.jpg"],
    validAnswer: 0
}, {
    question: "In <i>Wet Hot American Summer</i>, the camp chef seeks advice from what?",
    choices: ["can of mixed vegetables", "his brother", "nature"],
    image: ["../TriviaGame/assets/images/summer.jpg"],
    validAnswer: 0
}];


// Initializing the game
function initializeGame(){


//Display all question and answer options 
displayTrivia();
}

//Timer function
function timer(){
    count = 5;
    if(!clockRunning){
        intervalId = setInterval(decrement, 1000);
        clockRunning = true;
    }
}
function decrement() {
    count--;
    $(".clock").text("Time remaining: " + count);
    if (count === 0) {
        // $(".clock").html("Time's up!");
        showScore();
        stop();
    }
    console.log(count);
}
function stop() {
    clearInterval(intervalId);
  }
  
 
//Display questions function
function displayTrivia() {
    timer();
    $(".card-img-top").attr("src", movieQuestion[index].image);
    $(".card-header").html(movieQuestion[index].question);
    $(".button1").html(movieQuestion[index].choices[0]);
    $(".button2").html(movieQuestion[index].choices[1]);
    $(".button3").html(movieQuestion[index].choices[2]);
    userPick();
}

$("button").on("click", function() {
    index++;
    displayTrivia();
    
    
});
userPick();
// Choosing an answer
function userPick() {
if (movieQuestion[index] === movieQuestion[0]) {
    $(".button3").click(function() {
        correctAnswer++;
        console.log("youve got " + correctAnswer);
        });
} /*else {
        wrongAnswer++;
        console.log("you're wrong " + wrongAnswer)
    }*/

else if (movieQuestion[index] === movieQuestion[1]) {
    $(".button1").click(function() {
        correctAnswer++;
        console.log("youve got " + correctAnswer);
        /*$(".button1").off("click", function() {
            correctAnswer++;
        console.log("youve got " + correctAnswer);
    });*/
});
} else if (movieQuestion[index].question === movieQuestion[2].question) {
    $(".button1").click(function() {
        correctAnswer++;
        console.log("youve got " + correctAnswer);
});
} else if (movieQuestion[index].question === movieQuestion[3].question) {
    $(".button2").click(function() {
        correctAnswer++;
        console.log("youve got " + correctAnswer);
});
} else if (movieQuestion[index].question === movieQuestion[4].question) {
    $(".button3").click(function() {
        correctAnswer++;
        console.log("youve got " + correctAnswer);
});
} else if (movieQuestion[index] === movieQuestion[5]) {
    $(".button1").click(function() {
        correctAnswer++;
        console.log("youve got " + correctAnswer);
});
} else if (movieQuestion[index] === movieQuestion[6]) {
    $(".button2").click(function() {
        correctAnswer++;
        console.log("youve got " + correctAnswer);
});
} else if (movieQuestion[index] === movieQuestion[7]) {
    $(".button1").click(function() {
        correctAnswer++;
        console.log("youve got " + correctAnswer);
});
} else if (movieQuestion[index] === movieQuestion[8]) {
    $(".button1").click(function() {
        correctAnswer++;
        console.log("youve got " + correctAnswer);
});
} else if (movieQuestion[index] === movieQuestion[9]) {
    $(".button1").click(function() {
        correctAnswer++;
        console.log("youve got " + correctAnswer);
});
} else {
    wrongAnswer++;
    console.log("you're wrong " + wrongAnswer)
}
}



/*$('.questions').on('click', 'button', function(){
    userPick = $('button').data("value", movieQuestion[index].choices[index]);
        if ()
    // userPick = $(this).data("id");
    // console.log(userPick);
    /*movieQuestion[index].validAnswer;
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
});*/

function showScore() {
if(movieQuestion[index] <= movieQuestion.length || count === 0) {
    $(".clock").html("Time's up!");
    $(".card-header").html("Your Score is:");
    $(".button1").html("Correct Answers: " + correctAnswer);
    $(".button2").html("Wrong Answers: " + wrongAnswer);
    $(".card-img-top").hide();
    $(".button3").html("Play Again? Click here!");
    $(".button3").css({"background-color": "#9F0307", "color": "white"});
    $(".button3").click(function() {
        window.location.reload();
});
}
}

initializeGame();

});
