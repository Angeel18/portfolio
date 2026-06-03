function KnowledgeCard(props) {
    return (
        <div className="flex flex-col p-4 w-40 md:w-60 h-30 md:h-50 bg-slate-300/5 rounded-2xl border-2 border-neutral-500 justify-between hover:scale-110 transition-all duration-400 items-center relative">
            {props.wip && (
                <div className="absolute top-2 right-2 bg-amber-300/60 text-black p-2 rounded-full">
                    <img src="/media/icons/WIP.png" alt="Work in progress" />
                </div>
            )}
            <img className="h-10/12" src={"/media/logos/" + props.logo + ".webp"} alt={props.title + " logo"} />
            <h2 className="md:text-xl">{props.title}</h2>
        </div>
    );
}
export default KnowledgeCard;
