var score = 0;


window.onload = function(){
    document.getElementById("sound").play();
}

  

function quizAppear(){
    $("#quizContainer").css("display","block");
    
}

function start(){
    $("#quizWrapper").css("display", "none");
    $("#questions").append(" <p>All of these are ways to become infected; except?</p> ")
    $("#dropplets").text("Respiratory Dropplets.");
    $("#Aerosol").text("Particles of the virus suspended in the air.");
    $("#surfaces").text("Touching an infected surface.");
    $("#5g").text("5g wave radiation");

    quizAppear();


   
}

function correctAns1(){
    $(".option").css("display", "none");
    var message = $('<p id="Message">');
    message.text("Correct! The answer is 5g waves!").css({"color":"white","font-family":"Righteous","font-size":"30px","text-align":"center"});
    message.appendTo("#answerCont");
    var img = $('<img id="Giphy">').css({"display":"block","margin":"auto"});
    img.attr("src","https://media.giphy.com/media/KPlVbFwZGQWdi/giphy.gif");
    img.appendTo("#answerCont");
    setTimeout(question2,3000);
    score++;
}

function wrongAns1(){
    $(".option").css("display","none");
    var message = $('<p id="Message">');
    message.text("Wrong! The answer was 5g waves!").css({"color":"white","font-family":"Righteous","font-size":"30px","text-align":"center"});
    message.appendTo("#answerCont");
    var img = $('<img id="Giphy">').css({"display":"block","margin":"auto"});
    img.attr("src","https://media.giphy.com/media/ceeN6U57leAhi/giphy.gif");
    img.appendTo("#answerCont");
    setTimeout(question2,5000);
    
}

function question2(){
    $("#questions").text("Where was the first reported case of COVID19?");
    $("#Giphy").css("display","none");
    $("#Message").css("display","none");
    $("#Taiwan").css("display","block").text("Taiwan");
    $("#Wuhan").css("display","block").text("Wuhan");
    $("#Italy").css("display","block").text("Italy");
    $("#Spain").css("display","block").text("Spain");
}

function  wrongAns2(){
    $(".option").css("display","none");
    var message = $('<p id="Message1">');
    message.text("Wrong! The answer was Wuhan").css({"color":"white","font-family":"Righteous","font-size":"30px","text-align":"center"});
    message.appendTo("#answerCont");
    var img = $('<img id="Giphy1">').css({"display":"block","margin":"auto"});
    img.attr("src","https://media.giphy.com/media/xUPGGq0JQODptyl9Kw/giphy.gif");
    img.appendTo("#answerCont");
    setTimeout(question3,5000);
}

function correctAns2(){
    $(".option").css("display","none");
    var message = $('<p id="Message2">');
    message.text("Correct! Wuhan was the epicenter").css({"color":"white","font-family":"Righteous","font-size":"30px","text-align":"center"});
    message.appendTo("#answerCont");
    var img = $('<img id="Giphy2">').css({"display":"block","margin":"auto"});
    img.attr("src","https://media.giphy.com/media/VRa3YCyi3JSWk/giphy.gif");
    img.appendTo("#answerCont");
    setTimeout(question3,5000);
    score++;
}

function  question3(){
    $("#Message1").css("display","none");
    $("#Message2").css("display","none");
    $("#Giphy2").css("display","none");
    $("#Giphy1").css("display","none");
    $("#questions").text("Why are we practicing social distancing?");
    $("#recession").css("display","block").text("It is a conspiracy to throw country into a recession.");
    $("#flattenCurve").css("display","block").text("To flatten the curve and avoid hospital overfills.");
    $("#opression").css("display","block").text("To opress us and make us miserable.");
    $("#killVirus").css("display","block").text("To kill the virus 100%");

}

function wrongAns3(){
    $(".option").css("display","none");
    var message = $('<p id=Message3>');
    message.text("Sorry! That is the wrong answer! It is to flatten the curve!").css({"color":"white","font-family":"Righteous","font-size":"30px","text-align":"center"});
    message.appendTo("#answerCont");
    var img = $('<img id="Giphy3">').css({"display":"block","margin":"auto","width":"450px"});
    img.attr("src","https://media.giphy.com/media/15aGGXfSlat2dP6ohs/giphy.gif");
    img.appendTo("#answerCont");
}

function correctAns3(){
    $(".option").css("display","none");
    var message = $('<p id=Message4>');
    message.text("Yes! It is to save the resources we have and ensure we have enough.").css({"color":"white","font-family":"Righteous","font-size":"30px","text-align":"center"});
    message.appendTo("#answerCont");
    var img = $('<img id="Giphy4">').css({"display":"block","margin":"auto","width":"450px"});
    img.attr("src","https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif");
    img.appendTo("#answerCont");
    score++;
    setTimeout(finalScore,5000);
}

function finalScore(){
    $(".option").css("display","none");
    $(".avatarImg").css("display","none");
    $("#questions").css("display","none");
    $("#answerCont").css("display","none");
    var congrats = $('<p id="finalMsg">');
    congrats.text("Your Final Score Is").css({"color":"white","font-family":"Righteous","font-size":"50px","text-align":"center"});
    congrats.appendTo("#quizContainer");
    var points = $('<p>');
    points.text(score + " / 3 " ).css({"color":"white","font-family":"Righteous","font-size":"100px","text-align":"center"});
    points.appendTo("#quizContainer");
}