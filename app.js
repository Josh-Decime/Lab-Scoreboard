console.log('Hello world')

// set variables
let teamOne = 0
let teamTwo = 0

// ANCHOR player one
function scoreOne() {
    console.log('scoreOne');
    teamOne += 1;
    document.getElementById('scoreBoardOne').innerText = teamOne;
}

function threeScoreOne() {
    teamOne += 3;
    document.getElementById('scoreBoardOne').innerText = teamOne;
}

// ANCHOR Player two
function scoreTwo() {
    console.log('scoreTwo');
    teamTwo += 1;
    document.getElementById('scoreBoardTwo').innerText = teamTwo;
}

function threeScoreTwo() {
    teamTwo += 3;
    document.getElementById('scoreBoardTwo').innerText = teamTwo;
}

// ANCHOR reset button
function resetScores() {
    console.log('clear')
    teamOne = 0;
    teamTwo = 0;
    document.getElementById('scoreBoardOne').innerText = teamOne;
    document.getElementById('scoreBoardTwo').innerText = teamTwo;
}
