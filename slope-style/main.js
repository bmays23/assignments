//help this function return an array of animals, no matter how many animals are passed to it

/*function collectAnimals(...animals) {
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))
// ["dog", "cat", "mouse", "jackolope", "platypus"]
*/



//Write a function that returns a food object with the array names as properties.

/*function combineFruit(fruit, sweets, vegetables){
    return {
        fruit,
        sweets,
        vegetables
    }
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))
*/

//Use destructuring to use the property names as variables. Destructure the object in the parameter

/*function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
  console.log(parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  }));
*/

/*
function returnFirst(items){
    const [firstItem] = items;
    return firstItem
}
*/

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites([firstFav, secondFav, thirdFav]) {
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`
}
returnFavorites(favoriteActivities)

console.log(returnFavorites(favoriteActivities))


