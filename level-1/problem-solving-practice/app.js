const array = [8, 22, 56, 17, 101, 73, 49]
function largestNumber(largest) {
    let num = 0;
    for (var i = 0; i < largest.length; i++){
        if (largest[i] >= num) {
            num = largest[i];
        }
    }
    return num;
}
console.log(largestNumber(array))


const hero = ["Batman", "Superman", "The Hulk", "The Flash", "Nightwing"]
const heroesWithA = []
function lettersAndWords(find) {
    for (var i = 0; i < hero.length; i++) {
        if (hero[i].includes("a"))
        heroesWithA.push(hero[i])
    }
    return heroesWithA;
}
console.log(lettersAndWords(heroesWithA))


function divisible(num1, num2) {
    if (num1 % num2 != 0){
        return false
    } else
    return true
}
console.log(divisible(4, 2))
console.log(divisible(9, 3))
console.log(divisible(15, 4))