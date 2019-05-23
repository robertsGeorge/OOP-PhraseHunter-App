/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;



/* 
Starts game when button is clicked
Enables physical keyboard user interaction
 */
document.getElementById('btn__reset').addEventListener('click', () => {
  game = new Game();
  game.startGame();
  
  document.addEventListener('keydown', keydownHandler);
});

/* 
keydownHandler is declared in script scope to allow reference in
removeEventListener call in game.gameOver() method. 
(removeEventListener needs the handler to be identifiable 
via a variable name.) 
*/
function keydownHandler(event) {
  game.matchKeydownToButton(event.key);
}



/* 
Enables user interaction by clicking on-screen key buttons
(uses event propagation)
*/
document.getElementById('qwerty').addEventListener('click', (event) => {
  
  if (event.target.className === 'key') {
    game.handleInteraction(event.target);
  }
});

