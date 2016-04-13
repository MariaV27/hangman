var prompt = require("prompt");
var Word = require("./word.js");

prompt.start();

var game = {
  wordBank: ["sweettarts", "chocolate", "tangos", "manicho", "jolly-ranchers"]
  guessesRemaining = 10;
  currentWord = null;
  startGame = function(word){
     this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()*this.wordBank.length)]);
    this.currentWrd.getLets();
    this.keepPromptingUser();
  }
  keepPromptingUser : function() {
    var self = this

    prompt.get(["guessLetter"], function(err,result) {
    var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);      
    console.log("The Letter or space you guessed is " + result.guessLetter)

      if (findHowManyOfUserGuess === 0) {
        console.log("You guessed wrong!")
        self.guessesRemaining--;
      }else{
        console.log("You guessed right!");
        if(self.currentWrd.didWeFindTheWord()){
          console.log("You've Won!");
          return;//end of the game
        }
      };
    console.log("Guesses remaining" + self.guessesRemaining)
    console.log(self.currentWrd.wordRender());

    if ((guessesRemaining === 0) && (self.currentWrd.found === false)) {
      self.keepPromptingUser();
    }else if(self.guessesRemaining === 0){
      console.log("You lost peon the movie was ", self.currentWrd.word);
      console.log("You have shamed yourself and your family");
    } else{
      console.log(self.currentWrd.wordRender());
    }
    })
  }
}

game.startGame();   