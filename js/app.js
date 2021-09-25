let userScore = 0 ;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function userWin(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = userChoice + " beats " + computerChoice +". You win!";
}

function userLose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = computerChoice + " beats " + userChoice +". You lose!";
}

function userDraw(userChoice, computerChoice){
    result_p.innerHTML = computerChoice + " equals " + userChoice +". It's Draw, play again!";
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + "-" + computerChoice){
        case "rock-scissors":
        case "paper-rock":
        case "scissors-paper":
            userWin(userChoice, computerChoice);
            break;
        case "rock-paper":
        case "paper-scissors":
        case "scissors-rock":
            userLose(userChoice, computerChoice);
            break;
        case "rock-rock":
        case "paper-paper":
        case "scissors-scissors":
            userDraw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("rock");
    })

    paper_div.addEventListener('click', function(){
        game("paper");
    })

    scissors_div.addEventListener('click', function(){
        game("scissors");
    })
}
main();