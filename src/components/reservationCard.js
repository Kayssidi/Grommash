import React from "react";
import PropTypes from "prop-types";

import Card from 'grommet/components/Card';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import DateTime from 'grommet/components/DateTime';

import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import RadioButton from 'grommet/components/RadioButton';
import Paragraph from 'grommet/components/Paragraph';

// http://react-day-picker.js.org/docs/getting-started/
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import moment from 'moment';

const MONTHS = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
];
const WEEKDAYS_LONG = [
  'Dimanche',
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi',
];
const WEEKDAYS_SHORT = ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'];

class ReservationCard extends React.Component {
  state = {
    stateDateSelected:undefined,
  };

  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleDayClick(day)
  {
    let previouslySelectedDate = this.state.stateDateSelected;

    if (moment(day).isSame(previouslySelectedDate))
    {
      this.setState({ stateDateSelected: undefined });
    }
    else
    {
      this.setState({ stateDateSelected: day });
    }
  }

  render() {
    return (
      <Card
            heading='Réserver une séance'
            description='Choisir une date et un crénau horaire.'
            contentPad='none' >
        <Form>
          <FormField>

            <DayPicker
              locale="fr"
              months={MONTHS}
              weekdaysLong={WEEKDAYS_LONG}
              weekdaysShort={WEEKDAYS_SHORT}
              firstDayOfWeek={1}

              onDayClick={ this.handleDayClick }
              selectedDays={this.state.stateDateSelected}
            />

            {
              this.state.stateDateSelected ?
              <div>
                  <Paragraph>Horaires disponibles le {moment(this.state.stateDateSelected).format('DD/MM/YYYY')}:</Paragraph>
                <RadioButton id="r1" label="09h00"/>
                <RadioButton id="r2"label="10h00" />
              </div>:
              <Paragraph>Choisir le jour de la séance</Paragraph>
            }

          </FormField>
        
          <Footer pad={{ "vertical": "medium" }}>
              <Button label='Continuer'
                      type='submit'
                      primary={true} />
          </Footer>
        </Form>
      </Card>
    );
  }
}

ReservationCard.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (ReservationCard);
