import "./styles/Footer.css";

import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer__section">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__grid__item_1">
            <h3 className="footer__heading">Jhonnier Hernández</h3>
            <p className="footer__text">{t("FooterDesc")}</p>
          </div>
          <div className="footer__grid__item_2">
            <h3 className="footer__heading">{t("FooterTitle")}</h3>
            <p className="footer__text">
              <a href="mailto:jahb8165@gmail.com">jahb8165@gmail.com</a>
            </p>
            <p className="footer__text">(+57) 315-373-6189</p>
          </div>
        </div>
      </div>
    </div>
  );
};
