
import React from 'react'
import { Box, Text, Heading, Button, Tip} from 'grommet'
import {Edit} from 'grommet-icons'
import Layout from '../components/Layout'

const UserSettings = () => {
    return(
        <Layout isDashboardNav={true} >
        <Box
            as='section'
            direction='row-responsive'
            justify='center'  
            width='100%'
            pad='medium'
        >
        <Tip content='Here it will be possible to edit options'>  
            <Box
                background='#FFF'
                width='medium'
                direction='column'
                justify='center'
                alignContent='center'
                pad='small'
                animation="slideLeft"
                border='all'
                elevation='medium'
                responsive={true}
                overflow='hidden'
                style={{alignItems:'center'}}
                round
            >
                
                <Heading level='2'>Account Info</Heading>
                <Box margin='medium' direction='row' gap='small'><Text>Complete name</Text><Edit /></Box>
                <Box margin='medium' direction='row' gap='small'><Text>Email</Text><Edit /></Box>
                <Box margin='medium' direction='row' gap='small'><Text>Address</Text><Edit /></Box> 
                <Box margin='medium' direction='row' gap='small'><Text>Password</Text><Edit /></Box>               
                    
                <Button
                    margin='medium'
                    style={{border:'2px solid red', padding:'.5rem'}}
                    > Delete your account
                </Button>
               
            </Box>     
        </Tip>
        </Box>
    </Layout>
    )
}

export default UserSettings;