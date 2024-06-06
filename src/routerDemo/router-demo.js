app.get("/journal-entries", async (req, res) => {
    const promiseOfDBResult = query(
        "select * from entries order by entry_id desc"
    );

    //schedule work to be done when query is complete
    promiseOfDBResult.then((dbResult) => {
        res.json(dbResult.rows);
    });

    //function now finishes, even though db query HASN'T finished!
});
