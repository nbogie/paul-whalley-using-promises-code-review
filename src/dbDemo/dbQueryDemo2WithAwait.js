const { makeDBConnectionPool } = require("./dbHelp");

async function mainTask() {
    const pool = makeDBConnectionPool("async-demo");
    const dbResult = await pool.query("select * from hiscores");
    console.log("promise completed");
    console.log("The result was an object with .rows as follows: ");
    console.log(dbResult.rows);
}

mainTask(); //watch out, this returns a promise before the work is done!
console.log("AFTER mainTask() was called");
