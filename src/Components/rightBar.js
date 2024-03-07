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
    marginTop={2}
  >
    <Avatar src={imageUrl} alt={username} />
    <Box ml={2}>
      <Typography variant="subtitle1">{name}</Typography>
      <Typography variant="body2" color="textSecondary">
        {username}
      </Typography>
    </Box>
    <Box ml="auto">
      <Typography variant="body2" color="primary">
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
      imageUrl: mj,
    },
    { name: "Oyeee Chote", username: "oyeee.chote", imageUrl: "oyeechote.jpg" },
    { name: "Mark Zuckerberg", username: "zuck", imageUrl: zuck },
    { name: "MS Tech", username: "mstech", imageUrl: imgd },
    { name: "Indore Viral", username: "indoreviral", imageUrl: "indore.jpg" },
  ];

  return (
    <Box
      marginTop={25}
      flex={1}
      p={1}
      sx={{ display: { xs: "none", sm: "block" }, maxWidth: "470px" }}
    >
      <Box mt={2}>
        <Typography variant="body2" color="textSecondary">
          <strong>See All Suggestions</strong>
        </Typography>
      </Box>
      {userSuggestions.map((user, index) => (
        <UserSuggestion key={index} {...user} />
      ))}
    </Box>
  );
};

export default Rightbar;
