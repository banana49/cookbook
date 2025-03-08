import React, { useContext } from "react";
import LanguageContext from "../pages/LanguageContext";
import "../styles/SpicePage.css";
import szechuanImg from "../images/szechuan.jpg";
import RecipeGrid from "../components/RecipeGrid";
import { getRecipesBySpice } from "../components/recipes";

function Sichuan() {
  const { language } = useContext(LanguageContext);
  const szechuanRecipes = getRecipesBySpice("Szechuan Peppercorn");

  const content = {
    en: {
      title: "Szechuan Peppercorn",
      chineseName: "Chinese Name: 花椒 (huā jiāo)",
      description:
        "Star anise is a star-shaped fruit from an evergreen tree native to China. It has a licorice-like flavor and is commonly used in Chinese, Vietnamese, and Indian cooking.",
      uses: "Star anise is one of the key ingredients in Chinese five-spice powder and is also used to flavor broths, soups, and braised dishes like Braised Pork Belly (Hong Shao Rou).",
      healthBenefits:
        "Star anise contains antioxidants and has antimicrobial properties. It is traditionally used to treat digestive issues and respiratory infections.",
      relevance: [
        "US banned its import from 1968-2005",
        "Well liked ingredient in many spicy dishes",
        "Name means “flower pepper” due to its floral aroma",
        "Creates a unique mala (麻辣) numbing sensation, which was historically used as a natural anesthetic.",
        "In traditional medicine, often used to expel cold from the body.",
      ],
    },
    zh: {
      title: "花椒",
      chineseName: "中文名: 花椒 (huā jiāo)",
      description:
        "八角是一种来自中国常绿树的星形果实。它具有类似甘草的味道，常用于中国、越南和印度烹饪。",
      uses: "八角是中国五香粉的主要成分之一，也用于调味肉汤、汤和红烧菜肴，如红烧肉。",
      healthBenefits:
        "八角含有抗氧化剂，具有抗菌特性。传统上用于治疗消化问题和呼吸道感染。",
      relevance: [
        "很多辣菜的深受喜爱的成分",
        "由于其花香，名字的意思是“花椒”",
        "创造出独特的麻辣麻木感 – 历史上用作天然麻醉剂。",
        "在传统医学中，常用于驱除体内的寒气。",
        "美国从1968年至2005年禁止进口",
      ],
    },
  };

  const { title, chineseName, relevance } = content[language];

  return (
    <div className="spice-page">
      <h1>{title}</h1>
      <div className="spice-content">
        <div className="spice-image-showcase">
          <img src={szechuanImg} alt={title} className="spice-feature-image" />
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
        <h2>
          {language === "en" ? "Szechuan Peppercorn Recipes" : "花椒食谱"}
        </h2>
        <RecipeGrid recipes={szechuanRecipes} />
      </div>
    </div>
  );
}

export default Sichuan;
