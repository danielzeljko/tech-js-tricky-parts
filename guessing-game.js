/**
 * Write a function called guessingGame which returns a function that allows you
 * to guess a random whole number between 0 and 99. Every time you create a new
 * game, it should select a new random number, and keep it secret from the player.
 *
 * Once the game has started, you can guess the number. The game should tell you
 * whether your guess is too high, too low, or correct.
 *
 * After a correct guess, the game ends.
 */

function guessingGame() {
  const num = Math.floor(Math.random() * 100);
  let guesses = 0;
  let isGameOver = false;

  return function (guess) {
    if (isGameOver) return `The game is over, you already won!`;

    guesses++;

    if (guess === num) {
      isGameOver = true;
      return `You win! You found ${num} in ${guesses} guesses.`;
    }

    return guess < num ? `${guess} is too low!` : `${guess} is too high!`;
  };

}

module.exports = { guessingGame };
