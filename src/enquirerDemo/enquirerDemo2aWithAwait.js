const { prompt } = require("enquirer");

async function mainTask() {
    const response = await prompt({
        type: "input",
        name: "faveColour",
        message: "What is your favourite colour?",
    });

    console.log("promise has completed!");
    console.log("response: ", response);
}

mainTask();
console.log("AFTER mainTask() was called");
