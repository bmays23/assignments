const readline = require("readline-sync");

const name = readline.question("What is your name? ");
const welcome = 'Welcome to the Escape Room ';
console.log(welcome + name + " !");

let player = true;
let keyFound = false;

while (player == true) {
    const options = readline.keyIn('Press 1 to put hand in hole in the wall, Press 2 to find the key or Press 3 to open the door')
    if (options == 1) {
        console.log('Your hand has been removed. Game Over');
        player = false;
    } else if (options == 2 && keyFound == false) {
        console.log('Key Found! Try opening the door.');
        keyFound = true;
    } else if (options == 2 && keyFound == true) {
        console.log('There are no more keys left to find. Try opening the door.');
    } else if (options == 3 && keyFound == false) {
        console.log('A key is needed to open the door.')
    } else if (options == 3 && keyFound == true) {
        console.log('Great job ' + name + " ! You have escaped!");
        player = false;
    }
}
