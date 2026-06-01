import navbar from "./components/navbar.js";
import footer from "./components/footer.js";
import router from "./router/router.js";

const root = document.querySelector("#root");
const nav_container = document.querySelector("#nav_container");
const footer_container = document.querySelector("#footer_container");

nav_container.innerHTML = navbar();
footer_container.innerHTML = footer();

const renderFunc = async () => {
    root.innerHTML = "<p>Loading...</p>";
    root.innerHTML = await router();
};

document.addEventListener("click", async (e) => {
    const link = e.target.closest("[data-link]");
    if (!link) return;

    e.preventDefault();

    history.pushState({}, "", link.href);

    await renderFunc();
});

window.addEventListener("popstate", renderFunc);
await renderFunc();
