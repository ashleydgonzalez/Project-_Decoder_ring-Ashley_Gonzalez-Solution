// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  
  function polybius(input, encode = true) {
    let alphabetGrid ={
      "a":"11", "b":"21", "c":"31", "d":"41", "e":"51",
      "f":"12", "g":"22", "h":"32", "i":"42", "j":"42", "k":"52",
      "l":"13", "m":"23", "n":"33", "o":"43", "p":"53",
      "q":"14", "r":"24", "s":"34", "t":"44", "u":"54",
      "v":"15", "w":"25", "x":"35", "y":"45", "z":"55"
    }
    let inputMessage = input.toLowerCase();//added inputText as a variable and gave it the info of ignoring capital letters by adding toLowerCase() to input.
    let polybiusMessage = [];//created empty array for the polybius message.
    
    if(!input) {
      return false;//if there is no inout text that needs to be decoded/encoded, then use guard clause to return false.
    }

    if (encode) {//if we are encoding, loop through the inputMessage.length and increment by 1 and created a new variable letters to hold the information of the inputMessage starting at the index. 
      for (let i = 0; i < inputMessage.length; i++) {
        let letters = inputMessage[i];
        if (letters === "i" || letters === "j") {//we are making sure that i and j are matching because they are sharing the same number of 42 and adding the polybiusMessage to the alphabetGrid with the letter "i" as a string to account for it. 
          polybiusMessage += alphabetGrid["i"];
        } else if (letters === " ") {
          polybiusMessage += " "//here we are making sure that we are leaving the spaces so the encoding message still follows the regular alphabet and grammar syntax. 
        } else {//we are using the object.entries method to get the alphabetGrid's key:value pairs and using .find() in conjunction with object.entries() to get the letter values from running Object.entries on the alphabetGrid. We are checking to make sure that the letters are matching starting at the 0 index. 
          let matching = Object.entries(alphabetGrid).find((letter) => letters === letter[0]);
          polybiusMessage += matching[1];//polybiusMessage + polybiusMessage = matching[1] at the 1st element
        }
      }
   
    } else {
      let counter = 0;//declaring an accumulator
      for (let i = 0; i < input.length; i++) {//looping through the input.length and incrementing by 1, and stating if the input starting at the index does not equal space, then increase the counter by 1 (++).
        if (input[i] !== " ") {
          counter++
        }
      }
      
      if (counter % 2 !== 0) {//if the counters accumulation remainder by 2 is not equal to 0, then we will return false. 
        return false;
      }
     
      for (let i = 0; i < input.length; i += 2) {//looping through the input.length, this time incrementing it by 2 to leave spaces. We are declaring code as a variable to hold the input starting at the index with the input of index + 1.
        let code = `${input[i]}${input[i + 1]}`
        if (code.includes(" ")) {
          polybiusMessage += " ";
          i -= 1;
        } else if (code === "42") {//making sure 42 translates to i/j (lines 53 and 54)
          polybiusMessage += "(i/j)";
        } else {//we are using the object.entries method to get the alphabetGrid's key:value pairs and using .find() in conjunction with object.entries() to get the letter values from running Object.entries on the alphabetGrid. We are checking to make sure that the letters are matching starting at the 0 index. 
          let matching = Object.entries(alphabetGrid).find((letter) => code === letter[1]);
          if (matching) {
              polybiusMessage += matching[0];//if everything is matching, then polybiusMessage = polybiusMessage + matching[0] to put/add everything together. 
          }
        }
      }
    }
    return polybiusMessage;//returning the Polybius message.
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
