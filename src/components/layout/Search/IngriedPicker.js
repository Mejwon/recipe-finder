import React from "react";
import { Dropdown } from "semantic-ui-react";
import PropTypes from "prop-types";

const IngriedPicker = ({ options, value, handleAddition, handleChange }) => {
  return (
    <div className='picker-wrapper'>
      <Dropdown
        options={options}
        placeholder='Choose Languages'
        search
        selection
        multiple
        allowAdditions
        className='dropdown-style'
        value={value}
        onAddItem={handleAddition}
        onChange={handleChange}
      />
    </div>
  );
};

IngriedPicker.propTypes = {
  options: PropTypes.array,
  handleAddition: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired
};

export default IngriedPicker;
