import React from "react";
import TagItem from "./TagItem";
import PropTypes from "prop-types";

const RecipeItem = ({
  thumbnail,
  title,
  href,
  ingredients,
  handleAdditionTag
}) => {
  const arrIngridients = ingredients.split(",");
  return (
    <div className='recipe-container'>
      <div className='img-wrapper'>
        <img className='img-style' src={thumbnail} alt={title} />
      </div>
      <span className='title'>{title}</span>
      <span>INGRIDIENS:</span>
      <div className='tag-wrapper'>
        {arrIngridients.map((ingridient, index) => {
          return (
            <TagItem
              key={index}
              handleAdditionTag={handleAdditionTag}
              ingridient={ingridient}
            />
          );
        })}
      </div>
      <button className='btn btn-color btn-item'>
        <a href={href} target='_blank' rel='noopener noreferrer'>
          Go to Recipe
        </a>
      </button>
    </div>
  );
};

RecipeItem.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  handleAdditionTag: PropTypes.func.isRequired
};

export default RecipeItem;
