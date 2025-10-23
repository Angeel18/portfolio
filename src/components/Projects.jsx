import ProjectCard from "./ProjectCard.jsx";
function Projects() {
    return (
        <section id="projects" className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col gap-8 justify-between items-center w-2/3">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl">Projects</h2>
                    <h3 className="text-xl md:text-2xl">Click on them to see their respective repository</h3>
                </div>
                <div className="flex flex-wrap gap-4 justify-around p-4">
                    <ProjectCard title="Portfolio"/>
                    <ProjectCard title="Old Portfolio"/>
                    <ProjectCard title="Codema"/>
                    <ProjectCard title="RevBall"/>
                </div>
            </div>
        </section>
    )
}
export default Projects;