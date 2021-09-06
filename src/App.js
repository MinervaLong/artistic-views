import {Switch, Redirect,Route} from 'react-router-dom'

import Home from './views/Home/Home'
import SignIn from './views/SignIn/SignIn'
import SignUp from './views/SignUp/SignUp'
import NavBar from './components/composed/NavBar/NavBar'
import Footer from './components/composed/Footer/Footer'

const App = () => {

  
   return (
      <> 
         <NavBar />
                
        <Switch> 
          <Route  exact={true} path='/' component={Home} />         
          <Route restricted={true} path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp}/>  

          <Redirect to='/'/>          
        </Switch>
        <Footer />  
   </>
  );

}

export default App;


