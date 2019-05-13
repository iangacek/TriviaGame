// $('start').on('click', function () {
//     $('#start').remove();
//     game.presentQuestion();
// })

$(document).on('click', '.btn-primary', function (e) {
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
        $('#buttons').html('<h2>' + questions[game.currentQuestion].question + '</h2>');
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $('#buttons').append('<button class="btn-primary" id="button-' + i + '" data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
            console.log(questions[game.currentQuestion].answers[i]);
        }
    },
    nextQuestion: function () {
        game.timeCount = 15;
        $('#counter').html(game.counter);
        clearInterval(timer);
        game.currentQuestion++;
        game.presentQuestion();
    },
    countdownTime: function () {
        game.timeCount--;
        $('#counter').html("Time left: " + game.timeCount);
        console.log(game.timeCount);
        if (game.timeCount <= 0) {
            game.timeExpire();
        }
    },
    timeExpire: function () {
        clearInterval(timer);
        game.incorrect++;
        $('#buttons').html('<h3>You took too long! The correct answer was ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 2 * 1000);
        } else {
            setTimeout(game.nextQuestion, 2 * 1000);
        }
        console.log("Took too long");

    },
    clicked: function (e) {
        clearInterval(game.timeCount);
        if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
            game.correctAnswers();
        } else {
            game.incorrectAnswers();
        }
    },
    correctAnswers: function () {
        game.correct++;
        $('#buttons').html('<h3>Correct!</h3>');
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
        $('#buttons').html('<h3>Incorrect!!</h3>');
        console.log("Incorrect");
    },
    results: function () {
        $('#buttons').html("<h3>Game completed!</h3>");
        $('#buttons').append("<h4>Correct Answers: " + game.correct + "</h3>");
        $('#buttons').append("<h4>Incorrect Answers: " + game.incorrect + "</h4>");
    },
}

game.presentQuestion();