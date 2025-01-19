import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";
import { motion, AnimatePresence } from 'framer-motion';

/*import FlipMove from 'react-flip-move';*/



function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      
      <TweetBox />

      {/* Replace FlipMove with AnimatePresence */}
      <AnimatePresence>
        {posts.map((post) => (
          <motion.div
            key={post.text}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            <Post
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Feed;





















/*function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  
    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      
      <TweetBox />

     <FlipMove>
       {posts.map((post) => (
         <Post
           key={post.text}
           displayName={post.displayName}
           username={post.username}
           verified={post.verified}
           text={post.text}
           avatar={post.avatar}
           image={post.image}
         />
       ))}
     </FlipMove>

    </div>
  );
}

export default Feed;
*/
