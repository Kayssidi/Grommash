import React from "react";
import PropTypes from "prop-types";

import Card from "grommet/components/Card";
import Form from "grommet/components/Form";
import FormField from "grommet/components/FormField";
import TextInput from "grommet/components/TextInput";
import Button from "grommet/components/Button";
import Label from "grommet/components/Label";

// http://grommet.io/docs/icon/
import UserIcon from "grommet/components/icons/base/User";
import ValidateIcon from "grommet/components/icons/base/Validate";

class OwnerInformationCard extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    this.onValidateInfo = this.onValidateInfo.bind(this);

    this.state = {
      stateHasBeenValidated: false
    };
  }

  onValidateInfo(event) {
    event.preventDefault();
    this.setState({ stateHasBeenValidated: true });
    console.log(this.state.stateHasBeenValidated);
  }

  buttonLabel = () =>
    !this.state.stateHasBeenValidated ? (
      <Label>Valider</Label>
    ) : (
      <div>
        <Label>Valider</Label>
        <ValidateIcon />
      </div>
    );

  render() {
    return (
      <Form>
        <Card
          description="Comment pouvons nous vous joindre:"
          contentPad="none"
          label={<UserIcon />}
        >
          <FormField label="Nom">
            <TextInput />
          </FormField>

          <FormField label="Prénom">
            <TextInput />
          </FormField>

          <FormField label="Adresse">
            <TextInput />
          </FormField>

          <FormField label="Couriel">
            <TextInput />
          </FormField>

          <FormField label="Téléphone">
            <TextInput />
          </FormField>

          <Button
            label={this.buttonLabel()}
            type="submit"
            primary={true}
            onClick={e => this.onValidateInfo(e)}
          />
        </Card>
      </Form>
    );
  }
}

OwnerInformationCard.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default OwnerInformationCard;
