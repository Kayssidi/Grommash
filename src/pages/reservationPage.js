import React from "react";
import PropTypes from "prop-types";

import Article from "grommet/components/Article";
import Section from "grommet/components/Section";
import Box from "grommet/components/Box";
import Accordion from "grommet/components/Accordion";
import AccordionPanel from "grommet/components/AccordionPanel";
import Columns from "grommet/components/Columns";

import ReservationCard from "../components/reservationCard";
import DogInformationCard from "../components/dogInformationCard";
import OwnerInformationCard from "../components/ownerInformationCard";
import ValidationCard from "../components/validationCard";

import DayPicker from "react-day-picker";

class MainPage extends React.Component {
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
    return (
      <Article>
        <Section>
          <Accordion active={[1]} openMulti={true}>
            <AccordionPanel heading="Réservation de la séance">
              <Columns justify="center">
                <Box
                  align="center"
                  pad="medium"
                  margin="medium"
                  colorIndex="light-2"
                  separator="all"
                >
                  <ReservationCard propsDateSelected={new Date(2018, 1, 28)} />
                </Box>
              </Columns>
            </AccordionPanel>

            <AccordionPanel heading="Vos Information">
              <Columns justify="center">
                <Box
                  align="center"
                  pad="medium"
                  margin="medium"
                  colorIndex="light-2"
                  separator="all"
                >
                  <OwnerInformationCard />
                </Box>

                <Box
                  align="center"
                  pad="medium"
                  margin="medium"
                  colorIndex="light-2"
                  separator="all"
                >
                  <DogInformationCard />
                </Box>
              </Columns>
            </AccordionPanel>

            <AccordionPanel heading="Validation">
              <Columns justify="center">
                <Box
                  align="center"
                  pad="medium"
                  margin="medium"
                  colorIndex="light-2"
                  separator="all"
                >
                  <ValidationCard />
                </Box>
              </Columns>
            </AccordionPanel>
          </Accordion>
        </Section>

        <Section />
      </Article>
    );
  }
}

MainPage.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default MainPage;
