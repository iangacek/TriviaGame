// $('start').on('click', function () {
//     $('#start').remove();
game.loadQuestion();


var questions = [{
    question: "In which zone does the Human race start?",
    answers: ["Dun Morogh", "Elwynn Forest", "Mulgore", "Eversong Woods"],
    correctAnswer: "Elwynn Forest",
}, {
    question: "Which boss in Molten Core helped summon Ragnaros?",
    answers: ["Shazzrah", "Sulfuron Harbinger", "Gehennas", "Majordomo Executus"],
    correctAnswer: "Majordomo Executus",
}, {
    question: "In Vanilla World of Warcraft, how much gold did Epic Riding cost (level 60)?",
    answers: ["100 gold", "500 gold", "1000 gold", "1500 gold"],
    correctAnswer: "1000 gold",
}, {
    question: "Who is the leader of the Black Dragonflight?",
    answers: ["Neltharion the Earth-Warder", "Alexstrasza the Life-Binder", "Ysera the Awakened", "Kalecgos the Spell-Weaver"],
    correctAnswer: "Neltharion the Earth-Warder",
}, {
    question: "Which Human kingdom betrayed the others in the Second War?",
    answers: ["Stormwind", "Stromgarde", "Lordaeron", "Alterac"],
    correctAnswer: "Alterac",
}, {
    question: "What is the name of the Lich King's sword?",
    answers: ["Devastation", "Frostmourne", "Sulfuras", "Thunderfury"],
    correctAnswer: "Frostmourne",
}, {
    question: "What was Illidan Stormrage known as?",
    answers: ["The Betrayer", "The Lightbringer", "The Damned", "The Noble"],
    correctAnswer: "The Betrayer",
}, {
    question: "Who is the current leader of The Horde?",
    answers: ["Warchief Thrall", "Warchief Garrosh Hellscream", "Warchief Vol'jin", "Warchief Sylvanas Windrunner"],
    correctAnswer: "Warchief Sylvanas Windrunner",
}, {
    question: "Who is the current leader of The Alliance?",
    answers: ["Jaine Proudmoore", "Muradin Bronzebeard", "Anduin Wrynn", "Varian Wrynn"],
    correctAnswer: "Anduin Wrynn",
}, {
    question: "Who was Jaina Proudmoore's Mentor?",
    answers: ["Herself", "Antonidas", "Khadgar", "Medivh"],
    correctAnswer: "Antonidas",
}];

var game = {
    questions: questions,
    currentQuestion: 0,
    timeCounter: 15,
    correct: 0,
    incorrect: 0,
    countdownTimer: function () {
        game.timeCounter--;
        $('#timeCounter').html(game.timeCounter);
        if (game.timeCounter <= 0) {
            console.log("Time's Expired");
            game.timerExpire();
        }
    },
    loadQuestion: function () {
        timer = setInterval(game.timeCounter, 1000);
        $('#subwrapper').html('<h2>' + questions[game.currentQuestion].question + '</h2>');
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $('#subwrapper').append('<button class="answer-button" id="button-'+ i +'" data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
        }
    },
    nextQuestion: function () {

    },
    timerExpire: function () {

    },
    results: function () {

    },
    clicked: function () {

    },
    correctAnswers: function () {

    },
    incorrectAnswers: function () {

    },
    resetGame: function () {

    }
}


// $(document).ready(function(){//I need jQuery!

//     var questions = [{
//         question:"What color is the background?",
//         a:"red"
//         b:"blue"
//         c:"purple"
//     }]

//     var generateQuestion = function(obj){

//         // We want to get here:
//         // <form>
//         // <h2> question1: </h2>

//         var form = $("<form>");
//         var question = $('<h2>').text(obj.question);
//         var aDiv = $('<div>');
//         var bDiv = $('<div>');
//         var cDiv = $('<div>');
//         var a = $('<input type="radio">').attr('name', obj.name);
//         aDiv.append(a);
//         aDiv.append(obj.a);
//         var a = $('<input type="radio">').attr('name', obj.name);
//         bDiv.append(b);
//         bDiv.append(obj.b);
//         var a = $('<input type="radio">').attr('name', obj.name);
//         cDiv.append(c);
//         cDiv.append(obj.c);

//         if(obj.correct === "a"){
//             a.attr('correct', "true");
//         } else if (obj.correct)

//         form.append(question);
//         form.append(aDiv);
//         form.append(bDiv);
//         form.append(cDiv);

//         $('questions').append(form);
//     }

// })