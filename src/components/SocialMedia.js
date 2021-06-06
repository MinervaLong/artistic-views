import React from 'react' 
import { Twitter, Instagram, FacebookOption } from 'grommet-icons'
import {Box, Anchor} from 'grommet'

const SocialMedia = () => {
    return(
        <Box direction='row' justify='evenly' gap='medium' >
            <Anchor focusIndicator={false} target='_blank' href='https://twitter.com'  label={<Twitter size='medium' color='secondArt'/>} />
            <Anchor focusIndicator={false} target='_blank' href='https://www.instagram.com'  label={<Instagram size='medium' color='secondArt'/>} />
            <Anchor focusIndicator={false} target='_blank' href='https://www.facebook.com/'  label={<FacebookOption size='medium' color='secondArt'/>} />
        </Box>
        
    )
}

export default SocialMedia;