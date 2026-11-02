## how is hangman played

1. Draw the starting point
2. pick a word -> list of possible words and save one of them nto a variable
3. draw dashes -> 1 dash for each(a loop) letter in the word.
    a. for loop
4. Guess time
    a. Give an input -> letter
    b. Check to see if that letter is in the string
        a. if in string replace dash with letter
        b. if not in string, draw the next step
        c. no matter what, keep track of user guesses
5. Game ends
    a. if they guess the whole word -> you win
    b. if the full body is drawn -> you lose
