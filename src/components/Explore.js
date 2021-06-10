import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard'
import {Box, Heading} from 'grommet'

const BASE_URL = 'https://dummyapi.io/data/api/user?limit=12';
const APP_ID = '60c08cbe9c9883b1fb33da7b';
const header = {
    method: 'GET',
    headers: {
        'app-id': APP_ID
    }
}

const Explore = () => {
    // Call to users API
    const [data, setData] = useState([]);    

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const result = await axios.get(BASE_URL,header)
        const usersList  = result.data.data
        console.log('usersList',usersList)
        setData(usersList)       
    },[]);    
    
    const cardComponent = data.map((user)=> {
        return <UserCard 
                    key={user.id} 
                    userImg={user.picture}
                    userName={user.firstName}
                    lastName={user.lastName}                     
                    contact={user.email}
                />
    })

    return (
        <Box             
        >
            <Heading level='2' alignSelf='center'>Find your next artist</Heading>
            <Box direction='row-responsive'justify='evenly' wrap={true}>
                {cardComponent}
            </Box>
        </Box>
    );
};

export default Explore;