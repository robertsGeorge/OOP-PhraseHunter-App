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
    // Access array named phraseList located in phraseList.js file
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

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    const phrase = this.getRandomPhrase();
    this.activePhrase = phrase;
    phrase.addPhraseToDisplay();
    document.getElementById('overlay').style.display = 'none'; // hide the start screen.
  }




  handleInteraction() {

  }


  /**
   * Checks to see if the player has revealed all of the letters in the active phrase.
   * @return {Boolean} - True if game has been won, false if game wasn't won
   */
  checkForWin() {
    const unrevealed = document.querySelector('#phrase .hide');
    // If unrevealed converts to true (it holds a letter), return false
    return unrevealed ? false : true; 
  }
  
  

  /**
   * Removes a life from the scoreboard
   * Increases the value of the missed property
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    // Replace liveHeart img with lostHeart img
    const liveHeart = 
      document.querySelector('img[alt="Heart Icon"]'); // returns first one it finds
    const lostHeart = 
      `<img src="images/lostHeart.png" alt="Lost Heart Icon" height="35" width="30">`;
    liveHeart.parentNode.innerHTML = lostHeart;
    
    this.missed += 1;
    if (this.missed === 5) this.gameOver(false);
  }


  /**
   * Displays game over message
   * @param {boolean} gameWon - whether or not the user won the game
   */
  gameOver(gameWon) {
    const overlay = document.getElementById('overlay');
    const gameOverMessage = document.getElementById('game-over-message');
    
    overlay.style.display = 'flex';
    
    if (gameWon) {
      overlay.className = 'win';
      gameOverMessage.textContent = `You got it! Nice one! Try another!`;
    } else {
      overlay.className = 'lose';
      gameOverMessage.textContent = `Nice try. Nobody gets them all. Try another phrase!`;
    }
  }

}