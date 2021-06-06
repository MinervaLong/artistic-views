import React from 'react'
import { Box, Heading, Paragraph } from 'grommet'
import AboutImg from '../assets/aboutImg.svg'

const About = () => {
    return (
            <Box
                id='about'
                overflow='hidden'
                direction='row-responsive'
                justify='evenly'
                alignContent='center'
                style={{alignItems:'center'}}
            >
                <Box>
                <Heading                    
                    alignSelf='center'   
                    size='small'
                    style={{fontFamily: 'Spectral', textDecoration:'underline'}}
                >About
                </Heading>
                    <Paragraph margin='small'>
                        Bicycle rights irony actually neutra typewriter lyft. 
                        Man bun taxidermy put a bird on it, umami yr ramps pop-up ugh bushwick 
                        chia lo-fi. Occupy bitters pour-over snackwave you probably haven't 
                        heard of them small batch. Cornhole mustache man bun letterpress 
                        echo park VHS.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Paragraph>
                </Box>
                <Box>
                    <img 
                    style={{width:'25rem'}}
                    src={AboutImg}  alt='Lighthouse'/>  
                </Box>
            </Box>

    )
}

export default About;
