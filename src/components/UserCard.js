import React from "react";
import {
  Card,
  Box,
  CardBody,
  CardFooter,
  Heading,
  Paragraph,
  Image,
  Anchor,
} from "grommet";

const UserCard = (props) => {
  return (
    <Box pad="medium" align="start">
      <Card elevation="large" width="medium" pad='small' background="light-1">
        <CardBody height="small">
          <Image fit="contain" src={props.userImg} a11yTitle="User Image" />
        </CardBody>

        <Box pad={{ horizontal: "medium" }} responsive={false}>
          <Heading level="3" margin={{ vertical: "medium" }} alignSelf='center'>
            {props.userName} {props.lastName}
          </Heading>

          <Paragraph margin={{ top: "none" }} >
            A structure carrying a road, path, railroad, or canal across a
            river, ravine, road, railroad, or other obstacle.
          </Paragraph>
        </Box>

        <CardFooter>
          <Box direction="row" align="center" gap="small">
            <Anchor href='#' label={props.contact} />
          </Box>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default UserCard;
