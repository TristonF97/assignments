/* Given an array of numbers, return a new array that has
only the numbers that are 5 or greater. */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const fiveAndGreater = numbers.filter(function(num) {
    if (num >= 5) {
        return true;
    }
})
console.log(fiveAndGreater);

/* Given an array of numbers, return a new array that only
includes the even numbers. */
const evensOnly = numbers.filter(function(num) {
    if (num % 2 === 0) {
        return num;
    }
})
console.log(evensOnly);

/* Given an array of strings, return a new array that only
includes those that are 5 characters or fewer in length */
const characters = ["wolf", "elephant", "dog", "cat", "platypus"];

const fiveOrFewer = characters.filter(function(char) {
    if (char.length <= 5) {
        return true;
    }
})
console.log(fiveOrFewer);

/* Given an array of people objects, return a new array that
has filtered out all those who don't belong to the club. */
const heroesAndVillains = [
    {
        name: "Bruce Wayne",
        member: true
    },
    {
        name: "Barry Allen",
        member: true
    },
    {
        name: "Lex Luther",
        member: false
    },
    {
        name: "Eobard Thawne",
        member: false
    },
    {
        name: "Diana Prince",
        member: true
    },
];

const membersOfTheJusticeLeague = heroesAndVillains.filter(function(hero) {
    if (hero.member === true) {
        return true;
    }
});
console.log(membersOfTheJusticeLeague);

/* Make a filtered list of all the people who are old
enough to see The Matrix (older than 18) */
const people = [
    {
        name: "Mark",
        age: 28
    },
    {
        name: "Ethan",
        age: 16
    },
    {
        name: "Amy",
        age: 25
    },
    {
        name: "Sean",
        age: 19
    },
    {
        name: "Jacob",
        age: 12
    },
];

const ofAge = people.filter(function(people) {
    if (people.age >= 18) {
        return true;
    }
})
console.log(ofAge)