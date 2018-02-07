import React from "react";
import PropTypes from "prop-types";

import Card from "grommet/components/Card";
import Form from "grommet/components/Form";
import FormField from "grommet/components/FormField";
import TextInput from "grommet/components/TextInput";
import Button from "grommet/components/Button";
import CheckBox from "grommet/components/CheckBox";
import Label from "grommet/components/Label";

// http://grommet.io/docs/icon/
import UserIcon from "grommet/components/icons/base/User";
import ValidateIcon from "grommet/components/icons/base/Validate";

class OwnerInformationCard extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    this.onAlreadyClient = this.onAlreadyClient.bind(this);
    this.onValidateInfo = this.onValidateInfo.bind(this);

    this.state = {
      stateAlreadyClient: false,
      stateHasBeenValidated: false
    };
  }

  onAlreadyClient(event) {
    //    console.log(event.target.checked);
    this.setState({ stateAlreadyClient: event.target.checked });

    //  console.log(this.state.stateAlreadyClient);
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
          <CheckBox
            label="Déjà client ?"
            onChange={e => this.onAlreadyClient(e)}
          />

          {!this.state.stateAlreadyClient ? (
            <FormField label="Nom">
              <TextInput />
            </FormField>
          ) : (
            <div />
          )}
          {!this.state.stateAlreadyClient ? (
            <FormField label="Prénom">
              <TextInput />
            </FormField>
          ) : (
            <div />
          )}

          {!this.state.stateAlreadyClient ? (
            <FormField label="Adresse">
              <TextInput />
            </FormField>
          ) : (
            <div />
          )}

          <FormField label="Couriel">
            <TextInput />
          </FormField>

          {this.state.stateAlreadyClient ? <Label>OU</Label> : <div />}

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
