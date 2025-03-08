import React, { useContext } from "react";
import LanguageContext from "../pages/LanguageContext";
import "../styles/SpicePage.css";
import cinnamonImg from "../images/cinnamon.jpg";
import RecipeGrid from "../components/RecipeGrid";
import { getRecipesBySpice } from "../components/recipes";

function Cinnamon() {
  const { language } = useContext(LanguageContext);
  const cinnamonRecipes = getRecipesBySpice("Chinese Cinnamon");

  const content = {
    en: {
      title: "Chinese Cinnamon",
      chineseName: "Chinese Name: 肉桂 (ròuguì)",
      description:
        "Star anise is a star-shaped fruit from an evergreen tree native to China. It has a licorice-like flavor and is commonly used in Chinese, Vietnamese, and Indian cooking.",
      uses: "Star anise is one of the key ingredients in Chinese five-spice powder and is also used to flavor broths, soups, and braised dishes like Braised Pork Belly (Hong Shao Rou).",
      healthBenefits:
        "Star anise contains antioxidants and has antimicrobial properties. It is traditionally used to treat digestive issues and respiratory infections.",
      relevance: [
        "Native to southern china",
        "Was worth more than gold during certain periods of Chinese history",
        "In traditional medicine, used to warm the body and improve blood circulation",
      ],
    },
    zh: {
      title: "桂皮",
      chineseName: "中文名: 肉桂 (ròu guì)",
      description:
        "八角是一种来自中国常绿树的星形果实。它具有类似甘草的味道，常用于中国、越南和印度烹饪。",
      uses: "八角是中国五香粉的主要成分之一，也用于调味肉汤、汤和红烧菜肴，如红烧肉。",
      healthBenefits:
        "八角含有抗氧化剂，具有抗菌特性。传统上用于治疗消化问题和呼吸道感染。",
      relevance: [
        "由于形状像指甲，名字的意思是“指甲香”",
        "古代见皇帝的人都会用它作为口气清新剂",
        "公元前200年左右通过海上丝绸之路传入中国。",
      ],
    },
  };

  const { title, chineseName, relevance } = content[language];

  return (
    <div className="spice-page">
      <h1>{title}</h1>
      <div className="spice-content">
        <div className="spice-image-showcase">
          <img src={cinnamonImg} alt={title} className="spice-feature-image" />
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
        <h2>{language === "en" ? "Chinese Cinnamon Recipes" : "肉桂食谱"}</h2>
        <RecipeGrid recipes={cinnamonRecipes} />
      </div>
    </div>
  );
}

export default Cinnamon;
