import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import de from "./locales/de.json";

// Optionally load IP and set default language
const detectLanguage = async () => {
  let lang = "en"; // fallback

  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    if (["DE", "AT", "CH"].includes(data.country_code)) {
      lang = "de";
    }
  } catch (err) {
    console.warn("GeoIP lookup failed, defaulting to English.");
  }

  await i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      de: { translation: de },
    },
    lng: lang,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
};

export default detectLanguage;
