import React from "react";
import PropTypes from "prop-types";

import Card from 'grommet/components/Card';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField'
import TextInput from 'grommet/components/TextInput'
import Button from 'grommet/components/Button'
import CheckBox from 'grommet/components/CheckBox';

// http://grommet.io/docs/icon/
import UserIcon from 'grommet/components/icons/base/User';

class OwnerInformationCard extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    this.onAlreadyClient = this.onAlreadyClient.bind(this);

    
      this.state =
      {
          stateAlreadyClient : false,
      }
    
  }

  onAlreadyClient(event)
  {
//    console.log(event.target.checked);
    this.setState({ stateAlreadyClient: event.target.checked});

//  console.log(this.state.stateAlreadyClient);
  }

  render() {
    return (
      <Form>
        
        <Card
          heading='Propriétaire'
          description='Information à saisir:'
          contentPad='none' 
          label={<UserIcon/>}>

          <CheckBox label='Déjà client ?' onChange={ (e) => this.onAlreadyClient(e) }/>

          {
            this.state.stateAlreadyClient ?
            <FormField label='Nom'>
              <TextInput />
            </FormField>
            : <div/>
          }

          <FormField label='Prénom'>
            <TextInput />
          </FormField>

          <FormField label='Adresse'>
            <TextInput />
          </FormField>

          <FormField label='Couriel'>
            <TextInput />
          </FormField>

          <FormField label='Téléphone'>
            <TextInput />
          </FormField>

          <Button label="Valider" type='submit' primary={true} />

        </Card>
      </Form>
    );
  }
}

OwnerInformationCard.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (OwnerInformationCard);
