class Game {
  constructor(validWords, correctWord) {
    if (!validWords.some(validWord => validWord.sameAs(correctWord)))
      throw new Error("Correct word " + word.word() + " is not a valid word");  
    this._attempts = [];
    this._validWords = validWords;
    this._correctWord = correctWord;
  }
  hasWon() {
    return this._attempts.some(attempt => attempt.sameAs(this._correctWord)); 
  }
  addAttempt(word) {
    if (!this._validWords.some(validWord => (validWord.sameAs(word)))) {
      throw new Error(word.word() + " is not a valid word");
    }
    this._attempts.push(word);    
  }
  hasLost() {
    return !this.hasWon() && this._attempts.length > 5;
  }
  wordsAttempted() {
    return this._attempts;
  }  
}

module.exports = Game; 
