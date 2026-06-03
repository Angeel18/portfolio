import { useTranslation } from "react-i18next";
import projects from "../data/projects.json";

function ProjectCard(props) {
    const { i18n } = useTranslation();
    const project = projects.find(p => p.title === props.title);
    const { title, url: githubUrl } = project;
    const wipUrl = "/media/icons/WIP.png";

    const descEs = project["description-es"];
    const descEn = project["description-en"];
    const description = i18n.language.startsWith("es")
        ? (descEs || descEn || "")
        : (descEn || descEs || "");

    const previewFile = project.preview ?? title.replaceAll(" ", "_") + ".webp";
    const preview = "/media/previews/" + previewFile;

    function openRepository() {
        window.open(githubUrl, "_blank");
    }

    return (
        <div
            className="w-70 md:w-100 h-40 md:h-60 bg-slate-300/5 hover:bg-slate-600 hover:z-1 cursor-pointer rounded-2xl border-2 border-neutral-500 relative hover:scale-110 transition-all duration-400"
            onClick={openRepository}
            style={{ backgroundImage: `url(${preview})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex flex-col p-4 justify-between items-center h-full w-full bg-black/70 hover:bg-black/40 transition-all duration-400 rounded-2xl">
                {props.wip && (
                    <div className="absolute top-2 right-2 bg-amber-300/60 text-black p-2 rounded-full">
                        <img src={wipUrl} alt="Work in progress" />
                    </div>
                )}
                <h2 className="text-xl md:text-3xl">{title}</h2>
                <p className="text-sm md:text-xl text-center">{description}</p>
            </div>
        </div>
    );
}
export default ProjectCard;
