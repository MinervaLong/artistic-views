import React, {useState} from 'react'
import {Box} from 'grommet'
import PublicProfile from '../components/PublicProfile'
import SideBar from '../components/SideBar'
import Layout from '../components/Layout'

const ProfileDashboard = () => {
    const [editMode, setEditMode] = useState(false)
    
    //Makes appear an edit Icon besides every field by
    //Conditional rendering
    let handleEdit = () =>  setEditMode(!editMode)  

    return(
        <Layout isSideBar={false}>
            <Box direction='column'>
                <SideBar  click={handleEdit} /> 
                <PublicProfile editMode={editMode} />             
            </Box>
        </Layout>
    )
}

export default ProfileDashboard;