import React, { useContext } from "react";
import LanguageContext from "../pages/LanguageContext";
import "../styles/SpicePage.css";
import fennelImg from "../images/fennel.jpg";
import RecipeGrid from "../components/RecipeGrid";
import { getRecipesBySpice } from "../components/recipes";

function Fennel() {
  const { language } = useContext(LanguageContext);
  const fennelRecipes = getRecipesBySpice("Fennel Seeds");

  const content = {
    en: {
      title: "Fennel Seeds",
      chineseName: "Chinese Name: 小茴香 (xiǎo huí xiāng)",
      description:
        "Star anise is a star-shaped fruit from an evergreen tree native to China. It has a licorice-like flavor and is commonly used in Chinese, Vietnamese, and Indian cooking.",
      uses: "Star anise is one of the key ingredients in Chinese five-spice powder and is also used to flavor broths, soups, and braised dishes like Braised Pork Belly (Hong Shao Rou).",
      healthBenefits:
        "Star anise contains antioxidants and has antimicrobial properties. It is traditionally used to treat digestive issues and respiratory infections.",
      relevance: [
        "Strengthens immune system and improves digestion",
        "Introduced to China via silk road",
        "Became particularly important in the Chinese Muslim cuisine",
        "Essential in Northern Chinese cooking too",
        "Name means “small fennel fragrance”",
        "Was believed to bring good luck when planted around the house",
        "Often used in making Chinese medicinal wines",
      ],
    },
    zh: {
      title: "小茴香",
      chineseName: "中文名: 小茴香 (xiǎo huí xiāng)",
      description:
        "八角是一种来自中国常绿树的星形果实。它具有类似甘草的味道，常用于中国、越南和印度烹饪。",
      uses: "八角是中国五香粉的主要成分之一，也用于调味肉汤、汤和红烧菜肴，如红烧肉。",
      healthBenefits:
        "八角含有抗氧化剂，具有抗菌特性。传统上用于治疗消化问题和呼吸道感染。",
      relevance: [
        "经丝绸之路传入中国",
        "在中国穆斯林美食中变得特别重要。在中国北方烹饪中也是必不可少的",
        "名字的意思是“小茴香香味”",
        "人们相信在房子周围种植可以带来好运",
        "常用于酿造中药酒",
      ],
    },
  };

  const { title, chineseName, relevance } = content[language];

  return (
    <div className="spice-page">
      <h1>{title}</h1>
      <div className="spice-content">
        <div className="spice-image-showcase">
          <img src={fennelImg} alt={title} className="spice-feature-image" />
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
        <h2>{language === "en" ? "Fennel Seed Recipes" : "小茴香食谱"}</h2>
        <RecipeGrid recipes={fennelRecipes} />
      </div>
    </div>
  );
}

export default Fennel;
