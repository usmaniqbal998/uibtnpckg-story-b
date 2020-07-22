import React from "react";
import PropTypes from "prop-types";

const MyButton = ({ handleClick, _class, content }) => {
  return (
    /**
     * Use `Badge` to highlight key info with a predefined status.
     */
    <button onClick={() => handleClick()} className={_class}>
      {content}
    </button>
  );
};

MyButton.propTypes = {
  _class: PropTypes.string,
  handleClick: PropTypes.func,
};

MyButton.defaultProps = {
  _class: "primary_btn",
  handleClick: "null",
};

export default MyButton;
// # 256acdf8ce287b22553f0f12e30983b0ba48aa90 git
// # d6e965eb-aaf2-4bef-8e7b-05c3bea9a926 npm
