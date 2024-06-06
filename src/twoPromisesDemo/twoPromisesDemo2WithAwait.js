const {
    promptForSearchTerm,
    makeDBConnectionPool,
    queryDBForMatchingMovies,
    showMovies,
} = require("./moviesHelp");

async function main() {
    const promptResult = await promptForSearchTerm();

    const searchTerm = promptResult.searchTerm;
    const dbPool = makeDBConnectionPool("omdb");
    const dbResult = await queryDBForMatchingMovies(dbPool, searchTerm);

    showMovies(searchTerm, dbResult.rows);
    dbPool.end();
}

main();
