
import {NavBarLogo} from '../../../assets/images'
import {RespMenuOpen, RespMenuClose} from '../../../assets/icons'
import { Link } from 'react-router-dom'
import {NavWrapper} from './NavBar.style'
import { useState } from 'react'


const NavBar = () => {
    const [isResponsive, setIsResponsive] = useState(false)
    return(
        <NavWrapper>               
            <nav>
                <Link to='/'>
                        <img className='logo' src={NavBarLogo} alt='Navbar logo'/>
                    </Link>
                <ul 
                    className={isResponsive ? 'navLinksResp' : 'navLinks'}
                    onClick={()=> setIsResponsive(false)}
                >
                    <Link  to='/sign-in'>
                        <li>Sign-In</li>
                    </Link>
                    <Link  to='/sign-up'>
                        <li>Sign-Up</li>
                    </Link>                   
                </ul>
                <button onClick={() => setIsResponsive(!isResponsive)}
                >{isResponsive 
                    ? <img alt='Responsive Menu Open' src={RespMenuOpen}/> 
                    : <img alt='Responsive Menu Open' src={RespMenuClose}/>}
                </button>
                               
                
                
            </nav> 
        </NavWrapper>
        )}
    

export default NavBar;