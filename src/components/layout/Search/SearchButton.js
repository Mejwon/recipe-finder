import React from "react";
import PropTypes from "prop-types";

const SearchButton = ({ initSearch }) => {
  return (
    <button
      value='Search'
      className='btn btn-search btn-color btn-block'
      onClick={initSearch}
    >
      Search
    </button>
  );
};

SearchButton.propTypes = {
  initSearch: PropTypes.func.isRequired
};

export default SearchButton;
