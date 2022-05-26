let firstCard = 12
let secondCard = 7
let cardArrays = [firstCard, secondCard]
let sum = firstCard + secondCard
let displays = document.getElementById("paragraph-1")
let display = " "
let sumEl = document.getElementById("sum-El")
let cardEl = document.getElementById("cards-el")

//let arrays = ["name"]
//arrays.push("chimdinma")
//let myCharacteristics = document.getElementById("array")
//myCharacteristics.textContent = arrays


 
function startGame(){
    renderGame()
} 

function renderGame(){
    displays.innerText = display
    sumEl.textContent ="sum:" + sum
    cardEl.textContent = "Cards: " + cardArrays[0] + ", " + cardArrays[1]
    if ( sum < 21){
        display = "Do you want to draw a card?"
    } else if (sum === 21) {
        display = "You have got a blackjack"
    } else {
        display = "you are out of the game"
    }
}

function newCards(){
    let card = 2
    sum += card
    cardArrays.push(card)
    renderGame()
    

}
  console.log(newCard())

function reset(){
    cardEl.textContent = "Cards: " + 0
    sumEl.textContent = "Sum: " + 0
}

console.log(cardArrays)

for(let count = 1; count<11; count+=1){
    console.log(count)
}


