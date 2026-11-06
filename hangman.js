let possibleWords = ["apple", "warship", "obdurate", "defenestrate", "paddington", "contradiction", "obsequious", "dissonant"];
let guesses = "";
let word = "";
let win = "";
let alert = "";          // the message text (win / lose / warnings) shown in the guesses area
let max_guesses = 6;
let guessCount = max_guesses;

function newGame() {
    guesses = "";
    alert = "";
    win = false;
    guessCount = max_guesses;
    let randomIndex = Math.floor(Math.random() * possibleWords.length);
    word = possibleWords[randomIndex];
    updateScreen();
};

function guess() {
    let input = document.getElementById("guess");
    let letter = input.value.toLowerCase();
    input.value = "";                          // clear the input on every guess

    if (word === "") {                         // no guesses before a word is chosen
        alert = "Click New Game to choose a word first!";
        updateScreen();
        return;
    }
    if (gameOver()) {                          // no guesses after the game ends
        alert = "The game is over! Click New Game to play again.";
        updateScreen();
        return;
    }
    if (letter === "") {                       // ignore an empty box
        return;
    }
    if (checkIfLetterGuessed(letter)) {        // no guessing the same letter twice
        updateScreen();
        return;
    }

    alert = "";
    guesses += letter;
    if (word.indexOf(letter) < 0) {
        guessCount--;
    };

    checkIfWin();                              // after every guess, see if the game is won or lost
    updateScreen();
};

function updateScreen() {
    let clueString = "";

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (guesses.indexOf(letter) >= 0) {
            clueString += letter + " ";
        }
        else {
            clueString += "_ ";
        };
    };

    let clueElement = document.getElementById("clue");
    clueElement.textContent = clueString;

    // the guessed letters, then the alert message on its own line
    let guessesArea = getAlertElement();
    guessesArea.innerText = "Guessed Letters: " + guesses + "\n" + alert;

    let image = document.getElementById("hangman-pic");
    image.src = "images/hangman" + guessCount + ".gif";
};

// The game is over once the player has won or has no guesses left.
function gameOver() {
    return win === true || guessCount === 0;
};

function checkIfWin() {
    win = true;
    for (let f = 0; f < word.length; f++) {
        let letter = word[f];
        if (guesses.indexOf(letter) < 0) {     // a letter of the word hasn't been guessed yet
            win = false;
            break;
        }
    }

    if (win === true) {
        alert = "Congrats! You have won this round!";
    }
    else if (guessCount === 0) {
        alert = "You have run out of guesses! The correct word was: " + word;
    }
};

function checkIfLetterGuessed(Letter) {
    if (guesses.indexOf(Letter) >= 0) {        // >= 0 means it's already in guesses
        alert = "You have already guessed this letter!";
        return true;
    }
    return false;
};

// The alerts are shown in the guesses area.
function getAlertElement() {
    return document.getElementById("guesses");
};