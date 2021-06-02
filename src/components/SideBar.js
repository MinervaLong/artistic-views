import { Sidebar } from 'grommet'
import React from 'react' 
import Search from '../components/Search'

const SideBar = () => {
    return(
        <div>
            {/* Search component, when click it changes the view to explore
                Log out, it comes back to HomePage
                Edit mode, which activate de edit fields like LinedIn or Moodle
                Explore link, which change the public profile view to search view
                Settings, Complete name,change password, Delete Account (it should be a componetn if 
                    there is time, if not a modal?)
             */}
             <Search />
             
        </div>
    )
}
export default SideBar;