// Sort an array from smallest number to largest
const numbers = [1, 3, 10, 6, 15, 5];

numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers)

// Sort an array from largest number to smallest
numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbers)

//  Sort an array from shortest string to longest
const animals = ["wolf", "dog","elephant", "cat", "platypus", "Bison"];

animals.sort(function(a, b) {
    return a.length - b.length;
});

console.log(animals)

// Sort an array alphabetically
animals.sort()

console.log(animals)

// Sort the objects in the array by age
const byAge = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
];

byAge.sort(function(a, b) {
    return a.age - b.age;
});

console.log(byAge)