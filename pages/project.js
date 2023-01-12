import Header from "../component/header";
import ProjectList from "../component/ProjectList";

export default function Project() {
    return `
    ${Header()}
    <h1>Project</h1>
    ${ProjectList()}
    `
}