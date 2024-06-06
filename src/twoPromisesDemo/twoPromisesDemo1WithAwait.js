const { promptFood, promptDrink } = require("./foodAndDrinkHelp");

async function main() {
    const foodResult = await promptFood();
    const drinkResult = await promptDrink();
    console.log({ foodResult, drinkResult });
}

main();
