import SocialButton from "./SocialButton";
import { useTranslation } from "react-i18next";
    
function Footer () {
    const { t } = useTranslation();

    return (
        <footer className="bg-zinc-800 border-t border-zinc-700 min-h-20 h-auto">
            <div className="flex flex-col justify-center items-center p-4 text-sm gap-3">
                <SocialButton url="https://github.com/Angeel18" icon="Github"/>
                <div className="text-center">
                <p>© {new Date().getFullYear()} Ángel Rodríguez</p>
                <p>{t("rights")}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;