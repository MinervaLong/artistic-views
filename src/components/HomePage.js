import React from 'react' 
import Cover from '../components/Cover'
import About from '../components/About'
import HowItWorks from '../components/HowItWorks'

import {Box} from 'grommet'

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
        <Cover />
        <About />
        <HowItWorks />
      </Box>  
    )
}
export default HomePage;