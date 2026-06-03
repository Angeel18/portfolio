import { useTranslation } from "react-i18next";
import DownloadCV from "./DownloadCV";

function About() {
    const { t } = useTranslation();

    return (
        <section id="about" className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20 min-h-screen">
            <div className="flex w-full md:w-5/12 xl:w-3/12 max-w-60 md:max-w-none justify-center items-center">
                <img src="/media/Profile.webp" className="rounded-full shadow-[0_0px_10px] shadow-amber-50" alt="Picture of me" />
            </div>
            <div className="flex flex-col md:w-5/12 xl:w-3/12 px-4 justify-center items-center text-center">
                <h1 className="text-3xl lg:text-4xl" id="header-1-about-me">{t("about-h1")}</h1>
                <h2 className="text-xl lg:text-2xl mb-4 text-amber-200 text-shadow-2xs text-shadow-amber-200/10" id="header-2-about-me">{t("about-h2")}</h2>
                <p id="text-about-me" className="text-sm lg:text-base">
                    {t("about-p1")}
                    <br />
                    {t("about-p2")}
                    <br />
                    {t("about-p3")}
                </p>
                <div className="mt-6">
                    <DownloadCV />
                </div>
            </div>
        </section>
    );
}
export default About;
