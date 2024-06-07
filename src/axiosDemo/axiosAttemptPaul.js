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
 * @param {Object[]} episodeObjectsToChooseFrom
 * @returns {Promise<string>}
 */
async function selectEpisodeTitleFromChoices(episodeObjectsToChooseFrom) {
    const episodeTitlesToChooseFrom = makeNameArrayFromEpisodes(
        episodeObjectsToChooseFrom
    );

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
function findEpisodeWithMatchingName(relevantEpisodes, soughtTitle) {
    return relevantEpisodes.find((episode) => episode.name === soughtTitle);
}

async function mainTask() {
    const searchTerm = await promptForEpisodeSearchTerm();
    const fetchedEpisodesResult = await fetchTvShowsEpisodes(83);
    let relevantEpisodes = filterForMatchingEpisodes(
        fetchedEpisodesResult.data,
        searchTerm
    );
    if (relevantEpisodes.length === 0) {
        console.log("No episodes match your search term");
        return;
    }

    const selectedEpisodeTitle = await selectEpisodeTitleFromChoices(
        relevantEpisodes
    );
    const selectedEpisodeData = findEpisodeWithMatchingName(
        relevantEpisodes,
        selectedEpisodeTitle
    );

    console.log("Here is information about your episode:");
    console.log(selectedEpisodeData);
}

mainTask();
