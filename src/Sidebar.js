import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./SidebarOption";
import AddHomeIcon from '@mui/icons-material/AddHome';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';


function Sidebar() {
  return (
    <div className="sidebar">
      
      <TwitterIcon className="sidebar_twitterIcon"/>


      <SidebarOption active Icon={AddHomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Mail" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmark" />
      <SidebarOption Icon={ListAltIcon} text="List" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      

      {/* utton -> Tweet */}
      <Button variant="outlined"  className="sidebar_tweet" fulWidth>
         UTG
      </Button>
    </div>
  )
}

export default Sidebar;
