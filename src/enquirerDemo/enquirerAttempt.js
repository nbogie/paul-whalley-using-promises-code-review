const { prompt } = require("enquirer");

prompt({
    type: "input",
    message: "What is your favourite colour?",
    name: "faveColour",
}).then(handleColourInput);

function handleColourInput(result) {
    console.log("you said your colour was: ", result.faveColour);
}
