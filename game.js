$(document).ready(function(){//I need jQuery!

    var questions = [{
        question:"What color is the background?",
        a:"red"
        b:"blue"
        c:"purple"
    }]

    var generateQuestion = function(obj){

        // We want to get here:
        // <form>
        // <h2> question1: </h2>

        var form = $("<form>");
        var question = $('<h2>').text(obj.question);
        var aDiv = $('<div>');
        var bDiv = $('<div>');
        var cDiv = $('<div>');
        var a = $('<input type="radio">').attr('name', obj.name);
        aDiv.append(a);
        aDiv.append(obj.a);
        var a = $('<input type="radio">').attr('name', obj.name);
        bDiv.append(b);
        bDiv.append(obj.b);
        var a = $('<input type="radio">').attr('name', obj.name);
        cDiv.append(c);
        cDiv.append(obj.c);

        if(obj.correct === "a"){
            a.attr('correct', "true");
        } else if (obj.correct)

        form.append(question);
        form.append(aDiv);
        form.append(bDiv);
        form.append(cDiv);

        $('questions').append(form);
    }

})