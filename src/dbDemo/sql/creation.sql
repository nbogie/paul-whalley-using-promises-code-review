DROP TABLE IF EXISTS hiscores;

CREATE TABLE hiscores (
    id SERIAL PRIMARY KEY,
    username text unique,
    score integer not null,
    time timestamp
);

-- Add some hiscores!
insert into hiscores (
        username,
        score,
        time
    )
values 
    ('neill', 150, now()),
    ('kenny', 650, now()),
    ('lauren', 700, now());