
import '../node_modules/grommet-css'
// or https://rawgit.com/grommet/grommet/stable/grommet.min.css ?

import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

import Button from 'grommet/components/Button';
import Toast from 'grommet/components/Toast';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const bg = {

  background: 'neutral-1',
};
const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
    <Button primary label='Label'
      hoverIndicator={bg} 
     />
     <Toast>Hello</Toast>
  </div>
);

render(<App />, document.getElementById('root'));
