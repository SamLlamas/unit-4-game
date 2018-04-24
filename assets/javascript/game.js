

$(document).ready(function() {
    var myNumber = 0;
    var loses = 0;
    var wins = 0;
    $("#guess").text(String(Math.floor(Math.random() * 102) + 19));
    var scoreToGuess = parseInt($("#guess").text());

    function initializeGame(){
        $("#guess").text(String(Math.floor(Math.random() * 102) + 19));
        scoreToGuess = parseInt($("#guess").text());
        myNumber = 0;
        for (i = 1; i<5;i++){
            $("#crystal"+String(i)).val(Math.floor(Math.random() * 12) + 1);
            console.log("#crystal"+String(i)+": "+ $("#crystal"+String(i)).val())
        }
        $("#myscore").text(0);
        console.log("new score is: " + myNumber);
    }

    for (i = 1; i<5;i++){
        $("#crystal"+String(i)).val(Math.floor(Math.random() * 12) + 1);
        console.log("#crystal"+String(i)+": "+ $("#crystal"+String(i)).val())
    }

    $("#crystals").on("click", ".adder", function() {
        
        myNumber += parseInt($(this).val());
        $("#myscore").html(myNumber);
        if (myNumber === scoreToGuess){
            console.log("final winning score is: " + myNumber);
            wins += 1;
            console.log("Wins: "+wins)
            $("#wins").text("Wins: "+wins);
            initializeGame();          
        }
        else if (myNumber > scoreToGuess){
            console.log("final losing score is: " + myNumber);
            loses += 1;
            console.log("loses: "+loses)
            $("#loses").text("loses: "+loses);
            initializeGame();
        }

    });





});
