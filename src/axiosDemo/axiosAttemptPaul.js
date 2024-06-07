//@ts-check
const { prompt } = require("enquirer");
const axios = require("axios").default;
/**
 *
 * @returns {Promise<string>}
 */
async function promptForEpisodeSearchTerm() {
    const promptResult = await prompt({
        type: "input",
        message: "Give me information to find your Simpsons episode?",
        name: "searchTerm",
    });
    //@ts-ignore
    return promptResult.searchTerm;
}
/**
 *
 * @param {string[]} episodeTitlesToChooseFrom
 * @returns {Promise<string>}
 */
async function selectEpisodeTitleFromChoices(episodeTitlesToChooseFrom) {
    const promptResponse = await prompt({
        type: "autocomplete",
        message: "Are any of these your episode?",
        name: "name",
        choices: episodeTitlesToChooseFrom,
    });

    // @ts-ignore
    return promptResponse.name;
}

/**
 *
 * @param {number} showNumber
 */
function fetchTvShowsEpisodes(showNumber) {
    return axios.get(`https://api.tvmaze.com/shows/${showNumber}/episodes`);
}

/**
 *
 * @param {any[]} episodesArray
 * @param {string} searchTerm
 * @returns {any[]}
 */
function filterForMatchingEpisodes(episodesArray, searchTerm) {
    //Function filters for objects that contain values
    return episodesArray.filter((episode) =>
        episodeHasTermInAnyPropertyValue(episode, searchTerm)
    );
}

function episodeHasTermInAnyPropertyValue(episode, searchKey) {
    const allValuesInEpisode = Object.values(episode);
    const stringValuesInEpisode = allValuesInEpisode.filter(
        (value) => typeof value === "string"
    );
    return stringValuesInEpisode.some((value) =>
        value.toLowerCase().includes(searchKey.toLowerCase())
    );
}

/**
 *
 * @param {Object[]} inputEpisodes
 * @returns {string[]}
 */
function makeNameArrayFromEpisodes(inputEpisodes) {
    return inputEpisodes.map((obj) => obj.name);
}

async function mainTask() {
    const searchTerm = await promptForEpisodeSearchTerm();
    const fetchedEpisodesResult = await fetchTvShowsEpisodes(83);
    let relevantEpisodes = filterForMatchingEpisodes(
        fetchedEpisodesResult.data,
        searchTerm
    );
    const episodeTitles = makeNameArrayFromEpisodes(relevantEpisodes);
    const episodeTitle = await selectEpisodeTitleFromChoices(episodeTitles);
    const selectedEpisodeData = relevantEpisodes.find(
        (episode) => episode.name === episodeTitle
    );
    console.log("Here is information about your episode:");
    console.log(selectedEpisodeData);
}

mainTask();
