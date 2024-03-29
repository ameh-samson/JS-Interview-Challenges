// /* Alternating Caps
//  Write a function that takes in a string of letters
//  and returns a sentence in which every other letter is capitalized.

// Example input: "I'm so happy it's Monday"
// Example output: "I'M So hApPy iT'S MoNdAy"
// */

function altCaps(str) {
  //   split the word into an array
  let newStr = str.split("");

  // loops through and capitalized the str in index of 2
  for (let i = 0; i < newStr.length; i += 2) {
    newStr[i] = newStr[i].toUpperCase();
  }
  //   returns and join the string
  return newStr.join("");
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
