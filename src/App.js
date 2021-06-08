import React from 'react'
import { Grommet } from 'grommet';
import HomePage from './components/SideBar'

const theme = {
  global: {
    colors: {
      primary:'#FFC100',
      background:'#E1E6E2',
      secondArt:'#722D78',
      secondMan:'#215732'
    },
    font: {
      family: 'Karla',      
      size: '18px',
    },
    focus: {
      border: {
        color:'none'
      }
    },
    
  },
  tab: {
    active: {
      color:'#215732'
    }
  },
  button:{
    active: {
      borderColor:'none'
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


