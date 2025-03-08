// components/LanguageToggle.js
import React, { useContext } from "react";
import LanguageContext from "../pages/LanguageContext";
import "../styles/LanguageToggle.css";

function LanguageToggle() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className="language-toggle-container">
      <button
        className="language-toggle-button"
        onClick={toggleLanguage}
        aria-label="Toggle language"
      >
        {language === "en" ? "中文" : "English"}
      </button>
    </div>
  );
}

export default LanguageToggle;
