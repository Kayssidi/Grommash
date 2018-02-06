
import '../node_modules/grommet-css'
// or https://rawgit.com/grommet/grommet/stable/grommet.min.css ?

import React from 'react';
import { render } from 'react-dom';

import GrommetApp from 'grommet/components/Grommet';

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Card from 'grommet/components/Card';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import Quote from 'grommet/components/Quote';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';

import ReservationCard from './components/reservationCard';
import MenuHeader from './components/menuHeader';

const MyApp = () => (
  <GrommetApp>
    <MenuHeader/>
    <Article >

      <Section pad={{ vertical: 'none'}} >
        <Hero
          background={<Image src='http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Dachshund-2.jpg'
            fit='cover'
            full={true}/>}
            size='small'
            backgroundColorIndex='dark'>
          <Heading margin='none'>
            Tunousoul Massage
          </Heading>
        </Hero>
      
        <Columns>

          <Box align='center' pad='medium' margin='medium' colorIndex='light-2' separator='all'>
            <ReservationCard/>
          </Box>

          <Box align='center' pad='medium' margin='medium' colorIndex='light-2' separator='all'>
            <Card thumbnail='https://www.chien.fr/assets/img/000/291/large/massage-canin.jpg'
              heading='Le Massage Canin'
              description='En apprendre plus sur les bienfaits du massage canin'
              contentPad='none'
              link={<Anchor href=''
                label='Suite ...' />}
            />
          </Box>

        </Columns>
        
      </Section>

      <Section align='center'>
        <Quote credit='Juni Pi' emphasizeCredit>
          <Paragraph>Im walking on sunshine</Paragraph>
          <Paragraph>woohoo</Paragraph>
        </Quote>
      </Section>

    </Article>

    <Footer>
      
    </Footer>
  </GrommetApp>
);

render(<MyApp />, document.getElementById('root'));
