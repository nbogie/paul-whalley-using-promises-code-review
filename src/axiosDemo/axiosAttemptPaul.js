const { prompt } = require("enquirer");
const axios = require("axios").default;

function queryEpisodePrompt() {
    return prompt({
        type: "input",
        message: "Give me information to find your Simpsons episode?",
        name: "key",
    });
}

function selectEpisode(promptData) {
    return prompt({
        type: "autocomplete",
        message: "Are any of these your episode?",
        name: "name",
        choices: promptData
    });
}

async function mainTask() {
    const prompt = await queryEpisodePrompt();
    const result = await axios.get("https://api.tvmaze.com/shows/83/episodes");
    let relevantData = filterData(result.data, prompt.key)
    const titleArray = makeNameArrayFromObjects(relevantData);
    const selectedEpisode = await selectEpisode(titleArray);
    console.log(selectedEpisode)
    const selectedEpisodeData = relevantData.find( episodes => episodes.name === selectedEpisode.name);
    console.log("Here is information about your episode:")
    console.log(selectedEpisodeData);
}

function filterData(data, searchKey) {  //Function filters for objects that contain values
    return data.filter(item => {        //that are strings and include the user prompt
        return Object.values(item).some(value => 
            typeof value === 'string' && value.includes(searchKey)
        );
    });
}

function makeNameArrayFromObjects(inputArrayOfObject) {
    nameArray = []
    for (let i of inputArrayOfObject) {
        nameArray.push(i.name)
    }
    return nameArray
}

mainTask();