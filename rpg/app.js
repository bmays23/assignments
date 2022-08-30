const readline = require("readline-sync")
const playerName = readline.question("Welcome to Westeros! What is your name? ");

readline.question("Welcome " + playerName + ", First of Their Name. Press enter to embark into Westeros!");


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

                switch (runFight) {
                    case '1':
                        const run = Math.random();
                        if (run < .5) {
                            console.log("There's no escaping this " + playerName + "! It's too late. " + dragon + " has attacked you! Your Health: " 
                            + (playerHealth -= random(1, 80)) + "/80");
                        } else {
                            console.log("Whew! That was close!");
                            walk()
                        }
                    break           
                    case '2':
                        dragonHealth -= random(1, 15);
                        console.log("What a mighty blow! Dragon's Health: " + dragonHealth + "/80");

                        playerHealth -= random(1, 15);
                        console.log("It looks like you took some damage. Your Health: " + playerHealth + "/80");

                        if(dragonHealth <= 0) {
                            console.log("You have defeated " + dragon + "! You are now: " + inventory);                       
                        } else if (playerHealth <= 0) {
                            console.log("You are dead");
                        }

                        
                }
            }

        }
    }
}



while(playerHealth > 0) {
    playerRestore = function() {
        userActive = true;
        playerHealth = 80;
    };
    playerRestore();
    walk();
}







