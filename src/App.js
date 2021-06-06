import React from 'react'
import { Grommet } from 'grommet';
import HomePage from './views/HomePage'

const theme = {
  global: {
    colors: {
      primary:'#FFC100',
      background:'#E1E6E2',
      secondArt:'#722D78',
    },
    font: {
      family: 'Karla',      
      size: '18px',
    },
    focus: {
      border: {
        color:'none'
      }
    }
  },
  tab: {
    active: {
      color:'#215732'
    }
  }
};

function App() {
  return (
    <Grommet theme={theme} full>
      <HomePage />
    </Grommet>  
  );

}

export default App;


