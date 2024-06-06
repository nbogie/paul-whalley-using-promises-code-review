const { prompt } = require("enquirer");

//I've extracted these prompts into their own functions to reduce the amount of code in the demos.
//But it's not necessary to do so.
function promptFood() {
    return prompt({
        type: "input",
        name: "faveFood",
        message: "What's your favourite food?",
    });
}

function promptDrink() {
    return prompt({
        type: "input",
        name: "faveDrink",
        message: "What's your favourite drink?",
    });
}

module.exports = { promptFood, promptDrink };
