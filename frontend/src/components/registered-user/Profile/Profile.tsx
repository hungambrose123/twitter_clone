import { BusinessCenter, CalendarMonth, LocationOn, West } from '@mui/icons-material'
import { Avatar, Box, Button, Tab } from '@mui/material'
import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TweetCard from '../../home-section/TweetCard';
import ProfileModal from './ProfileModal';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}


const Profile = () => {
    const [openProfileModal, setOpenProfileModal] = useState(false);
    const handleOpenProfileModal = () => setOpenProfileModal(true);
    const handleClose = () => setOpenProfileModal(false);
    const [tabValue, setTabValue] = useState("1");
    const paramsData = useLoaderData();
    console.log(paramsData)
    const navigate = useNavigate();
    const handleFollowUser = () => {
        console.log("handle follow user")
    }
    const handleTabChange = (e : any, newValue : string) => {
        setTabValue(newValue);
    }
  return (
    <div>
      <section className="z-50 flex items-center sticky top-0 bg-white/70">
        <span className="cursor-pointer" onClick={() => navigate(-1)}>
          <West />
        </span>
        <h1 className="text-xl font-bold my-4 ml-5">HungNV</h1>
      </section>
      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://www.godeepak.com/wp-content/uploads/2021/04/mt-sample-background-1024x683.jpg"
          alt="profile background"
        />
      </section>
      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            src="https://cdn-icons-png.freepik.com/512/6858/6858504.png"
            alt="profile avatar"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />
          {true ? (
            <Button
              onClick={handleOpenProfileModal}
              sx={{ borderRadius: "20px" }}
              variant="contained"
            >
              Edit profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              sx={{ borderRadius: "20px" }}
              variant="contained"
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">HungNV</h1>
            {true && (
              <img
                className="ml-2 w-5 h-5"
                src="https://www.citypng.com/public/uploads/preview/hd-blue-badge-verified-tick-mark-png-704081694710438adyvtbqafw.png"
                alt="verification badge"
              />
            )}
          </div>
          <h1 className="text-gray-500">@spam4.me</h1>
        </div>
        <div className="mt-2 space-y-3">
          <p>Hello, I am HungNV - a software developer</p>
          <div className="dy-1 flex space-x-5">
            <div className="flex items-center text-gray-500">
              <BusinessCenter />
              <p className="ml-2">Education</p>
            </div>
            <div className="flex items-center text-gray-500">
              <LocationOn />
              <p className="ml-2">Vietnam</p>
            </div>
            <div className="flex items-center text-gray-500">
              <CalendarMonth />
              <p className="ml-2">Joined February 2026</p>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space x-1 font-semibold">
              <span>90</span>
              <span className="ml-1 text-gray-500">Following</span>
            </div>
            <div className="flex items-center space x-1 font-semibold">
              <span>590</span>
              <span className="ml-1 text-gray-500">Followers</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Tweets" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Like" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
                {[1,1,1,1,1].map(() => <TweetCard />)}
            </TabPanel>
            <TabPanel value="2">replies</TabPanel>
            <TabPanel value="3">media</TabPanel>
            <TabPanel value="4">Like</TabPanel>
          </TabContext>
        </Box>
      </section>
      <section>
        <ProfileModal handleClose={handleClose} open={openProfileModal}/>
      </section>
    </div>
  );
}

export default Profile