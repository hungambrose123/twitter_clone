import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Button } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';
import SubscriptionModal from '../subscription/SubscriptionModal';

const RightPart = () => {
  const [openSubscriptionModal, setOpenSubscriptionModal] = useState(false);
      const handleOpenSubscriptionModal = () => setOpenSubscriptionModal(true);
      const handleClose = () => setOpenSubscriptionModal(false);

    const handleChangeTheme = () => {
        console.log("change theme")
    }

  return (
    <div className="py-5 sticky top">
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500  w-full pl-12 outline-2 outline-offset-2 outline-solid"
        />
        <div className="absolute top-0 left-0 pl-3 pt-3">
          <SearchIcon className="cursor-pointer text-gray-500 " />
        </div>
        <span onClick={handleChangeTheme}>
          <Brightness4Icon className="ml-3 cursor-pointer" />
        </span>
      </div>
      <section className='my-5'>
        <h1 className='text-xl font-bold'>Get verified</h1>
        <h1>Subscribe to unlock new features</h1>
        <Button sx={{padding: "10px", paddingX: "20px", borderRadius: "25px"}} variant='contained' onClick={handleOpenSubscriptionModal}>Get verified</Button>
      </section>
      <section className='mt-7 space-y-5'>
        <h1 className='font-bold text-xl py-1'>What's happening</h1>
        <div>
            <p className='text-sm'>Entertainment . Trending</p>
            <p className='font-bold'>#WorldCup</p>
                <p>234.3k Tweets</p>
        </div>
        <div className='flex justify-between w-full'>
            <div>
                <p className='text-sm'>Entertainment . Trending</p>
                <p className='font-bold'>#TheMarvels</p>
                <p>34.3k Tweets</p>
            </div>
            <MoreHoriz />
        </div>
      </section>
      <section>
        <SubscriptionModal open={openSubscriptionModal} handleClose={handleClose}/>
      </section>
    </div>
  );
}

export default RightPart