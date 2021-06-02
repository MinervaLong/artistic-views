import React from 'react' 
import UserCard from './UserCard'

const Explore = () => {
    return(
            <div>
                {/*
                    UserCard components from users 
                    latest adittions
                 */}
                 <UserCard />
                 <p>Explore component where the users profiles appears</p>
            </div>
    )
}

export default Explore;