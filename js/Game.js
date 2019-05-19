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
   * @return {array}  phraseObjects  -   An array of phrase objects that could be used in the game.
   */
  createPhrases() {
    const phraseObjects = [];
    // Access each phrase (string) in phraseList array found in phraseList.js
    phraseList.forEach(phrase => {
      phraseObjects.push(new Phrase(phrase));
    });
    return phraseObjects;
  }


  
  /**
   *  Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }


  startGame() {

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