import { useState } from "react";
import { useTranslation } from "react-i18next";

function ContactForm() {
    const { t } = useTranslation();
    const [status, setStatus] = useState("idle");

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    message: formData.get("message"),
                }),
            });
            if (res.ok) {
                setStatus("success");
                e.target.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="py-6 px-4 flex w-1/2 items-start flex-col gap-4 min-w-3xs">
            <div className="flex w-full flex-col gap-1">
                <label htmlFor="name">{t("contact-form-name-label")}</label>
                <input id="name" type="text" name="name" required className="border w-full rounded-xl p-2 border-slate-300/25 focus:bg-white/10 transition-all duration-200" />
            </div>
            <div className="flex w-full flex-col gap-1">
                <label htmlFor="email">{t("contact-form-email-label")}</label>
                <input id="email" type="email" name="email" required className="border w-full rounded-xl p-2 border-slate-300/25 focus:bg-white/10 transition-all duration-200" />
            </div>
            <div className="flex w-full flex-col gap-1">
                <label htmlFor="message">{t("contact-form-message-label")}</label>
                <textarea id="message" name="message" required className="resize-none w-full min-h-25 border rounded-xl p-2 border-slate-300/25 focus:bg-white/10 transition-all duration-200" />
            </div>
            {status === "success" && <p className="text-green-400 text-sm">{t("contact-form-success")}</p>}
            {status === "error" && <p className="text-red-400 text-sm">{t("contact-form-error")}</p>}
            <button
                type="submit"
                disabled={status === "loading"}
                className="self-end border py-2 px-4 rounded-2xl border-slate-300/50 cursor-pointer hover:bg-white/10 hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === "loading" ? t("contact-form-sending") : t("contact-form-submit-button")}
            </button>
        </form>
    );
}
export default ContactForm;
