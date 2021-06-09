import React, {useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Box} from 'grommet'
import PublicProfile from '../views/PublicProfile'
import Explore from '../components/Explore'
import SideBar from '../components/SideBar'

const ProfileDashboard = () => {
    const [editMode, setEditMode] = useState(false)
    
    //Makes appear an edit Icon besides every field by
        //Conditional rendering
    let handleEdit = () =>  setEditMode(!editMode)
        
       
    

    return(
        <Router>
            <Box direction='row-responsive'>
                <SideBar click={handleEdit}/>
                <PublicProfile editMode={editMode}/>
                <Route path='./PublicProfile' exact={true} component={PublicProfile} />
                <Route path='../components/Explore.js' exact={true} component={Explore} />
            </Box>
        </Router>
        

    )
}

export default ProfileDashboard;