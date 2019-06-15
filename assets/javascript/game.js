var wins = "0";
var losses = "0";
var targetScore = Math.floor(Math.random()* 100) + 21
var myScore;

function newGame(){
    targetScore = Math.floor(Math.random()* 100) + 21;
    myScore = 0;
    $("h3.targetscore").html(targetScore);
    $("h3.score").html(myScore);
    $("div.wins").html(wins);
    $("div.losses").html(losses);
}
// MAIN GAME PART
newGame();

$(".mush").click(function(){
    mushValue = Math.floor(Math.random()*12)+1
    myScore += mushValue;
    $("h3.score").html(myScore);
    if (myScore > targetScore){
        losses++;
        $("div.losses").html(losses);
        newGame();
    } else if(myScore === targetScore){
        wins++;
        $("div.wins").html(wins);
    };
});
