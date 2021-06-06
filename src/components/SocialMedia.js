import React from 'react' 
import { Twitter, Instagram, FacebookOption } from 'grommet-icons'
import {Box} from 'grommet'

const SocialMedia = () => {
    return(
        <Box direction='row' justify='evenly' gap='medium'>
            <Twitter href='https://twitter.com' color='secondArt' size='medium' />
            <Instagram href='https://www.instagram.com' color='secondArt' size='medium' />
            <FacebookOption href='https://www.facebook.com/' color='secondArt' size='medium' />
        </Box>
        
    )
}

export default SocialMedia;