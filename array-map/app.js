//Make an array of numbers that are doubles of the first array

/*const arr = [2, 5, 100]

const result = arr.map(function (num) {
    return num * 2
})

console.log(result)
*/

//Take an array of numbers and make them strings

/*const arr = [2, 5, 100]

const string = arr.map(function(num) {
    return String(num);
})

console.log(string)
*/

//Capitalize the first letter of each name and make the rest of the characters lowercase

/*const arr = ["ashley", "taylor", "kayla"]

const newArr = arr.map(function(user) {
    return user[0].toUpperCase() + user.substring(1);
})


console.log(newArr)
*/

// Make an array of strings of the names

/*const names = [
    {name: "ashley" } ,
    {name: "taylor"} ,
    {name: "kayla"}

]

const string = names.map(function(name) {
    return name.name
})
console.log(string)
*/

//Make an array of strings of the names saying whether or not they can go to The Matrix
const users = [
    {
        name: "ashley",
        age: 18
    },
    {
        name: "taylor",
        age: 10
    },
    {
        name: "kayla",
        age: 30
    }
]

const enter = users.map(function(user) {
    if (user.age >= 18)
        return user.name + " can enter"
    else if (user.age < 18)
        return user.name + " cannot enter"
})

console.log(enter)