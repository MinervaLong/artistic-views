import React from 'react' 
import { Menu, Box, Nav} from 'grommet'
import { ResponsiveContext } from 'grommet'
import navBarLogo from '../assets/navBarLogo.png'
import { NavLink, withRouter } from 'react-router-dom'


const NavBar = () => {
    const styledLinks = {
        textDecoration: "none", 
        color: "secondArt",
        fontWeight:'bold'
    }
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
                <NavLink to='/'>
                    <img 
                        src={navBarLogo} 
                        width='30rem' 
                        style={{marginTop:'.5rem'}}
                        alt='Navbar logo'/>
                </NavLink>
                
                {(size === 'medium' || size === 'large') ? (
                        <Nav direction='row-responsive' pad='medium' >                        
                            <NavLink style={styledLinks} to='/sign-in'>Sign In</NavLink>
                            <NavLink style={styledLinks} to='/sign-up'>Sign Up</NavLink>
                        </Nav> 
                                   
                ):( <Menu focusIndicator={false}
                    items={[
                        {label:'Sign-In', href:'/sign-in'}, 
                        {label:'SignUp',  href:'/sign-up'},        
                    ]} />)
            }  
            </Box>
        )}
        </ResponsiveContext.Consumer>
    )
}

export default withRouter(NavBar);