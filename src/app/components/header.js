import React from 'react'
import {ImHome} from "react-icons/im"
import Link from 'next/link'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';



export default function Header(){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <div className=''>
      
    <header className="bg-violet-100">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className='text-gray-800 hover:text-gray-500'>
          <Link href="http://localhost:3000/homepage"><ImHome /></Link>
        </div>
        <div>
          <Button
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          className='text-gray-800  hover:text-gray-500'>
            Categories
        </Button>
        <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}>
          <MenuItem><Link href={'/category/All_about_5G'} className="hover:text-gray-500">All about 5G</Link></MenuItem>
          <MenuItem><Link href={'/category/Cybersecurity'} className="hover:text-gray-500">Cyber-Security</Link></MenuItem>
          <MenuItem><Link href={'/category/Blockchain_and_Crypto'} className="hover:text-gray-500">Blockchain and Crypto</Link></MenuItem>
          <MenuItem><Link href={'/category/Artificial_Intelligence'} className="hover:text-gray-500">Artificial Intelligence</Link></MenuItem>
          <MenuItem><Link href={'/category/Sample'} className="hover:text-gray-500">Sample</Link></MenuItem>
        </Menu>

        </div>
        <div className='text-gray-800 hover:text-gray-500'>
          <Link href={"/"}>Trending</Link>
        </div>
        <div className='text-gray-800 hover:text-gray-500'>
          <Link href="/homepage">Careers</Link>
        </div>
        <div className='text-gray-800 hover:text-gray-500'>
          <Link href="/AboutUs">About us</Link>
        </div>
        <div className='text-gray-800 hover:text-gray-500'>
          <Link href="/">Socials</Link>
        </div>
      </div>
    </header>
    
    </div>
  )
}