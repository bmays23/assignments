//Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number
//1b) Call the `sum` function inside a `try` block using `"1"` and `"2"` as arguments. 
//Use `console.log` within a `catch` block to inform the user of the error.

function sum(x, y){
    if(isNaN(x)) {
        throw new Error("X is not a number")
    } else if(isNaN(y)) {
        throw new Error("Y is not a number")
    }
    return x + y;
    }

try {
    let x = 9
    let y = 8

    console.log(sum(x,y))
        
} catch(err) {
    console.log(err)
}






//2a) Given a user object, write a function called `login` that takes a `username` and `password` as parameters. 
//Throw an error if either of them don't match. Otherwise, log to the console a message saying `"login successful!"`