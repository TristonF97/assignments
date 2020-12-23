// Make an array of numbers that are doubles of the first array
const doubleNumbers = [7, 20, 32];

const doubledResult = doubleNumbers.map(function(dub) {
    return dub * 2;
})
  
console.log(doubledResult);

// Take an array of numbers and make them strings
const stringNumbers = [7, 20, 32];

const stringNumResult = stringNumbers.map(function(strNum) {
    return strNum.toString();
});

console.log(stringNumResult);

// Capitalize each of an array of names
const capitalizeArray = ["maRk", "EthAN", "amY"]

const capitalizeResult = capitalizeArray.map(function(capNames) {
    return capNames.charAt(0).toUpperCase() + capNames.toLowerCase().slice(1);
})

console.log(capitalizeResult);

// Make an array of strings of the names
const namesAndAges = [
    {
        name: "Bruce Wayne",
        age: 26
    },
    {
        name: "Clark Kent",
        age: 22
    },
    {
        name: "Barry Allen",
        age: 15
    },
    {
        name: "Diana Prince",
        age: 19
    },
    {
        name: "Oliver Queen",
        age: 17
    },
];

const justNames = namesAndAges.map(function(names) {
    return names.name;
});

console.log(justNames);

// Make an array of strings of the names saying whether or not they can go to The Matrix
const oldEnough = namesAndAges.map(function(people) {
    if (people.age >= 18) {
        console.log(people.name + " can go to The Matrix");
    } else {
        console.log(people.name + " is under age!");
    }
});

// Make an array of the names in h1s, and the ages in h2s
const readyForTheDOM = namesAndAges.map(function(edit) {
    if (edit.name) {
        var h1 = document.createElement("h1");
        h1.textContent = edit.name;
        document.body.appendChild(h1)
    } else (edit.age)
        var h2 = document.createElement("h2");
        h2.textContent = edit.age;
        document.body.appendChild(h2)
});