import React from 'react' 
import { Menu, Box, Nav} from 'grommet'
import { ResponsiveContext } from 'grommet'
import navBarLogo from '../assets/navBarLogo.png'


const NavBar = () => {

    return(
        <ResponsiveContext.Consumer>
            {size => (
            <Box
                full           
                tag='header'
                direction='row'
                align='center'
                justify='between'
                background='primary'
                pad={{left:'medium', right:'small'}}
                elevation='medium'
                style={{position:'sticky', top:'0',zIndex:'1'}}
            >
                <a href='#top'>
                    <img 
                        src={navBarLogo} 
                        width='30rem' 
                        style={{marginTop:'.5rem'}}
                        alt='Navbar logo'/>
                </a>
                
                {(size === 'medium' || size === 'large') ? (
                        <Nav direction='row-responsive' pad='medium' >                        
                            <a style={{textDecoration: "none", color: "secondArt",fontWeight:'bold'}} href='#about'>About</a>                          
                            <a style={{textDecoration: "none", color: "secondArt",fontWeight:'bold'}} href='#howItWorks'>How It Works</a>
                            <a style={{textDecoration: "none", color: "secondArt",fontWeight:'bold'}} href='../views/SignIn.js'>Sign In</a>
                            <a style={{textDecoration: "none", color: "secondArt",fontWeight:'bold'}} href='../views/SignUp.js'>Sign Up</a>
                        </Nav> 
                                   
                ):( <Menu focusIndicator={false}
                    items={[
                        {label:'About', href:'#about'},
                        {label:'How It Works', href:'#howItWorks'} ,
                        {label:'Sign-In', href:'../views/SignIn.js'}, 
                        {label:'SignUp',  href:'../views/SignUp.js'},        
                    ]} />)
            }  
            </Box>
        )}
        </ResponsiveContext.Consumer>
    )
}

export default NavBar;