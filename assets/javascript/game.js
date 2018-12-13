$(document).ready(function() {

var wins= 0;
var losses= 0;
var goal;
var total= 0;

function reset(){
    total=0;
    $("#total").empty();
    startGame();
}
function startGame() {
    goal =  Math.floor(Math.random() * 101) + 19;
   
    $('#targetNumber').html("<h3>Goal Number: </h3>" +goal);
    $('.crystal').each(function(){
        var y = Math.floor(Math.random()* 12) + 1;
        $(this).data("secret", y);
    })
}


startGame();

$('.crystal').on('click',function(){
    var x = $(this).data("secret");
    console.log(x);
    total = x + total;
    $("#total").html("Crystal Total: " +total);
    if (total === goal) {
        wins++;
    $("#wins").text("Wins: "+ wins);
    reset();
    }
    else if (total > goal) {
        losses++;
    $('#losses').text("Losses: "+ losses);
    reset();
    }


})









});