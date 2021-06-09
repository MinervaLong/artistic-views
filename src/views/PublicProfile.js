import React from 'react'
import { Box, Avatar, Card, CardHeader, CardBody, CardFooter, Text, Heading} from 'grommet'
import {UserFemale, Edit} from 'grommet-icons'
import Gallery from '../components/Gallery'

const PublicProfile = ({editMode}) => {
    return(
        <Box
            as='section'
            direction='row-responsive'
            justify='center'
  
            width='100%'
            pad='medium'
            gap='large'
            responsive={true}
        >
                
           <Box
                round                
                direction='column'
                justify='start'
           >
               <Card 
                    
                    elevation='medium'
                    height="40rem" 
                    width="medium" 
                    background="light-1">

                     {editMode ?   
                    (<CardHeader pad="medium" alignSelf='center'><h1>Restaurant info</h1><Edit />
                    </CardHeader>)
                    :
                    (<CardHeader pad="medium" alignSelf='center'><h1>Restaurant info</h1>
                    </CardHeader>)
                    }
                    <CardBody pad="medium">
                    {editMode ?
                        (<Box direction="row"  gap="small" alignSelf='center' >
                            <Avatar size='xlarge' background="secondMan">
                                <UserFemale color="accent-1" />
                            </Avatar><Edit />
                        </Box>)
                    :
                    (<Box direction="row"  gap="small" alignSelf='center' >
                        <Avatar size='xlarge' background="secondMan">
                            <UserFemale color="accent-1" />
                        </Avatar>
                    </Box>)
                    }
                    {editMode ?
                        (<Box direction='row' justify='between'>
                            <h2>Restaurant name</h2><Edit />                            
                        </Box>)
                    :
                    (   <Box direction='row' justify='between'>
                            <h2>Restaurant name</h2>                            
                        </Box>)
                    }
                    {editMode ?   
                        (<Box>
                            <Box direction='row' justify='between'>
                                <h3>Location</h3><Edit />
                            </Box>
                            <Box direction='row' justify='between'>
                                <Text>Description</Text><Edit />
                            </Box>
                        </Box>)
                    :
                        (<Box>
                            <Box direction='row' justify='between'>
                                <h3>Location</h3>
                            </Box>
                            <Box direction='row' justify='between'>
                                <Text>Description</Text>
                            </Box>
                        </Box>)
                    }                  
                    </CardBody>
                    {editMode ?
                    (<CardFooter pad={{horizontal: "small", vertical:'small'}} background="light-2">                    
                        <Text>Contact information</Text><Edit />
                    </CardFooter>)
                    :
                    (<CardFooter pad={{horizontal: "small", vertical:'small'}} background="light-2">                    
                        <Text>Contact information</Text>
                    </CardFooter>)
                    }                 
                </Card>
            </Box>

           <Box
                style={{maxWidth:'60%', margin: '0px auto'}}
                background="light-1"
                elevation='medium'
                round
            >
                {editMode ?
                (<Heading alignSelf='center' level='2'>Photo Gallery<Edit /></Heading>)
                :
                (<Heading alignSelf='center' level='2'>Photo Gallery</Heading>) 
                }
                <Box
                    as='section'
                    alignSelf='center'                                        
                >
                    <Gallery /> 
                </Box>
            </Box>
    
        
    
        </Box>
    )
}

export default PublicProfile;