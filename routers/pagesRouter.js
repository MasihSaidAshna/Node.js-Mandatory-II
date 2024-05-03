//import { homePageRender, aboutRender, contactRender } from "../util/readPages.js";
import { homePageRender } from "../util/readPages.js";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send(homePageRender);
});

router.get("/about", (req, res) => {
    res.send(aboutRender);
});

router.get("/contact", (req, res) => {
    res.send(contactRender);
});


export default router;