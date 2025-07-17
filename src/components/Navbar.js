import React from "react";
import BtnChangLang from "./ChangeLang";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div className="" style={{ backgroundColor: "#b2aaaa64" }}>
      <nav
        className={`navbar navbar-expand-lg shadow-sm ${
          isArabic ? "flex-row-reverse" : ""
        }`}
      >
        <div className={`container ${isArabic ? "text-end" : "text-start"}`}>
          <a
            className="navbar-brand d-flex align-items-center text-white"
            href="#"
          >
            <img
              src="/images/logo-removebg-preview.png"
              alt="Logo"
              height="40"
              className={isArabic ? "ms-2" : "me-2"}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className={`navbar-nav ${
                isArabic ? "me-auto ms-5" : "ms-auto me-5"
              } mb-2 mb-lg-0 align-items-lg-center`}
              style={{
                marginRight: isArabic ? "40px" : "0",
                marginLeft: isArabic ? "0" : "40px",
              }}
            >
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  {t("navbar.investments")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  {t("navbar.realEstate")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  {t("navbar.careers")}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  id="aboutDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("navbar.about")}
                </a>
                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      {t("navbar.aboutUs")}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {t("navbar.vision")}
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`nav-item ${isArabic ? "me-3" : "ms-3"}`}></li>
            </ul>
            <BtnChangLang />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
