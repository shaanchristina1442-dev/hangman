let possibleWords = ["apple", "warship", "obdurate", "defenestrate", "paddington", "contradiction", "obsequious", "dissonant"];
let guesses = "";
let word = "";
let max_guesses = 6;
let guessCount = max_guesses;
function newGame() {
    guesses = "";
    guessCount = max_guesses;
    let randomIndex = parseInt(Math.random() * possibleWords.length);
    word = possibleWords[randomIndex];
    updateScreen();
};

function guess() {
    let input = document.getElementById("guess");
    let letter = input.value;
    if(word.indexOf(letter) < 0){
        guessCount--;
    };
    guesses += letter;
    updateScreen();
};

function updateScreen(){
    let clueString ="";
    
    for (let i = 0; i < word.length; i++){
        let letter = word[i];
        if(guesses.indexOf(letter) >= 0){
            clueString += letter + " ";
        }
        else{
            clueString += "_ ";
        };
    };
    
    let clueElement = document.getElementById("clue");
    clueElement.textContent = clueString;
    let guessesArea = document.getElementById("guesses");
    guessesArea.textContent = "Guessed Letters: " + guesses;

    let image = document.getElementById("hangman-pic");
    image.src = "images/hangman" + guessCount + ".gif";
};