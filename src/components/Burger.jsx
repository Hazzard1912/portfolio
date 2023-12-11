import "../views/styles/Navbar.css";

import { useTranslation } from "react-i18next";

export const Burger = ({open, handleClick}) => {

  const { t } = useTranslation();

  return (
    <div className={`burger ${open ? "open" : ""}`} onClick={handleClick}>
      <span className="line__1"></span>
      <span className="line__2"></span>
      <span className="line__3"></span>

      <div className={`menu-text-wrapper ${open ? "open" : ""}`}>
        <span className="menu-text">Menu</span>
        <span className="close-text">
          {t("Navbar.Close")}
        </span>
      </div>
    </div>
  );
};
