/*const readline = require("readline-sync");

class Player {
    constructor(name) { 
        this.name = name
        this.totalCoins = 0
        this.status = "Small"
        this.hasStar = false
    }
    gotHit() {
    if (this.status === "Powered Up" && this.hasStar === false) {
        this.status = "Big"
        console.log(`You took a hit\n`)
    } else if (this.status === "Big") {
        this.status = "Small"
        console.log(`You took a hit\n`)
    } else if (this.status === "Small") {
        this.status = "Dead"
        console.log(`You have died.\n`)
        clearInterval(intervalID)
        return null;
    } else if (this.status === "Powered Up" && this.hasStar) {
        console.log("\nYou took a hit, but your star protected you!\n")
        this.hasStar = false
    }}
    gotPoweredUp()  {
        if (this.status === "Small") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Powered Up"
        } else if (this.status === "Powered Up") {
            this.hasStar = true
            console.log("You got a star!")
        }
        console.log(`\nYou got powered up! You are ${this.status}\n`)
    }
    addCoin() {
        this.totalCoins++
        console.log(`\nGot a coin! Now you have ${(user.totalCoins)} coins.\n`)
    }
    print() {
        console.log(`Name: ${user.name}\nStatus: ${user.status}\nTotal Coins: ${user.totalCoins}`)
    }
}


function random() {
    num = Math.floor(Math.random() * 3) 
    if (num === 0 ) {
        user.gotHit()
    } else if (num === 1) {
        user.gotPoweredUp()
    } else if (num === 2) {
        user.addCoin()
    } 
    if (user.status != "Dead") {
        user.print()
    }  
    
}



const input = readline.question("Name your player: ")
const user = new Player(input)

var intervalID = setInterval(random, 2000);
*/


const people = [ "John", "Adam", "Amber" ]

function peopleElements(arr) {
   const newPeopleElements = arr.map(people => {
        return `<h1>${people}</h1>`
    })
    return newPeopleElements
}

console.log(peopleElements(people))
//Given the following code below, write a function that uses  .map()  to wrap each name of the array in an <h1> opening and closing tag.

//Expected Output: [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Amber</h1>" ]
