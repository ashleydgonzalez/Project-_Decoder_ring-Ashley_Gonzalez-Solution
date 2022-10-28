// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    let regularAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let substitutionResult = [];
    let secondResult = [];
    let inputMessage = input.toLowerCase();

    if (!input || !alphabet) {//if no input or no alphabet, then we will return false using guard clause
        return false;
    }

     if (alphabet.length !== 26) {//if the alphabet length is not 26 characters, then we will return false using guard clause
      return false;
    }
//looped through the characters in the alpahbet, and stated that if the indexOf method for the second result with the characters of an alphabet is less than 0, then we want to push those results into the second result array(alphabet[characters]) or else well just return false if its greater than 0. 
    for (let characters in alphabet) {
      if (secondResult.indexOf(alphabet[characters]) <0) {
        secondResult.push(alphabet[characters]);
      } else {
        return false
      }
    }
//looping through the inputMessage.length starting at the 0 index adn incrementing by one, if the inputMessage starting at the index is equal to a space, the we will add that space to substitutionResult. Or else, using our regularAlphabet(regAbc) and alphabet(abc) if its not encoding, then we will use the substitution alphabet and we reassign the meaning on lines 38/39.
    for (let i = 0; i < inputMessage.length; i++) {
      if (inputMessage[i] === " ") {
        substitutionResult += " ";
      } else {
        let regAbc = regularAlphabet;
        let abc = alphabet;
        if (!encode) {
          regAbc = alphabet;
          abc = regularAlphabet;
        }
//nested loop through the regAbc.length and incrementing by 1. if the inputMessage and regAbc match starting at the index, then we will add those together and return the substitutionResult message on line 49.
        for (let j = 0; j < regAbc.length; j++) {
          if (inputMessage[i] === regAbc[j]) {
            substitutionResult += abc[j]
          }
        }
      }
    }
    return substitutionResult;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
