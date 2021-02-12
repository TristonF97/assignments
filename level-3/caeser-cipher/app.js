var readline = require('readline-sync');

function cipher(input, shift) {

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
    var shift = parseInt(readline.question('How many letters would you like to shift? '));
    let output = "";

    for (let i = 0; i < input.length; i++) {
        const letter = input[i];
    
        if (alphabet.indexOf(letter) === -1) {
            output += letter;
            continue;
        }
    
        let index = alphabet.indexOf(letter) + shift % 26;
        if (index > 25) index -= 26;
        if (index < 0) index += 26;
    
        output +=
            input[i] === input[i].toUpperCase()
            ? alphabet[index].toUpperCase()
            : alphabet[index];
    }
    return output
}

console.log(cipher())