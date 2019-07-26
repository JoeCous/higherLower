const deck = [
    [2, "Hearts"], [3, "Hearts"], [4, "Hearts"], [5, "Hearts"], [6, "Hearts"], [7, "Hearts"],
    [8, "Hearts"], [9, "Hearts"], [10, "Hearts"], [11, "Jack Hearts"], [12, "Queen Hearts"],
    [13, "King Hearts"], [14,"Ace of Hearts"],

    [2, "Diamonds"], [3, "Diamonds"], [4, "Diamonds"], [5, "Diamonds"], [6, "Diamonds"], [7, "Diamonds"],
    [8, "Diamonds"], [9, "Diamonds"], [10, "Diamonds"], [11, "Jack Diamonds"], [12, "Queen Diamonds"],
    [13, "King Diamonds"],[14,"Ace of Diamonds"],

    [2, "Clubs"], [3, "Clubs"], [4, "Clubs"], [5, "Clubs"], [6, "Clubs"], [7, "Clubs"],
    [8, "Clubs"], [9, "Clubs"], [10, "Clubs"], [11, "Jack Clubs"], [12, "Queen Clubs"],
    [13, "King Clubs"], [14,"Ace of Clubs"],

    [2, "Spades"], [3, "Spades"], [4, "Spades"], [5, "Spades"], [6, "Spades"], [7, "Spades"],
    [8, "Spades"], [9, "Spades"], [10, "Spades"], [11, "Jack Spades"], [12, "Queen Spades"],
    [13, "King Spades"], [14,"Ace of Spades"]  ]

let firstCard;
let randomCard;
let score = 0
let playerName;


// Starts game and draws the first card 
function startGame() {
    firstCard = drawCard1(deck)
    alert (`Your card is the ${firstCard}`)
    currentCard()
}

// Draws second card and asks if the user if H or L 
function currentCard() {
    winningScore()
    randomCard = drawCard1(deck)
    console.log (randomCard)
    userInput = prompt (`Do you think the next card will be higher or lower? \n1. higher \n2. lower`)
    checkCard()
}

// Checks random card against the players current card
function checkCard() {

    if (randomCard[0] > firstCard[0] && userInput == 1 || userInput == "higher"){
        alert ("Well done it's higher, you guessed correctly")
        score++
        firstCard = randomCard
        removeCard()
        winningScore()
        currentCard()
    }
    else if (randomCard[0] < firstCard[0] && userInput == 2 || userInput == "lower") {
        alert ("Well done it's lower, you guessed correctly")
        score++
        firstCard = randomCard
        removeCard()
        winningScore()
        currentCard()
    }
    else if (randomCard[0] == firstCard[0] && userInput ==2 || userInput == 1) {
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

// checks if you have reaced a winning score
function winningScore() {
    if (score == 6) {
    alert ("CONGRATULATIONS, YOU GUESSED SIX CARDS CORRECTLY, YOU WIN!")
    document.location.reload();
    clearInterval(interval)
}
    
    }
    startGame()