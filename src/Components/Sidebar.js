import React from 'react'
import {Box, dividerClasses} from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import HomeIcon from '@mui/icons-material/Home';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import TelegramIcon from '@mui/icons-material/Telegram';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import FacebookIcon from "@mui/icons-material/Facebook";
import PersonIcon from '@mui/icons-material/Person';
import { Add } from '@material-ui/icons';

const Sidebar = () => {
  return (
    <div 
      style={{  marginTop: "225px" }}
    >
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box sx={{ position: "fixed" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton conponent="a" href="#home">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton conponent="a" href="#home">
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Search" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton conponent="a" href="#home">
                <ListItemIcon>
                  <ExploreIcon />
                </ListItemIcon>
                <ListItemText primary="Explore" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton conponent="a" href="#home">
                <ListItemIcon>
                  <SlowMotionVideoIcon />
                </ListItemIcon>
                <ListItemText primary="Reels" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton conponent="a" href="#home">
                <ListItemIcon>
                  <TelegramIcon />
                </ListItemIcon>
                <ListItemText primary="Messages" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton conponent="a" href="#home">
                <ListItemIcon>
                  <FavoriteBorderIcon />
                </ListItemIcon>
                <ListItemText primary="Notification" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton conponent="a" href="#home">
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Create" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton conponent="a" href="#home">
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
          </List>

          <List style={{}}>
            <ListItem disablePadding>
              <ListItemButton conponent="a" href="#home">
                <ListItemIcon>
                  <FacebookIcon />
                </ListItemIcon>
                <ListItemText primary="Facebook" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton conponent="a" href="#home">
                <ListItemIcon>
                  <DensityMediumIcon />
                </ListItemIcon>
                <ListItemText primary="More" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </div>
  );
}

export default Sidebar