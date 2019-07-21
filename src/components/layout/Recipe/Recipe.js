import React from "react";
import RecipeItem from "./RecipeItem";
import PropTypes from "prop-types";

const Recipe = ({ recipes, handleAdditionTag }) => {
  return (
    <div className='flex'>
      {recipes.map((recipe, index) => {
        return (
          <RecipeItem
            key={index}
            thumbnail={recipe.thumbnail}
            title={recipe.title}
            href={recipe.href}
            ingredients={recipe.ingredients}
            handleAdditionTag={handleAdditionTag}
          />
        );
      })}
    </div>
  );
};

Recipe.propTypes = {
  recipes: PropTypes.array.isRequired,
  handleAdditionTag: PropTypes.func.isRequired
};

export default Recipe;
