import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { useTranslation } from "react-i18next";

import { Burger } from "../components/Burger";
import "./styles/Navbar.css";

export const Navbar = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="nav__fixed">
      <Burger open={open} handleClick={handleClick} />

      <div className="nav__logo">
        <a href="#">
          <img src="./logo.png" alt="Logo" className="logo__item" />
        </a>
      </div>

      <div className="nav__social">
        <a href="https://github.com/Hazzard1912" target="blank">
          <FaGithub className="social__icon" />
        </a>
        <a
          href="https://linkedin.com/in/jhonnier-hernandez-538442250"
          target="blank"
        >
          <FaLinkedin className="social__icon" />
        </a>
        <a
          href="https://wa.me/573153736189?text=Hola,%20me%20gustaría%20hacer%20una%20consulta"
          target="blank"
        >
          <FaWhatsapp className="social__icon" />
        </a>
      </div>

      <nav className={`menu ${open ? "open" : ""}`}>
        <ul className="nav__list">
          <li>
            <a href="#" className="nav__link" onClick={handleClick}>
              {t("Navbar.Home")}
            </a>
          </li>
          <li>
            <a href="#about" className="nav__link" onClick={handleClick}>
            {t("Navbar.About")}
            </a>
          </li>
          <li>
            <a href="#projects" className="nav__link" onClick={handleClick}>
            {t("Navbar.Projects")}
            </a>
          </li>
          <li>
            <a href="#contact" className="nav__link" onClick={handleClick}>
            {t("Navbar.Contact")}
            </a>
          </li>
          <div className="menu__end">
            <h2>
            {t("Navbar.Location")}
            </h2>
            <p>Santiago de Cali, Colombia</p>
          </div>
        </ul>
      </nav>
    </div>
  );
};
