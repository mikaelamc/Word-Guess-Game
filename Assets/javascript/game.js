// Create an array of words
var wordOptions = [

"thor",
"blackpanther",
"wonderwoman",
"superman",
"hulk",
"spiderman",
"batman",
"captainamerica",
"ironman",
"theincredibles",

];

var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

function startGame(){
    selectedWord = wordOptions[Math.floor(Math.random()*wordOptions.length)];
    console.log(selectedWord);
    lettersinWord = selectedWord.split("");
    console.log(lettersinWord);
    numBlanks = lettersinWord.length;
    console.log(numBlanks);

    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];
    
    for(var i = 0; i<numBlanks; i++){
        blanksAndSuccesses.push("_");
        console.log(blanksAndSuccesses);
    }

    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    }

    function checkLetters(letter) {

        var isLetterinWord = false;

 
        for(var i = 0; i <numBlanks; i++){
            if(selectedWord[i] == letter) {
                isLetterinWord = true;
            }
        }

        if(isLetterinWord){
        for (var i = 0; i<numBlanks; i++){
            if(selectedWord[i] == letter){
                blanksAndSuccesses[i] = letter;
            }
        }
    }
        else {
            wrongLetters.push(letter);
            guessesLeft--;
        }
        console.log(blanksAndSuccesses);
    
}

function roundComplete(){
    console.log("Win Count: " + winCount + " | Loss count: " + lossCount + " | Guesses Left: " + guessesLeft);

    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" "); 
    
    if(lettersinWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You won!");

        document.getElementById("winCounter").innerHTML = winCount;
        startGame();
    }
    else if (guessesLeft == 0){
        lossCount++;
        alert("You Lost");

        document.getElementById("lossCounter").innerHTML = lossCount;
        startGame();
    }
}

startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    console.log(letterGuessed);
}





    