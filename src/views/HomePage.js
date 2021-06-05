import React from 'react' 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from '../components/NavBar'
import Cover from '../components/Cover'
import About from '../components/About'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'
import SignIn from './SignIn'
import SignUp from './SignUp'

const HomePage = () => {
    return(
        
            <Router>
              <NavBar />
              <Cover />
              <About />
              <HowItWorks />
              <Footer />            
                <div>
                    <Switch>
                        <Route exact path='../views/HomePage.js' component={HomePage} />
                        <Route path='../components/About' component={About} />
                        <Route path='../components/HowItWorks.js' component={HowItWorks} />
                        <Route path='./SignIn' component={SignIn} />
                        <Route path='./SignUp.js' component={SignUp} />
                    </Switch>
                </div>
                
            </Router>
        
    )
}
export default HomePage;