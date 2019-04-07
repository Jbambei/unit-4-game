//document ready copy/paste
$('document').ready(function(){});

/* STEPS
1)
*/


//set initial win/loss/score to zero
$("#numberOfLosses").text("0")
$("#numberOfWins").text("0")
$("#totalScoreBox").text("0")

//generate the random numbers needed 


var targetNumber=Math.floor(Math.random()*101+19) //target number generation

$("#randomNumber").text(targetNumber)
  // Appending random number to the randomNumber id in the html doc
  
  
  //4 gem number generation (assigned later)
var gemNumber1= Math.floor(Math.random()*11+1)
var gemNumber2= Math.floor(Math.random()*11+1) //gets a value between 1 and 12. Use .round if it doesn't ever get a zero
var gemNumber3= Math.floor(Math.random()*11+1)
var gemNumber4= Math.floor(Math.random()*11+1)
/* console.log(gemNumber4)
console.log(gemNumber2) */


//variables for the wins, losses, and the total score
var totalScore= 0
wins = 0
losses = 0

  /*
$('#numberOfWins').text(wins)
$('#numberOfLosses').text(losses) 
*/

//updates wins variable and updates the text
function playerWin(){
      wins++
      $("#numberOfWins").text(wins)
      reset()
    }

//updates losses variable and updates the text
function playerLoss(){
    losses++
    $("#numberOfLosses").text(losses)
    reset()
}    

//resets all the random numbers, and sets all the corresponding text
function reset(){
    targetNumber=Math.floor(Math.random()*101+19) //rando generation for Targetnumber
    $("#randomNumber").text(targetNumber)
    gemNumber1= Math.floor(Math.random()*11+1) //rando generation copied so it will generate new numbers
    gemNumber2= Math.floor(Math.random()*11+1) 
    gemNumber3= Math.floor(Math.random()*11+1)
    gemNumber4= Math.floor(Math.random()*11+1)
    totalScore= 0
    console.log(gemNumber1)
    console.log(gemNumber2)
    $("#totalScoreBox").text(totalScore)
    } 
//on click event handleing for the gemstones


$("#rubyGem").on("click", function(){
    totalScore = totalScore + gemNumber1;
    $("#totalScoreBox").text(totalScore);
    console.log(totalScore)
        if (totalScore == targetNumber){ //If the total is less than the target, do nothing. If it is the same, call the win function. If it is over, call the loss function
          playerWin();
        }
        else if (totalScore > targetNumber){
          playerLoss();
        }   
  })  

  $("#sapphireGem").on("click", function(){
    totalScore = totalScore + gemNumber2;
    $("#totalScoreBox").text(totalScore);
    console.log(totalScore)
        if (totalScore == targetNumber){ //If the total is less than the target, do nothing. If it is the same, call the win function. If it is over, call the loss function
          playerWin();
        }
        else if (totalScore > targetNumber){
          playerLoss();
        }   
  })  

  $("#emeraldGem").on("click", function(){
    totalScore = totalScore + gemNumber3;
    $("#totalScoreBox").text(totalScore);
    console.log(totalScore)
        if (totalScore == targetNumber){ //If the total is less than the target, do nothing. If it is the same, call the win function. If it is over, call the loss function
          playerWin();
        }
        else if (totalScore > targetNumber){
          playerLoss();
        }   
  })  

  $("#diamondGem").on("click", function(){
    totalScore = totalScore + gemNumber4;
    $("#totalScoreBox").text(totalScore);
    console.log(totalScore)
        if (totalScore == targetNumber){ //If the total is less than the target, do nothing. If it is the same, call the win function. If it is over, call the loss function
          playerWin();
        }
        else if (totalScore > targetNumber){
          playerLoss();
        }   
  })  