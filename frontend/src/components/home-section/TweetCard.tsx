import React from 'react'
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import { FavoriteOutlined } from '@mui/icons-material';

const TweetCard = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
      const open = Boolean(anchorEl);
      const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      const handleDeleteTweet = () => {
        console.log("delete tweet");
      }
      const handleOpenReplyModal = () => {
        console.log("open modal")
      }
      const handleCreateRetweet = () => {
        console.log("create retweet")
      }
      const handleLikeTweet = () => {
        console.log("Like tweet")
      }

  return (
    <div>
      <div className="flex items-center font-semibold text-gray-700 py-2">
        <RepeatIcon />
        <p>You retweet</p>
      </div>
      <div className="flex space-x-5">
        <span onClick={() => navigate("/profile/5")}>
          <Avatar
            className="cursor-pointer"
            alt="user avatar"
            src="https://cdn-icons-png.freepik.com/512/6858/6858504.png"
          />
        </span>
        <div className="w-full ">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">HungNV</span>
              <span className="text-gray-600">@spam4.me . 2m</span>
              <img
                className="ml-2 w-5 h-5"
                src="https://www.citypng.com/public/uploads/preview/hd-blue-badge-verified-tick-mark-png-704081694710438adyvtbqafw.png"
                alt="verification badge"
              />
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  list: {
                    "aria-labelledby": "basic-button",
                  },
                }}
              >
                <MenuItem onClick={handleDeleteTweet}>Edit tweet</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Delete tweet</MenuItem>
              </Menu>
            </div>
          </div>
          <div className='mt-2'>
            <div className='cursor-pointer'>
                <p className='mb-2 p-0'>My twitter clone - a project creatd using react and spring boot</p>
                <img className='w-[28rem] border border-gray-400  p-5 rounded-md' src='https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg' alt='tweet image' />
            </div>
            <div className='py-5 flex flex-wrap justify-between items-center'>
                <div className='space-x-3 flex items-center text-gray-600'>
                    <span onClick={handleOpenReplyModal}>
                        <ChatBubbleOutlineIcon className='cursor-pointer' />
                    </span>
                    <p>43</p>
                </div>
                <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                    <span onClick={handleCreateRetweet}>
                        <RepeatIcon className='cursor-pointer'/>
                    </span>
                    <p>54</p>
                </div>
                <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                        {true ? 
                        <span onClick={handleLikeTweet}>
                            <FavoriteIcon className='cursor-pointer'/>
                        </span >
                         : 
                         <span onClick={handleLikeTweet}>
                             <FavoriteOutlined />
                         </span>}
                    <p>54</p>
                </div>
                <div className='space-x-3 flex items-center text-gray-600'>
                    <span onClick={handleOpenReplyModal}>
                        <BarChartIcon className='cursor-pointer' />
                    </span>
                    <p>430</p>
                </div>
                <div className='space-x-3 flex items-center text-gray-600'>
                    <span onClick={handleOpenReplyModal}>
                        <FileUploadIcon className='cursor-pointer' />
                    </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetCard