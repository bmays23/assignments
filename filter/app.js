//Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

/* const arr = [2, 4, 6, 8]

const result = arr.filter(num => num > 5)

console.log(result)
*/

//Given an array of numbers, return a new array that only includes the even numbers.

/*const arr = [1, 2, 3, 4]

const result = arr.filter(num => num % 2 === 0)

console.log(result)
*/

// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

/*const arr = ["purple", "blue", "red", "brown"]

const result = arr.filter(color => color.length < 5)

console.log(result)
*/

//Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

/*const arr = [
    {name: "brittany", member: true},
    {name: "john", member: false},
    {name: "ashley", member: false},
    {name: "steve", member: true}

]

const result = arr.filter(people => people.member === true)

console.log(result)
*/

//Make a filtered list of all the people who are old enough to see The Matrix

const arr = [
    {name: "brittany", age: 10},
    {name: "john", age: 40},
    {name: "ashley", age: 18},
    {name: "steve", age: 20}

]

const result = arr.filter(people => people.age >= 18)

console.log(result)