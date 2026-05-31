import home from "../pages/home.js";
import about from "../pages/about.js";
import bikes from "../pages/bikes.js";
import bike from "../pages/bike.js";

const router = async () => {
    let path = location.pathname;

    if (path.endsWith("index.html")) {
        path = "/";
    }

    if (path === "/") return home();
    if (path === "/about") return about();
    if (path === "/bikes") return await bikes();
    if (path.startsWith("/bikes/")) {
        const id = path.split("/")[2];
        return await bike(id);
    } else return `page not found`;
};

export default router;
