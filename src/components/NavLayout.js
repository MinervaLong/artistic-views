import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const NavLayout = props => (
    <main >
        {props.isNav && 
        <div>
            <NavBar/> 
                <div>
                    {props.children}
                </div>
            <Footer /> </div>}
    </main>
)

export default NavLayout