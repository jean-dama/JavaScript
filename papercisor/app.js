const computerPlayDisplay = document.getElementById('computer-play')
const userPlayDisplay = document.getElementById('user-play')
const resultDisplay = document.getElementById('result')
const possiblePlays = document.querySelector('button')
// acima foi declaradas as constantes e atribuido os ids do html
let userPlay
let computaterPlay
let result
//aqui foi declarada a variavel da jogada do player
function thePlays () {
    possiblePlays.forEach(possiblePlay => possiblePlay.addEventListener('click', (e) => {
        userPlay = e.target.id
        userPlayDisplay.innerHTML = userPlay
    }))
}
//neste codigo foi declarado que cada jogada sera realizada via o click e a funcao que logo abaixo e responsavel pela jogada do computador generateComputerPlay
function generateComputerPlay() {
    const randomNumber = Math.random() * possiblePlays.length // ou pode usar 3
    
    if (randomNumber === 1){
        computerPlay = 'rock' 
    }
    if (randomNumber === 2){
        computerPlay = 'paper' 
    }
    if (randomNumber === 3){
        computerPlay = 'scissor' 
    }
    computerPlayDisplay.innerHTML = computaterPlay
}
//no codigo abaixo nos realizamos a averiguação dos valores jogados e o resultado
function getTheResult() {
    if(computaterPlay === userPlay) {
        result = 'Empate!'
    }
    if(computaterPlay === 'rock' && userPlay === "paper") {
        result = 'Você ganhou!'
    }
    if(computaterPlay === 'rock' && userPlay === 'scissor') {
        result = 'Computador ganhou!'
    }
    if(computaterPlay === 'paper' && userPlay === 'scissor') {
        result = 'Você ganhou!'
    }
    if(computaterPlay === 'paper' && userPlay === 'rock') {
        result = 'Computador ganhou'
    }
    if(computaterPlay === 'scissor' && userPlay === 'rock') {
        result = 'Você ganhou!'
    }
    if(computaterPlay === 'scissor' && userPlay === 'paper') { 
        result = 'Computador ganhou!'
    }
    resultDisplay.innerHTML = result
}