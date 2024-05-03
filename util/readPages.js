import { readPage, renderPage } from "./templatingEngine.js";

const homepage = readPage("./public/pages/homepage/index.html");
export const homePageRender = renderPage(homepage);

/*const about = readPage("./public/pages/about/about.html");
export const aboutRender = renderPage(about);

const contact = readPage("./public/pages/contact/contact.html");
export const contactRender = renderPage(contact);*/