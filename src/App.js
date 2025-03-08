// import logo from "./logo.svg";
// import "./App.css";
// import React, { useState, createContext, useContext } from "react";
// import recipes, { getRecipesBySpice } from "./recipes.js";
// import { BrowserRouter, Routes, Route, Link } from "react-router";
// import RecipeCard from "./components/RecipeCard.js";
// import "./pictures/SAclay.png";
// import SAribs from "./pictures/SAribs.png";

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to not reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );

// // }

// const LanguageToggle = () => {
//   const [language, setLang] = useState("zh");

//   // const recipes = recipes;

//   const content = {
//     zh: {
//       title: "我的网站",
//       welcome: "欢迎来到我的网站",
//       description: "这是一个简单的语言切换示例，使用React状态。",
//       currentLanguage: "当前语言",
//       chinese: "中文",
//       english: "英文",
//       toggleText: "切换到英文",
//     },
//     en: {
//       title: "My Website",
//       welcome: "Welcome to my site",
//       description:
//         "This is a simple example of a language toggle using React state.",
//       currentLanguage: "Current language",
//       chinese: "Chinese",
//       english: "English",
//       toggleText: "Switch to Chinese",
//     },
//   };

//   const text = content[language];
//   const toggleLang = () => {
//     setLang(language == "zh" ? "en" : "zh");
//   };

//   return (
//     <section className={`language-container ${language}`}>
//       <div>
//         <h3>{text.title}</h3>
//         <button onClick={toggleLang} className="toggle-button">
//           {language === "zh" ? "English" : "中文"}
//         </button>
//       </div>

//       <div>
//         <h3>{text.welcome}</h3>
//         <p>{text.description}</p>
//         <p>
//           {text.currentLanguage}:{" "}
//           {language === "zh" ? text.chinese : text.english}
//         </p>
//       </div>
//       <div>{text.toggleText}</div>
//     </section>
//   );
// };

// // export default LanguageToggle;

// function Staranise({ language }) {
//   // const [language, setLang] = useState("zh");
//   // const toggleLang = () => {
//   //   setLang(language == "zh" ? "en" : "zh");
//   // };
//   const starAniseRecipes = getRecipesBySpice("Star Anise");
//   return (
//     <div>
//       {/* <button onClick={toggleLang}>
//         {" "}
//         {language === "zh" ? "English" : "中文"}
//       </button> */}
//       {starAniseRecipes.map((recipe) => (
//         <RecipeCard
//           key={recipe.id}
//           title={recipe.title}
//           ingredients={recipe[language].ingredients}
//           instructions={recipe[language].steps}
//           category={recipe[language].category}
//           image={recipe.image}
//         />
//       ))}
//     </div>
//   );
// }

// function App() {
//   const [language, setLang] = useState("zh");
//   const toggleLang = () => {
//     setLang(language == "zh" ? "en" : "zh");
//   };

//   return (
//     <BrowserRouter>
//       <div className="entire-container">
//         {/* <h1 className="App-header">
//           <button onClick={toggleLang} className="toggle-button">
//             {language === "zh" ? "English" : "中文"}
//           </button>{" "}
//           Welcome to the Five Spice Cookbook!
//         </h1> */}
//         {/* <Header /> */}
//         <nav>
//           <ul className="mainNavigation">
//             <li> The Five Spices </li>
//             <li> The Five Spice Powder </li>
//             <li>
//               <Link to="/staranise"> </Link> Staranise!{" "}
//             </li>
//             <li> Szchuan Peppercorn </li>
//           </ul>
//           <img src="SAribs" />
//         </nav>

//         {/* <section>
//           <LanguageToggle />
//         </section> */}

//         <section>
//           <Staranise language={language} />
//         </section>
//       </div>

//       <Routes>
//         <Route path="/staranise" element={<Staranise language={language} />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { useState } from "react";
import { Router, Route, Routes, BrowserRouter, Switch } from "react-router-dom"; // Changed to react-router
import { createBrowserHistory } from "history"; // You'll need to install this
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import StarAnise from "./pages/StarAnise";
import Cinnamon from "./pages/Cinnamon";
import Cloves from "./pages/Cloves";
import Fennel from "./pages/Fennel";
import Sichuan from "./pages/Sichuan";
import FiveSpice from "./pages/FiveSpice";
import LanguageContext from "./pages/LanguageContext";
import "./App.css";

const history = createBrowserHistory();

function App() {
  const [language, setLanguage] = useState("zh");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "zh" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <BrowserRouter>
        <div className="app-container">
          <Navbar history={history} />
          <main className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/star-anise" element={<StarAnise />} />
              <Route path="/cinnamon" element={<Cinnamon />} />
              <Route path="/cloves" element={<Cloves />} />
              <Route path="/fennel" element={<Fennel />} />
              <Route path="/sichuan-pepper" element={<Sichuan />} />
              <Route path="/five-spice" element={<FiveSpice />} />
            </Routes>
          </main>
          <footer className="footer">
            <p>
              {language === "en"
                ? "© 2025 Five Spices Cookbook"
                : "© 2025 五香食谱"}
            </p>
          </footer>
        </div>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
}

export default App;
