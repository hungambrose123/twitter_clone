import { West } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router'
import TweetCard from '../home-section/TweetCard';
import { Divider } from '@mui/material';

const TweetDetail = () => {
    const navigate = useNavigate();

  return (
    <>
        <section className="z-50 flex items-center sticky top-0 bg-white/70">
            <span className="cursor-pointer" onClick={() => navigate(-1)}>
                <West />
            </span>
            <h1 className="text-xl font-bold my-4 ml-5">Tweet</h1>
        </section>
        <section>
            <TweetCard />
            <Divider sx={{margin: "2rem 0rem"}}/>
        </section>
        <section>
            {[1,1,1,1].map(() => <TweetCard />)}
        </section>
    </>
  )
}

export default TweetDetail