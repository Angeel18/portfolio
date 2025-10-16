function KnowledgeCard(props){
    const imageUrl = "src/assets/logos/"+ props.logo +".png";
    const title = props.title

    return (
        <div className="flex flex-col p-4 w-40 md:w-60 h-30 md:h-50 bg-slate-300/5 rounded-2xl border-2 border-neutral-500 justify-between items-center relative">
            {props.wip ? <div className="absolute top-2 right-2 bg-amber-300/20 text-black p-2 rounded-full"><img src="src/assets/icons/WIP.png" alt="" /></div> : null}
            <img className="h-10/12" src={imageUrl} alt="" />
            <h2 className="md:text-xl">{title}</h2>
        </div>
    );
}
export default KnowledgeCard;