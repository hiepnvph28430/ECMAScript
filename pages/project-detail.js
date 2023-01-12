import Header from "../component/header";
import projectFake from "../data"



const ProjectDetailPost = (id) => {
    const currentProject = projectFake.find((project) => project.id == id);
    if (!currentProject) return "";
    return `
        ${Header()}
        <h1>${currentProject.name}</h1>
    `
}

export default ProjectDetailPost;