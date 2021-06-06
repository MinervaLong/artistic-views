import React from 'react' 
import {Box, Image } from 'grommet'
import CoverImg from '../assets/cover.png'

const Cover = () => {
    return(
        <Box height="medium" fill='horizontal'  style={{boxShadow: '0px 4px 8px rgba(0,0,0,0.20)'}}>
            <Image
                style={{backgroundPosition:'center center'}}         
                fit="cover"
                src={CoverImg}
                a11yTitle='Coverimage with Artistic Views Logo and Eat with Art slogan'
            />
        </Box>
    )
}

export default Cover;