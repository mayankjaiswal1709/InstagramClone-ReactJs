import React from "react";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Rightbar from "./Components/rightBar";

import {  Stack, Container } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Container>
  );
};

export default App;
