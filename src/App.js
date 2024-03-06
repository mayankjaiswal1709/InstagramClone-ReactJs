import React from "react";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Rightbar from "./Components/rightBar";



import {Box,Stack} from '@mui/material'
const App = () => {
  

  return (
    <Box>
      <Stack direction="row" >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default App;
