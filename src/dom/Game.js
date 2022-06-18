import Board from "./Board";

export default class Game {
  // The iterator used to determine who's turn it is.
  #i = 0;

  constructor(parentNode) {
    // This is the node where this class renders any DOM elements.
    this.parentNode = parentNode;

    /**
     * Because these methods are used as a callbacks, we need to set the context
     * of 'this' since these methods refer to methods defined in this class.
     */
    this.donePlacingShips = this.donePlacingShips.bind(this);
    this.toggleTurn = this.#toggleTurn.bind(this);

    // Store a reference to each player so we can interact with them.
    this.players = [
      new Board("Player One", this.toggleTurn, this.parentNode),
      new Board("Player Two", this.toggleTurn, this.parentNode),
    ];
  }

  /**
   * Return the next player up. If player one is the current player then this
   * method will return player two and vice versa.
   */
  #nextPlayer() {
    return this.players[++this.#i % 2];
  }

  // Return the player that is currently making the attack
  #currentPlayer() {
    return this.players[this.#i % 2];
  }

  /**
   * This method is responsible for checking to see if the current player is
   * alive and calls the appropriate handler for each scenario.
   *
   * This method initially gets called by this.donePlacingShips. Then subsequent
   * calls get called as a callback when a player takes their turn.
   */
  #toggleTurn() {
    if (this.#currentPlayer().isAlive()) {
      this.#nextTurn();
    } else {
      this.#endGame();
    }
  }

  /**
   * This function only ever gets called from this.#toggleTurn(). This function
   * is responsible for switching turns from player on to player two and vice
   * versa
   */
  #nextTurn() {
    console.log(`${this.#currentPlayer().name}'s turn`);
    this.#currentPlayer().disableClick();
    this.#nextPlayer().enableClick();
  }

  /**
   * This function only ever gets called from this.#toggleTurn() and is only
   * called when a player dies. This function is responsible for ending the game
   */
  #endGame() {
    console.log(`${this.#nextPlayer().name} is the winner!`);

    // Disable clicks on both players boards - the game is over.
    this.players.forEach((player) => player.disableClick());
  }

  /**
   * This is the first method that is called in order to initiate game play.
   * This method is called from index.js
   */
  startGame(gameOptions = { singlePlayer: false }) {
    if (gameOptions.singlePlayer) {
      // Playing against AI.
    } else {
      /**
       * Initiate the process to let player one place their ships on their
       * board by calling the placeShips method. The callback passed into
       * #currentPlayer.placeShips will be called once the player has finished
       * placing their ships. The callback will then start the process of
       * letting player two place their ships.
       *
       */
      this.#currentPlayer().placeShips(this.donePlacingShips);
    }
  }

  /**
   * This method is passed into Board.js (in this.startGame()) via
   * the #currentPlayer().placeShips() method. From there it is passed into
   * ShipSelector.js via the ShipSelector constructor. ShipSelector will call
   * this method once a player has placed all of their ships on their board.
   *
   * The purpose of this method can be explained: Player one is placing their
   * ships on the board. Once they have placed their ships we need to allow
   * player two to place their ships. This method toggles from player one to
   * player two, to allow player two to place ships.
   */
  donePlacingShips() {
    // Remove the player one UI components
    this.#currentPlayer().remove();

    /**
     * Switch from player one to player two, and render the player two UI
     * components
     */
    this.#nextPlayer().placeShips(
      /**
       * This callback gets called once player two is done placing their ships.
       * This means that both players have placed their ships and are ready to
       * battle.
       */
      () => {
        // First, remove player two's UI components.
        this.#currentPlayer().remove();
        // Then render BOTH player's boards.
        this.players.forEach((playerBoard) => playerBoard.render());
        // Switch from player two to player one.
        this.#nextPlayer();
        // Call the function that initiates game play.
        this.#toggleTurn();
      }
    );
  }
}
