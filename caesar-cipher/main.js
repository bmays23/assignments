var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

const alphabet = "abcdefghijklmnopqrstuvwxyz"



function cipher (){
    return input
        .toLowerCase()
        .split('')
        .map((phrase)=> {
            const index = alphabet.indexOf(phrase)
            const sum = index + shift
            if (sum > 25){
                return alphabet[sum - 26]
            }
            return alphabet[sum]
        })
        .join('')
}

console.log(cipher(input))