// Turn an array of numbers into a total of all the numbers
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function(final, num){
    final += num;
    return final;
});

console.log(sum);

// Turn an array of numbers into a long string of all those numbers.
const stingNumbers = numbers.reduce(function(final, num){
    return final + num.toString();
})

console.log(stingNumbers);

// Turn an array of voter objects into a count of how many people voted
const voters = [
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
];

const peopleVoted = voters.reduce(function(final, voter){
    if(voter.voted){
        final++;
    }
    return final;
}, 0);

console.log("People who voted: " + peopleVoted);

/* Given an array of all your wishlist items, figure out how
much it would cost to just buy everything at once */
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const total = wishlist.reduce(function(final, item){
    final += item.price;
    return final;
}, 0);

console.log("$" + total);

// Given an array of arrays, flatten them into a single array
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const newArray = arrays.reduce(function(final, array){
    return final.concat(array);
});

console.log(newArray);

/* Given an array of potential voters, return an object
representing the results of the vote */
const votersAgain = [
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
];

const voterResults = votersAgain.reduce(function(final, voter){
    if(voter.age <= 25 && voter.voted){
        final.numYoungVotes++
    }
    if(voter.age <=25) {
        final.numYoungPeople++
    }
    if(voter.age > 26 && voter.age < 35 && voter.voted) {
        final.numMidVotesPeople++
    }
    if(voter.age > 26 && voter.age < 35){
        final.numMidsPeople++
    }
    if(voter.age >= 36 && voter.voted){
        final.numOldVotesPeople++
    }
    if(voter.age >= 36){
        final.numOldsPeople++
    }
    return final;
}, { numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0
  } );

console.log(voterResults)