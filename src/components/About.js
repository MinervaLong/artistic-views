import React from 'react'
import { Box, Heading, Paragraph } from 'grommet'

const About = () => {
    return (
        <Box
            align='center'    
            animation='fadeIn'
            flex='shrink'
            pad='small'
            responsive={true}
        >
            <Heading
                style={{fontFamily: 'Spectral'}}
            >About</Heading>
            <Paragraph
                alignSelf='center'
                textAlign='center'
                margin='none'
            >
            Bicycle rights irony actually neutra typewriter lyft. 
            Man bun taxidermy put a bird on it, umami yr ramps pop-up ugh bushwick 
            chia lo-fi. Occupy bitters pour-over snackwave you probably haven't 
            heard of them small batch. Cornhole mustache man bun letterpress 
            echo park VHS.
            </Paragraph>

            <Paragraph
                alignSelf='center'
                textAlign='center'
            >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
            
        </Box>
    )
}

export default About;
