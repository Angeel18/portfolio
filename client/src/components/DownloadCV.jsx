import { useTranslation } from "react-i18next";
function DownloadCV(props) {
    const { i18n, t } = useTranslation();

    const file = i18n.language.startsWith("es")
        ? "/media/cv/CV_Angel_Rodriguez_Campos_ESP.pdf"
        : "/media/cv/CV_Angel_Rodriguez_Campos_ENG.pdf";

    return (
        <a href={file} download className="border py-2 px-4 rounded-2xl border-slate-300/50 cursor-pointer hover:bg-white/10 hover:scale-105 transition-all duration-200">
            {t("downloadCV")}
        </a>
    )
}

export default DownloadCV;