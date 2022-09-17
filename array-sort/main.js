// Sort an array from smallest number to largest

/*const arr = [45, 3, 16, 89, 27]

arr.sort(function(a, b) {
    return a - b
})

console.log(arr)
*/

//Sort an array from largest number to smallest

/*const arr = [45, 3, 16, 89, 27]

arr.sort(function(a, b) {
    return b - a
})

console.log(arr)
*/

//Sort an array from shortest string to longest

/*const arr = ["tiger", "dog", "lion", "monkey"]

arr.sort(function(a, b) {
    return a.length - b.length
})

console.log(arr)
*/

//Sort an array alphabetically

/*const arr = ["tiger", "dog", "lion", "monkey"]

arr.sort(function(a, b) {
    if(a < b) {
        return -1;
    }
    if(a > b) {
        return 1;
    }
    return 0
})

console.log(arr)
*/

//Sort the objects in the array by age

const arr = [
    {name: "Brittany", age: 29},
    {name: "Jack", age: 43},
    {name: "Ashley", age: 18}
]

arr.sort(function(a, b) {
    return a.age - b.age
})

console.log(arr)