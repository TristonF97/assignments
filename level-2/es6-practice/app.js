let name = "John"
let age = 101

function runForLoop(pets) {
    const petObjects = []
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])


const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(carrot) {
    return carrots.map(carrot => ({ type: "carrot", name: carrot }))}

console.log(mapVegetables())


const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly)
}


const doMathSum = (a, b) => a + b;

const produceProduct = (a, b) => a * b;

console.log(doMathSum(2, 2))

console.log(produceProduct(4, 4))


function printString(firstName = "Jane", lastName = "Doe", age = 100) {
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
}

console.log(printString())


const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];

 function filterForDogs(animal) {
     return animals.filter(animal => animal.type === "dog")}
 
 console.log(filterForDogs())


 function vacation(location, name) {
     return `Hi ${name}! \nWelcome to ${location}. \nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.` 
 }

 console.log(vacation("Hawaii", "Janice"))