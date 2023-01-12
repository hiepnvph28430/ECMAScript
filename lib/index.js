import Navigo from "navigo";
const router = new Navigo("/", { linksSelector: "a", hash: true });

const render = (content, container) => {
    console.log("Type of content", typeof content);
    if (typeof content === "function") {
        container.innerHTML = content();
    } else {
        container.innerHTML = content;
    }


};
export { render, router };
