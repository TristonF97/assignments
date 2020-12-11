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


const hero = ["Batman", "Superman", "The Hulk"]
function lettersAndWords(find) {
    const letter = "a";
    for (var i = 0; i < find.length; i++) {
        if (find[i] == letter) {
            console.log("its working")
        }
    }
    return letter;
}
console.log(lettersAndWords(hero))


function divisible(num1, num2) {

}