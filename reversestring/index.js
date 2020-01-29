// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



// function reverse(str) {
//   var stringReversed = '';
//   var count = 0;
//       for(var i=str.length; i>=0; i--){
//           stringReversed[count] = str[i-1];
//           count++;
//       }
//       return stringReversed;
// }



//
// function reverse(str) {
//   let reversed = '';
//   for (let character of str){
//     reversed = character + reversed;
//   }
//   return reversed;
// }

let stringReversed = '';
function reverse(str) {
       for(let i=str.length - 1; i>=0; i--){
           stringReversed = stringReversed + str[i];
           //debugger;
       }
       return stringReversed;
}
//reverse('hello');

module.exports = reverse;
