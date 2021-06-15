import React, { useState, useMemo } from 'react'
import {Switch, Redirect} from 'react-router-dom'
import {UserContext} from './hooks/UserContext'
import { Grommet } from 'grommet';

import HomePage from './components/HomePage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ProfileDashboard from './views/ProfileDashboard'
import Explore from './components/Explore'

import PrivateRoute from './hooks/PrivateRoute'
import PublicRoute from './hooks/PublicRoute'
import UserSettings from './components/UserSettings';

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

const App = () => {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  
   return (
     <UserContext.Provider value={value}>
      <Grommet theme={theme} full>
               
        <Switch> 
          <PublicRoute  exact path='/' component={HomePage} />         
          <PublicRoute restricted={true} 
            path='/sign-in'
            component={SignIn} />

          <PublicRoute
            path='/sign-up'
            component={SignUp}/>  

          <PrivateRoute 
            exact={true} 
            path='/dashboard'
            component={ProfileDashboard}/>

          <PrivateRoute 
            exact={true} 
            path='/explore'
            component={Explore}/>      

          <PrivateRoute 
            exact={true} 
            path='/settings'
            component={UserSettings}/>  
          <Redirect to='/'/>          
        </Switch>
        
      </Grommet> 
      </UserContext.Provider> 
  );

}

export default App;


