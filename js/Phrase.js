/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }


  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const container = document.getElementById('phrase').firstElementChild;
    const phrase = this.phrase;
    let phraseHTML = ``;

    for (let i = 0; i < phrase.length; i++) {
      if (phrase[i] === ' ') {
        phraseHTML += `<li class="space"> </li>`;
      } else {
        phraseHTML += `<li class="hide letter ${phrase[i]}">${phrase[i]}</li>`;
      }
    }
    container.innerHTML = phraseHTML;
  }

    /**
     * Remove phrase from game board
     */
  removePhraseFromDisplay() {
    const container = document.getElementById('phrase').firstElementChild;
    container.innerHTML = null;
  }


  /**
   * Check if passed letter is in phrase
   * @param (string) letter - letter to check 
   * @return {boolean} - true if phrase contains letter, false if it doesn't
   */
  checkLetter(letter) {
    return this.phrase.includes(letter) ? true : false;
  }


  
  /**
   * Displays all occurances of passed letter on screen after a match is found
   * @param (string) letter - letter to display
   */
  showMatchedLetter(letter) {
    const matches = document.querySelectorAll(`.${letter}`); 
    matches.forEach(match => match.classList.replace('hide', 'show'));
  }


}