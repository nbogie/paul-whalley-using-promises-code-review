const { someAsyncFunction } = require("./makeAPromise");

//1 call an async function - get returned promise
const promise = someAsyncFunction();

//2 register work to be done after promise resolves
promise.then(handleCompletedPromise);

function handleCompletedPromise(result) {
    //3. do stuff with the result
    console.log("result was: ", result);
}
