import React from 'react' 
import SocialMedia from './SocialMedia'
import { Anchor, Footer } from 'grommet'

const FooterC = () => {
    return(
        <Footer 
            gap='small' 
            justify='evenly' 
            background="primary" 
            pad="medium"
            style={{
                marginTop:'2rem'
            }}
        >
            <Anchor href='' color='secondArt' label="Copyright" />
            <Anchor href='' color='secondArt' label="Privacy Agreement" alignT />
            <SocialMedia />
        </Footer>         
    )
}
export default FooterC;