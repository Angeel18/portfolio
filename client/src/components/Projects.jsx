import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard.jsx";
import projects from "../data/projects.json";
import { useFadeIn } from "../hooks/useFadeIn.js";

function Projects() {
    const { t } = useTranslation();
    const [ref, visible] = useFadeIn();

    return (
        <section
            ref={ref}
            id="projects"
            className={`flex justify-center items-center min-h-screen transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
            <div className="flex flex-col gap-8 justify-between items-center w-2/3">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl">{t("projects-h2")}</h2>
                    <h3 className="text-xl md:text-2xl">{t("projects-h3")}</h3>
                </div>
                <div className="flex flex-wrap gap-4 justify-around p-4">
                    {projects.map(p => (
                        <ProjectCard key={p.title} title={p.title} wip={p.wip} />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Projects;
