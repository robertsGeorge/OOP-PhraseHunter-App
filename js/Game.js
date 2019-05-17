/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.activePhrase = null;
    this.missed = 0;
    this.phrases = this.createPhrases();
  }

  /**
   * Creates phrases for use in game
   * @return {array}  phraseObjects  -   An array of phrases that could be used in the game.
   */
  createPhrases() {
    const phraseObjects = [];
    
    // Access each phrase (string) in phraseList array in phraseList.js
    phraseList.forEach(phrase => {
      // Instantiate new Phrase object, passing in phrase.
      // Then push to phraseObjects array.
      phraseObjects.push(new Phrase(phrase));
    });

    // push each phrase object into an array, then return that array
    return phraseObjects;
  }

  startGame() {

  }


  getRandomPhrase() {

  }


  handleInteraction() {

  }


  removeLife() {

  }


  checkForWin() {

  }

  
  gameOver() {

  }

}