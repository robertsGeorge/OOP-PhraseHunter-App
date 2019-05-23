/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;

function keydownHandler(event) {
  game.matchKeydownToButton(event.key);
}

document.getElementById('btn__reset').addEventListener('click', () => {
  game = new Game();
  game.startGame();

  document.addEventListener('keydown', keydownHandler);

});


document.getElementById('qwerty').addEventListener('click', (event) => {
  
  if (event.target.className === 'key') {
    // const letter = event.target.textContent;
    // game.activePhrase.checkLetter(letter);
    game.handleInteraction(event.target);
  }
  
});

