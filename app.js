import express from "express";
const app = express();

app.use(express.static("public"));

import pagesRouter from "./routers/pagesRouter.js";
app.use(pagesRouter);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

import moviesRouter from './routers/moviesRouter.js';
app.use(moviesRouter);

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server is running on port ", PORT));