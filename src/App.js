import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { Grommet } from 'grommet';
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ProfileDashboard from './views/ProfileDashboard'
import Explore from './components/Explore'

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
        <NavBar />        
        <Switch> 
          <Route exact path='/' component={HomePage} />         
          <Route 
            exact 
            path='/sign-in'
            render={ () => {
              return <SignIn  />
            }}/>

          <Route 
            exact 
            path='/sign-up'
            render={ () => {
              return <SignUp  />
            }}/>  

          <Route 
            exact 
            path='/dashboard'
            render={ () => {
              return <ProfileDashboard  />
            }}/>

          <Route 
            exact 
            path='/dashboard/explore'
            render={ () => {
              return <Explore  />
            }}/>      

          <Redirect to="/" />          
        </Switch>
        <Footer />
      </Grommet>  
  );

}

export default App;


