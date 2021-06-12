import React from 'react' 
import Cover from '../components/Cover'
import About from '../components/About'
import HowItWorks from '../components/HowItWorks'

import {Box} from 'grommet'
import NavBar from './NavBar'
import Footer from './Footer'

const HomePage = () => {
    return(    
      <Box
        as='main'
        direction='column'
        justify='between'
        alignContent='center'
        alignSelf='stretch'
        gap='large'
      >
        <NavBar /> 
        <Cover />
        <About />
        <HowItWorks />
        <Footer />
      </Box>  
    )
}
export default HomePage;