const { prompt } = require("enquirer");
const axios = require("axios").default;

prompt({
    type: "input",
    message: "Give me information to find your Simpsons episode?",
    name: "key",
}).then(mainTask);

async function mainTask(search) {
    const result = await axios.get("https://api.tvmaze.com/shows/83/episodes");
    let relevantData = filterData(result.data, search.key)
    console.log("Is your episode one of these: ");
    for (let i of relevantData){
        console.log(i.name);
    }
}

function filterData(data, searchKey) {  //Function filters for objects that contain values
    return data.filter(item => {        //that are strings and include the user prompt
        return Object.values(item).some(value => 
            typeof value === 'string' && value.includes(searchKey)
        );
    });
}