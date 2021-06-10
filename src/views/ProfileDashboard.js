import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
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
        <Box direction='row-responsive'>
            <SideBar click={handleEdit}/>
            <Switch> 
            <Route exact path='/dashboard'><PublicProfile editMode={editMode} /> </Route>
                <Route 
                    exact 
                    path='/dashboard/public-profile'
                    render={ () => {
                    return  <PublicProfile />
                }}/>      
         
                <Route 
                    exact 
                    path='/dashboard/explore'
                    render={ () => {
                    return <Explore  />
                }}/>
  
            </Switch>
        </Box>
        
        

    )
}

export default ProfileDashboard;