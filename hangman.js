let possibleWords = ["apple", "warship", "obdurate", "defenestrate", "paddington", "contradiction", "obsequious", "dissonant"];

function newGame() {
    
    let randomIndex = parseInt(Math.random() * possibleWords.length);
    let word = possibleWords[randomIndex];
    let clueString ="";
    
    for (let i = 0; i < word.length; i++){
        clueString += "_ ";
    }
    
    let clueElement = document.getElementById("clue");
    clueElement.textContent = clueString;
}

function guess() {

}