import React from 'react'
import SideBar from '../components/SideBar'



const Layout = props => (
    <main style={{display:'flex', flexDirection:'row'}}>
        {props.isSideBar && <SideBar/>}
        <div>
            {props.children}
        </div>

    </main>
)

export default Layout