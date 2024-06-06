const { makeDBConnectionPool } = require("./dbHelp");

const pool = makeDBConnectionPool("async-demo");

const promiseOfDBResult = pool.query("select * from hiscores");

console.log("DB query has started!");

promiseOfDBResult.then(handleCompletedPromise);

console.log("Result-handler has been registered!");

function handleCompletedPromise(result) {
    console.log("DB query has finished!  Results: ");
    console.log("Here are the query rows: ", result.rows);
}
