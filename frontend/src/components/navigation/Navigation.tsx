import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleIcon from '@mui/icons-material/People';
import VerifiedIcon from '@mui/icons-material/Verified';
import PendingIcon from '@mui/icons-material/Pending';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import type { ReactNode } from 'react';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router';

type navigationList = {
    title: String,
    icon: ReactNode,
    path: String,
}

export const navigation : navigationList[] = [
    {
        title: "Home",
        icon: <HomeIcon />,
        path: "/home"
    },
    {
        title: "Explore",
        icon: <ExploreIcon />,
        path: "/explore"
    },
    {
        title: "Notification",
        icon: <NotificationsIcon />,
        path: "/notifications"
    },
    {
        title: "Messages",
        icon: <MessageIcon />,
        path: "/messages"
    },
    {
        title: "List",
        icon: <ListAltIcon />,
        path: "/list"
    },
    {
        title: "Communities",
        icon: <PeopleIcon />,
        path: "/communities"
    },
     {
        title: "Verified",
        icon: <VerifiedIcon />,
        path: "/verified"
    },
     {
        title: "Profile",
        icon: <AccountCircleIcon />,
        path: "/profile"
    },
     {
        title: "More",
        icon: <PendingIcon />,
        path: "/more"
    },
]

const Navigation = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    console.log("logout");
  }

  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
          <img
            className="h-8 w-8 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQipcPVM6JUCdDbcUJQWoatssgoK-PA3OL0Pg&s"
          />
        </div>
        <div className="space-y-6">
          {navigation.map((item, index) => {
            return (
              <div
                key={index}
                className="cursor-pointer flex space-x-3 items-center"
                onClick={() =>
                  item.title === "Profile"
                    ? navigate(`/profile/5`)
                    : navigate(item.path + "")
                }
              >
                {item.icon}
                <p className="text-xl">{item.title}</p>
              </div>
            );
          })}
        </div>
        <div className="py-10">
          <Button
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#1e88e5",
            }}
            variant="contained"
          >
            Tweet
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar
            alt="user avatar"
            src="https://cdn-icons-png.freepik.com/512/6858/6858504.png"
          />
        </div>
        <div>
          <span>HungNV</span>
          <span className="opacity-70">@spam4.me</span>
        </div>
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
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Navigation