import React from "react";
import PropTypes from "prop-types";

class ClassTemplate extends React.Component {
  state = {};

  render() {
    return (<div />);
  }
}

ClassTemplate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default (ClassTemplate);
