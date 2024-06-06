const { prompt } = require("enquirer");

prompt({
    type: "autocomplete",
    message: "What is your fizzBuzz number?",
    name: "fizzBuzzNumber",
    choices: ["10", "20" ,"30"]
}).then(generateFizzBuzz);

function generateFizzBuzz(num) {
    let fizzBuzzArray = [];
    for (let i = 1; i <= num.fizzBuzzNumber; i++) {
      if (i%3 === 0 && i%5 === 0) {
        fizzBuzzArray.push("FizzBuzz");
      } else if (i%3 === 0) {
        fizzBuzzArray.push("Fizz");
      } else if (i%5 === 0) {
        fizzBuzzArray.push("Buzz");
      } else {
        fizzBuzzArray.push(i);
      }
    }
    console.log("Your fizzBuzzArray = " + fizzBuzzArray);
    return fizzBuzzArray;
  }