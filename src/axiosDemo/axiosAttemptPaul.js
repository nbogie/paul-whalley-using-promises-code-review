const axios = require("axios").default;

async function mainTask() {
    const result = await axios.get("https://api.tvmaze.com/shows/83/episodes");
    console.log("GET completed.  Result object includes: ");
    console.log(result.status[0]);
    console.log(result.data[0]);
}

mainTask();
console.log("after main task");