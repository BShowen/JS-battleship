import arrayEquality from "./arrayEquality";

export default class SmartGuesser {
  #initialDirectHit;
  #lastDirectHit;
  #previousGuess;
  #orientation;
  #guessDirection = 1;
  #determineOrientationGuesses;

  constructor(isHit, coords) {
    this.isHit = isHit;
    this.#initialDirectHit = coords;
    this.#determineOrientationGuesses = this.#determineOrientationClosure();
  }

  #determineOrientationClosure = () => {
    let pointer = 0;
    const [row, column] = this.#initialDirectHit;
    const guesses = [];
    guesses.push([row + 1, column]);
    guesses.push([row - 1, column]);
    guesses.push([row, column + 1]);
    guesses.push([row, column - 1]);

    return () => guesses[pointer++];
  };

  #guessDirectionChanged() {
    if (!arrayEquality(this.#previousGuess, this.#lastDirectHit)) {
      this.#guessDirection = -1;
      return true;
    } else {
      return false;
    }
  }

  #lastValidCoord() {
    if (this.#guessDirectionChanged()) {
      return this.#initialDirectHit;
    } else {
      return this.#lastDirectHit || this.#initialDirectHit;
    }
  }

  #determineOrientation() {
    if (!(this.#initialDirectHit && this.#lastDirectHit)) return;
    const [row1, column1] = this.#initialDirectHit;
    const [row2, column2] = this.#lastDirectHit;

    if (row1 > row2 || row1 < row2) {
      this.#orientation = "vertical";
    } else if (column1 > column2 || column1 < column2) {
      this.#orientation = "horizontal";
    }
  }

  // isHit = boolean
  receiveFeedback(isHit) {
    if (isHit) {
      this.#lastDirectHit = this.#previousGuess;
    }
  }

  getNextGuess() {
    /**
     * If the orientation of the ship hasn't been determine, try to determine it.
     * This will happen until the orientation of the ship is figured out.
     */
    if (!this.#orientation) this.#determineOrientation();

    let nextGuess;
    let row, column;
    switch (this.#orientation) {
      case "vertical":
        [row, column] = this.#lastValidCoord();
        nextGuess = [row + this.#guessDirection, column];
        break;
      case "horizontal":
        [row, column] = this.#lastValidCoord();
        nextGuess = [row, column + this.#guessDirection];
        break;
      default:
        // This gets triggered when we are still determining orientation
        nextGuess = this.#determineOrientationGuesses();
        break;
    }
    this.#previousGuess = nextGuess;
    return nextGuess;
  }
}
