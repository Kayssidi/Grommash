import React from "react";
import PropTypes from "prop-types";

class ClassTemplate extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    
    /*
      this.state =
      {
          field1 : value1,
          field2 : value2,
      }
    */
  }

  render() {
    return (<div />);
  }
}

ClassTemplate.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (ClassTemplate);
