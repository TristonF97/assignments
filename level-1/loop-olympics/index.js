for (var i = 0; i <= 9; i++){
    console.log(i)
}

for (var i = 10 - 1; i >= 0; i--){
    console.log(i)
}

const fruit = ["banana", "orange", "apple", "kiwi"]
for (var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

const numbers = []
for (var i = 0; i <= 9; i++){
    numbers.push(i);
    console.log(numbers[i]);
}

for (var i = 1; i <= 100; i++){
    if (i % 2 === 0) {
        console.log(i)
    }
}

var fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var fruitsTwo = []
for (var i = 0; i < fruits.length; i += 2){
    fruitsTwo.push(fruits[i])
    console.log(fruitsTwo)
}