import React, {useState} from 'react'
import {Box} from 'grommet'
import PublicProfile from '../components/PublicProfile'
import DashboardNav from '../components/DashboardNav'
import Layout from '../components/Layout'

const ProfileDashboard = () => {
    const [editMode, setEditMode] = useState(false)
    
    //Makes appear an edit Icon besides every field by
    //Conditional rendering
    let handleEdit = () =>  setEditMode(!editMode)  

    return(
        <Layout isDashboardNav={false}>
            <Box direction='column'>
                <DashboardNav  click={handleEdit} /> 
                <PublicProfile editMode={editMode} />             
            </Box>
        </Layout>
    )
}

export default ProfileDashboard;