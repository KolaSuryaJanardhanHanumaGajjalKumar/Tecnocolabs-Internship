let earlyRunner = true;
let runnerAge = 18;
let raceNumber=0;
if(earlyRunner && runnerAge>18){
    raceNumber = Math.floor(Math.random() * 1000)+1000;
    console.log(`Your race number is ${raceNumber} and your will race at 9:30 AM`);
}
else if(!earlyRunner && runnerAge>18){
    raceNumber = Math.floor(Math.random() * 1000);
    console.log(`Your race number is ${raceNumber} and your will race at 11:00 AM`);
}
else if(runnerAge<18){
    raceNumber = Math.floor(Math.random() * 1000);
    console.log(`Your race number is ${raceNumber} and your will race at 12:30 PM`);
}
else{
    console.log("See the registration desk.");
}
