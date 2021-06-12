import React from 'react' 
import { Box, Heading, Tabs, Tab, Button } from 'grommet'
import DiagramHIW from '../assets/diagramHIW.png'
import DiagramHIW2 from '../assets/diagramHIW2.png'
import imageHIW from '../assets/imageHIW.svg'

const HowItWorks = () => {
    return(
        <Box
            id='howItWorks'
            overflow='hidden'
            direction='row-responsive'
            justify='evenly'
            alignContent='center'
            style={{alignItems:'center'}}
        >
            <Box>
                <img  
                style={{width:'25rem'}}
                alt='Loupes looking at computer' 
                src={imageHIW} />

            </Box> 
        
            <Box >
                <Heading alignSelf='center'  size='small' style={{fontFamily: 'Spectral', textDecoration:'underline'}} >How It Works</Heading>   
                <Tabs margin='medium' >
                    <Tab title="I'm an artist" margin='none'>
                        <Box pad="medium" width='large'>
                            <img alt='diagram about how it works the app' src={DiagramHIW2} />
                            
                            <Button size='large' margin='medium' alignSelf='center' primary label="Join" />                                                          
                        </Box>
                    </Tab>
                    <Tab title="I have a restaurant">
                        <Box pad="medium" width='large'>
                            <img alt='diagram about how it works the app' src={DiagramHIW} />
                            <Button size='large' margin='medium' alignSelf='center' primary label="Join" />   
                        </Box>
                    </Tab>
                </Tabs>
            </Box>

        </Box>
    
    )
}

export default HowItWorks;