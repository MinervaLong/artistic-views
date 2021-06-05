import React, {useState} from 'react' 
import { NavLink } from 'react-router-dom'
import { Menu, Box, Nav} from 'grommet'
import { ResponsiveContext } from 'grommet'
import navBarLogo from '../assets/navBarLogo.png'



const NavBar = () => {
    const [respMenu, setRespMenu] = useState(false)
    const handleRespMenu = () => {
        setRespMenu(!respMenu)
    }
    const [click, setClick] = useState(false);
    const handleClick = () => {
        return(
            setClick(!click)
        )
    }
    const CustomLink = props => (<NavLink style={{textDecoration: "none", color: "secondArt"}} {...props} />);

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
                style={{zIndex:'1'}}
            >
                <NavLink exact to='../views/HomePage.js'>
                    <img src={navBarLogo} width='30rem'  alt='Navbar logo'/>
                </NavLink>
                
                {(size === 'medium' || size === 'large') ? (
                        <Nav direction='row-responsive' pad='medium' >                
                            <CustomLink smooth to='#about'onClick={handleClick}>About</CustomLink>
                            <CustomLink smooth to='#howItWorks' onClick={handleClick}>How It Works</CustomLink>
                            <CustomLink to='../views/SignIn.js' onClick={handleClick}>Sign In</CustomLink>
                            <CustomLink to='../views/SignUp.js' onClick={handleClick}>Sign Up</CustomLink>
                        </Nav> 
                                   
                ):( <Menu
                    items={[
                        {label:'About', onClick:{handleClick}, href:'#about'},
                        {label:'How It Works', onClick:{handleClick}, href:'#howItWorks'} ,
                        {label:'Sign-In', onClick:{handleClick}, href:'../views/SignIn.js'}, 
                        {label:'SignUp', onClick:{handleClick}, href:'../views/SignUp.js'},        
                    ]} />)
            }  
            </Box>
        )}
        </ResponsiveContext.Consumer>
    )
}

export default NavBar;