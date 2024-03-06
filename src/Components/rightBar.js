import React from "react";
import { Box, Avatar, Button, Typography } from "@mui/material";

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
    { name: "Oyeee Chote", username: "oyeee.chote", imageUrl: "oyeechote.jpg" },
    { name: "Mark zuckerberg", username: "zuck", imageUrl: "zuck.jpg" },
    { name: "Oyeee Chote", username: "oyeee.chote", imageUrl: "oyeechote.jpg" },
    { name: "Oyeee Chote", username: "oyeee.chote", imageUrl: "oyeechote.jpg" },
    { name: "Oyeee Chote", username: "oyeee.chote", imageUrl: "oyeechote.jpg" },
  ];

  return (
    <Box
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
