import React from "react";
import { Box } from "@mui/material";
import CardComponent from "./cardComponent"; 
import Story from "./topBar";
import mj from "../../src/Images/mandav_Mayank.jpg";
import imgd from "../../src/Images/imgd.jpg";
import mayank from "../../src/Images/me.jpg";


const Feed = () => {
  return (
    <div style={{ marginLeft: "200" }}>
      <Story />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={2}
        flex={4}
      >
        <CardComponent
          avatarColor="orange"
          title="Mayank Jaiswal"
          subheader="Mandav, Madhya Pradesh"
          image={mj}
          cardContent="My first post 😁💫😍"
        />

        <CardComponent
          avatarColor="red"
          title="Jai Shree Mahakal"
          subheader="Mahakaleshwar Jyotirlinga"
          image={imgd}
          cardContent="जय श्री महाकाल 🙏❤️"
        />
        <CardComponent
          avatarColor="blue"
          title="Aadi"
          subheader="khargone"
          image={mayank}
          cardContent="Hello everyone 💫😁"
        />
      </Box>
    </div>
  );
};

export default Feed;
