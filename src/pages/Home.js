import React, { useContext } from "react";
import LanguageContext from "../pages/LanguageContext";
import "../styles/Home.css";
import RecipeGrid from "../components/RecipeGrid";
import { recipes } from "../components/recipes";
import SpiceSpinner from "../components/Spinner";

function Home() {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Welcome to the Five Spice Cookbook",
      introduction:
        "Discover the rich flavors and aromas of traditional Chinese cuisine through the magical world of the five essential spices.",
      aboutSpices: [
        "The five spices—Star Anise, Cinnamon, Cloves, Fennel, and Szechuan Pepper—form the foundation of many Chinese dishes.",
      ],
      exploreInvitation: "Have fun!",
      spinnerTitle: "Here is a spinner which will choose a spice for you.",
      spinnerDescription: "Or you can browse all recipes below.",
    },
    zh: {
      title: "欢迎来到五香食谱",
      introduction: "发现中国五种香料及其好吃食谱!",
      aboutSpices: [
        "五香从来自许多世纪前的中国南方，可是不清楚是什么时候。香料的混合物最初用于药用目的，以平衡阴阳，改善健康。听说，中国人试图创造所有五种元素的理想排列表示：木，火，土，金，水。五香捕捉五种不同的味道：咸，甜，酸，苦，辣。",
        "这个五种香料是：八角，花椒，肉桂，丁香，和小茴香。在这本食谱集中，我们列出了基于香料的食谱。当然，很多菜用两个或者三个五香 – 不只一个 – 所以我有按主要风味分类。",
      ],
      exploreInvitation:
        "第一组食谱使用所谓的”五香粉“ – 这是所有的五种香料的混合物。然后，有几套单独的食谱，每套都特别使用五种不同香料中得一种。",

      spinnerTitle: "这里有旋转器，帮您选择香料",
      spinnerDescription: "或者您可以在下面查看所有食谱",
    },
  };

  const {
    title,
    introduction,
    aboutSpices,
    exploreInvitation,
    spinnerTitle,
    spinnerDescription,
  } = content[language];

  return (
    <div className="home-page">
      <h1>{title}</h1>
      <div className="home-content">
        <h2> {language === "en" ? "About" : "关于"} </h2>
        <p className="introduction">{introduction}</p>
        {aboutSpices.map((keypoint) => (
          <p>{keypoint} </p>
        ))}
        <p>{exploreInvitation}</p>
      </div>

      <div className="spinner-section">
        <h2>{spinnerTitle}</h2>
        <p>{spinnerDescription}</p>
        <SpiceSpinner />
      </div>

      <div className="browse-section">
        <h2>{language === "en" ? "Browse All Recipes" : "浏览所有食谱"}</h2>
        <RecipeGrid recipes={recipes} />
      </div>
    </div>
  );
}

export default Home;
