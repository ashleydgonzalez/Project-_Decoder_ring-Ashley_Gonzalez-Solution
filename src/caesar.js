// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  function caesar(input, shift, encode = true) {
    let secretMessage = [];//created empty array for the message.
    let inputText = input.toLowerCase();//added inputText as a variable and gave it the info of ignoring capital letters by adding toLowerCase() to input.
    
    // returns false if the shift value is equal to 0, less than -25, greater than 25, or not present. I believe this called a guard clause statement.
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    
    for (let i = 0; i < inputText.length; i++) {//looped through the input text that was given to us.
      for (let j = 0; j < alphabet.length; j++) {//looped through the alphabet 
        if (!alphabet.includes(inputText[i])) {//if the alphabet does not include the input text starting from the index, then we want to add the inputText to the secret message array starting from the index. 
         secretMessage += inputText[i];
         break;//added a break here because of what else is inside the for loop scope. I found out that without it, there are a lot of spaces between the messages, thus causing an error that took me forever to figure out.
        }  
        
        if (alphabet[j] === inputText[i]) {
          //if the alphabet and index match starting at the index, then we want to shift to the right if its positive, if not positive, then it will shift left. 
          let shiftNumber = j + shift;
          if (!encode) {
            shiftNumber = j - shift;
      }
      
      if (shiftNumber < 0) {//if the shift number is less than 0, then we want shiftNumber = shiftNumber + 26.
        shiftNumber += 26;
        secretMessage += alphabet[shiftNumber];
      } else if (shiftNumber > 25) {//if the shift number is greater than 25, then we want shiftNumber = shiftNumber - 26. 
        shiftNumber -= 26;
        secretMessage += alphabet[shiftNumber];
      } else {
        secretMessage += alphabet[shiftNumber];//if the code skips over the first two conditionals, then we are adding the secretMessage = secretMessage + alphabet with the appropriate shift number. 
      }
        }
      }
    }
    return secretMessage;//return the secret message. 
  }
  
  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
