console.log('Hello world')

let teamOne = 0
let teamTwo = 0


function scoreOne() {
    console.log('scoreOne');
    teamOne += 1;
    document.getElementById('scoreBoardOne').innerText = teamOne;
}

function threeScoreOne() {
    teamOne += 3;
    document.getElementById('scoreBoardOne').innerText = teamOne;
}

function scoreTwo() {
    console.log('scoreTwo');
    teamTwo += 1;
    document.getElementById('scoreBoardTwo').innerText = teamTwo;
}

function resetScores() {
    console.log('clear')
    teamOne = 0;
    teamTwo = 0;
    document.getElementById('scoreBoardOne').innerText = teamOne;
    document.getElementById('scoreBoardTwo').innerText = teamTwo;
}


// document.getElementById('scoreBoardOne').innerText =  teamOne