import React, { useContext } from "react";
import LanguageContext from "../pages/LanguageContext";
import "../styles/SpicePage.css";
import starAniseImg from "../images/star-anise.jpg";
import RecipeGrid from "../components/RecipeGrid";
import { getRecipesBySpice } from "../components/recipes";

function StarAnise() {
  const { language } = useContext(LanguageContext);
  const starAniseRecipes = getRecipesBySpice("Star Anise");

  const content = {
    en: {
      title: "Star Anise",
      chineseName: "Chinese Name: 八角 (bā jiǎo)",
      description:
        "Star anise is a star-shaped fruit from an evergreen tree native to China. It has a licorice-like flavor and is commonly used in Chinese, Vietnamese, and Indian cooking.",
      uses: "Star anise is one of the key ingredients in Chinese five-spice powder and is also used to flavor broths, soups, and braised dishes like Braised Pork Belly (Hong Shao Rou).",
      healthBenefits:
        "Star anise contains antioxidants and has antimicrobial properties. It is traditionally used to treat digestive issues and respiratory infections.",
      relevance: [
        "Distinctive sweet taste",
        "Provides iron manganese calcium",
        "Notable for its ability to regulate chi",
        "The name means “eight angles” referring to its star shape",
        "Really valuable item, it was once used as currency on the Silk road",
      ],
    },
    zh: {
      title: "八角",
      chineseName: "中文名: 八角 (bā jiǎo)",
      description:
        "八角是一种来自中国常绿树的星形果实。它具有类似甘草的味道，常用于中国、越南和印度烹饪。",
      uses: "八角是中国五香粉的主要成分之一，也用于调味肉汤、汤和红烧菜肴，如红烧肉。",
      healthBenefits:
        "八角含有抗氧化剂，具有抗菌特性。传统上用于治疗消化问题和呼吸道感染。",
      relevance: [
        "独特的甜味",
        "提供铁锰钙",
        "以其调节气的能力而闻名",
        "这个名字的意思是“八角”，指的是它的星形形状",
        "非常有价值的物品，它曾经在丝绸之路上被用作货币",
      ],
    },
  };

  const { title, chineseName, description, uses, healthBenefits, relevance } =
    content[language];

  return (
    <div className="spice-page">
      <h1>{title}</h1>
      <div className="spice-content">
        <div className="spice-image-showcase">
          <img src={starAniseImg} alt={title} className="spice-feature-image" />
        </div>
        <div className="spice-details">
          <p className="chinese-name">{chineseName}</p>
          {/* <p>{description}</p>
          <h2>{language === "en" ? "Culinary Uses" : "烹饪用途"}</h2>
          <p>{uses}</p>
          <h2>{language === "en" ? "Health Benefits" : "健康益处"}</h2>
          <p>{healthBenefits}</p> */}
          <h2> {language === "en" ? "Relevance" : "重要性"}</h2>
          <p className="relevance">
            <ul>
              {relevance.map((keypoint, index) => (
                <li key={index}>{keypoint}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>

      {/* <div className="recipes-section">
        <h2>{language === "en" ? "Featured Recipes" : "精选食谱"}</h2>
        <p>{language === "en" ? "Coming soon..." : "即将推出..."}</p>
      </div> */}

      <div className="recipes-section">
        <h2>{language === "en" ? "Star Anise Recipes" : "八角食谱"}</h2>
        <RecipeGrid recipes={starAniseRecipes} />
      </div>
    </div>
  );
}

export default StarAnise;
