var wins = "0";
var losses = "0";
var targetScore;
var myScore;
var greenmush;
var redmush;
var posionmush;
var goldmush;


function newGame(){
    targetScore = Math.floor(Math.random()* 100) + 21;
    myScore = 0;
    var greenmush = Math.floor(Math.random()*12)+1;
    var redmush = Math.floor(Math.random()*12)+1;
    var poisonmush = Math.floor(Math.random()*12)+1;
    var goldmush = Math.floor(Math.random()*12)+1;
    $("h3.targetscore").html(targetScore);
    $("h3.score").html(myScore);
    $("div.wins").html(wins);
    $("div.losses").html(losses);
    $('.greenmush').attr('value', greenmush);
    $('.redmush').attr('value', redmush);
    $('.poisonmush').attr('value', poisonmush);
    $('.goldmush').attr('value', goldmush);
}
// MAIN GAME PART
newGame();

$(".mush").click(function(){
    myScore += parseInt($(this).val());
    $("h3.score").html(myScore);
    if (myScore > targetScore){
        losses++;
        $("div.losses").html(losses);
        $("h2.gameovermessage").text("You lost!")
        newGame();
    } else if(myScore === targetScore){
        wins++;
        $("div.wins").html(wins);
        $("h2.gameovermessage").text("You won!")
        newGame();
    };
});