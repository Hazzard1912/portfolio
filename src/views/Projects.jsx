import "./styles/Projects.css";

import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="projects__section" id="projects">
      <div className="container">
        <div className="projects__grid">
          <div className="project">
            <img src="/project3.jpeg" alt="Project 3" />
            <div className="project__info">
              <h3>{t("Project1_title")}</h3>
              <div className="project__technologies">
                <span>React</span>
                <span>FastAPI</span>
                <span>PostgreSQL</span>
              </div>
              <p>{t("Project1_desc")}</p>
              <a className="project__button not__working">
                {t("Project1_button")}
              </a>
            </div>
          </div>
          <div className="project">
            <img src="/project1.png" alt="Project 1" />
            <div className="project__info">
              <h3>Gifs App</h3>
              <div className="project__technologies">
                <span>Angular</span>
                <span>Bootstrap</span>
              </div>
              <p>{t("Project2_desc")}</p>
              <a
                className="project__button"
                href="https://hazzard1912.github.io/prod_gifs_app/"
                target="blank"
              >
                {t("Project_button")}
              </a>
            </div>
          </div>
          <div className="project">
            <img src="/project2.png" alt="Project 2" />
            <div className="project__info">
              <h3>{t("Project3_title")}</h3>
              <div className="project__technologies">
                <span>Angular</span>
                <span>Bootstrap</span>
              </div>
              <p>{t("Project3_desc")}</p>
              <a
                className="project__button"
                href="https://hazzard1912.github.io/prod_paises_app/"
                target="blank"
              >
                {t("Project_button")}
              </a>
            </div>
          </div>
          <div className="project">
            <img src="/project5.png" alt="Project 5" />
            <div className="project__info">
              <h3>GameQuest</h3>
              <div className="project__technologies">
                <span>Angular</span>
                <span>PrimeNg</span>
              </div>
              <p>{t("Project4_desc")}</p>
              <a
                className="project__button"
                href="https://hazzard1912.github.io/prod_game_quest/"
                target="blank"
              >
                {t("Project_button")}
              </a>
            </div>
          </div>
          <div className="project">
            <img src="/project4.png" alt="Project 4" />
            <div className="project__info">
              <h3>{t("Project5_title")}</h3>
              <div className="project__technologies">
                <span>Angular</span>
                <span>MySQL</span>
                <span>Node</span>
              </div>
              <p>{t("Project5_desc")}</p>
              <a className="project__button not__working">
                {t("Project5_button")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
