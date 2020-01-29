// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let strNumber = n.toString();
    let reverseNumber = '';
    for(let i=strNumber.length-1; i>=0; i--){
        reverseNumber = reverseNumber + strNumber[i];
    }
    return parseInt(reverseNumber, 10);             //parseInt is a function that converts string to integer. 10 is to convert it to dec.
}

module.exports = reverseInt;
