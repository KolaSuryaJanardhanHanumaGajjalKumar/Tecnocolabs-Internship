const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput==='rock' || userInput==='paper' || userInput==='scissors'  || userInput==='bomb'){
        return userInput;
    }
    else{
        console.log("Error");
    }
}

const getComputerChoice = () => {
    compChoice = Math.floor(Math.random()*3)
    if(compChoice===0) return 'rock';
    if(compChoice===1) return 'paper';
    if(compChoice===2) return 'scissors';
}

const determineWinner = (userChoice,computerChoice) => {
    if(userChoice==='bomb') return 'User Won'
    if(userChoice===computerChoice) return 'Game was a tie';
    if(userChoice==='rock'){
        if(computerChoice==='paper') return'Computer Won';
        if(computerChoice==='scissors') return 'User Won';
    }
    if(userChoice==='paper'){
        if(computerChoice==='rock') return'User Won';
        if(computerChoice==='scissors') return 'Computer Won';
    }
    if(userChoice==='scissors'){
        if(computerChoice==='paper') return'User Won';
        if(computerChoice==='rock') return 'Computer Won';
    }
}

const playGame = () => {
    let uc=prompt("Enter your choice: ");
    let userChoice = getUserChoice(uc);
    let computerChoice = getComputerChoice();
    console.log(`User choice : ${userChoice}, Computer Choice : ${computerChoice}`);
    console.log(determineWinner(userChoice,computerChoice));
    alert(determineWinner(userChoice,computerChoice));
}
playGame();