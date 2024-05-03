import { Router } from "express";
import db from "../database/connection.js";

const router = Router();

router.get("/api/movies", async (req, res) => {
    const result = await db.all('SELECT * FROM movies;');
    console.log(result);
    res.send({ data: result });
});

router.post("/api/movies", async (req, res) => {
    const { name, release_date, length, genre } = req.body;

    if (!name) {
        return res.status(400).send({ data: "Missing key in body: name" });
    }
    if (!release_date) {
        return res.status(400).send({ data: "Missing key in body: release date" });
    }
    if (!length) {
        return res.status(400).send({ data: "Missing key in body: length" });
    }
    if (!genre) {
        return res.status(400).send({ data: "Missing key in body: genre" });
    }

    const result = await db.run(`INSERT INTO movies (name, release_date, length, genre) 
                                VALUES (?, ?, ?, ?)`, [name, release_date, length, genre]);

    res.send({ lastId: result.lastID });
});


export default router;