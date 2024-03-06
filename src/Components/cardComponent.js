import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import SendIcon from "@mui/icons-material/Send";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const CardComponent = ({ avatarColor, title, subheader, image, cardContent }) => {
  return (
    <Card sx={{ width: { xs: "100%", md: "50%" }, marginBottom: "25px", marginTop: "25px" }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: avatarColor }} aria-label="recipe">{title[0]}</Avatar>}
        action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
        title={title}
        subheader={subheader}
      />
      <CardMedia component="img" height="400px" image={image} alt="Paella dish" />
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
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
          {cardContent}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
