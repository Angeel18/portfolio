import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en/common.json";
import es from "./locales/es/common.json";


// Initialize i18n with multiple middleware/plugins
i18n
  // Adds automatic language detection capability
  .use(LanguageDetector)
  // Adds React integration support
  .use(initReactI18next)
  .init({
    // Define translation resources for English (en) and Spanish (es)
    resources: { en: { translation: en }, es: { translation: es } },
    
    // If no language is detected, use English as fallback
    fallbackLng: "en",
    
    // List of supported languages in the application
    supportedLngs: ["en", "es"],
    
    // Allow similar language codes (e.g., 'es-MX' will fall back to 'es')
    nonExplicitSupportedLngs: true,

    // Language detection configuration
    detection: {
      // Order of methods to detect user's language preference
      // Checks localStorage first, then browser settings, HTML lang attribute, etc.
      order: ["localStorage", "navigator", "htmlTag", "querystring", "path", "subdomain"],
      
      // Store language preference in localStorage
      caches: ["localStorage"],
      
      // Allow changing language using URL parameter ?lang=code
      lookupQuerystring: "lang"
    },

    // Don't escape special characters in translations
    interpolation: { escapeValue: false }
  });

// Event listener for when language changes
i18n.on("languageChanged", (lng) => {
  // Update the HTML document's lang attribute to either "es" or "en"
  document.documentElement.setAttribute("lang", lng?.startsWith("es") ? "es" : "en");
});

export default i18n;
