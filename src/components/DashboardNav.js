import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, Nav, Button, Box, Anchor } from "grommet";
import {
  Apps,
  Edit,
  Logout,
  UserSettings,
  Gallery,
  FormSearch,
} from "grommet-icons";
import Search from "./Search";
import { ResponsiveContext } from "grommet";
import { logout, isLogin } from "../auth/auth";

const DashboardNav = (props) => {
  const size = useContext(ResponsiveContext);

  const [state, setState] = useState(false);

  useEffect(() => setState(isLogin()), [props]);

  const handleLogout = () => {
    logout();
    setState(false);
  };

  return (
    <Box
      full
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="secondArt"
      pad={{ left: "medium", right: "small" }}
      elevation="medium"
      style={{ position: "sticky", zIndex: "1" }}
    >
      {size === "medium" || size === "large" || size === "xlarge" ? (
        <Nav gap="large" full direction="row" justify="evenly" pad="medium">
          <Box direction="row">
            <Search icon={<FormSearch />} />
          </Box>
          <Avatar
            alignSelf="center"
            src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
          />
          <Link exact={true} to="/dashboard">
            <Button
              margin={{ top: "small" }}
              plain
              color="#FFF"
              icon={<Apps />}
              label="Profile"
            />
          </Link>

          <Link exact={true} to="/explore">
            <Button
              margin={{ top: "small" }}
              plain
              color="#FFF"
              icon={<Gallery />}
              label="Find Artist"
            />
          </Link>

          <Button
            plain
            color="#FFF"
            icon={<Edit />}
            label="Edit mode"
            onClick={props.click}
          />

          <Button plain color="#FFF" icon={<UserSettings />} label="Settings" />

          <div>
            {state && (
              <Link onClick={() => handleLogout()} to="/">
                <Button
                  icon={<Logout />}
                  label="Log Out"
                  plain
                  color="#FFF"
                  margin={{ top: "small" }}
                />
              </Link>
            )}
          </div>
        </Nav>
      ) : (
        <Nav
          direction="column"
          justify="around"
          alignContent="center"
          background="secondArt"
          pad="medium"
        >
          <Box direction="row" justify="center">
            <Search icon={<FormSearch />} />
          </Box>
          <Box direction="row" justify="around">
            <Link exact={true} to="/dashboard">
              <Button
                margin={{ top: "small" }}
                plain
                color="#FFF"
                icon={<Apps />}
              />
            </Link>

            <Link exact={true} to="/explore">
              <Button
                margin={{ top: "small" }}
                plain
                color="#FFF"
                icon={<Gallery />}
              />
            </Link>

            <Button plain color="#FFF" icon={<Edit />} onClick={props.click} />

            <Button plain color="#FFF" icon={<UserSettings />} />
            <div>
              {state && (
                <Link onClick={() => handleLogout()} to="/">
                  <Button icon={<Logout />} plain color="#FFF"  margin={{ top: "small" }}/>
                </Link>
              )}
            </div>
          </Box>
        </Nav>
      )}
    </Box>
  );
};
export default DashboardNav;
