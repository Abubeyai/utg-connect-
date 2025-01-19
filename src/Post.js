import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';


const Post = forwardRef(({ 
  displayName,
  username, 
  verified, 
  text, 
  image, 
  avatar 
}, ref) => {
  return ( 
  <div className="post" ref={ref}>
      <div className="post_avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              {displayName}{" "}
              <span className="post_headerSpacial">
               {verified && <VerifiedUserOutlinedIcon className="post_badge" />} @{username}
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>{text}</p>
          </div>
      </div>
      <img src={image} alt="" />
      <div className="post_footer">
        <ChatBubbleOutlinedIcon fontSize="small" />
         <RepeatOutlinedIcon fontSize="small" />
         <FavoriteBorderOutlinedIcon fontSize="small" />
         <PublishOutlinedIcon fontSize="small" />
      </div>
   </div>
  </div>
  );
});

export default Post;
