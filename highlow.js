const deck = [
    [2, "H"], [3, "H"], [4, "H"], [5, "H"], [6, "H"], [7, "H"],
    [8, "H"], [9, "H"], [10, "H"], [11, "H"], [12, "H"],
    [13, "H"], [14,"H"],

    [2, "D"], [3, "D"], [4, "D"], [5, "D"], [6, "D"], [7, "D"],
    [8, "D"], [9, "D"], [10, "D"], [11, "D"], [12, "D"],
    [13, "D"],[14,"D"],

    [2, "C"], [3, "C"], [4, "C"], [5, "C"], [6, "C"], [7, "C"],
    [8, "C"], [9, "C"], [10, "C"], [11, "C"], [12, "C"],
    [13, "C"], [14,"C"],

    [2, "S"], [3, "S"], [4, "S"], [5, "S"], [6, "S"], [7, "S"],
    [8, "S"], [9, "S"], [10, "S"], [11, "S"], [12, "S"],
    [13, "S"], [14,"S"]  ]

let userInput; 
let firstCard;
let randomCard;
let score = 0
const higher = document.getElementById("higher");
const lower = document.getElementById("lower");
const newGame = document.getElementById("startnewgame");


higher.addEventListener("click",()=>{
    userInput = 1
    checkCard()
    });

lower.addEventListener("click",()=>{
    userInput = 2
    checkCard()
    });

newGame.addEventListener("click",()=>{
        startNew()
        });
    

// Starts game and draws the first card 
function startGame() {
    firstCard = drawCard1(deck)
    console.log (firstCard)
    cardimage.src = `cardimg/${firstCard[0]}${firstCard[1]}.jpg`
    currentCard()
}

// Draws second card and asks if the user if H or L 
function currentCard() {
    winningScore()
    randomCard = drawCard1(deck)
    console.log (randomCard)
}

// Checks random card against the players current card
function checkCard() {
    
    if (randomCard[0] > firstCard[0] && userInput == 1 || userInput == "higher"){
        alert ("Well done it's higher, you guessed correctly")
        cardimage.src = `cardimg/${randomCard[0]}${randomCard[1]}.jpg`
        score++
        firstCard = randomCard
        removeCard()
        winningScore()
        currentCard()
    }
    else if (randomCard[0] < firstCard[0] && userInput == 2 || userInput== "lower") {
        alert ("Well done it's lower, you guessed correctly")
        cardimage.src = `cardimg/${randomCard[0]}${randomCard[1]}.jpg`
        score++
        firstCard = randomCard
        removeCard()
        winningScore()
        currentCard()
    }
    else if (randomCard[0] == firstCard[0]) {
        alert ("The card was the same, please draw another card")
        currentCard()
    }
    else {
        alert (`You guessed incorrectly, the card was ${randomCard}, your score was ${score}, Game Over`)
    }
}

// Removes whichever card does not carry on
function removeCard() {
    console.log (randomCard)
    removeIndex = deck.indexOf(randomCard)
    deck.splice(removeIndex, 1)
    console.log (deck)
}

// Draws first or second card for player
function drawCard1(deck) {
        return deck[Math.floor(Math.random() * deck.length)]
}
function startNew() {
    document.location.reload();
}
// checks if you have reaced a winning score
function winningScore() {
    if (score == 6) {
    alert ("CONGRATULATIONS, YOU GUESSED SIX CARDS CORRECTLY, YOU WIN!")
    document.location.reload();
    clearInterval(interval)
}    
    }
    startGame()


module.exports = drawCard1;