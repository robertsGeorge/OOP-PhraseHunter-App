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
   * Creates phrases for use in game.
   * @return {array}  phraseObjects  -   An array of phrases that could be used in the game.
   */
  createPhrases() {
    const phraseObjects = [];
    // Access each phrase (string) in phraseList array found in phraseList.js
    phraseList.forEach(phrase => {
      phraseObjects.push(new Phrase(phrase));
    });
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