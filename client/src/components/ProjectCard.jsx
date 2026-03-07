import projects from "../data/projects.json";
function ProjectCard(props) {
    const project = projects.find(p => p.title === props.title);
    const title = project.title;
    const githubUrl = project.url;
    const wipUrl = new URL("/media/icons/WIP.png", import.meta.url).href;

    // Get current language saved by i18next in localStorage (e.g. "en" or "es").
    // If it's not found, default to "en".
    const lang = (localStorage.getItem("i18nextLng") || "en").toString();

    // Get project descriptions in both languages (if they exist).
    const descEs = project["description-es"];
    const descEn = project["description-en"];

    // Choose which description to display:
    // - If the language starts with "es", show the Spanish version first.
    // - Otherwise, show the English version first.
    // - If the chosen one doesn't exist, fall back to the other language,
    //   and if neither exists, use project.description as a last resort.
    const description = lang.startsWith("es")
        ? (descEs || descEn || project.description)
        : (descEn || descEs || project.description);

    let NamePreview = title;

    for (let index = 0; index < NamePreview.length; index++) {
        if (NamePreview[index] === " ") {
            NamePreview = NamePreview.replace(" ", "_");
        }
    }
    const preview = new URL("/media/previews/" + NamePreview + ".webp", import.meta.url).href;
    function openRepository() {
        window.open(githubUrl, "_blank");
    }
    return (
        <div
            className=" w-70 md:w-100 h-40 md:h-60 bg-slate-300/5 hover:bg-slate-600 hover:z-1 cursor-pointer rounded-2xl border-2 border-neutral-500  relative hover:scale-110 transition-all duration-400" onClick={openRepository}
            style={{ backgroundImage: `url(${preview})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex flex-col p-4 justify-between items-center h-full w-full bg-black/70 hover:bg-black/40 transition-all duration-400 rounded-2xl">
                {props.wip ? <div className="absolute top-2 right-2 bg-amber-300/60 text-black p-2 rounded-full"><img src={wipUrl} alt="" /></div> : null}

                <h2 className="text-xl md:text-3xl">{title}</h2>
                <p className="text-sm md:text-xl text-center">{description}</p>
            </div>
        </div>
    );
}
export default ProjectCard;