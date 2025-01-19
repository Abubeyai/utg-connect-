import React from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from './firebase';
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";


function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');


  const sendTweet = async (e) => {
    e.preventDefault();
  
    try {
      await addDoc(collection(db, "posts"), {
        displayName: "Rafeh",
        username: "babubabs",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:
          "https://th.bing.com/th/id/OIP.lgtiSn2m4Jih-EsZdg_LaAHaHa?rs=1&pid=ImgDetMain",
      });
  
      // Clear input fields after successful submission
      setTweetMessage("");
      setTweetImage("");
    } catch (error) {
      console.error("Error adding tweet: ", error);
    }
  };
  

  return (<div className="tweetBox"> 
    <form>
        <div className="tweetBox_input"> 
            <Avatar src="C:\Users\AA COMPUTERS\OneDrive\Pictures\Pictures\Pictures\OfficeMobile\Adi.jpg"/>
            <input
            onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="whats happening" 
            type='text' />
            </div>
            <input
              value={tweetImage}
              onChange={e => setTweetImage(e.target.value)}
             className="tweetBox_imageInput"
             placeholder="Enter image URL"
             type="text" 
            />
        
        <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Send</Button>
    </form>
  </div>
 )
}

export default TweetBox;