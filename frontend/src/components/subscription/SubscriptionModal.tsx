import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import { Close, FiberManualRecord } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

const premiumFeatures = [
    "More likely to appear in search results",
    "Add-free experiences",
    "Can add bold or italic text to your tweet",
    "Your account is marked with blue check mark to prevent fraud"
]

export default function SubscriptionModal({open, handleClose} : {open: boolean, handleClose: any}) {
  const [plan, setPlan] = React.useState("annually");

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center space-x-3">
            <IconButton onClick={handleClose} aria-label="close-profile">
              <Close />
            </IconButton>
            <p className="text-sm ">Account subscription</p>
          </div>
          <div className="flex justify-center py-10">
            <div className="w-full space-y-10">
              <div className="p-5 rounded-md flex items-center justify-between shadow-lg">
                <h1 className="text-xl pr-5">
                  Verified users will gain a blue verified badge which will is
                  favorited by algorithms
                </h1>
                <img
                  className="w-24 h-24"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-dvFZQ-FHDRqixOYwjYfpgqMAS6eaDExuw&s"
                  alt="verification badge"
                />
              </div>
              <div className='flex flex-col justify-between px-5 py-3 space-y-5'>
                <div className='border rounded-full px-5 py-3'>
                    <span 
                    className={`${plan === "annually" ? "text-black" : "text-gray-400"} cursor-pointer`}
                    onClick={() => setPlan("annually")}
                    >
                        
                        Annual subscription
                        </span>
                    <span className='text-sm text-green-500 ml-5'>Save 20%</span>
                    <p 
                    className={`${plan === "monthly" ? "text-black" : "text-gray-400"} cursor-pointer`}
                     onClick={() => setPlan("monthly")}
                    >Monthly</p>
                </div>
                <div className='space-y-3'>
                    {premiumFeatures.map((feature, index) => <div key={index} className='flex items-center space-x-5'>
                        <FiberManualRecord sx={{width: "7px", height: "7px", }} />
                        <p className='text-xs'>{feature}</p>
                    </div>)}
                </div>
                <div className='flex justify-center cursor-pointer bg-gray-700 text-white rounded-full px-5 py-3'>
                    <span className='line-through italic'>70.000 VND</span>
                    <span className='px-5'>840.000 VND/Year</span>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}