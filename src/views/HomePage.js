import React from 'react' 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from '../components/NavBar'
import Cover from '../components/Cover'
import About from '../components/About'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'
import SignIn from './SignIn'
import SignUp from './SignUp'
import {Box} from 'grommet'

const HomePage = () => {
    return(
        
            <Router>
              <NavBar />
              <Cover />
              <Box
                as='main'
                direction='column'
                justify='between'
                alignContent='center'
                alignSelf='stretch'
                gap='large'
              >
                <About />
                <HowItWorks />
              </Box>              
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