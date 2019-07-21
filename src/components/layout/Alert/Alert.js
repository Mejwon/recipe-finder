import React from "react";
import PropTypes from "prop-types";

const Alert = ({ error }) => {
  return <span className='alert'>{error}</span>;
};

Alert.propTypes = {
  error: PropTypes.string.isRequired
};

export default Alert;
