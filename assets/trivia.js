var NumOfQuestions = 10;
var NumofChoices =   3;
var WrongAnswers = 0;
var NotAnswered=0;
var CorrectAnswers = 0;

var UserGuess="";
var CheckAnswers=function(){};
CheckAnswers()
var one =$("#num1").children("input");
var two=$("#num2").children("input");
var three=$("#num3").children("input");
var four=$("#num4").children("input");
var five=$("#num5").children("input");
var six=$("#num6").children("input");
var seven=$("#num7").children("input");
var eight=$("#num8").children("input");
var nine=$("#num9").children("input");
var ten=$("#num10").children("input");

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

var Numbers;
Numbers={one,two,three,four,five,six,seven,eight,nine,ten}  
   

$(".btn").on("click", function CheckAnswers () {
    console.log("I've Been clicked");
    function score() {
        ($("#num1").attr("checked")==true);
        ($("#num2").attr("checked")==true);
        ($("#num3").attr("checked")==true);
        ($("#num4").attr("checked")==true);
        ($("#num5").attr("checked")==true);
        ($("#num6").attr("checked")==true);
        ($("#num7").attr("checked")==true);
        ($("#num8").attr("checked")==true);
        ($("#num9").attr("checked")==true);
        ($("#num10").attr("checked")==true);
    }
    if ($('input:radio[name="' + $(".questions").name + '"]:checked').val() === $(".questions").correct) {
    if(UserGuess===true){
        CorrectAnswers++;
    }else WrongAnswers++;
}
    var score=CorrectAnswers / NumOfQuestions * 100;{
        console.log(score);
      if(CorrectAnswers>WrongAnswers){
        alert("You Made a"+score+"Trivia God!");
    } 
    if(CorrectAnswers<WrongAnswers){
        alert("You made a"+score+"Uncultured Swine");
    
    }
}
})
