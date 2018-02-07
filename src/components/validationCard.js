import React from "react";
import PropTypes from "prop-types";

import Card from "grommet/components/Card";
import Form from "grommet/components/Form";
import FormField from "grommet/components/FormField";
import TextInput from "grommet/components/TextInput";
import Button from "grommet/components/Button";

import LikeIcon from "grommet/components/icons/base/Like";

class ValidationCard extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    //this.callbackFunction = this.callbackFunction.bind(this);

    /*
      this.state =
      {
          field1 : value1,
          field2 : value2,
      }
    */
  }

  render() {
    return (
      <Form>
        <Card
          label={<LikeIcon />}
          description="Souhaitez vous nous communiquer une information supplémentaire avant de valider la réservation de la séance?"
          contentPad="none"
        >
          <FormField label="Dites nous tout ...">
            <TextInput />
          </FormField>

          <Button label="Réserver la séance" type="submit" primary={true} />
        </Card>
      </Form>
    );
  }
}

ValidationCard.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default ValidationCard;
