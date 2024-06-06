const { Pool } = require("pg");
const { prompt } = require("enquirer");

/**
 *Makes a pool of connections to the named database.  it is assumed the db is on localhost.
 * @param {string} dbName name of database to connect to
 */
function makeDBConnectionPool(dbName) {
    //Understanding the details is not important here.
    return new Pool({
        database: dbName,
    });
}

/**
 * @param {Pool} pool of db connections to use for query.
 * @param {string} searchTerm e.g. "batman" to use as substring for movie title search
 * @returns a promise which should resolve to an array of row objects representing the search results.
 */
function queryDBForMatchingMovies(pool, searchTerm) {
    //(Danger! SQL injection attacks are possible here via a sneaky searchTerm.)
    const searchTermWithWildCards = "%" + searchTerm + "%";
    return pool.query("select * from movies where name ilike $1", [
        searchTermWithWildCards,
    ]);
}
/**Prompt user for searchTerm for movie search.
 * @returns {Promise<{searchTerm: string}>}
 */
function promptForSearchTerm() {
    return prompt({
        type: "input",
        name: "searchTerm",
        message: "Search term for movies",
    });
}

function showMovies(searchTerm, rows) {
    console.log(
        "Here are the movies in omdb matching the search term: " + searchTerm,
        rows
    );

    console.log(rows);
    const simplifiedMovieRows = rows.map(simplifyMovie);
    console.table(simplifiedMovieRows);
}

function simplifyMovie(fullMovieRow) {
    const { id, name, date, budget, kind } = fullMovieRow;
    const simplifiedMovieRow = { id, name, date, budget, kind };
    return simplifiedMovieRow;
}

module.exports = {
    promptForSearchTerm,
    makeDBConnectionPool,
    queryDBForMatchingMovies,
    showMovies,
};
