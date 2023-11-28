console.log('Hello world')

let teamOne = 0
let teamTwo = 0
let scoreBoardOne = ''

function scoreOne() {
    console.log('scoreOne')
    teamOne += 1
}

function scoreTwo() {
    console.log('scoreTwo')
    teamTwo =+ 1
}


document.getElementById('scoreBoardOne').innerText =  teamOne