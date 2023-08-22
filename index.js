let map = {"Rock" : "Scissors", "Paper": "Rock", "Scissors": "Rock"};
var scoreModel = { userScore: 0, computerScore:0};


function onButtonClick() {   
    let userChoice = event.target.textContent;
    let computerChoice = this.getComputerChoice();
    if(userChoice === computerChoice) {
        console.log(`You and computer both chose ${userChoice}`);
        this.showSnackBarMessage(`No Points! You and computer both chose ${userChoice}`);
        return;
    }
    if(map[userChoice] === computerChoice) {
        scoreModel.userScore++;
        console.log(`You Win! Computer chose ${computerChoice}`);
        this.showSnackBarMessage(`You scored a point! Computer chose ${computerChoice}`);
    } else{
        scoreModel.computerScore++;
        console.log(`You lost! Computer chose ${computerChoice}`);
        this.showSnackBarMessage(`Computer scored a point! Computer chose ${computerChoice}`);
    }
    this.changePoints();
}
function showSnackBarMessage(displayText){
    var x = document.getElementById("snackbar");
    x.textContent = displayText;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function changePoints() {
    document.getElementById("user-score").textContent = scoreModel.userScore;
    document.getElementById("computer-score").textContent = scoreModel.computerScore;
    if(scoreModel.userScore == 5 || scoreModel.computerScore == 5) {
        if(scoreModel.userScore == 5) {
            this.showSnackBarMessage(`You won the game!`);
        } else {
            this.showSnackBarMessage(`You lost the game! Better luck next time!`);
        }
        this.resetGame();
    }
}
function resetGame() {
    scoreModel.computerScore = 0;
    scoreModel.userScore = 0;
    this.changePoints();
}
function getComputerChoice(){
    return ["Rock", "Paper", "Scissors"][Math.floor((Math.random()*3))]
}