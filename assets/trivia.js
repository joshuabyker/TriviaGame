var NumOfQuestions = 10;
var NumofChoices = 3;
var WrongAnswers = 0;
var CorrectAnswers = 0;
var currentSelection="";
var Answer = new Array(10);
Answer[0] = "Sting";
Answer[1] = "Blue";
Answer[2] = "Holly";
Answer[3] = "DickGrayson";
Answer[4] = "Thor";
Answer[5] = "ShadowClonejutsu";
Answer[6] = "KeanuReeves";
Answer[7] = "Pluto";
Answer[8] = "IndianaJones";
Answer[9] = "Europe";




$(".btn").on("click", function (event) {
    console.log("I've Been clicked");
    
    for (i = 0; i < Answer.length; i++) {
        if (currentSelection == Answer) {
            CorrectAnswers++;
        } else{}
    }

    function checkAnswer() {
        score = Math.floor(CorrectAnswers / NumOfQuestions * 100);
    alert ("You got a" + score);

    }
}

    
   



























)
