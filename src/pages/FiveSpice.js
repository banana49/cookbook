import React, { useContext } from "react";
import LanguageContext from "../pages/LanguageContext";
import "../styles/SpicePage.css";
import fiveSpiceImg from "../images/five-spice.jpg";
import RecipeGrid from "../components/RecipeGrid";
import { getRecipesBySpice } from "../components/recipes";

function StarAnise() {
  const { language } = useContext(LanguageContext);
  const fiveSpiceRecipes = getRecipesBySpice("Five Spice Powder");

  const content = {
    en: {
      title: "The Five Spice Powder",
      chineseName: "Chinese Name: 五香粉 (wǔ xiāng fěn)",
      description:
        "Star anise is a star-shaped fruit from an evergreen tree native to China...",
      uses: "Star anise is one of the key ingredients in Chinese five-spice powder and is also Braised Pork Belly...",
      healthBenefits:
        "Star anise contains antioxidants and has antimicrobial properties. It is traditionally used to treat digestive issues and respiratory infections.",
      extra: "Extra.",
    },
    zh: {
      title: "五香粉",
      chineseName: "中文名: 五香粉 (wǔ xiāng fěn)",
      description:
        "最常见的方式用五香十五香粉，是所有的五香的混合物。有时候，混合物还有其他的香料比如白胡椒，黑胡椒，或姜根。传说这种混合物是在食谱源自宋代食谱找到的。",
      uses: "八角是中国五香粉的主要成分之一，也用于调味肉汤、汤和红烧菜肴，如红烧肉。",

      healthBenefits:
        "八角含有抗氧化剂，具有抗菌特性。传统上用于治疗消化问题和呼吸道感染。",

      extra:
        "这里，我们现给五香粉的食谱。然后，可以用这个五香粉做这本节的其他食谱。",
    },
  };

  const { title, chineseName, description, uses, healthBenefits, extra } =
    content[language];

  return (
    <div className="spice-page">
      <h1>{title}</h1>
      <div className="spice-content">
        <div className="spice-image-showcase">
          <img src={fiveSpiceImg} alt={title} className="spice-feature-image" />
        </div>
        <div className="spice-details">
          <p className="chinese-name">{chineseName}</p>
          <p>{description}</p>
          {/* <h2>{language === "en" ? "Culinary Uses" : "烹饪用途"}</h2>
          <p>{uses}</p>
          <h2>{language === "en" ? "Health Benefits" : "健康益处"}</h2>
          <p>{healthBenefits}</p> */}
          <p>{extra}</p>
        </div>
      </div>

      {/* <div className="recipes-section">
        <h2>{language === "en" ? "Featured Recipes" : "精选食谱"}</h2>
        <p>{language === "en" ? "Coming soon..." : "即将推出..."}</p>
      </div> */}

      <div className="recipes-section">
        <h2>
          {language === "en" ? "The Five Spice Powder Recipes" : "五香粉食谱"}
        </h2>
        <RecipeGrid recipes={fiveSpiceRecipes} />
      </div>
    </div>
  );
}

export default StarAnise;
