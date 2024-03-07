import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import TelegramIcon from "@mui/icons-material/Telegram";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import FacebookIcon from "@mui/icons-material/Facebook";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const Sidebar = () => {
  const darkIconColor = "#333"; // Adjust the color as needed

  return (
    <Box
      sx={{
        borderRight: { xs: 0, sm: "1px solid #ccc" },
        padding: 2,
        height: "100%", // Ensure the sidebar takes full height
        marginLeft: "1%", // Set margin to 1%
        position: "fixed",
        left: 0,
      }}
    >
      <List>
        {[
          { icon: <HomeIcon sx={{ color: darkIconColor }} />, text: "Home" },
          { icon: <SearchIcon sx={{ color: darkIconColor }} />, text: "Search" },
          { icon: <ExploreIcon sx={{ color: darkIconColor }} />, text: "Explore" },
          { icon: <SlowMotionVideoIcon sx={{ color: darkIconColor }} />, text: "Reels" },
          { icon: <TelegramIcon sx={{ color: darkIconColor }} />, text: "Messages" },
          { icon: <FavoriteBorderIcon sx={{ color: darkIconColor }} />, text: "Notification" },
          { icon: <AddIcon sx={{ color: darkIconColor }} />, text: "Create" },
          { icon: <PersonIcon sx={{ color: darkIconColor }} />, text: "Profile" },
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component="a" href={`#${item.text.toLowerCase()}`}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ marginTop: "auto" }}>
        <Typography variant="h6" mb={2}>
          Discover
        </Typography>

        <List>
          {[
            { icon: <FacebookIcon sx={{ color: darkIconColor }} />, text: "Facebook" },
            { icon: <DensityMediumIcon sx={{ color: darkIconColor }} />, text: "More" },
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component="a" href={`#${item.text.toLowerCase()}`}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
