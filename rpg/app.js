const readline = require("readline-sync")

//Console must greet player with a fun message, Console must ask for the player's name and store it
const playerName = readline.question("Welcome to Westeros! What is your name? ");

readline.question("Welcome " + playerName + ", First of Their Name. Press enter to embark into Westeros!");

//The console will ask the user to enter a "w" to walk
//Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared 

const dragons = ["Balerion", "Caraxes", "Drogon"];
const powerUps = ["Immune to fire", "a Dragon Rider", "a Master Swordsman"];
const options = ["walk", "exit", "print"];
let playerHealth = 80;
let playerPowerUp = [];

function random(min, max) {
    return Math.floor((Math.random() * max) + min)
}

function walk() {
    const dragon = dragons [Math.floor(Math.random() * dragons.length)];
    const decide = ["run", "attack"];
    let dragonHealth = 80;
    let inventory = powerUps[Math.floor(Math.random() * powerUps.length)]
    
    const choice = readline.keyInSelect(options, 'What will it be?');

    if(options[choice] == "exit") {
        return playerHealth = 0;
    } else if (options[choice] == "print") {
        console.log(playerName + "'s Health Points: " + playerHealth + "\nInventory: " + playerPowerUp);
    } else if (options[choice] == "walk") {
        let scenario = Math.random();
        if (scenario < .1) {
            console.log("What a beautiful land! Let's wander some more.");
        }
        else if (scenario < .25) {
            console.log("I wonder if we'll run into a dragon!");
        }
        else {
            console.log(dragon + " has appeared! What will you do?");

            while (dragonHealth > 0 && playerHealth > 0) {
                const runFight = readline.question("Enter 1 to run or 2 to attack: ");
                
                //The user can decide to attack or run
                //If attacking, a random amount of damage will be dealt between a min and max
                //If running, there will be a 50% chance of escaping
                switch (runFight) {                    
                    case '1':
                        const run = Math.random();
                        if (run < .5) {
                            console.log("There's no escaping this " + playerName + "! It's too late. " + dragon + " has attacked you! Your Health: " 
                            + (playerHealth -= random(1, 80)) + "/80");
                            if(playerHealth <= 0) {
                                console.log(playerName + ", Last of Their Name, You have been killed.")
                            }
                        } else {
                            console.log("Whew! That was close!");
                            walk()
                        }
                    break           
                    case '2':
                        dragonHealth -= random(1, 20);
                        console.log("What a mighty blow! Dragon's Health: " + dragonHealth + "/80");

                        playerHealth -= random(1, 20);
                        console.log("It looks like you took some damage. Your Health: " + playerHealth + "/80");
                        
                        //When the player kills enemies, they are awarded with items
                        //If the user enters 'Print' or 'p' in the console, the console will print the players name, HP, and each item in their inventory
                        if(dragonHealth <= 0) {
                            console.log("You have defeated " + dragon + "! You are now: " + inventory);
                               playerPowerUp.push(inventory);                                                  
                        } else if (playerHealth <= 0) {
                            console.log(playerName + ", Last of Their Name, You have been killed.");
                        }

                        
                }
            }

        }
    }
}



while(playerHealth > 0) {
    playerRestore = function() {
        playerActive = true;
        playerHealth = 80;
    };
    playerRestore();
    walk();
}







