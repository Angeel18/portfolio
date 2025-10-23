import KnowledgeCard from "./KnowledgeCard";
function Knowledge() {
    return (
        <section id="knowledge" className="flex justify-center items-center min-h-fit my-5">
            <div className="flex flex-col gap-8 justify-between items-center w-2/3">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl">Knowledge</h2>
                    <h3 className="text-xl md:text-2xl">Languagues or frameworks I've learnt</h3>
                </div>
                <div className="flex flex-wrap gap-4 justify-around p-4">
                    <KnowledgeCard logo="HtmlLogo" title="HTML" />
                    <KnowledgeCard logo="PhpLogo" title="PhP" />
                    <KnowledgeCard logo="JavaLogo" title="Java" />
                    <KnowledgeCard logo="JavascriptLogo" title="JavaScript" />
                    <KnowledgeCard logo="ReactLogo" title="React" />
                    <KnowledgeCard logo="NextjsLogo" title="Next.js" wip={true} />
                </div>
            </div>
        </section>

    )
}
export default Knowledge;