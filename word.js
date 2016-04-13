var Letter = require ("."/letter.js);

var Word = function (wrd);
  this.wrd = wrd;
  this.lets = [];
  this.found = false;
  this.getLets = function(){
    for (var i=0; i < word.length, i++) {
      this.lets[i] = new Objectt()}
    }
  };

  this.checkIfLetterFound = function(guessLetter){
    this.whatToReturn = 0;
    for ( var i = 0; i < this.lets.length; i++){
      if (this.lets[1].charac === guessLetter){
        this.lets[i].appear = true;
        whatToReturn ++;
      }
    }
    return whatToReturn;
  }

  this.didWeFindTheWord = function(){
    this.found = this.lets.every(function(curLets) {
      if (curLets.appear == true){
        this.found = true;
      }
    });
    return this.found;
  }
  
  this.wordRender = function() {
    this.str = "";
    var string1 = "";
    for (var i = 0; i < this.lets.length; i++){
       string1 = string1 + this.lets[i].letterRender();
       this.str = string1;
    }
    return this.str;
  }
}

module.exports = Word;
