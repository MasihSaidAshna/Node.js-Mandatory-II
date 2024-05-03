import { homePageRender } from "../util/readPages.js";
import { Router } from "express";

const router = Router();

router.get("/api/", (req, res) => {
    res.send(homePageRender);
});

router.get("/api/about", (req, res) => {
    res.send(aboutRender);
});

router.get("/api/contact", (req, res) => {
    res.send(contactRender);
});


export default router;