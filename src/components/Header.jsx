function Header(){
    function changeLanguage(){
        console.log("Change language" );
    }


    return (
        <header className="fixed top-0 left-0 z-50 w-full">
            <div className="flex justify-center items-center h-15 text-xs sm:text-sm md:text-base">
                <nav className="flex gap-4 bg-white/15 backdrop-blur-sm border border-neutral-600 px-4 py-2 rounded-full items-center">
                    <ul className="flex gap-4">
                        <a href="#about"><li className="text-center text">About me</li></a>
                        <a href="#knowledge"><li className="text-center text">Knowledge</li></a>
                        <a href="#projects"><li className="text-center text">Projects</li></a>
                        <a href="#contact"><li className="text-center text">Contact</li></a>
                    </ul>
                    <div className="flex">
                        <button className="cursor-pointer" onClick={changeLanguage}>{/* Icons of language eng and esp */ }
                            <img src="src\assets\icons\EngIcon.png" alt="En" className="w-5"/>

                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header;