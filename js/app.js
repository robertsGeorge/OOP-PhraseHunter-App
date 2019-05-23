/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;



/* 
Starts game when button is clicked
Enables user interaction by clicking on-screen key buttons
Enables physical keyboard user interaction
 */
document.getElementById('btn__reset').addEventListener('click', () => {
  game = new Game();
  game.startGame();
  
  document.getElementById('qwerty').addEventListener('click', clickHandler);

  document.addEventListener('keydown', keydownHandler);
});


/* 
keydownHandler is declared in script scope to allow reference in
removeEventListener call in game.gameOver() method. 
(removeEventListener needs the handler to be identifiable 
via a variable name.) 
*/
function clickHandler(event) {
  if (event.target.className === 'key') {
    game.handleInteraction(event.target);
  }
}

/* 
As per comment for clickHandler() above 
*/
function keydownHandler(event) {
  game.matchKeydownToButton(event.key);
}





