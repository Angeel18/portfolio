import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Header() {
    const { t, i18n } = useTranslation();
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const ids = ["about", "knowledge", "projects", "contact"];
        const visible = new Set();
        const observers = [];

        ids.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) visible.add(id);
                    else visible.delete(id);
                    const active = ids.find(i => visible.has(i));
                    if (active) setActiveSection(active);
                },
                { threshold: 0.3 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);

    function changeLanguage() {
        const newLang = i18n.language.startsWith("es") ? "en" : "es";
        i18n.changeLanguage(newLang);
    }

    const navItems = [
        { id: "about", label: t("about") },
        { id: "knowledge", label: t("knowledge") },
        { id: "projects", label: t("projects") },
        { id: "contact", label: t("contact") },
    ];

    return (
        <header className="fixed top-0 left-0 z-50 w-full">
            <div className="flex justify-center items-center h-15 text-xs sm:text-sm md:text-base">
                <nav className="flex gap-4 bg-white/15 backdrop-blur-sm border border-neutral-600 px-4 py-2 rounded-full items-center">
                    <ul className="flex gap-4">
                        {navItems.map(({ id, label }) => (
                            <a key={id} href={`#${id}`}>
                                <li className={`hover:underline transition-colors duration-200 ${activeSection === id ? "underline text-amber-200" : ""}`}>
                                    {label}
                                </li>
                            </a>
                        ))}
                    </ul>
                    <div className="flex">
                        <button
                            className="cursor-pointer hover:scale-110 transition-all duration-200"
                            onClick={changeLanguage}
                        >
                            <img
                                src={i18n.language.startsWith("es") ? "/media/icons/EspIcon.webp" : "/media/icons/EngIcon.webp"}
                                alt={i18n.language.startsWith("es") ? "Cambiar a inglés" : "Switch to Spanish"}
                                className="w-5"
                            />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
export default Header;
