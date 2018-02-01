
import '../node_modules/grommet-css'
// or https://rawgit.com/grommet/grommet/stable/grommet.min.css ?

import React from 'react';
import { render } from 'react-dom';

import GrommetApp from 'grommet/components/Grommet';

import Header from 'grommet/components/Header';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Hero from 'grommet/components/Hero';

const MyApp = () => (
  <GrommetApp>
    <Header>
      Header
    </Header>
    <Article>
      <Section full='vertical'>
        <Hero
          size='large'
          backgroundColorIndex='dark'>
          <Heading margin='none'>
            Sample Heading
          </Heading>
        </Hero>
      Section1

      </Section>
      <Section>Section2</Section>
    </Article>
    <Button primary label='Label'/>
    <Footer>
      Juni 314
    </Footer>
  </GrommetApp>
);

render(<MyApp />, document.getElementById('root'));
