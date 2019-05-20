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
   * Check if passed letter is in phrase
   * @param (string) letter - letter to check 
   */
  checkLetter(letter) {

  }


  showMatchedLetter() {
    
  }
}