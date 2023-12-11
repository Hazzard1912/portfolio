import { FaDownload } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import "./styles/Hero.css";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero__section">
      <div className="container">
        <div className="hero__wrapper">
          <h1>{t("HeroTitle")}</h1>
          <a href="/albeiro_cv.pdf" className="hero__button">
            {t("HeroButton")}
            <FaDownload className="inline ml-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
