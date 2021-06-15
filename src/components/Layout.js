import React from 'react'
import DashboardNav from '../components/DashboardNav'



const Layout = props => (
    <main>
        {props.isDashboardNav && <DashboardNav/>}
        <div>
            {props.children}
        </div>

    </main>
)

export default Layout