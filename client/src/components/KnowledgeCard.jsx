function KnowledgeCard(props){
    const imageUrl = new URL("/media/logos/"+ props.logo +".webp", import.meta.url).href;
    const wipUrl = new URL("/media/icons/WIP.png",import.meta.url).href;
    const title = props.title

    return (
        <div className="flex flex-col p-4 w-40 md:w-60 h-30 md:h-50 bg-slate-300/5 rounded-2xl border-2 border-neutral-500 justify-between hover:scale-110 transition-all duration-400 items-center relative">
            {props.wip ? <div className="absolute top-2 right-2 bg-amber-300/60 text-black p-2 rounded-full"><img src={wipUrl} alt="" /></div> : null}
            <img className="h-10/12" src={imageUrl} alt="" />
            <h2 className="md:text-xl">{title}</h2>
        </div>
    );
}
export default KnowledgeCard;