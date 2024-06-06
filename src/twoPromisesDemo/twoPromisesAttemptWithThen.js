const { promptFood, promptDrink } = require("./foodAndDrinkHelp");

//It gets complex to pass all the accumulated results down through the chain of promises
//So we won't try for that here.  See the await-based demo instead.

promptFood().then(doStage2).then(doFinalStage);

function doStage2(stage1Result) {
    console.log("Fave food: " + stage1Result.faveFood);
    const promise2 = promptDrink();
    return promise2;
}

function doFinalStage(stage2Result) {
    console.log("Drink: " + stage2Result.faveDrink);
    //we've lost stage1Result (intentionally to avoid complexity)
}
