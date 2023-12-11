import "./styles/About.css";

import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about__section" id="about">
      <div className="container">
        <div className="stack">
          <h2 className="heading__2">Stack</h2>
          <div className="stack__container">
            <img src="/angular.svg" alt="Angular logo" />
            <img src="/react.svg" alt="React logo" />
            <img src="/css.svg" alt="CSS logo" />
            <img src="/javascript.svg" alt="JavaScript logo" />
            <img src="/typescript.svg" alt="TypeScript logo" />
            <img src="/nodejs.svg" alt="Node logo" />
            <img src="/mongo.svg" alt="MongoDB logo" />
            <img src="/mysql.svg" alt="MySQL logo" />
            <img src="/python.svg" alt="Python logo" />
            <img src="/docker.svg" alt="Docker logo" />
            <img src="/github.svg" alt="Github logo" />
          </div>
        </div>
        <div className="about__me__grid">
          <div className="about__me">
            <h3>{t("AboutTitle")}</h3>
            <p className="text-slate-100">{t("AboutDesc")}</p>
          </div>
          <div className="about__me__image">
            <img src="/about.jpg" alt="about image" />
          </div>
        </div>
        <h2 className="heading__2 text-center mt-16">{t("AboutMe")}</h2>
        <div className="features__grid">
          <div className="feature">
            <img src="/feature1.jpg" alt="Aprendizaje continuo" />
            <h3>{t("Feature1_title")}</h3>
            <p>{t("Feature1_desc")}</p>
          </div>
          <div className="feature">
            <img src="/feature3.jpg" alt="SEO" />
            <h3>{t("Feature2_title")}</h3>
            <p>{t("Feature2_desc")}</p>
          </div>
          <div className="feature">
            <img src="/feature2.jpg" alt="Fast" />
            <h3>{t("Feature3_title")}</h3>
            <p>{t("Feature3_desc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
