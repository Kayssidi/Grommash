import React from "react";
import PropTypes from "prop-types";

import Layer from "grommet/components/Layer";
import Box from "grommet/components/Box";
import Select from "grommet/components/Select";

class TimeSelectionComponent extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.onLayerClosed = this.onLayerClosed.bind(this);
    //this.callbackFunction = this.callbackFunction.bind(this);

    /*
      this.state =
      {
          field1 : value1,
          field2 : value2,
      }
    */
  }

  onLayerClosed() {
    this.props.propCbLayerClosed();
  }

  render() {
    return (
      <Layer
        closer={true}
        align="center"
        overlayClose={true}
        onClose={this.onLayerClosed}
      >
        <Box
          pad={{ horizontal: "large" }}
          margin={{ bottom: "small" }}
          separator="all"
        >
          <Select
            placeHolder={this.state.stateTimeSelected}
            options={[
              "09:00",
              "10h00",
              "11h00",
              "12h00",
              "13h00",
              "14h00",
              "15h00",
              "16h00"
            ]}
            value={this.state.stateTimeSelected}
            onChange={this.handleTimeClick}
            margin="small"
            inline={true}
          />
        </Box>
      </Layer>
    );
  }
}

TimeSelectionComponent.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default TimeSelectionComponent;
