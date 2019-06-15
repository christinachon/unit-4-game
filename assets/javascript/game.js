var wins = 0;
var losses = 0;
var targetScore = Math.floor(Math.random()* 100) + 21
var myScore;

function newGame(){
    targetScore;
    myScore = 0;
    $("h3.targetscore").html(targetScore);
}
// MAIN GAME PART
newGame();

$(".gold").click(function(){
    goldValue = Math.floor(Math.random()*12)+1
    myScore += goldValue;
    $("h3.score").html(myScore);
});
$(".green").click(function(){
    greenValue = Math.floor(Math.random()*12)+1
    myScore += greenValue;
    $("h3.score").html(myScore);
});
$(".poison").click(function(){
    poisonValue = Math.floor(Math.random()*12)+1
    myScore += poisonValue;
    $("h3.score").html(myScore);
});
$(".red").click(function(){
    redValue = Math.floor(Math.random()*12)+1
    myScore += redValue;
    $("h3.score").html(myScore);
});
