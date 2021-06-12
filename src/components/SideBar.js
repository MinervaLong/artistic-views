import React, {useContext} from "react";
import { useHistory } from 'react-router-dom'
import { Sidebar, Avatar, Nav, Button, Box, Anchor } from "grommet";
import { Edit, Logout, UserSettings, Gallery, FormSearch} from "grommet-icons";
import Search from "../components/Search";
import { ResponsiveContext } from "grommet";

const SideBarC = (props) => {
    const size = useContext(ResponsiveContext);
    
    const history = useHistory();
    const handleLogout = () => {
        //Back to the HomePage
        history.push('/src/views/HomePage.js')
    }

    const handleExplore = () => {
        //Call to Explore component
        history.push('./Explore.js')
    }

   
  return ( 
    <Box>
       {size === 'medium' || size === 'large' || size === 'xlarge' ? ( 
        <Box direction="row" style={{height:'100vh'}}>          
            <Sidebar
            width="15rem"
            background="secondMan"
            pad={{ left: "medium", right: "large", vertical: "medium" }}
            elevation="medium"
            header={
                <Box alignSelf="center">
                <Search />
                <Avatar
                    margin={{top:'small'}}
                    alignSelf="center"
                    src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
                />
                </Box>
            }
            footer={<Button icon={<Logout />} label="Log out" plain onClick={handleLogout}/>}
            >
            <Nav gap="large">
              <Button
                icon={<Gallery />}
                label="Explore"
                style={{ border: "none" }}
                onClick={handleExplore}

                />

                <Button
                icon={<Edit />}
                label="Edit mode"
                style={{ border: "none" }}
                onClick={props.click}
                />
                <Button
                icon={<UserSettings />}
                label="Settings"
                style={{ border: "none" }}
                />
            </Nav>
            </Sidebar>
            </Box> 
        ):(        
            <Box>
                <Nav direction="column" justify='around' alignContent='center' background="secondMan" pad="medium">
                    <Box direction="row" justify='center'>
                        <Anchor icon={<FormSearch />} lab />
                    </Box>
                    <Box direction="row" justify='around'>
                        <Anchor icon={<Gallery />} />
                        <Anchor icon={<Edit />} />
                        <Anchor icon={<UserSettings />} />
                        <Anchor icon={<Logout />} /> 
                    </Box>                   
                </Nav>    
            </Box>)
        }
    </Box> 

  );
};
export default SideBarC;
