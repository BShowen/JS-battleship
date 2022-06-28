import coordinateList from "../game_modules/coordinateList.js";

export default class CoordinateGenerator {
  /**
   * Store a reference to coordinates already used.
   * We want to generate new, unique, coordinates every time.
   */
  #usedCoordinates = coordinateList();

  /**
   * There are only 100 possible coordinates on the game board. This means there
   * are only 100 possible unique coordinates that this class is allowed to
   * generate. We need to keep track of how many times we have had to regenerate
   * a coordinate because it was already used. If we have had to regenerate
   * coordinates 100 times then that means one of two things -
   *
   * A) AI is making its final guess which is the last possible coordinate on
   * the board. Very unlikely, but still possible.
   * -- OR --
   * B) There is an unknown bug in this class.
   */
  #generationCount = 0;

  /**
   * Generate a set of [row,column] coordinates.
   * returns an array populated with two ints between 0,9 inclusive.
   * example return: [0,9] or [1,5] etc.
   */
  getCoords() {
    /**
     * If #generationCount is 100 then exit this method. There are no more
     * unique coordinate to be generated.
     */
    if (this.#generationCount >= 100) return;

    // create the initial coordinate.
    let coordinate = [this.#getRandomInt(), this.#getRandomInt()];

    /**
     * If both of these conditions are true, then the loop gets initiated in
     * order to make another guess at some random coordinates.
     */
    let coordinateAlreadyGuessed = this.#usedCoordinates.contains([coordinate]);
    const notOutOfCoordinates = this.#generationCount < 100;
    while (coordinateAlreadyGuessed && notOutOfCoordinates) {
      console.log("*");
      coordinate = [this.#getRandomInt(), this.#getRandomInt()];
      coordinateAlreadyGuessed = this.#usedCoordinates.contains([coordinate]);
    }

    ++this.#generationCount;

    this.#usedCoordinates.add([coordinate]);

    return coordinate;
  }

  // Return an int between 0 and 9 (inclusive of 0 and 9).
  #getRandomInt() {
    return Math.floor(Math.random() * 10);
  }

  // Reset the count to 0 and the coordinate list to a new list.
  reset() {
    this.#usedCoordinates = coordinateList();
    this.#generationCount = 0;
  }
}