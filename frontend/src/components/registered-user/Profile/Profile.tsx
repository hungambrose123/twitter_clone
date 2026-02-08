import { BusinessCenter, CalendarMonth, LocationOn } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import React from 'react'
import { useLoaderData } from 'react-router'

const Profile = () => {
    const paramsData = useLoaderData();
    console.log(paramsData)
    const handleOpenProfileModal = () => {
        console.log("open profile modal")
    }
    const handleFollowUser = () => {
        console.log("handle follow user")
    }
  return (
    <div>
      <section className="z-50 flex items-center sticky top-0 bg-opacity-95"></section>
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
          <h1 className='text-gray-500'>@spam4.me</h1>
        </div>
        <div className='mt-2 space-y-3'>
            <p>Hello, I am HungNV - a software developer</p>
            <div className='dy-1 flex space-x-5'>
                <div className='flex items-center text-gray-500'>
                    <BusinessCenter />
                    <p className='ml-2'>Education</p>
                </div>
                <div className='flex items-center text-gray-500'>
                    <LocationOn />
                    <p className='ml-2'>Vietnam</p>
                </div>
                <div className='flex items-center text-gray-500'>
                    <CalendarMonth />
                    <p className='ml-2'>Joined February 2026</p>
                </div>
            </div>
            <div className='flex items-center space-x-5'>
                <div className='flex items-center space x-1 font-semibold'>
                    <span>90</span>
                    <span className='ml-1 text-gray-500'>Following</span>
                </div>
                <div className='flex items-center space x-1 font-semibold'>
                    <span>590</span>
                    <span className='ml-1 text-gray-500'>Followers</span>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Profile