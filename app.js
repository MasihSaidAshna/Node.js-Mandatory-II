import "dotenv/config";
import express from "express";
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true
}));


import session from "express-session";

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));


import pagesRouter from "./routers/pagesRouter.js";
app.use(pagesRouter);

import moviesRouter from './routers/moviesRouter.js';
app.use(moviesRouter);

import router from './routers/loginRouter.js';
app.use(rou)

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server is running on port ", PORT));