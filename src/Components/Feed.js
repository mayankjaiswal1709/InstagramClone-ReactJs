import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import imgd from "../../src/Images/imgd.jpg";
import mj from "../../src/Images/mandav_Mayank.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleSharpIcon from "@mui/icons-material/ChatBubbleSharp";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import Story from "./topBar";


const Feed = () => {
  return (
    <div>
      <Story />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={2}
        flex={4}
      >
        <Card
          sx={{
            width: { xs: "100%", md: "50%" },
            marginBottom: "25px",
            marginTop: "25px",
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "orange" }} aria-label="recipe">
                M
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Mayank jaiswal"
            subheader="Mandav, Madhya Pradesh"
          />
          <CardMedia
            component="img"
            height="400px"
            image={mj}
            alt="Paella dish"
          />
          <CardActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </IconButton>
              <IconButton aria-label="send">
                <ChatBubbleOutlineRoundedIcon sx={{ color: "black" }} />
              </IconButton>
              <IconButton aria-label="share">
                <SendIcon sx={{ color: "black" }} />
              </IconButton>
            </CardActions>
            <CardActions>
              <IconButton aria-label="bookmark">
                <BookmarkBorderRoundedIcon />
              </IconButton>
            </CardActions>
          </CardActions>
          <CardContent>
            <Typography variant="body2" color="text.primary">
              My first post 😁💫😍
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: { xs: "100%", md: "50%", lg: "12" },
            marginBottom: "25px",
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                J
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Jai Shree mahakal "
            subheader="Mahakaleshwar Jyotirlinga"
          />
          <CardMedia
            component="img"
            height="400px"
            image={imgd}
            alt="Paella dish"
          />

          <CardActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </IconButton>
              <IconButton aria-label="send">
                <ChatBubbleOutlineRoundedIcon sx={{ color: "black" }} />
              </IconButton>
              <IconButton aria-label="share">
                <SendIcon sx={{ color: "black" }} />
              </IconButton>
            </CardActions>
            <CardActions>
              <IconButton aria-label="bookmark">
                <BookmarkBorderRoundedIcon />
              </IconButton>
            </CardActions>
          </CardActions>
          <CardContent>
            <Typography variant="body2" color="text.primary">
              जय श्री महाकाल 🙏❤️
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Feed;
