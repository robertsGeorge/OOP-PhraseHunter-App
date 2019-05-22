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



  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    button.setAttribute('disabled', '');

    const letter = button.textContent;
    const letterInPhrase = game.activePhrase.checkLetter(letter);

    if (letterInPhrase) {
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(letter);
      if (this.checkForWin()) this.gameOver(true);
      
    } else {
      button.classList.add('wrong');
      this.removeLife();
    }

  }

  /**
   * Finds matching button for keydown event
   * Passes it to handleInteraction
   * @param {string} key - the key that was pressed
   */
  matchKeydownToButton(key) {
    key = key.toLowerCase(); // So it works even if user has caps lock on.
    const keyButtons = document.querySelectorAll('.key');

    for (let i = 0; i < keyButtons.length; i++) {
      
      if (keyButtons[i].textContent === key) {
        const matchingButton = keyButtons[i];
        this.handleInteraction(matchingButton);
        break;
      }
    }
  }




  /**
   * Checks to see if the player has revealed all of the letters in the active phrase.
   * @return {Boolean} - True if game has been won, false if game wasn't won
   */
  checkForWin() {
    const unrevealed = document.querySelector('#phrase .hide');
    // If unrevealed converts to true (i.e. holds a letter with class 'hide'), return false
    return unrevealed ? false : true; 
  }
  
  

  /**
   * Removes a life from the scoreboard
   * Increases the value of the missed property
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const lifeIcon = document.querySelector('[alt="Heart Icon"]'); // returns first one it finds
    lifeIcon.setAttribute('alt', 'Lost Heart Icon');
    lifeIcon.setAttribute('src', 'images/lostHeart.png');
   
    this.missed += 1;
    if (this.missed === 5) this.gameOver(false);
  }



  /**
   * Restores liveHeart icons to scoreboard ready for new game
   */
  resetHearts() {
    const lostHearts = document.querySelectorAll('[alt="Lost Heart Icon"]');
    lostHearts.forEach(heart => {
      heart.setAttribute('alt', 'Heart Icon');
      heart.setAttribute('src', 'images/liveHeart.png');
    });
  }

  
  /** 
   * Re-enable & Reset styling of on-screen keyboard buttons
   */
  resetKeys() {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
      key.removeAttribute('disabled');
      key.className = 'key'; // Overwrites 'chosen' or 'wrong' class.
    });
  }


  /**
   * Remove phrase from game board
   */
  removePhraseFromDisplay() {
    const container = document.getElementById('phrase').firstElementChild;
    container.innerHTML = null;
  }
  


  /**
   * Displays game over message
   * Resets the UI ready for a new game
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
      gameOverMessage.textContent = `Nice try. Nobody gets them all. Try another!`;
    }

    this.removePhraseFromDisplay();
    this.resetKeys();
    this.resetHearts();
  }

}