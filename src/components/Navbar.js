import React, { useContext } from "react";
import { Link } from "react-router";
import LanguageToggle from "./LanguageToggle";
import LanguageContext from "../pages/LanguageContext";
import "../styles/Navbar.css";

// Import spice images
import starAniseImg from "../images/star-anise.jpg";
import cinnamonImg from "../images/cinnamon.jpg";
import clovesImg from "../images/cloves.jpg";
import fennelImg from "../images/fennel.jpg";
import sichuanImg from "../images/szechuan.jpg";
import fiveSpiceImg from "../images/five-spice.jpg";

function Navbar({ history }) {
  const { language } = useContext(LanguageContext);

  // Function to check if a path is active
  const isActive = (path) => {
    return history.location.pathname === path;
  };

  const spices = [
    {
      path: "/five-spice",
      image: fiveSpiceImg,
      englishName: "Five Spice",
      chineseName: "五香粉",
    },
    {
      path: "/star-anise",
      image: starAniseImg,
      englishName: "Star Anise",
      chineseName: "八角",
    },
    {
      path: "/cinnamon",
      image: cinnamonImg,
      englishName: "Cinnamon",
      chineseName: "肉桂",
    },
    {
      path: "/cloves",
      image: clovesImg,
      englishName: "Cloves",
      chineseName: "丁香",
    },
    {
      path: "/fennel",
      image: fennelImg,
      englishName: "Fennel",
      chineseName: "小茴香",
    },
    {
      path: "/sichuan-pepper",
      image: sichuanImg,
      englishName: "Szechuan Peppecorn",
      chineseName: "花椒",
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-link">
          <h1 className="logo">
            {/* {language === "en" ? "Five Spices Cookbook" : "五香食谱"} */}
            Five Spice Cookbook （五香食谱）
          </h1>
        </Link>

        <LanguageToggle />

        <div className="nav-links">
          {spices.map((spice) => (
            <Link
              key={spice.path}
              to={spice.path}
              className={`nav-item ${isActive(spice.path) ? "active" : ""}`}
              title={language === "en" ? spice.englishName : spice.chineseName}
            >
              <div className="spice-image-container">
                <img
                  src={spice.image}
                  alt={
                    language === "en" ? spice.englishName : spice.chineseName
                  }
                  className="spice-image"
                />
              </div>
              <span className="spice-name">
                {language === "en" ? spice.englishName : spice.chineseName}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
