import home from "../pages/home.js";
import about from "../pages/about.js";

const router = () => {
    let path = location.pathname;

    if (path.endsWith("index.html")) {
        path = "/";
    }

    if (path === "/") return home();
    if (path === "/about") return about();
    else return `page not found`;
};

export default router;
