import { useState } from "react";
import { useTranslation } from "react-i18next";

import "../views/styles/LanguageSwitcher.css";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  return (
    <div className="language__switcher">
      {currentLanguage !== "es" && (
        <button
          className="language__button"
          onClick={() => changeLanguage("es")}
        >
          <img src="/es.svg" alt="Spanish" />
        </button>
      )}
      {currentLanguage !== "en" && (
        <button
          className="language__button"
          onClick={() => changeLanguage("en")}
        >
          <img src="/en.svg" alt="English" />
        </button>
      )}
    </div>
  );
};
