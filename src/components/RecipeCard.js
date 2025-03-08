// import React from "react";
// import "./RecipeCard.css"; // You'll create this CSS file

// function RecipeCard({
//   title,
//   ingredients = [],
//   instructions = [],
//   category,
//   image,
// }) {
//   return (
//     <div className="recipe-card">
//       <div className="recipe-header">
//         <h2>{title}</h2>
//         <span className="category-tag">{category}</span>
//       </div>
//       {image && <img src={image} alt={title} className="recipe-image" />}

//       <div className="recipe-content">
//         <div className="ingredients-section">
//           <h3>Ingredients</h3>
//           <ul>
//             {ingredients.map((ingredient, index) => (
//               <li key={index}>{ingredient}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="instructions-section">
//           <h3>Instructions</h3>
//           <ol>
//             {instructions.map((step, index) => (
//               <li key={index}>{step}</li>
//             ))}
//           </ol>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RecipeCard;

import React, { useState, useContext } from "react";
import LanguageContext from "../pages/LanguageContext";
import "./RecipeCard.css";
import "../pictures/CCchicken.png";

const renderIngredients = (ingredients) => {
  return ingredients
    .map((ingredient, index) => {
      // Check if this is the special "五"宝" ingredient
      if (ingredient.includes("五“宝”") || ingredient.includes("Five")) {
        // This is our special ingredient that needs subitems
        const nextFiveIngredients = ingredients.slice(index + 1, index + 6);
        return (
          <React.Fragment key={index}>
            <li className="ingredient">{ingredient}</li>
            <ul className="sub-ingredients">
              {nextFiveIngredients.map((subitem, subIndex) => (
                <li key={`${index}-${subIndex}`} className="sub-ingredient">
                  {subitem}
                </li>
              ))}
            </ul>
          </React.Fragment>
        );
      }
      // Skip the next 5 ingredients after our special item
      else if (
        index > 0 &&
        (ingredients[index - 1].includes("五“宝”") ||
          (index > 1 && ingredients[index - 2].includes("五“宝”")) ||
          (index > 2 && ingredients[index - 3].includes("五“宝”")) ||
          (index > 3 && ingredients[index - 4].includes("五“宝”")) ||
          (index > 4 && ingredients[index - 5].includes("五“宝”")))
      ) {
        // Skip these as they're rendered as subitems
        return null;
      } else {
        // Regular ingredient
        return (
          <li key={index} className="ingredient">
            {ingredient}
          </li>
        );
      }
    })
    .filter((item) => item !== null);
};

const RecipeCard = ({ recipe }) => {
  const [showModal, setShowModal] = useState(false);
  const { language } = useContext(LanguageContext);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="recipe-card" onClick={toggleModal}>
        <div className="recipe-image-container">
          {recipe.image ? (
            <img
              src={recipe.image}
              alt={recipe.title}
              className="recipe-image"
            />
          ) : (
            <div className="recipe-image-placeholder">
              <span>{recipe.title.charAt(0)}</span>
            </div>
          )}
        </div>
        <div className="recipe-card-content">
          <h3 className="recipe-title">{recipe.title}</h3>
          <div className="recipe-category">{recipe.category}</div>
        </div>
      </div>

      {showModal && (
        <div className="recipe-modal-overlay" onClick={toggleModal}>
          <div className="recipe-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={toggleModal}>
              &times;
            </button>

            <div className="recipe-modal-content">
              <div className="recipe-modal-header">
                <h2>{recipe.title}</h2>
                <div className="recipe-category-tag">{recipe.category}</div>
              </div>

              {recipe.image && (
                <div className="recipe-modal-image-container">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="recipe-modal-image"
                  />
                </div>
              )}

              <div className="recipe-details">
                <div className="recipe-ingredients">
                  <h3>{language === "en" ? "Ingredients" : "材料"}</h3>
                  <ul>
                    {/* {language === "en"
                      ? recipe.en.ingredients.map((ingredient, idx) => (
                          <li key={idx}>{ingredient}</li>
                        ))
                      : recipe.zh.ingredients.map((ingredient, idx) => (
                          <li key={idx}>{ingredient}</li>
                        ))} */}
                    {language === "en"
                      ? renderIngredients(recipe.en.ingredients)
                      : renderIngredients(recipe.zh.ingredients)}
                  </ul>
                </div>

                <div className="recipe-steps">
                  <h3>{language === "en" ? "Instructions" : "步骤"}</h3>
                  <ol>
                    {language === "en"
                      ? recipe.en.steps.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))
                      : recipe.zh.steps.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeCard;
