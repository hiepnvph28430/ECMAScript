import projectFake from "../data"

// const ProjectList = () => {
//     return `
//     ${projectFake.map((project) => {
//         return `<div>${project.name}</div>`;
//     }).join("")}
//     `
// }
const ProjectList = () => {
    return `
        ${projectFake
            .map((project) => {
                return `<div><a href="/project/${project.id}">${project.name}</a></div>`;
            })
            .join("")}
    `;
};
export default ProjectList