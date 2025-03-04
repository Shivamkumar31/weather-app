/* eslint-disable no-unused-vars */





// export default Button;

import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired, // Ensures onClick is a function and required
  value: PropTypes.string.isRequired, // Ensures value is a string and required
};

export default Button;



