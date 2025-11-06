import projects from "../data/projects.json";
function ProjectCard(props) {
    const project = projects.find(p => p.title === props.title);
    const title = project.title;
    const githubUrl = project.url;
    const description = project.description;
    let NamePreview = title;

    for (let index = 0; index < NamePreview.length; index++) {
        if (NamePreview[index] === " ") {
            NamePreview = NamePreview.replace(" ", "_");
        }
    }
    const preview = new URL("/media/previews/"+NamePreview+".webp",import.meta.url).href;
    function openRepository() {
        window.open(githubUrl, "_blank");
    }
    return (
        <div 
        className=" w-70 md:w-100 h-40 md:h-60 bg-slate-300/5 hover:bg-slate-600 hover:z-1 cursor-pointer rounded-2xl border-2 border-neutral-500  relative hover:scale-110 transition-all duration-400" onClick={openRepository}
        style={{backgroundImage: `url(${preview})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
        >  
            <div className="flex flex-col p-4 justify-between items-center h-full w-full bg-black/70 hover:bg-black/40 transition-all duration-400 rounded-2xl"> 
                <h2 className="text-xl md:text-3xl">{title}</h2>
                <p className="text-sm md:text-xl text-center">{description}</p>
            </div> 
        </div>
    );
}
export default ProjectCard;