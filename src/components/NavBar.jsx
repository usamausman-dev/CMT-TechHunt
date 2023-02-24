import React, { useState } from 'react'
import ClockIcon from '../assests/icons/clock.png'
import MicIcon from '../assests/icons/mic.png'
import BellIcon from '../assests/icons/bell.png'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Appreciation from './Appreciation';
import Announcement from './Announcement';


const NavBar = () => {


  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className=' rounded-md py-4 px-6 mb-4 flex justify-between items-center'>
      <div>
        <h1 className='font-bold text-2xl'>Hello Tony</h1>
        <span className='text-[#72c179]'>3:21pm 14 Feb 2023</span>

      </div>

      <div className='flex items-center border-green-700/20 border-2 text-gray-300 bg-gray-50 px-6 py-2 rounded-md'>
        <div className='mr-4'><i className="fa-solid fa-magnifying-glass"></i></div>
        <input className='bg-transparent focus:border-0 p-2' type="text" placeholder='Search' />
        <div className='ml-4'><i className="fa-solid fa-filter"></i></div>
      </div>
      <div className='flex items-center'>

        <div><img src={ClockIcon} alt="clock" /></div>
        <div>

          <Button sx={{p:0}} id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
            <img src={MicIcon} alt="MicIcon" />
          </Button>

          <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button' }}>
            <MenuItem sx={{p:0}}><Appreciation/></MenuItem>
            <MenuItem sx={{p:0}}><Announcement/></MenuItem>

          </Menu>
        </div>

        <div><img src={BellIcon} alt="BellIcon" /></div>


        <div className='mx-4 font-semibold'>TecHunt</div>
        <div>
          <img alt='user' className='w-14 h-14 rounded-md' src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80' />
        </div>

      </div>

    </div>
  )
}

export default NavBar
