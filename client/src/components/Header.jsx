import { useTranslation } from "react-i18next";
function Header() {
    const { t, i18n } = useTranslation();

    const enIcon = new URL("/media/icons/EngIcon.webp", import.meta.url).href;
    const esIcon = new URL("/media/icons/EspIcon.webp", import.meta.url).href;

    function changeLanguage() {
        const newLang = i18n.language.startsWith("es") ? "en" : "es";
        i18n.changeLanguage(newLang);
    }

    return (
        <header className="fixed top-0 left-0 z-50 w-full">
            <div className="flex justify-center items-center h-15 text-xs sm:text-sm md:text-base">
                <nav className="flex gap-4 bg-white/15 backdrop-blur-sm border border-neutral-600 px-4 py-2 rounded-full items-center">
                    <ul className="flex gap-4">
                        <a href="#about"><li className="hover:underline">{t("about")}</li></a>
                        <a href="#knowledge"><li className="hover:underline">{t("knowledge")}</li></a>
                        <a href="#projects"><li className="hover:underline">{t("projects")}</li></a>
                        <a href="#contact"><li className="hover:underline">{t("contact")}</li></a>
                    </ul>
                    <div className="flex">
                        <button className="cursor-pointer hover:scale-110 transition-all duration-200" onClick={changeLanguage}>
                            <img
                                src={i18n.language.startsWith("es") ? esIcon : enIcon}
                                alt={i18n.language.startsWith("es") ? "ES" : "EN"}
                                className="w-5"
                            />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header;