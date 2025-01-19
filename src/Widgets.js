import React from 'react';
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";


function Widgets() {
  return (
    <div className='widgets'>
     <div className="widgets_input">
       <SearchIcon className="widgets_searchIcon" />
       <input placeholder="Search Twitter" type="text" />
     </div>

     <div className="widgets_widgetContainer">
      <h2>whats happening</h2>

      <TwitterTweetEmbed tweetId={"858551177860055040"} />

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName='cleverqazi'
        options={{ height: 400}}
      />

      <TwitterShareButton
        url={"https://facebook.com/cleverprogrammer"}
        options={{text: "#reactjs is awsome", via: "#cleverqazi"}}
      />
      </div>
    </div>
  );
}

export default Widgets;
