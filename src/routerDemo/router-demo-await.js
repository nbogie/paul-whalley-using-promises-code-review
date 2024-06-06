app.get("/journal-entries", async (req, res) => {
    const dbResult = await query(
        "select * from entries order by entry_id desc"
    );

    res.json(dbResult.rows);
});
