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



/* 
  <div id="phrase" class="section">
    <ul>
        <li class="hide letter h">h</li>
        <li class="hide letter o">o</li>
        <li class="hide letter w">w</li>
        <li class="space"> </li>
        <li class="hide letter a">a</li>
        <li class="hide letter r">r</li>
        <li class="hide letter e">e</li>
        <li class="space"> </li>
        <li class="hide letter y">y</li>
        <li class="hide letter o">o</li>
        <li class="hide letter u">u</li>
    </ul>
  </div>
 */



  checkLetter() {

  }


  showMatchedLetter() {
    
  }
}