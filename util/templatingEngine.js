import fs from "fs";

export function readPage(path) {
    return fs.readFileSync(path).toString();
}

export function renderPage(page, config={}) {
    const header = fs.readFileSync("./public/components/header/header.html").toString();
    //const footer = fs.readFileSync("./public/components/footer/footer.html").toString();
    //const sidemenu = fs.readFileSync("./public/components/sidemenu/sidemenu.html").toString();
    //return header + page + sidemenu + footer;
    return header + page;
}

