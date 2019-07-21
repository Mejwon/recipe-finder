import React from "react";
import PropTypes from "prop-types";

const TagItem = ({ handleAdditionTag, ingridient }) => {
  return (
    <span
      onClick={handleAdditionTag}
      data-tag={ingridient.trim()}
      className='label'
    >
      {ingridient} <i className='fas fa-plus' />
    </span>
  );
};

TagItem.propTypes = {
  handleAdditionTag: PropTypes.func.isRequired,
  ingridient: PropTypes.string.isRequired
};

export default TagItem;
