var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//Remove the last item from the vegetable array.

vegetables.pop()
console.log(vegetables)


//Remove the first item from the fruit array.

fruit.shift()
console.log(fruit)


//Find the index of "orange."

var orangeIndex = fruit.indexOf("orange")


//Add that number to the end of the fruit array.

fruit.push(orangeIndex)
console.log(fruit)

//Use the length property to find the length of the vegetable array

vegLength = vegetables.length

//Add that number to the end of the vegetable array.

vegetables.push(vegLength)
console.log(vegetables)

//Put the two arrays together into one array. Fruit first. Call the new Array "food".

var food = fruit.concat(vegetables)
console.log(food)

//Remove 2 elements from your new array starting at index 4 with one method.

food.splice(4, 2)
console.log(food)

//Reverse your array.

var reversedArr = food.reverse()
console.log(reversedArr)

//Turn the array into a string and return it.

var finalArr = reversedArr.toString()
console.log(finalArr)
