import Player from "./Player";
import GameMenu from "./GameMenu";
import AI from "../game_modules/AI";

export default class Game {
  // The iterator used to determine who's turn it is.
  #i = 0;

  #nextTurn;
  #toggleTurn;
  #donePlacingShips;

  // Store a reference to each player so we can interact with them.
  players = [];

  constructor(parentNode) {
    // This is the node where this class renders any DOM elements.
    this.parentNode = parentNode;

    /**
     * Because these methods are used as a callbacks, we need to set the context
     * of 'this' since these methods refer to methods defined in this class.
     */
    this.#donePlacingShips = this.#done_placing_ships.bind(this);
    this.#toggleTurn = this.#toggle_Turn.bind(this);
    this.#nextTurn = this.#next_Turn.bind(this);
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
   * Return the player that just made the attack. This function is used only in
   * this.#toggle_Turn to display the users name in the toast message.
   */
  #attacker() {
    const i = this.#i + 1;
    return this.players[i % 2];
  }

  /**
   * This method is responsible for checking to see if the current player is
   * alive and calls the appropriate handler for each scenario.
   *
   * This method initially gets called by this.#donePlacingShips. Then subsequent
   * calls get called as a callback when a player takes their turn.
   *
   * hitOrMiss = Boolean passed in when Square.js calls this method.
   */
  #toggle_Turn(hitOrMiss) {
    const message = (() => {
      if (hitOrMiss == undefined) return;
      if (hitOrMiss) return `${this.#attacker().name}: Direct hit!`;
      return `${this.#attacker().name}: Miss!`;
    })();

    if (this.#currentPlayer().isAlive()) {
      GameMenu.toast(message);
      this.#nextTurn();
    } else {
      this.#endGame();
    }
  }

  /**
   * This function only ever gets called from this.#toggleTurn(). This function
   * is responsible for switching turns from player one to player two and vice
   * versa
   */
  #next_Turn() {
    const attacker = this.#currentPlayer();
    const opponent = this.#nextPlayer();

    attacker.disableClick();

    /**
     * When the user is playing against the computer, we never want to enable
     * clicking on the users board. This would allow the user to click on their
     * own board which is unwanted.
     *
     * attacker.takeTurn is defined only on the AI class.
     */
    if (attacker.takeTurn) {
      /**
       * Tell AI to take its turn. AI needs a callback, which is the opponents
       * "receiveAttack" method. AI will call this callback with its guess.
       */
      setTimeout(() => {
        attacker.takeTurn(opponent.receiveAttack);
      }, 800);
    } else {
      opponent.enableClick();
    }
  }

  /**
   * This function only ever gets called from this.#toggleTurn() and is only
   * called when a player dies. This function is responsible for ending the game
   */
  #endGame() {
    const winnerName = this.#nextPlayer().name;
    GameMenu.persistentToast(`Winner: ${winnerName}`);
    // Disable clicks on both players boards - the game is over.
    this.players.forEach((player) => {
      player.disableClick();
      player.showPositions();
    });
  }

  /**
   * This is the first method that is called in order to initiate game play.
   * This method is called from index.js
   */
  startGame(gameOptions = { singlePlayer: false }) {
    if (gameOptions.singlePlayer) {
      // Playing against AI.
      this.players = [
        new Player("Player One", this.#toggleTurn, this.parentNode, {
          screenSide: "left",
        }),
        new AI(this.#toggleTurn, this.parentNode, { screenSide: "right" }),
      ];
    } else {
      this.players = [
        new Player("Player One", this.#toggleTurn, this.parentNode, {
          screenSide: "left",
        }),
        new Player("Player Two", this.#toggleTurn, this.parentNode, {
          screenSide: "right",
        }),
      ];
    }
    /**
     * Initiate the process to let player one place their ships on their
     * board by calling the placeShips method. The callback passed into
     * #currentPlayer.placeShips will be called once the player has finished
     * placing their ships. The callback will then start the process of
     * letting player two place their ships.
     *
     */
    this.#currentPlayer().placeShips(this.#donePlacingShips);
  }

  /**
   * This method is passed into Player.js (in this.startGame()) via
   * the #currentPlayer().placeShips() method. From there it is passed into
   * ShipSelector.js via the ShipSelector constructor. ShipSelector will call
   * this method once a player has placed all of their ships on their board.
   *
   * The purpose of this method can be explained: Player one is placing their
   * ships on the board. Once they have placed their ships we need to allow
   * player two to place their ships. This method toggles from player one to
   * player two, to allow player two to place ships.
   */
  #done_placing_ships() {
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
