var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet){
    const peopleArray = []
    for (var n = 0; n < people.length; n++){
        people[n] = people[n] + ":"
    }
    for (var i = 0; i < people.length; i++){
        peopleArray.push(people[i]);
        for (var j = 0; j < alphabet.length; j++){
            peopleArray.push(alphabet[j]);
        }
    }
    return peopleArray;
}
console.log(forception(people, alphabet));