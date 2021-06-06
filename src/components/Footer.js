import React from 'react' 
import SocialMedia from './SocialMedia'
import { Anchor, Footer } from 'grommet'

const FooterC = () => {
    return(
        <Footer        
            direction='row-responsive'            
            justify='evenly'
            alignContent='center'
            background="primary" 
            pad="medium"

        >
            <Anchor alignSelf='center' href='' color='secondArt' label="Copyright" />
            <Anchor alignSelf='center' href='' color='secondArt' label="Privacy Agreement" alignT />
            <SocialMedia />
        </Footer>         
    )
}
export default FooterC;