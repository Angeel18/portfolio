import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import { useFadeIn } from "../hooks/useFadeIn.js";

function Contact() {
    const { t } = useTranslation();
    const [ref, visible] = useFadeIn();

    return (
        <section
            ref={ref}
            id="contact"
            className={`flex justify-center items-center min-h-fit my-5 mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
            <div className="flex flex-col gap-8 justify-between items-center w-2/3">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl">{t("contact-h2")}</h2>
                    <h3 className="text-xl md:text-2xl">{t("contact-h3")}</h3>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}
export default Contact;
