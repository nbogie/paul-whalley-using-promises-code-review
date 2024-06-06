const axios = require("axios").default;

//or https://jsonplaceholder.typicode.com/users/1
const url = "https://swapi.dev/api/people/1";

const resultingPromise = axios.get(url);
console.log("Asked axios to get " + url);
resultingPromise.then(handleCompletedPromise);

function handleCompletedPromise(result) {
    console.log("Promise completed.  Result contains: ");
    console.log(".status: ", result.status);
    console.log(".data: ", result.data);
}
