const { prompt } = require("enquirer");

prompt({
    type: "input",
    message: "What is your favourite colour?",
    name: "faveColour",
}).then((response) => {
    console.log("You said: ", response.faveColour);
});
