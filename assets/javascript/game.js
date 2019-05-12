// $('start').on('click', function () {
//     $('#start').remove();
//     game.presentQuestion();
// })

$(document).on('click', '.answer-button', function (e) {
    game.clicked(e);
})

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
    timeCount: 15,
    correct: 0,
    incorrect: 0,
    presentQuestion: function () {
        timer = setInterval(game.countdownTime, 1000);
        console.log(questions[game.currentQuestion].question);
        $('#subwrapper').html('<h2>' + questions[game.currentQuestion].question + '</h2>');
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $('#subwrapper').append('<button class="answer-button" id="button-' + i + '" data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
            console.log(questions[game.currentQuestion].answers[i]);
        }
    },
    nextQuestion: function () {
        game.timeCount = 15;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.presentQuestion();
    },
    countdownTime: function () {
        game.timeCount--;
        $('#counter').html(game.timeCount);
        console.log(game.timeCounter);
        if (game.timeCount <= 0) {
            game.timeExpire();
        }
    },
    timeExpire: function () {
        clearInterval(game.timeCount);
        game.incorrect++;
        $('#subwrapper').html('<h3>You took too long! The correct answer was' + questions[game.currentQuestion].correctAnswer + '</h3>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 2 * 1000);
        } else {
            setTimeout(game.nextQuestion, 2 * 1000);
        }
        console.log("Took too long");
    },
    results: function () {
        $('#subwrapper').html("<h3>Game completed!</h3>");
        $('#subwrapper').append("<h4>Correct Answers: " + game.correct + "</h3>");
        $('#subwrapper').append("<h4>Incorrect Answers: " + game.incorrect + "</h4>");
    },
    clicked: function (e) {
        clearInterval(game.timeCounter);
        if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
            game.correctAnswers();
        } else {
            game.incorrectAnswers();
        }
    },
    correctAnswers: function () {
        game.correct++;
        $('#subwrapper').html('<h3>Correct!</h3>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 2 * 1000);
        } else {
            setTimeout(game.nextQuestion, 2 * 1000);
        }
        console.log("Correct");
    },
    incorrectAnswers: function () {
        game.incorrect++;
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 2 * 1000);
        } else {
            setTimeout(game.nextQuestion, 2 * 1000);
        }
        $('#subwrapper').html('<h3>Incorrect!!</h3>');
        console.log("Incorrect");
    },
    resetGame: function () {

    }
}

game.presentQuestion();

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