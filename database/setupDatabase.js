import db from "./connection.js";

const isDeleteMode = process.argv.includes('delete');

if (isDeleteMode) {
    await db.run(`DROP TABLE IF EXISTS movies;`);
    await db.run(`DROP TABLE IF EXISTS directors;`);
    await db.run(`DROP TABLE IF EXISTS movie_directors;`);
}


await db.exec(`CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    release_date TEXT,
    length INTEGER,
    genre TYPE CHECK( genre IN ('Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Science Fiction', 'Thriller') )
)
`);


await db.exec(`CREATE TABLE IF NOT EXISTS directors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    movie_id INTEGER,
    FOREIGN KEY (movie_id) REFERENCES movies (id)
)
`);


await db.exec(`CREATE TABLE IF NOT EXISTS movie_directors (
    movie_id INTEGER,
    director_id INTEGER,
    PRIMARY KEY (movie_id, director_id),
    FOREIGN KEY (movie_id) REFERENCES movies(id),
    FOREIGN KEY (director_id) REFERENCES directors(id)
)
`);


await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
)
`);


if (isDeleteMode) {
    await db.run(`INSERT INTO movies (name, release_date, length, genre) VALUES ('No Country for Old Men', 2007, 122, 'Thriller')`);
    await db.run(`INSERT INTO directors (name, movie_id) VALUES ('Joel Coen', 1)`);
    await db.run(`INSERT INTO directors (name, movie_id) VALUES ('Ethan Coen', 1)`);
    await db.run(`INSERT INTO movie_directors (movie_id, director_id) VALUES (1, 1)`);
    await db.run(`INSERT INTO movie_directors (movie_id, director_id) VALUES (1, 2)`);
}