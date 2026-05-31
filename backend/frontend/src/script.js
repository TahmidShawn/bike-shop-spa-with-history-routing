import layout from "./layout/layout.js";
const root = document.querySelector("#root");

const renderFunc = async () => {
    root.innerHTML = await layout();
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
