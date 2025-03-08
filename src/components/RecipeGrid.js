import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeGrid = ({ recipes }) => {
  return (
    <div className="recipes-grid">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeGrid;
