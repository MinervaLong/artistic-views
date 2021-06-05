import React from 'react' 
import { Box, Heading, Tabs, Tab, Button } from 'grommet'
import DiagramHIW from '../assets/diagramHIW.png'

const HowItWorks = () => {
    return(
        <Box
            id='#howItWorks'
            height='medium'
            align='center'    
            animation='fadeIn'
            flex='shrink'
            pad='small'
            responsive={true}
        >
            <Heading size='small' style={{fontFamily: 'Spectral'}} >How It Works</Heading>     
        
            <Box>
                <Tabs margin='medium'>
                    <Tab title="I'm an artist" margin='none'>
                        <Box pad="medium" width='large'>
                            <p>
                            Etiam non neque vitae massa hendrerit fermentum non quis orci.
                            Pellentesque maximus est placerat aliquam euismod. Mauris facilisis
                            malesuada dui a mattis. Morbi id consectetur augue, at dictum sem.
                            Etim non neque vitae massa hendrerit fermentum non quis orci.
                            Pellentesque maximus est placerat aliquam euismod. Mauris facilisis
                            malesuada dui a mattis. Morbi id consectetur augue, at dictum sem.
                            </p> 
                            <Button margin='small' alignSelf='center' primary label="Join" />                                                          
                        </Box>
                    </Tab>
                    <Tab title="I have a restaurant">
                        <Box pad="medium" width='large'>
                            <img alt='diagram about how it works the app' src={DiagramHIW} />
                            <Button margin='small' alignSelf='center' primary label="Join" />   
                        </Box>
                    </Tab>
                </Tabs>
            </Box>

        </Box>
    
    )
}

export default HowItWorks;