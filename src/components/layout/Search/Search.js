import React from "react";
import IngriedPicker from "./IngriedPicker";
import LoadingButton from "./LoadingButton";
import SearchButton from "./SearchButton";
import PropTypes from "prop-types";

const Search = ({
  currentIngredients,
  handleAddition,
  handleChange,
  options,
  initSearch,
  loading
}) => {
  return (
    <div className='container'>
      <IngriedPicker
        value={currentIngredients}
        handleAddition={handleAddition}
        handleChange={handleChange}
        options={options}
      />
      <div className='search-wrapper'>
        {loading ? <LoadingButton /> : <SearchButton initSearch={initSearch} />}
      </div>
    </div>
  );
};

Search.propTypes = {
  currentIngredients: PropTypes.array.isRequired,
  handleAddition: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  initSearch: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

export default Search;
