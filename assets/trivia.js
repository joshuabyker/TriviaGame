


  var NumOfQuestions=10;
  var NumofChoices=3;
  var WrongAnswers=0;
  var CorrectAnswers=0;
  var Answers= new Array(10);
  Answers[0]="Sting"    ;
  Answers[1]="Blue";
  Answers[2]="Holly";
  Answers[3]="DickGrayson";
  Answers[4]="Thor";
  Answers[5]="ShadowClonejutsu";
  Answers[6]="KeanuReeves";
  Answers[7]="Pluto";
  Answers[8]="IndianaJones";
  Answers[9]="Europe";
  function checkAnswer(form){
    let i=0;
    var currentSelection;
      for(i=0;i<Answers.length;i++){
          if(currentSelection == Answers){
              CorrectAnswers++;
          }else(CorrectAnswers+0)
      }
      if(currentSelection===!Answers){
          WrongAnswers++;
      }

  }

score = Math.floor(CorrectAnswers/NumOfQuestions*100);
form.percentage.value == score+ "%";

$("submit").on("click",function(){
    console.log("AUGH, I've Been clicked")
});






























