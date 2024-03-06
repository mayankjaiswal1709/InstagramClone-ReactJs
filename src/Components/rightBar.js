import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import mj from "../../src/Images/mandav_Mayank.jpg";
import imgd from "../../src/Images/imgd.jpg";
import zuck from "../../src/Images/zuck.jpg";


const UserSuggestion = ({ name, username, imageUrl }) => (
  <Box
    display="flex"
    alignItems="center"
    mb={2}
    p={2}
    borderRadius={1}
    bgcolor="#ffffff"
  >
    <Avatar src={imageUrl} alt={username} />
    <Box ml={2}>
      <Typography variant="subtitle1">{name}</Typography>
      <Typography variant="body2" color="textSecondary">
        {username}
      </Typography>
    </Box>
    <Box ml="auto">
      <Typography variant="contained" color="primary">
        Follow
      </Typography>
    </Box>
  </Box>
);

const Rightbar = () => {

  const userSuggestions = [
    {
      name: "Mayank Jaiswal",
      username: "mayankjaiswal",
      imageUrl: "mayank.jpg",
    },
    { name: "Oyeee Chote", username: "oyeee.chote", imageUrl: mj },
    { name: "Mark zuckerberg", username: "zuck", imageUrl: zuck },
    { name: "MS Tech", username: "mstech", imageUrl: imgd },
    { name: "Indore", username: "indoreviral", imageUrl: "davviips.jpg" },

  ];

  return (
    <Box
    marginTop={"25"}
    //   bgcolor="gray"
      flex={1}
      p={1}
      sx={{
        display: { xs: "none", sm: "block" },
        maxWidth: "470px", 
      }}
    >
      {userSuggestions.map((user, index) => (
        <UserSuggestion key={index} {...user} />
      ))}
    </Box>
  );
};

export default Rightbar;
