## Project: Create the game Battleship
I built the game Battleship using vanilla JavaScript. 
###### View this app live [here](https://bshowen.github.io/JS-battleship/)
## Intention: Learn TDD using Jest
My goal is to familiarize myself with automated unit testing, using Jest. The main components of my application were developed using TDD. These are the components inside of src/game_modules. The files in src/dom are not tested. These components directly manipulate the DOM. This is my first project using Jest and I want to keep my tests simple and easy for me to understand so I am staying away from Mocks in this project, and Mocking is required to test the DOM. 
# Notes 
- A.I. Could be improved by not allowing it to guess the coordinates around a sunken ship. 
- There should be a "Play Again" button after a game is over. Right now the user is required to refresh the page to play again. 
- I created this app without any framework. Therefore, I tried to extract my code into logical components and modules.
