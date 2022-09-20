//Turn an array of numbers into a total of all the numbers

/*const arr = [5, 7, 11, 15]

const result = arr.reduce(function(final, num) {
    final += num
    return final
})

console.log(result)
*/

//Turn an array of numbers into a long string of all those numbers.

/*const arr = [5, 7, 11, 15]

const result = arr.reduce(function(final, num) {
    return final + num
},"")

console.log(result)
*/

//Turn an array of voter objects into a count of how many people voted

/*const arr = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name: 'Zack', age: 19, voted: false}
]
 const count = arr.reduce(function(final, voter) {
    if(voter.voted) {
        final++
    }
    return final
 },0)

 console.log(count)
 */

 //Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

/*const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

const buy = wishlist.reduce(function(final, gift) {
    final += gift.price
    return final
},0)

console.log(buy)
*/

//Given an array of arrays, flatten them into a single array

/*var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

const arr = arrays.reduce(function(final, curr) {
    return final.concat(curr)
},[])

console.log(arr)
*/

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const tracker = voters.reduce(function(final, voter) {
    if(voter.age >= 18 && voter.age <= 25) {
        final.youngVote++
    } else if(voter.age >= 26 && voter.age <= 35) {
        final.midVote++
    } else if(voter.age >= 36 && voter.age <= 55) {
        final.oldVote++
    }
    if(voter.voted && voter.age >= 18 && voter.age <= 25) {
        final.youngVoted++
    } else if(voter.voted && voter.age >= 26 && voter.age <= 35) {
        final.midVoted++
    } else if(voter.voted && voter.age >= 36 && voter.age <= 55) {
        final.oldVoted++
    }
    return final
}, {youngVote: 0, midVote: 0, oldVote: 0,youngVoted: 0, midVoted: 0, oldVoted: 0})

console.log(tracker)
