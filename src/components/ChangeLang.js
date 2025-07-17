import React from "react";
import { useTranslation } from "react-i18next";
import { FiGlobe } from "react-icons/fi";
import "../i18n";

function BtnChangLang() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <button
      // onClick={toggleLanguage}
      style={{
        background: "transparent",
        color: "#fff",
        border: "none",
        outline: "none",
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        cursor: "pointer",
      }}
    >
      <FiGlobe size={20} color="#fff" />
      <span>{currentLang === "ar" ? "EN" : "AR"}</span>
    </button>
  );
}

export default BtnChangLang;
