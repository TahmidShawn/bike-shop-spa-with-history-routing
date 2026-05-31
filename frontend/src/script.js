import layout from "./layout/layout.js";
const root = document.querySelector("#root");

const renderFunc = () => {
    root.innerHTML = layout();
};

document.addEventListener("click", (e) => {
    const link = e.target.closet("[data-link]");
    if (!link) return;

    e.preventDefault();

    history.pushState({}, "", link.href);

    renderFunc();
});

window.addEventListener("popstate", renderFunc);
renderFunc();
