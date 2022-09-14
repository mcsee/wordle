class Word {
  constructor(word) {
    if (word.length < 5)
      throw new Error('Too few letters. Should be 5');
    if (word.length > 5)
      throw new Error('Too many letters. Should be 5');
    if (!word.match(/^[a-z]+$/)) 
      throw new Error('word has invalid letters');
    this._word = word;
  } 
  letters() {
      return this._word.split("");
  }  
  word() {
      return this._word;
  }  
  sameAs(word) {
    return word.word() == this.word();
  }
  matchesPositionWith(correctWord) {
    var positions = [];
    for (var currentPosition = 0; currentPosition < this.letters().length; currentPosition++){
       if (this.letters()[currentPosition] == correctWord.letters()[currentPosition]) {
             positions.push(currentPosition + 1); 
             //Humans start counting on 1
       }
    }
    return positions;
  }
 matchesIncorrectPositionWith(correctWord) {     
    const correctPositions = this.matchesPositionWith(correctWord);
    var incorrectPositions = [];
    var correctWordLetters = correctWord.letters();
    var ownWordLetters = this.letters();
    for (var currentPosition = 0; currentPosition < 5; currentPosition++) {
      if (correctPositions.includes(currentPosition + 1)) {
        // We can use these wildcards since they are no valid letters
        correctWordLetters.splice(currentPosition, 1, '*');
        ownWordLetters.splice(currentPosition, 1, '+');
      }
    }    
    for (var currentPosition = 0; currentPosition < 5; currentPosition++) {
      const positionInCorrectWord = correctWordLetters.indexOf(ownWordLetters[currentPosition]);
      if (positionInCorrectWord != -1) {        
        correctWordLetters.splice(positionInCorrectWord, 1, '*');
        ownWordLetters.splice(currentPosition, 1, '+');
        incorrectPositions.push(currentPosition + 1); 
      }
    }    
    return incorrectPositions;
  }
  lettersAtCorrectPosition(correctWord) {
    return this.matchesPositionWith(correctWord).map(position => this.letters()[position -1 ]);
  }
  lettersAtWrongtPosition(correctWord) {
    return this.matchesIncorrectPositionWith(correctWord).map(position => this.letters()[position -1]);
  }
}

module.exports = Word; 
