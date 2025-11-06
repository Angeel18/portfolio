import { useTranslation } from "react-i18next";
    
import ContactForm from "./ContactForm"
function Contact (){
    const { t } = useTranslation();

    return(
        <section id="contact" className="flex justify-center items-center min-h-fit my-5 mb-20 ">
            <div className="flex flex-col gap-8 justify-between items-center w-2/3">
                <div className="text-center">
                <h2 className="text-2xl md:text-3xl">{t("contact-h2")}</h2>
                <h3 className="text-xl md:text-2xl">{t("contact-h3")}</h3>
                </div>
                <ContactForm />
            </div>
        </section>
    )

}

export default Contact;