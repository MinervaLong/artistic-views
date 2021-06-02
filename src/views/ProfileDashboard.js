import React from 'react'
import PublicProfile from './PublicProfile'
import Explore from '../components/Explore'
import SideBar from '../components/Sidebar'

const ProfileDashboard = () => {
    return(
        <div>
            {/*
            Sidebar with 
            Search component
                    Log out, it comes back to HomePage
                    Edit mode, which activate de edit fields like LinedIn or Moodle
                    Explore, which change the public profile view to search view
                    Settings, Complete name,change password, Delete Account
            Main section PublicProfile (empty if is the first time)
            Search component when click it changes the view to explore
         */}
         <SideBar />
         <PublicProfile />
         <Explore />
         <p>Aquí el dashboard para rellenar el perfil</p>

        </div>
        

    )
}

export default ProfileDashboard;